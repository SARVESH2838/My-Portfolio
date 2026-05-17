import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = ['About', 'Skills', 'Projects', 'Certificates', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[var(--dark)]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-['Syne'] font-bold text-xl tracking-tight">
          SK<span style={{color:'var(--accent)'}}>.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm text-white/60">
          {links.map(l => (
            <li key={l}>
              <NavLink
                to={`/${l.toLowerCase()}`}
                className={({ isActive }) => 
                  `transition-colors duration-200 ${isActive ? 'text-[var(--accent)] font-bold' : 'hover:text-[var(--accent)]'}`
                }
              >
                {l}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block text-sm px-4 py-2 border border-[var(--accent)]/40 text-[var(--accent)] rounded hover:bg-[var(--accent)]/10 transition-all duration-200"
        >
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--dark)]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <NavLink
              key={l}
              to={`/${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => 
                `transition-colors text-sm ${isActive ? 'text-[var(--accent)] font-bold' : 'text-white/60 hover:text-[var(--accent)]'}`
              }
            >
              {l}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
