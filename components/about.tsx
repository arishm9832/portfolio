"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import ProfileAnimation from "./profile-animation"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Motion variants for animated background blobs
  const blob1Variants = {
    animate: {
      y: [0, -30, 0, 30, 0],
      x: [0, 20, 0, -20, 0],
      scale: [1, 1.08, 1, 0.95, 1],
      transition: {
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const blob2Variants = {
    animate: {
      y: [0, 25, 0, -25, 0],
      x: [0, -20, 0, 20, 0],
      scale: [1, 0.92, 1, 1.1, 1],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="about" className="py-24 bg-background/30 relative overflow-hidden">
      {/* Animated blurred background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        initial={false}
        animate="animate"
      >
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl"
          variants={blob1Variants}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[32rem] h-[32rem] bg-indigo-400/10 rounded-full filter blur-3xl"
          variants={blob2Variants}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        >
          {/* Profile image with glowing background */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Glowing ring effect */}
              <div className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-tr from-cyan-400/40 via-indigo-400/30 to-white/10 blur-2xl opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <ProfileAnimation />
                <Image
                  src="/s2.jpg"
                  alt="Profile"
                  fill
                  className="object-cover brightness-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* About text and links */}
          <motion.div variants={itemVariants} className="space-y-7">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: "#e6e6e6" }}>
              About <span className="text-cyan-300">Me</span>
            </h2>
            <p className="text-white/120 text-lg">
              I'm a Computer Engineering student at B.R.A.C.T. Vishwakarma Institute of Technology, Pune, passionate about building innovative solutions with modern web technologies.
            </p>
            <p className="text-white/120 text-lg">
              My expertise spans MERN stack development, blockchain, and AI/ML. I love tackling complex problems and creating efficient, delightful user experiences.
            </p>
            <p className="text-white/120 text-lg">
              When I'm not coding, I explore new tech, contribute to open source, or dive into cybersecurity and system design.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/arishm9832" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/kshitij-kumre-b79497261/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:kumrekshitij4@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
            {/* Download Resume Button */}
            <motion.div variants={itemVariants}>
              <Button
                asChild
                className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg"
                variant="default"
              >
                <a
                  href="/resume.pdf" // Place your resume.pdf in the public folder
                  download="Resume.pdf"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills summary cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <motion.div variants={itemVariants}>
            <Card className="hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 transform hover:-translate-y-2 bg-white/5 border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-extrabold mb-2 text-cyan-200">MERN</h3>
                <p className="text-grey/100">Full Stack Development</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover:shadow-2xl hover:shadow-indigo-400/20 transition-all duration-300 transform hover:-translate-y-2 bg-white/5 border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-extrabold mb-2 text-indigo-200">Blockchain</h3>
                <p className="text-white/100">Web3 Technologies</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-300 transform hover:-translate-y-2 bg-white/5 border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-extrabold mb-2 text-purple-200">AI/ML</h3>
                <p className="text-white/100">Generative AI & Machine Learning</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
