import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      id="about" 
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <p className="text-[var(--accent)] text-xs font-['DM_Mono'] mb-3 tracking-widest uppercase">
              01 / About Me
            </p>
            <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Building things that<br />
              <span className="text-[var(--accent)]">actually matter.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              I'm a first-year Computer Science & Engineering student at SRM Institute of Science
              and Technology, Ramapuram. I'm passionate about blockchain development, building
              robust backend systems, and crafting intuitive user interfaces.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              I've participated in 5+ hackathons — including events at IIT Madras — and continuously
              push myself to learn through hands-on projects and real-world problem solving.
            </p>

            {/* Languages */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Languages I speak</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Tamil', 'French', 'Telugu'].map(lang => (
                  <span
                    key={lang}
                    className="px-3 py-1 text-xs border border-white/10 text-white/50 rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education cards */}
          <div className="space-y-4">
            <p className="text-[var(--accent)] text-xs font-['DM_Mono'] mb-4 tracking-widest uppercase">
              Education
            </p>

            {[
              {
                school: 'SRM Institute of Science and Technology',
                degree: 'B.Tech in Computer Science & Engineering',
                year: '2025 – 2029',
                location: 'Ramapuram, Chennai',
                current: true,
              },
              {
                school: 'Alwin Memorial Public School (AMPS)',
                degree: 'CBSE',
                year: 'Completed 2025',
                location: 'Chennai, Tamil Nadu',
                current: false,
              },
            ].map((edu) => (
              <div
                key={edu.school}
                className="relative p-5 rounded-xl border bg-[var(--card)]"
                style={{ borderColor: edu.current ? 'var(--accent)' : 'var(--border)' }}
              >
                {edu.current && (
                  <span className="absolute top-4 right-4 text-[10px] px-2 py-0.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full border border-[var(--accent)]/20">
                    Current
                  </span>
                )}
                <p className="font-['Syne'] font-semibold text-sm mb-1">{edu.school}</p>
                <p className="text-white/50 text-xs mb-2">{edu.degree}</p>
                <div className="flex gap-4 text-white/30 text-xs">
                  <span>{edu.year}</span>
                  <span>·</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  )
}
