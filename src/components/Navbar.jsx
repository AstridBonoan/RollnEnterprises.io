import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Mission', href: '#mission' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#2563EB" />
      <path d="M8 22V10h3.2l4.8 7.2V10H19v12h-3.2L11 14.8V22H8z" fill="white" />
      <circle cx="23" cy="16" r="3" fill="#14B8A6" />
    </svg>
  )
}

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
          ? 'border-b border-black/5 bg-white/72 shadow-sm backdrop-blur-xl backdrop-saturate-150'
          : 'bg-white/50 backdrop-blur-md'
      }`}
    >
      <nav
        className="section-inner flex h-12 w-full items-center justify-between sm:h-14"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-2 rounded-lg"
          aria-label="RollnEnterprises — Home"
        >
          <Logo className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
          <span className="text-[15px] font-semibold tracking-tight text-slate-text sm:text-base">
            RollnEnterprises
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-slate-600 transition-colors hover:text-slate-900"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-black/5 lg:hidden"
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
          className="border-t border-black/5 bg-white/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3.5 text-[17px] font-medium text-slate-800 transition-colors hover:bg-slate-100"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
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
