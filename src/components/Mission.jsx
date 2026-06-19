const pillars = [
  {
    title: 'Accessibility First',
    description: 'Every experience is designed for real-world accessibility.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    color: 'bg-blue-50 text-primary',
  },
  {
    title: 'Community Driven',
    description: 'Built by people who understand accessibility challenges firsthand.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: 'bg-indigo-50 text-secondary',
  },
  {
    title: 'Innovation With Purpose',
    description: 'Technology that creates meaningful impact.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: 'bg-teal-50 text-accent',
  },
]

export default function Mission() {
  return (
    <section
      id="mission"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="mission-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-text sm:text-4xl lg:text-5xl"
          >
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            We believe technology should remove barriers, not create them. Every
            product we build is designed with accessibility, inclusion, and
            independence at its core.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div
                className={`mb-5 inline-flex rounded-xl p-3.5 ${pillar.color} transition-transform group-hover:scale-110`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-text">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
