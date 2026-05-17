const certs = [
  {
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'Jan 29, 2026',
    verify: 'https://www.credly.com/badges/6d720620-3e16-4542-b8b4-37dde05bc83e',
    icon: '🤖',
    color: '#0062FF',
    type: 'Certification',
  },
  {
    title: 'UI/UX Design Traineeship',
    issuer: 'Internship / Traineeship Program',
    date: 'May 06, 2026',
    verify: 'https://www.maiyyam.com/verify-certificate',
    icon: '🎨',
    color: '#00e5ff',
    type: 'Traineeship',
  },
  {
    title: 'International Level Hackathon 360° – 3.0',
    issuer: 'ECLearnix & KPR Institute of Engineering',
    date: 'Feb 28, 2026',
    verify: 'https://www.eclearnix.com/credential-validation',
    icon: '⚡',
    color: '#F5A623',
    type: 'Participation',
  },
  {
    title: 'GameTrade Hackathon – Phase 1',
    issuer: 'IIT Madras (via Unstop)',
    date: 'Feb 06, 2026',
    verify: 'https://unstop.com/certificate-preview/0442f623-b337-4621-aebd-9c0f8ec0f35f',
    icon: '🎮',
    color: '#EF4444',
    type: 'Participation',
  },
]

import { motion } from 'framer-motion'

export default function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="py-24 px-6 border-t border-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[var(--accent)] text-xs font-['DM_Mono'] mb-3 tracking-widest uppercase">
          04 / Certificates
        </p>
        <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold mb-4">
          Credentials & Achievements
        </h2>
        <p className="text-white/40 mb-14 max-w-lg text-sm">
          Certifications, hackathon participations, and traineeships.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="group relative p-6 rounded-xl bg-[var(--card)] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Type badge */}
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                >
                  {cert.icon}
                </div>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full border font-['DM_Mono'] uppercase tracking-wider"
                  style={{ borderColor: `${cert.color}40`, color: cert.color }}
                >
                  {cert.type}
                </span>
              </div>

              <div>
                <h3 className="font-['Syne'] font-semibold text-sm mb-1 leading-snug">{cert.title}</h3>
                <p className="text-white/40 text-xs mb-1">{cert.issuer}</p>
                <p className="text-white/25 text-xs font-['DM_Mono']">{cert.date}</p>
              </div>

              {cert.verify && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/30 hover:text-[var(--accent)] transition-colors flex items-center gap-1 mt-auto"
                >
                  <span>Verify credential</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
