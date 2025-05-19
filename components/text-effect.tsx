"use client"

import { useEffect, useState } from "react"

interface TextEffectProps {
  text: string
  className?: string
  delay?: number
}

export default function TextEffect({ text, className = "", delay = 0 }: TextEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    // Reset on text change
    setDisplayedText("")
    setIsComplete(false)

    // Delay before animation starts
    timeoutId = setTimeout(() => {
      let index = 0
      intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index))
        index++
        if (index >= text.length) {
          clearInterval(intervalId)
          setIsComplete(true)
        }
      }, 100) // Typing speed
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, delay])

  return (
    <span className={`${className} ${isComplete ? "glow-text" : ""}`}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}
