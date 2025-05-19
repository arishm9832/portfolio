"use client"

import { useEffect, useRef } from "react"

export default function RandomBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create random background elements
    const createElements = () => {
      // Clear existing elements
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }

      // Create new random elements
      const numElements = Math.floor(window.innerWidth / 300) // Adjust number based on screen size

      for (let i = 0; i < numElements; i++) {
        // Create random blob
        const element = document.createElement("div")
        element.className = "random-bg-element"

        // Random size
        const size = Math.random() * 300 + 100
        element.style.width = `${size}px`
        element.style.height = `${size}px`

        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100
        element.style.left = `${posX}%`
        element.style.top = `${posY}%`

        // Random animation delay and duration
        const animationDelay = Math.random() * 5
        const animationDuration = Math.random() * 10 + 10
        element.style.animationDelay = `${animationDelay}s`
        element.style.animationDuration = `${animationDuration}s`

        // Random hue rotation for color variation
        const hueRotate = Math.random() * 30 - 15
        element.style.filter = `blur(40px) hue-rotate(${hueRotate}deg)`

        container.appendChild(element)
      }

      // Add some geometric shapes
      const shapes = ["triangle", "square", "circle"]
      const numShapes = Math.floor(window.innerWidth / 400) + 2

      for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement("div")
        shape.className = "floating-shape"

        // Random shape type
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)]

        // Random size
        const size = Math.random() * 100 + 50
        shape.style.width = `${size}px`
        shape.style.height = `${size}px`

        // Random position
        const posX = Math.random() * 90 + 5
        const posY = Math.random() * 90 + 5
        shape.style.left = `${posX}%`
        shape.style.top = `${posY}%`

        // Random animation delay and duration
        const animationDelay = Math.random() * 5
        const animationDuration = Math.random() * 10 + 15
        shape.style.animationDelay = `${animationDelay}s`
        shape.style.animationDuration = `${animationDuration}s`

        // Shape-specific styling
        if (shapeType === "triangle") {
          shape.style.width = "0"
          shape.style.height = "0"
          shape.style.borderLeft = `${size / 2}px solid transparent`
          shape.style.borderRight = `${size / 2}px solid transparent`
          shape.style.borderBottom = `${size}px solid rgba(124, 58, 237, 0.1)`
          shape.style.background = "transparent"
        } else if (shapeType === "square") {
          shape.style.background = "rgba(124, 58, 237, 0.1)"
          shape.style.borderRadius = "4px"
        } else {
          // circle
          shape.style.background = "rgba(124, 58, 237, 0.1)"
          shape.style.borderRadius = "50%"
        }

        container.appendChild(shape)
      }
    }

    // Initial creation
    createElements()

    // Recreate on resize
    const handleResize = () => {
      createElements()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]"></div>
}
