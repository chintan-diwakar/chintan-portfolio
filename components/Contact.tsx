'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react'

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/chintan-diwakar',
    handle: '@chintan-diwakar',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/chintandiwakar',
    handle: '/in/chintandiwakar',
  },
  {
    name: 'Medium',
    icon: FileText,
    url: 'https://chintandiwakar.medium.com',
    handle: '@chintandiwakar',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl sm:text-6xl font-bold mt-3 tracking-tight">
            Let&apos;s build something<span className="text-accent">.</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto text-lg">
            Got a project idea, a collaboration, or just want to talk code? 
            I&apos;m always open to interesting conversations.
          </p>
        </motion.div>

        {/* Social links grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {socials.map((s, idx) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent/30 transition-all duration-300"
            >
              <s.icon size={24} className="text-text-secondary group-hover:text-accent transition-colors" />
              <div>
                <div className="font-semibold text-sm">{s.name}</div>
                <div className="text-text-secondary text-xs">{s.handle}</div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-8 border-t border-white/5"
        >
          <p className="text-text-secondary text-sm">
            Designed & built by Chintan Diwakar · {new Date().getFullYear()}
          </p>
          <p className="text-text-secondary/50 text-xs mt-2">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}
