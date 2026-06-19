function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-3xl" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-3xl" />
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5">
        <div className="flex flex-col items-center px-6 pt-10 pb-6 sm:px-10 sm:pt-12">
          <svg viewBox="0 0 560 320" className="w-full max-w-lg animate-subtle-float" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              <linearGradient id="g2" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <rect x="40" y="40" width="480" height="240" rx="24" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="68" y="72" width="120" height="10" rx="5" fill="url(#g1)" />
            <rect x="68" y="96" width="200" height="8" rx="4" fill="#CBD5E1" />
            <rect x="68" y="114" width="160" height="8" rx="4" fill="#E2E8F0" />
            <circle cx="420" cy="160" r="52" fill="url(#g1)" opacity="0.12" />
            <circle cx="420" cy="160" r="36" fill="url(#g1)" />
            <path d="M408 160 L416 168 L434 148" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="88" y="180" width="72" height="48" rx="14" fill="url(#g2)" opacity="0.15" />
            <path d="M100 218 L128 192 L156 206 L200 168" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="148" cy="268" r="7" fill="#4F46E5" />
            <circle cx="280" cy="278" r="7" fill="#2563EB" />
            <circle cx="412" cy="268" r="7" fill="#14B8A6" />
            <path d="M155 268 L273 278 M287 278 L405 268" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="5 5" />
          </svg>
        </div>
        <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 bg-white/80">
          {['Fitness', 'Navigation', 'Living'].map((label) => (
            <div key={label} className="px-4 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative w-full overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-100/80 via-indigo-50/50 to-teal-100/60 blur-3xl" />
      </div>

      <div className="relative flex min-h-[calc(100svh-3rem)] flex-col justify-center pt-14 sm:min-h-[calc(100svh-3.5rem)] sm:pt-16">
        <div className="section-inner relative px-5 py-6 text-center sm:px-8 lg:px-12">
          <p className="eyebrow mb-3 text-primary animate-fade-in-up sm:mb-4">Accessibility-First Technology</p>

          <h1
            id="hero-heading"
            className="display-hero mx-auto max-w-4xl text-slate-text animate-fade-in-up animate-delay-100"
          >
            Technology built for accessibility, independence, and everyday life.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:mt-5 sm:text-lg lg:text-xl animate-fade-in-up animate-delay-200">
            RollnEnterprises creates innovative digital products that empower people
            with disabilities through fitness, navigation, and accessibility-focused
            solutions.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-5 animate-fade-in-up animate-delay-300">
            <a href="#products" className="btn-pill btn-pill-primary min-w-[11rem] px-7 py-3">
              Explore Products
            </a>
            <a href="#mission" className="link-cta">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="section-inner relative px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 animate-fade-in-up animate-delay-400">
        <HeroVisual />
      </div>
    </section>
  )
}
