import About from "@/components/about"
import DynamicBackground from "@/components/dynamic-background"
import Education from "@/components/education"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import RandomBackground from "@/components/random-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <DynamicBackground />
      <RandomBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
    </main>
  )
}
