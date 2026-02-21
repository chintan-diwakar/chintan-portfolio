'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Clock } from 'lucide-react'

const posts = [
  {
    title: 'AI is slowing down our Brain — Maybe or Maybe Not!',
    excerpt:
      "A short reflection on whether our reliance on AI tools is dulling our thinking — or just changing how we think. Spoiler: it's complicated.",
    url: 'https://chintandiwakar.medium.com/ai-is-slowing-down-our-brain-maybe-or-maybe-not-short-reflection-3a24ec656fec',
    date: '2024',
    readTime: '4 min',
    tag: 'Reflection',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" className="py-32 px-6 bg-bg-secondary/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Writing</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Thinking out loud<span className="text-accent">.</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg">
            Occasional posts about AI, development, and building things in public.
          </p>
        </motion.div>

        <div className="space-y-4">
          {posts.map((post, idx) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group block p-6 sm:p-8 rounded-2xl bg-bg-primary border border-white/5 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent">
                      {post.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-secondary">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary mt-2 leading-relaxed text-sm max-w-xl">
                    {post.excerpt}
                  </p>
                </div>
                <div className="shrink-0 self-center">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <ArrowUpRight size={16} className="text-text-secondary group-hover:text-bg-primary transition-colors" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a
            href="https://chintan-blog.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-bg-primary font-medium rounded-full hover:bg-accent-hover transition-colors text-sm"
          >
            Read my blog
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://chintandiwakar.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm"
          >
            More on Medium
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
