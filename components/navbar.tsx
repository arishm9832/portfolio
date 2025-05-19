"use client"

import { useState, useEffect, useRef, KeyboardEvent } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import Logo from "./logo"

// Types for nav items
type NavItem = {
  name: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const menuRef = useRef<HTMLDivElement>(null)

  // Debounce scroll handler for performance
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 20)

        // Section highlight logic
        const sections = document.querySelectorAll<HTMLElement>("section[id]")
        const scrollPosition = window.scrollY + window.innerHeight / 8 // Adjust offset as needed

        let found = false
        sections.forEach((section) => {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          const sectionId = section.getAttribute("id") || ""
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId)
            found = true
          }
        })

        // Fallback to first section if none found
        if (!found) setActiveSection("home")
      }, 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu on outside click (mobile)
  useEffect(() => {
    if (!isMenuOpen) return
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [isMenuOpen])

  // Keyboard navigation for menu
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") setIsMenuOpen(false)
  }

  // Scroll to section smoothly
  const handleNavClick = (href: string) => {
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="#home"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Go to home section"
        >
          <Logo />
<span className="text-xl font-mono font-medium text-white border-b border-white/50 pb-0.5">
  Portfolio
</span> 
       </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Desktop navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded",
                activeSection === item.href.substring(1)
                  ? "text-white underline underline-offset-8"
                  : "text-muted-foreground"
              )}
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
          onKeyDown={handleKeyDown}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className={cn(
            "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 px-4 flex flex-col space-y-4",
            isMenuOpen
              ? "opacity-100 pointer-events-auto py-4"
              : "opacity-0 pointer-events-none py-0"
          )}
          aria-hidden={!isMenuOpen}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary",
                activeSection === item.href.substring(1)
                  ? "text-white underline underline-offset-8"
                  : "text-muted-foreground"
              )}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
                setIsMenuOpen(false)
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
