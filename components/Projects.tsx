'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'FlowSocial',
    tagline: 'Social media marketing, reimagined',
    description:
      'Premium social media marketing platform with buttery GSAP animations, responsive layouts, and a conversion-focused design system. Built for a real client, shipped to production.',
    tech: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind CSS'],
    github: 'https://github.com/chintan-diwakar/flowsocial-website',
    live: 'https://flowsocial-website.vercel.app',
    accent: '#3b82f6',
  },
  {
    title: 'Super Agent',
    tagline: 'AI agents that actually do stuff',
    description:
      'Multi-agent Slack bot where each agent has a superhero persona and specialized skills. Powered by LangGraph for complex multi-step workflows — task routing, memory, and autonomous execution.',
    tech: ['Python', 'LangGraph', 'LangChain', 'Slack API'],
    github: 'https://github.com/chintan-diwakar/super-agent',
    live: null,
    accent: '#f59e0b',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Work</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Things I&apos;ve built<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 sm:p-10 rounded-2xl bg-bg-secondary border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accent}08, transparent 40%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{project.title}</h3>
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.accent }}
                        />
                      </div>
                      <p className="text-text-secondary text-sm italic">{project.tagline}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-bg-primary transition-all duration-300"
                        >
                          Live
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/chintan-diwakar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm"
          >
            View all 15+ repos on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
