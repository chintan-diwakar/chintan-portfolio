'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-32">
              <span className="text-accent text-sm font-medium tracking-widest uppercase">About</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
                Not your typical<br />
                <span className="text-text-secondary">developer bio.</span>
              </h2>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I&apos;m a full stack developer based in Mumbai who&apos;s been deep in the trenches of web development 
              and AI. I don&apos;t just build CRUD apps — I build systems that think.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Right now I&apos;m obsessed with multi-agent architectures, LangGraph workflows, and making 
              AI actually useful in production (not just demos). I&apos;ve shipped social media platforms, 
              built Slack bots with superhero agents, and written about the intersection of AI and 
              developer productivity.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              My stack is whatever gets the job done — usually TypeScript on the front, Python on the 
              back, and AWS holding it all together. But I&apos;m not religious about tools. I&apos;m religious 
              about shipping.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
              {[
                { num: '15+', label: 'Public repos' },
                { num: '5+', label: 'Tech domains' },
                { num: '∞', label: 'Curiosity' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-accent">{stat.num}</div>
                  <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
