import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const roles = [
  'CS Engineer',
  'Blockchain Developer',
  'UI/UX Enthusiast',
  'Hackathon Participant',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-['DM_Mono']">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
            Available for opportunities
          </div>

          <h1 className="font-['Syne'] text-5xl md:text-7xl font-extrabold leading-none mb-4 tracking-tight">
            Hi, I'm<br />
            <span style={{ color: 'var(--accent)' }}>Sarvesh K</span>
          </h1>

          <div className="text-xl md:text-2xl text-white/50 mb-6 font-['DM_Mono'] h-8">
            <span className="text-[var(--accent2)]">&gt;</span>{' '}
            <span>{displayed}</span>
            <span className="cursor-blink text-[var(--accent)]">_</span>
          </div>

          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Computer Science student at SRM IST with skills in JavaScript, React, Python, SQL,
            and blockchain development — building real-world solutions through hackathons and projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-[var(--accent)] text-[var(--dark)] font-['Syne'] font-bold text-sm rounded hover:brightness-110 transition-all duration-200 glow-pulse"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white/20 text-white/70 font-['Syne'] text-sm rounded hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex gap-10 border-t border-white/5 pt-8">
            {[
              { n: '5+', label: 'Hackathons' },
              { n: '4', label: 'Certificates' },
              { n: '1', label: 'Live Project' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-['Syne'] text-3xl font-bold text-[var(--accent)]">{s.n}</div>
                <div className="text-white/40 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </motion.section>
  )
}
