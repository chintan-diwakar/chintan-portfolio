'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      
      {/* Floating accent orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text content */}
        <div className="flex-1">
          {/* Status line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-text-secondary font-light tracking-wide">Available for work · Mumbai, India</span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
            >
              Chintan
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
            >
              Diwakar<span className="text-accent">.</span>
            </motion.h1>
          </div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-8"
          >
            <p className="text-lg sm:text-xl text-text-secondary max-w-lg leading-relaxed">
              Full stack developer who builds applications and 
              <span className="text-accent font-medium"> explores AI agents</span>. 
              I turn messy problems into clean, working software.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="https://github.com/chintan-diwakar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-text-primary hover:bg-accent hover:border-accent hover:text-bg-primary transition-all duration-300"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/chintandiwakar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-text-primary hover:bg-accent hover:border-accent hover:text-bg-primary transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://chintandiwakar.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-text-primary hover:bg-accent hover:border-accent hover:text-bg-primary transition-all duration-300"
            >
              <FileText size={16} />
              Blog
            </a>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="shrink-0"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-6 rounded-full border border-white/5" />
            
            {/* Photo container — replace src with your photo */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/10 bg-bg-secondary relative">
              <img src="/chintan.jpg" alt="Chintan Diwakar" className="w-full h-full object-cover" />
            </div>

            {/* Accent dot */}
            <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
