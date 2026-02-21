'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const categories = [
  {
    name: 'Frontend',
    color: '#3b82f6',
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    name: 'Backend',
    color: '#10b981',
    items: ['Python', 'Node.js', 'FastAPI', 'Express'],
  },
  {
    name: 'AI / ML',
    color: '#f59e0b',
    items: ['OpenAI', 'Claude', 'LangChain', 'LangGraph'],
  },
  {
    name: 'Cloud',
    color: '#8b5cf6',
    items: ['AWS', 'Vercel', 'Railway', 'Docker'],
  },
  {
    name: 'Data',
    color: '#ef4444',
    items: ['MongoDB', 'PostgreSQL', 'SQLite', 'Redis'],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stack" className="py-32 px-6 bg-bg-secondary/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Stack</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Tools I reach for<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group relative p-6 rounded-2xl bg-bg-primary border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Category accent bar */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
              />
              
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                  {cat.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-text-primary hover:bg-white/10 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
