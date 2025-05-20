"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-white to-white/60 logo-animation"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-lg font-sans text-background">P</span>
    </motion.div>
  )
}
