const stats = [
  {
    label: 'Accessibility Focused',
    value: '100%',
    description: 'Every product designed with WCAG standards in mind.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: 'Community Driven',
    value: 'By Us',
    description: 'Founded by members of the disability community.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    label: 'Built For Impact',
    value: '3+',
    description: 'Products spanning fitness, navigation, and home living.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

function WhyIllustration() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-secondary/20 to-accent/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-dark to-slate-800 p-8 shadow-2xl">
        <svg viewBox="0 0 400 400" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="150" stroke="#334155" strokeWidth="1" fill="none" />
          <circle cx="200" cy="200" r="100" stroke="#475569" strokeWidth="1" fill="none" strokeDasharray="8 8" />

          <circle cx="200" cy="120" r="12" fill="#2563EB" />
          <circle cx="280" cy="200" r="12" fill="#14B8A6" />
          <circle cx="200" cy="280" r="12" fill="#4F46E5" />
          <circle cx="120" cy="200" r="12" fill="#2563EB" opacity="0.6" />

          <path d="M200 132 L280 200 L200 268 L120 200 Z" stroke="#64748B" strokeWidth="1.5" fill="#1E293B" opacity="0.5" />

          <rect x="170" y="170" width="60" height="60" rx="12" fill="#2563EB" opacity="0.9" />
          <path
            d="M185 200 L195 210 L215 188"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <text x="200" y="340" textAnchor="middle" fill="#94A3B8" fontSize="14" fontFamily="Inter, sans-serif">
            Accessibility Ecosystem
          </text>
        </svg>
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section
      id="about"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <WhyIllustration />

          <div>
            <h2
              id="why-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-text sm:text-4xl lg:text-5xl"
            >
              Why We Exist
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              People with disabilities often face barriers that many technologies
              overlook. RollnEnterprises exists to create products specifically
              designed around accessibility, independence, and real-world usability.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Founded by members of the disability community, we bring lived
              experience to every decision — from product design to engineering to
              community engagement.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-extrabold text-slate-text">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-text">{stat.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
