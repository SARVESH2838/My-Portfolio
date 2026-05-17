const projects = [
  {
    name: 'Rug-Shield',
    tagline: 'Solana Ecosystem Blockchain Service',
    description:
      'A real-time monitoring service that listens to the Solana blockchain for token mint events, ensuring zero-latency data capture with a Redis-based event pipeline.',
    bullets: [
      'Architected real-time monitoring for Solana token mint events',
      'Built a Redis-based event pipeline for concurrent processing',
      'Optimized backend data pipelines for system reliability & security risk assessment',
    ],
    tech: ['Solana', 'Redis', 'Python'],
    color: '#9945FF',
  },
]

import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-24 px-6 border-t border-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[var(--accent)] text-xs font-['DM_Mono'] mb-3 tracking-widest uppercase">
          03 / Projects
        </p>
        <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold mb-4">
          Things I've built
        </h2>
        <p className="text-white/40 mb-14 max-w-lg text-sm">
          Real projects that solve real problems. More coming soon.
        </p>

        {projects.map((p) => (
          <div
            key={p.name}
            className="group relative p-8 rounded-2xl bg-[var(--card)] border border-white/5 hover:border-[#9945FF]/30 transition-all duration-300 overflow-hidden"
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none transition-opacity duration-300 group-hover:opacity-10"
              style={{ background: p.color }}
            />

            <div className="relative z-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-['Syne'] text-2xl font-bold mb-1">{p.name}</h3>
                  <p className="text-white/40 text-sm">{p.tagline}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-6">{p.description}</p>

              <ul className="space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/40">
                    <span className="text-[var(--accent)] mt-0.5">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Coming soon card */}
        <div className="mt-6 p-6 rounded-2xl border border-dashed border-white/10 flex items-center justify-center text-white/20 text-sm font-['DM_Mono']">
          more projects coming soon...
        </div>
      </div>
    </motion.section>
  )
}
