import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Mission', href: '#mission' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-void/80 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-void/40 backdrop-blur-md'
      }`}
    >
      <nav
        className="section-shell flex h-14 items-center justify-between sm:h-16"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center gap-2.5 rounded-lg" aria-label="RollnEnterprises — Home">
          <span className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
            <Logo className="h-full w-full" />
          </span>
          <span className="hidden bg-gradient-to-r from-bronze-light to-white bg-clip-text text-[15px] font-bold tracking-tight text-transparent sm:inline sm:text-base">
            RollnEnterprises
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="#contact" className="link-cta text-[15px]">
            Contact
          </a>
          <a href="#products" className="btn-pill btn-pill-primary px-5 py-2 text-sm">
            Explore Products
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/5 bg-void/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3.5 text-[17px] font-medium text-slate-200 transition-colors hover:bg-white/5"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/5 pt-4">
            <a href="#products" className="btn-pill btn-pill-primary w-full" onClick={closeMenu}>
              Explore Products
            </a>
            <a href="#contact" className="btn-pill btn-pill-outline w-full" onClick={closeMenu}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
