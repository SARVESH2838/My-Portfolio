import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-24 px-6 border-t border-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[var(--accent)] text-xs font-['DM_Mono'] mb-3 tracking-widest uppercase">
          05 / Contact
        </p>

        {/* Big CTA */}
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[var(--card)] p-6 sm:p-12 md:p-16 text-center">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h2 className="font-['Syne'] text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Let's work<br />
              <span className="text-[var(--accent)]">together.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base max-w-md mx-auto mb-10">
              I'm open to internships, collaborations, and freelance projects.
              Feel free to reach out!
            </p>

            <a
              href="mailto:sarvesh.52837@gmail.com"
              className="inline-block px-8 py-4 bg-[var(--accent)] text-[var(--dark)] font-['Syne'] font-bold rounded-lg hover:brightness-110 transition-all duration-200 text-sm glow-pulse"
            >
              sarvesh.52837@gmail.com
            </a>

            {/* Social links */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/30 text-sm">
              <a
                href="https://linkedin.com/in/sarvesh2838"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="tel:9952042683"
                className="hover:text-[var(--accent)] transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +91 9952042683
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
