const stats = [
  {
    label: 'Accessibility Focused',
    value: '100%',
    description: 'Every product designed with WCAG standards in mind.',
  },
  {
    label: 'Community Driven',
    value: 'By Us',
    description: 'Founded by members of the disability community.',
  },
  {
    label: 'Built For Impact',
    value: '1st',
    description: 'RollnFitness — our first platform in active development.',
  },
]

function WhyVisual() {
  return (
    <div className="relative h-full min-h-[20rem] lg:min-h-full" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a4548] via-[#1f2e33] to-[#141c1f]" />
      <div className="relative flex h-full min-h-[20rem] items-center justify-center p-8 sm:p-12 lg:min-h-[28rem]">
        <svg viewBox="0 0 400 400" className="w-full max-w-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="140" stroke="#3d8b8a" strokeWidth="1" fill="none" opacity="0.4" />
          <circle cx="200" cy="200" r="90" stroke="#c49a6c" strokeWidth="1" strokeDasharray="6 6" fill="none" opacity="0.5" />
          <circle cx="200" cy="110" r="10" fill="#5eead4" />
          <circle cx="290" cy="200" r="10" fill="#c49a6c" />
          <circle cx="200" cy="290" r="10" fill="#3d8b8a" />
          <circle cx="110" cy="200" r="10" fill="#5eead4" opacity="0.7" />
          <rect x="168" y="168" width="64" height="64" rx="16" fill="#c49a6c" />
          <path d="M184 200 L194 210 L216 186" stroke="#141c1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="200" y="350" textAnchor="middle" fill="#94b4b4" fontSize="13" fontFamily="Inter, sans-serif">
            Accessibility Ecosystem
          </text>
        </svg>
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="about" className="section-shell section-divider section-surface w-full" aria-labelledby="why-heading">
      <div className="grid lg:grid-cols-2">
        <WhyVisual />

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <p className="eyebrow mb-4 text-teal-300/60">Why We Exist</p>
          <h2 id="why-heading" className="display-md text-teal-50">
            Why We Exist
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-teal-100/65">
            People with disabilities often face barriers that many technologies
            overlook. RollnEnterprises exists to create products specifically
            designed around accessibility, independence, and real-world usability.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-teal-100/60 sm:text-base">
            Founded by members of the disability community, we bring lived
            experience to every decision — from product design to engineering to
            community engagement.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-[#1a282c]/80 px-4 py-5 ring-1 ring-teal-400/10"
              >
                <p className="text-2xl font-bold tracking-tight text-secondary">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-teal-50">{stat.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-teal-100/55">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
