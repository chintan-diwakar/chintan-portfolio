'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}
