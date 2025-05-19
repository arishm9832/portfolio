"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Cloud, Braces, Blocks, Bot, Lock } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const blobVariants = {
    animate: {
      y: [0, -40, 0, 40, 0],
      x: [0, 40, 0, -40, 0],
      scale: [1, 1.1, 1, 0.9, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const skillCategories = [
    {
      title: "Development",
      icon: <Code className="h-8 w-8 skill-icon text-cyan-400" />,
      skills: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
      bgClass: "from-cyan-400/20 to-cyan-400/10",
    },
    {
      title: "Programming",
      icon: <Braces className="h-8 w-8 skill-icon text-purple-400" />,
      skills: ["Java", "JavaScript", "Python", "C++", "Solidity"],
      bgClass: "from-purple-400/20 to-purple-400/10",
    },
    {
      title: "Blockchain",
      icon: <Blocks className="h-8 w-8 skill-icon text-indigo-400" />,
      skills: ["Ethereum", "Hardhat", "Metamask", "IPFS", "Smart Contract"],
      bgClass: "from-indigo-400/20 to-indigo-400/10",
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 skill-icon text-emerald-400" />,
      skills: ["RESTful APIs", "Authentication", "Authorization"],
      bgClass: "from-emerald-400/20 to-emerald-400/10",
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 skill-icon text-rose-400" />,
      skills: ["MongoDB", "MySQL", "IPFS", "Firebase"],
      bgClass: "from-rose-400/20 to-rose-400/10",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8 skill-icon text-sky-400" />,
      skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub"],
      bgClass: "from-sky-400/20 to-sky-400/10",
    },
    {
      title: "AI & ML",
      icon: <Bot className="h-8 w-8 skill-icon text-pink-400" />,
      skills: ["Gen-AI", "Machine Learning", "NLP", "Python Libraries"],
      bgClass: "from-pink-400/20 to-pink-400/10",
    },
    {
      title: "Security",
      icon: <Lock className="h-8 w-8 skill-icon text-amber-400" />,
      skills: ["Cyber Security", "Encryption", "Authentication", "Authorization", "Secure Coding"],
      bgClass: "from-amber-400/20 to-amber-400/10",
    },
  ]

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="skills" className="py-24 bg-background/30 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl"
          variants={blobVariants}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[32rem] h-[32rem] bg-indigo-400/10 rounded-full filter blur-3xl"
          variants={blobVariants}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
         



<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="text-4xl md:text-5xl font-extrabold mb-4"
  style={{ color: "#e6e6e6" }}
>
  Technical <span className="text-cyan-300">Expertise</span>
</motion.h2>


          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Comprehensive showcase of my technical proficiencies across modern development domains
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => handleClick(index)}
              className={`cursor-pointer transition-all duration-300 relative ${
                activeIndex === index ? "scale-105 shadow-2xl z-20" : "hover:scale-[1.03]"
              }`}
              style={{ zIndex: activeIndex === index ? 20 : 1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full skill-card overflow-hidden relative bg-white/5 backdrop-blur-sm border-none">
                <CardContent className="p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgClass} opacity-20 rounded-lg`} />
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-white/90">{category.title}</h3>
                    <ul className="space-y-2 w-full">
                      {category.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="text-white/80 text-sm transition-colors hover:text-white/90"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
