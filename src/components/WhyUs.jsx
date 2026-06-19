import logoImg from '../assets/logo.png'

const stats = [
  {
    label: 'Accessibility Focused',
    value: '100%',
    description: 'Every product designed with WCAG standards in mind.',
    accent: 'text-cyan-400',
  },
  {
    label: 'Community Driven',
    value: 'By Us',
    description: 'Founded by members of the disability community.',
    accent: 'text-bronze-light',
  },
  {
    label: 'Built For Impact',
    value: '3+',
    description: 'Products spanning fitness, navigation, and home living.',
    accent: 'text-emerald-400',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="section-shell py-4 sm:py-6" aria-labelledby="why-heading">
      <div className="section-block overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden bg-void/60 p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute left-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
            </div>
            <img
              src={logoImg}
              alt=""
              className="logo-glow relative max-h-64 w-full max-w-xs object-contain sm:max-h-72"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <p className="eyebrow mb-4 text-bronze-light">Why We Exist</p>
            <h2 id="why-heading" className="display-md text-white">
              Why We Exist
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              People with disabilities often face barriers that many technologies
              overlook. RollnEnterprises exists to create products specifically
              designed around accessibility, independence, and real-world usability.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
              Founded by members of the disability community, we bring lived
              experience to every decision — from product design to engineering to
              community engagement.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-void/40 px-4 py-5 backdrop-blur-sm"
                >
                  <p className={`text-2xl font-bold tracking-tight ${stat.accent}`}>{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{stat.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
