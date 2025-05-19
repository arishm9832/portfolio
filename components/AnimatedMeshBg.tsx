"use client"

import { useEffect, useRef } from "react"

export default function AnimatedMeshBg() {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    let frame: number
    const svg = ref.current
    if (!svg) return

    const stops1 = svg.querySelectorAll("#g1 stop")
    const stops2 = svg.querySelectorAll("#g2 stop")

    let t = 0

    function animate() {
      t += 0.015

      // Animate first gradient center
      const x1 = 50 + 10 * Math.sin(t)
      const y1 = 50 + 15 * Math.cos(t / 2)
      stops1.forEach(stop => {
        stop.setAttribute("cx", `${x1}%`)
        stop.setAttribute("cy", `${y1}%`)
      })

      // Animate second gradient center
      const x2 = 50 + 15 * Math.cos(t / 1.5)
      const y2 = 50 + 10 * Math.sin(t / 1.2)
      stops2.forEach(stop => {
        stop.setAttribute("cx", `${x2}%`)
        stop.setAttribute("cy", `${y2}%`)
      })

      frame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <svg
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1920 1080"
      aria-hidden="true"
      style={{ minHeight: "100vh" }}
    >
      <defs>
        <radialGradient id="g1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.20" cx="50%" cy="50%" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g2">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" cx="50%" cy="50%" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#g1)" />
      <rect width="1920" height="1080" fill="url(#g2)" />
    </svg>
  )
}
