'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Remote Terminal',
    tagline: 'Your terminal, anywhere',
    description:
      'Access your dev workspace via browser, Telegram, or AI — secured with Tailscale. Full terminal access from any device, anywhere.',
    tech: ['Node.js', 'Tailscale', 'Telegram API', 'WebSocket'],
    github: 'https://github.com/chintan-diwakar/remote-terminal',
    live: null,
    icon: '/remote-terminal.jpg',
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
    icon: '/icons/super-agent.png',
    accent: '#f59e0b',
  },
  {
    title: 'CopyBrewery',
    tagline: 'Brew fresh marketing copy from the web',
    description:
      'AI-powered tool that scrapes the web and brews fresh, compelling marketing copy. Feed it a URL, get back high-converting copy tailored to your brand.',
    tech: ['Python', 'OpenAI', 'Web Scraping', 'NLP'],
    github: 'https://github.com/ChintanDiwakar/copybrewery',
    live: null,
    icon: '/icons/copybrewery.png',
    accent: '#10b981',
  },
  {
    title: 'AskMyCode.xyz',
    tagline: 'Chat with your codebase, privacy-first',
    description:
      'Talk to your codebase in natural language. Everything runs locally — no code leaves your machine. Understands context, finds bugs, explains logic.',
    tech: ['TypeScript', 'LLM', 'RAG', 'Privacy-first'],
    github: null,
    live: 'https://askmycode.xyz',
    icon: '/icons/askmycode.png',
    accent: '#8b5cf6',
  },
  {
    title: 'Zentickr Yahoo Query MCP',
    tagline: 'Financial data at your fingertips',
    description:
      'MCP server that pipes Yahoo Finance data directly into your AI tools. Real-time quotes, historical data, and financial analysis — all through a clean interface.',
    tech: ['TypeScript', 'MCP', 'Yahoo Finance', 'API'],
    github: 'https://github.com/chintan-diwakar/zentickr-yahoo-query-mcp',
    live: null,
    icon: '/icons/zentickr.png',
    accent: '#ef4444',
  },
  {
    title: 'AWS Utility',
    tagline: 'AWS credentials & S3, simplified',
    description:
      'Clean web interface for managing AWS credentials and browsing S3 buckets. No more fumbling with CLI for quick checks.',
    tech: ['Next.js', 'AWS SDK', 'S3', 'IAM'],
    github: null,
    live: 'https://aws-utility.vercel.app',
    icon: '/icons/aws-utility.png',
    accent: '#f97316',
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-7 sm:p-8 rounded-2xl bg-bg-secondary border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(400px circle at 50% 50%, ${project.accent}10, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon + Title row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: `${project.accent}15` }}
                    >
                      <img src={project.icon} alt={project.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                      <p className="text-text-secondary text-sm">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed text-sm mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-full border border-white/10 text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                      >
                        <Github size={15} />
                        Source
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-bg-primary transition-all duration-300 ml-auto"
                      >
                        Live
                        <ArrowUpRight size={14} />
                      </a>
                    )}
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
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/chintan-diwakar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm"
          >
            View all repos on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
