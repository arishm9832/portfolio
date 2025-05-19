"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  const projects = [
    {
      id: 1,
      title: "CryptPic-aes-stegnography",
      description: "Secure image steganography with AES encryption and blockchain integration.",
      image: "/cryptpic.png",
      tags: ["Cryptography", "Blockchain", "Steganography", "AES", "Security"],
      demoLink: "https://github.com/arishm9832/Image_Steganography_App",
      githubLink: "https://github.com/arishm9832/Image_Steganography_App",
      date: "May 2025",
      fullDescription:
        "CryptPic leverages AES encryption and advanced steganography techniques to embed and extract secure data from images. Blockchain integration ensures tamper-proof timestamping and data integrity.",
    },
    {
      id: 2,
      title: "RAG-based File Retrieval System",
      description: "AI-powered PDF chatbot with retrieval-augmented generation.",
      image: "/rag.png",
      tags: ["AI", "RAG", "AWS Bedrock", "LangChain", "FAISS", "Streamlit"],
      demoLink: "https://github.com/arishm9832/pdf-rag-bedrock-app",
      githubLink: "https://github.com/arishm9832/pdf-rag-bedrock-app",
      date: "April 2024",
      fullDescription:
        "An interactive, AI-powered PDF chatbot built using Streamlit, AWS Bedrock LLMs (Titan, LLaMA3), FAISS, and LangChain. It performs retrieval-augmented generation (RAG) by extracting and embedding PDF documents, enabling users to ask complex questions and receive detailed, context-aware answers. Includes a modern UI, real-time LLM switching, and vector store management.",
    },
    {
      id: 3,
      title: "Web3.0 Based Social Platform - Crypto-chat",
      description: "Decentralized Twitter-like dApp with NFT profiles and IPFS content storage.",
      image: "/cryptochat.png",
      tags: ["Web3", "Blockchain", "Ethereum", "React.js", "Solidity", "IPFS", "Hardhat"],
      demoLink: "https://github.com/arishm9832/cryptochat",
      githubLink: "https://github.com/arishm9832/cryptochat",
      date: "November 2024",
      fullDescription:
        "Built a decentralized Twitter-like dApp where users create NFT-based profiles, post content via IPFS, and receive ETH tips for their posts. Integrated Solidity smart contracts with a React.js frontend using Ethers.js and deployed on a local Ethereum blockchain with Hardhat.",
    },
    {
      id: 4,
      title: "Edu-Finance: Financial Sentiment Analysis",
      description: "Comparative analysis of BERT models for financial sentiment analysis.",
      image: "/edu-finance.png",
      tags: ["NLP", "BERT", "FinBERT", "Machine Learning", "Sentiment Analysis", "Finance"],
      demoLink: "https://github.com/arishm9832/EduFinance",
      githubLink: "https://github.com/arishm9832/EduFinance",
      date: "May 2025",
      fullDescription:
        "Applied BERT-based NLP models (BERT, FinBERT, ProsusAl FinBERT, HKUST FinBERT) to perform financial sentiment analysis on domain-specific news datasets, optimizing model performance using fine-tuning techniques. Implemented advanced training strategies such as gradual unfreezing and slanted triangular learning rates to combat catastrophic forgetting and improve model generalization in sentiment classification tasks. Conducted comparative analysis using accuracy and F1-score metrics, where ProsusAl FinBERT demonstrated superior results, showcasing the impact of domain-specific pre-training in financial NLP applications.",
    },
  ]

  // Animated background blobs for visual polish
  const blobVariants = {
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

  return (
    <section id="projects" className="py-24 bg-background/30 relative overflow-hidden">
      {/* Animated blurred background blobs */}
      <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" initial={false} animate="animate">
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl"
          variants={blobVariants}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[32rem] h-[32rem] bg-indigo-400/10 rounded-full filter blur-3xl"
          variants={blobVariants}
        />
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#e6e6e6" }}>
            My <span className="text-cyan-300">Projects</span>
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            A showcase of my recent work and projects that demonstrate my skills and expertise as a frontend developer.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 bg-white/5 backdrop-blur-sm border-none hover:shadow-2xl hover:shadow-cyan-400/20 hover:-translate-y-2">
                <div className="relative h-52 w-full overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.date}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white/90">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-cyan-400/20 text-cyan-300">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-white/70 border-white/30">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Dialog */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">{selectedProject.title}</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogHeader>
              <div className="relative h-64 w-full overflow-hidden rounded-md my-4">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="mb-4">
                  {selectedProject.date}
                </Badge>
              </div>
              <DialogDescription className="text-white/90">{selectedProject.fullDescription}</DialogDescription>
              <div className="flex flex-wrap gap-2 my-4">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-cyan-400/20 text-cyan-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}
