"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Calendar, BookOpen, Code, Database, Server, Shield, Brain } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCard, setActiveCard] = useState<string | null>(null)

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const educationData = [
    {
      degree: "B. Tech in Computer Engineering",
      institution: "B.R.A.C.T. Vishwakarma Institute of Technology, Pune",
      duration: "Jun 2022 – Till Date",
      description: "CGPA: 7.97",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Hislop College, Chandrapur",
      duration: "2022",
      description: "Percentage: 84.6%",
    },
    {
      degree: "Secondary Education",
      institution: "Abhyasa English School, Amravati",
      duration: "2020",
      description: "Percentage: 84%",
    },
  ]

  const courseCategories = [
    {
      id: "programming",
      name: "Programming & Algorithms",
      icon: <Code className="h-6 w-6 course-icon text-white" />,
      courses: ["Data Structure And Algorithms", "Object-Oriented Programming"],
    },
    {
      id: "systems",
      name: "Systems & Networks",
      icon: <Server className="h-6 w-6 course-icon text-white" />,
      courses: ["Computer Networks", "Operating Systems", "System Design"],
    },
    {
      id: "data",
      name: "Data Management",
      icon: <Database className="h-6 w-6 course-icon text-white" />,
      courses: ["Database Management System", "Data Warehousing"],
    },
    {
      id: "security",
      name: "Security",
      icon: <Shield className="h-6 w-6 course-icon text-white" />,
      courses: ["Cyber Security", "Information Security"],
    },
    {
      id: "ai",
      name: "AI & Cloud",
      icon: <Brain className="h-6 w-6 course-icon text-white" />,
      courses: ["Artificial Intelligence", "Cloud Computing", "Machine Learning"],
    },
  ]

  // Technical skills for horizontal section
  const technicalSkills = [
    {
      title: "Development",
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      skills: "MERN Stack",
    },
    {
      title: "Programming",
      icon: <Brain className="h-6 w-6 text-purple-400" />,
      skills: "Java, JavaScript, Python, C++, Solidity",
    },
    {
      title: "Blockchain",
      icon: <Shield className="h-6 w-6 text-green-400" />,
      skills: "Ethereum, Hardhat, Metamask, IPFS, Smart Contract",
    },
    {
      title: "Miscellaneous",
      icon: <Server className="h-6 w-6 text-orange-400" />,
      skills: "Gen-AI, ML, AWS",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
  <motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  className="text-3xl md:text-4xl font-bold mb-4 text-white"
>
  Education &{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-extrabold">
    Coursework
  </span>
</motion.h2>
  <p className="text-white/80 text-lg">
    My academic journey reflects a commitment to excellence and a passion for continuous learning. The rigorous coursework I have undertaken has provided a strong foundation in both theoretical concepts and practical applications, shaping my expertise and fueling my drive to innovate in the field.
  </p>
</div>


        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 mr-3 text-white" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="relative border-l-2 border-muted pl-8 space-y-10">
              {educationData.map((item, index) => (
                <motion.div key={index} className="relative education-item" whileHover={{ x: 10 }}>
                  <motion.div
                    className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-background education-dot"
                    whileHover={{ scale: 1.5, backgroundColor: "rgba(255, 255, 255, 1)" }}
                  ></motion.div>
                  <div className="mb-2 flex items-center text-sm text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    {item.duration}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                  <p className="text-white">{item.institution}</p>
                  <p className="mt-2 text-white">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coursework */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center mb-8">
              <BookOpen className="h-6 w-6 mr-3 text-white" />
              <h3 className="text-2xl font-bold text-white">Coursework</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {courseCategories.map((category) => (
                <Card
                  key={category.id}
                  className="course-card overflow-hidden"
                  onClick={() => setActiveCard(activeCard === category.id ? null : category.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="text-white mr-3">{category.icon}</div>
                      <h4 className="font-semibold text-white">{category.name}</h4>
                    </div>

                    <AnimatePresence>
                      {(activeCard === category.id || activeCard === null) && (
                        <motion.div
                          initial={activeCard !== null ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-wrap gap-2 mt-2">
                            {category.courses.map((course, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Horizontally Scrolling Technical Skills Section */}
        {/* <div className="mt-16">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 mr-3 text-white" />
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide">
            {technicalSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-64 h-32 bg-white/5 rounded-xl p-5 border border-white/10 flex flex-col justify-center"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 24px 0 rgba(34,211,238,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {skill.icon}
                  <h4 className="font-semibold text-white">{skill.title}</h4>
                </div>
                <p className="text-white/80 text-sm">{skill.skills}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
