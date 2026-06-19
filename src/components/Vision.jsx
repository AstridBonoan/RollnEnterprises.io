const visionCards = [
  {
    title: 'Mobility',
    description: 'Navigation tools that understand real-world accessibility challenges.',
    accent: 'from-cyan-500/20 to-blue-600/10',
    bar: 'bg-cyan-400',
  },
  {
    title: 'Fitness & Wellness',
    description: 'Adaptive health platforms that meet people where they are.',
    accent: 'from-blue-500/20 to-indigo-600/10',
    bar: 'bg-blue-400',
  },
  {
    title: 'Independent Living',
    description: 'Home intelligence that empowers safer, more accessible spaces.',
    accent: 'from-emerald-500/20 to-teal-600/10',
    bar: 'bg-emerald-400',
  },
  {
    title: 'Global Impact',
    description: 'An ecosystem reaching millions of people worldwide.',
    accent: 'from-amber-500/15 to-bronze/10',
    bar: 'bg-bronze-light',
  },
]

export default function Vision() {
  return (
    <section id="vision" className="section-shell py-4 sm:py-6" aria-labelledby="vision-heading">
      <div className="section-block px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 text-emerald-400">Our Vision</p>
          <h2 id="vision-heading" className="display-md text-white">
            The Future of Accessibility Technology
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            Our vision is to create an ecosystem of products that improve mobility,
            fitness, navigation, and independent living for millions of people
            around the world.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {visionCards.map((card) => (
            <article
              key={card.title}
              className={`group rounded-2xl bg-gradient-to-br ${card.accent} border border-white/5 p-6 transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className={`mb-4 h-1 w-8 rounded-full ${card.bar} transition-all group-hover:w-12`} aria-hidden="true" />
              <h3 className="text-lg font-semibold tracking-tight text-white">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
