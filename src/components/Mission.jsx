const pillars = [
  {
    title: 'Accessibility First',
    description: 'Every experience is designed for real-world accessibility.',
    bg: 'bg-gradient-to-br from-blue-50 to-white',
    accent: 'text-primary',
    ring: 'ring-blue-100',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Community Driven',
    description: 'Built by people who understand accessibility challenges firsthand.',
    bg: 'bg-gradient-to-br from-indigo-50 to-white',
    accent: 'text-secondary',
    ring: 'ring-indigo-100',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovation With Purpose',
    description: 'Technology that creates meaningful impact.',
    bg: 'bg-gradient-to-br from-teal-50 to-white',
    accent: 'text-accent',
    ring: 'ring-teal-100',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Mission() {
  return (
    <section id="mission" className="section-shell py-4 sm:py-6" aria-labelledby="mission-heading">
      <div className="section-block bg-white px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 text-slate-400">Our Mission</p>
          <h2 id="mission-heading" className="display-md text-slate-text">
            Our Mission
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500 sm:text-xl">
            We believe technology should remove barriers, not create them. Every
            product we build is designed with accessibility, inclusion, and
            independence at its core.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className={`group rounded-2xl p-7 ring-1 ${pillar.ring} ${pillar.bg} transition-transform duration-300 hover:-translate-y-0.5`}
            >
              <div className={`mb-5 inline-flex rounded-full bg-white p-3 shadow-sm ${pillar.accent}`}>
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-text">{pillar.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
