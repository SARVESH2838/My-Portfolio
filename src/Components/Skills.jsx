const skills = [
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'JavaScript', level: 75, color: '#F7DF1E' },
  { name: 'HTML / CSS', level: 85, color: '#E34F26' },
  { name: 'SQL', level: 70, color: '#336791' },
  { name: 'Redis', level: 60, color: '#DC382D' },
  { name: 'Blockchain', level: 65, color: '#F5A623' },
  { name: 'React', level: 55, color: '#61DAFB' },
  { name: 'UI/UX Design', level: 70, color: '#00f5d4' },
]

import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="py-24 px-6 border-t border-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[var(--accent)] text-xs font-['DM_Mono'] mb-3 tracking-widest uppercase">
          02 / Skills
        </p>
        <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold mb-4">
          What I work with
        </h2>
        <p className="text-white/40 mb-14 max-w-lg text-sm">
          Technologies and tools I've picked up through projects, hackathons, and self-learning.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group p-5 rounded-xl bg-[var(--card)] border border-white/5 hover:border-white/15 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-['Syne'] text-sm font-semibold">{skill.name}</span>
                <span className="text-xs text-white/30 font-['DM_Mono']">{skill.level}%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Accomplishment banner */}
        <div className="mt-12 p-6 rounded-xl border border-[var(--accent2)]/20 bg-[var(--accent2)]/5 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏆</span>
          <div>
            <p className="font-['Syne'] font-semibold text-sm mb-1">Key Accomplishment</p>
            <p className="text-white/50 text-sm">
              Participated in 5+ hackathons, gaining hands-on experience in web application
              development across open innovation and blockchain domains.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
