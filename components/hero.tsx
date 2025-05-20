"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Animation for each letter of Kumre only, with increased delay
const letterAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i *0.15, // longer delay for smoother effect
      type: "spring",
      stiffness: 120,
    },
  }),
}

// Floating background animation
const floatingVariants = {
  float: {
    y: [0, -20, 0],
    scale: [1, 1.2, 1],
    opacity: [0.5, 2, 0.5], // More intense pulse
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
      scale: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      },
      opacity: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.25,
      },
    },
  },
}




// TypingTitle component for animated subtitle


const texts = ["FULL-STACK DEVELOPER", "SOFTWARE DEVELOPER", "PROGRAMMER"]
const typingSpeed = 120 // ms per character
const delayBetweenTexts = 1000 // ms delay after each full text


function TypingTitle() {
  const [displayed, setDisplayed] = useState("")
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isErasing, setIsErasing] = useState(false)
  // Updated type here:
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!isErasing && charIdx < texts[textIdx].length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(prev => prev + texts[textIdx][charIdx])
        setCharIdx(charIdx + 1)
      }, typingSpeed)
    } else if (!isErasing && charIdx === texts[textIdx].length) {
      timeoutRef.current = setTimeout(() => setIsErasing(true), delayBetweenTexts)
    } else if (isErasing && charIdx > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(texts[textIdx].substring(0, charIdx - 1))
        setCharIdx(charIdx - 1)
      }, typingSpeed / 2)
    } else if (isErasing && charIdx === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsErasing(false)
        setTextIdx((textIdx + 1) % texts.length)
      }, typingSpeed)
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [charIdx, isErasing, textIdx])

  useEffect(() => {
    setDisplayed("")
    setCharIdx(0)
    setIsErasing(false)
  }, [textIdx])

  return (
    <span
      className="block mb-4 text-white/80 text-xl md:text-2xl tracking-widest font-sans"
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: "0.15em solid rgba(255,255,255,0.8)",
        width: "fit-content",
        minHeight: "2.5rem",
      }}
    >
      {displayed}
    </span>
  )
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const firstName = "Kshitij".split("")
  const lastName = "Kumre".split("")

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "2s" }}
      />

      {/* Centered animated name */}
      <div className="z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold flex flex-wrap justify-center mb-6 font-sans">
          {/* Kshitij - static, white */}
          <span className="text-white">{firstName.join("")}</span>
          <span className="w-2 md:w-4" />
          {/* Kumre - animated, lighter blue gradient */}
          {lastName.map((letter, i) => (
            <motion.span
              key={`last-${i}`}
              custom={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={letterAnimation}
              className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-400 bg-clip-text text-transparent"
              style={{ fontFamily: "inherit" }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle: Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypingTitle />
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-sans">
            Building immersive digital experiences through{" "}
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              innovative code
            </span>{" "}
            and cutting-edge web technologies
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="text-md bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all font-sans"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-md border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-sans"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Resume
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-white/80 hover:text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowDown className="h-8 w-8" />
            </Button>
          </motion.div>
          <motion.span
            className="text-white/60 text-sm tracking-wide font-sans"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
        </div>
      </motion.div>
    </section>
  )
}
