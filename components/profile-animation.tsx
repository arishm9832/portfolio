"use client"

import { useEffect, useRef } from "react"

export default function ProfileAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const neonColors = ["#00f6ff", "#ff00f6", "#00ff85", "#ffb800", "#8f00ff"]

    const createGlowingLines = () => {
      const numLines = 10
      for (let i = 0; i < numLines; i++) {
        const line = document.createElement("div")
        line.className = "neon-glow-line"

        const angle = Math.random() * 360
        const distance = Math.random() * 60 + 60
        const length = Math.random() * 60 + 30
        const thickness = Math.random() * 2 + 1

        line.style.width = `${length}px`
        line.style.height = `${thickness}px`
        line.style.background = neonColors[Math.floor(Math.random() * neonColors.length)]
        line.style.transform = `rotate(${angle}deg) translate(${distance}px)`
        line.style.animationDelay = `${Math.random() * 5}s`

        container.appendChild(line)
      }
    }

    const createFloatingDots = () => {
      const numDots = 25
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div")
        dot.className = "floating-neon-dot"

        const size = Math.random() * 3 + 2
        dot.style.width = `${size}px`
        dot.style.height = `${size}px`
        dot.style.background = neonColors[Math.floor(Math.random() * neonColors.length)]

        const containerWidth = container.offsetWidth
        const radius = (containerWidth / 2) * 1.4
        const angle = Math.random() * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        dot.style.left = `calc(50% + ${x}px)`
        dot.style.top = `calc(50% + ${y}px)`

        const duration = Math.random() * 10 + 10
        const delay = Math.random() * 5
        dot.style.animationDuration = `${duration}s`
        dot.style.animationDelay = `${delay}s`

        container.appendChild(dot)
      }
    }

    createGlowingLines()
    createFloatingDots()

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 z-[-1] pointer-events-none"></div>
}
