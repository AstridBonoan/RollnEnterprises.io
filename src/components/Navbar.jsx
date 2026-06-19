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
          ? 'border-b border-teal-400/10 bg-[#141c1f]/80 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-[#141c1f]/40 backdrop-blur-md'
      }`}
    >
      <nav
        className="section-inner flex h-14 w-full items-center justify-between sm:h-16"
        aria-label="Main navigation"
      >
        <a href="#home" className="rounded-lg" aria-label="RollnEnterprises — Home">
          <Logo className="h-10 w-auto shrink-0 sm:h-11" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-teal-100/70 transition-colors hover:text-teal-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="link-cta text-[15px]">
            Contact
          </a>
          <a href="#products" className="btn-pill btn-pill-primary px-4 py-2 text-sm">
            Explore Products
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-teal-100/80 transition-colors hover:bg-white/5 lg:hidden"
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
          className="border-t border-teal-400/10 bg-[#141c1f]/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3.5 text-[17px] font-medium text-teal-50 transition-colors hover:bg-white/5"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-teal-400/10 pt-4">
            <a href="#products" className="btn-pill btn-pill-primary w-full" onClick={closeMenu}>
              Explore Products
            </a>
            <a href="#contact" className="btn-pill btn-pill-secondary w-full" onClick={closeMenu}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
