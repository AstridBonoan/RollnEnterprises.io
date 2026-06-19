function HeroIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg"
      aria-hidden="true"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-8 shadow-2xl backdrop-blur-sm">
        <svg viewBox="0 0 400 360" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="heroGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          <circle cx="200" cy="180" r="140" fill="url(#heroGrad1)" opacity="0.08" />
          <circle cx="200" cy="180" r="100" fill="url(#heroGrad2)" opacity="0.12" />

          <rect x="80" y="100" width="240" height="160" rx="20" fill="white" stroke="#E2E8F0" strokeWidth="2" />
          <rect x="100" y="120" width="80" height="12" rx="6" fill="#2563EB" opacity="0.8" />
          <rect x="100" y="142" width="140" height="8" rx="4" fill="#CBD5E1" />
          <rect x="100" y="158" width="120" height="8" rx="4" fill="#CBD5E1" />

          <circle cx="280" cy="200" r="36" fill="url(#heroGrad1)" opacity="0.15" />
          <circle cx="280" cy="200" r="24" fill="#2563EB" opacity="0.9" />
          <path
            d="M272 200 L278 206 L290 192"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g className="animate-float">
            <rect x="120" y="200" width="60" height="40" rx="10" fill="#14B8A6" opacity="0.2" />
            <path
              d="M130 230 L150 210 L170 220 L190 200"
              stroke="#14B8A6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          <g opacity="0.7">
            <circle cx="140" cy="280" r="8" fill="#4F46E5" />
            <circle cx="200" cy="300" r="8" fill="#2563EB" />
            <circle cx="260" cy="280" r="8" fill="#14B8A6" />
            <path
              d="M148 280 L192 300 M208 300 L252 280"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </g>

          <rect x="60" y="60" width="48" height="48" rx="12" fill="#14B8A6" opacity="0.15" />
          <rect x="292" y="80" width="40" height="40" rx="10" fill="#4F46E5" opacity="0.15" />
        </svg>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary animate-fade-in-up">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Accessibility-First Technology
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-tight tracking-tight text-slate-text sm:text-5xl lg:text-6xl animate-fade-in-up animate-delay-100"
          >
            Technology Built For{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Accessibility, Independence,
            </span>{' '}
            and Everyday Life.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0 animate-fade-in-up animate-delay-200">
            RollnEnterprises creates innovative digital products that empower people
            with disabilities through fitness, navigation, and accessibility-focused
            solutions.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start animate-fade-in-up animate-delay-300">
            <a
              href="#products"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
            >
              Explore Products
            </a>
            <a
              href="#mission"
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-text transition-all hover:border-primary hover:text-primary sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up animate-delay-400">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
