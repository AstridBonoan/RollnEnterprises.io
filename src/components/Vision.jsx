const visionCards = [
  {
    title: 'Mobility',
    description: 'Navigation tools that understand real-world accessibility challenges.',
    color: 'from-teal-400/10 to-teal-400/5',
  },
  {
    title: 'Fitness & Wellness',
    description: 'Adaptive health platforms that meet people where they are.',
    color: 'from-amber-400/10 to-amber-400/5',
  },
  {
    title: 'Independent Living',
    description: 'Home intelligence that empowers safer, more accessible spaces.',
    color: 'from-teal-300/10 to-teal-300/5',
  },
  {
    title: 'Global Impact',
    description: 'An ecosystem reaching millions of people worldwide.',
    color: 'from-amber-300/10 to-amber-300/5',
  },
]

export default function Vision() {
  return (
    <section id="vision" className="section-shell section-divider w-full" aria-labelledby="vision-heading">
      <div className="section-inner py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 text-teal-300/60">Our Vision</p>
          <h2 id="vision-heading" className="display-md text-teal-50">
            The Future of Accessibility Technology
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-teal-100/65 sm:text-xl">
            Our vision is to create an ecosystem of products that improve mobility,
            fitness, navigation, and independent living for millions of people
            around the world.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {visionCards.map((card) => (
            <article
              key={card.title}
              className={`group rounded-2xl bg-gradient-to-br ${card.color} bg-[#1a282c]/60 p-6 ring-1 ring-teal-400/10 transition-transform duration-300 hover:-translate-y-0.5`}
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-secondary transition-all group-hover:w-12" aria-hidden="true" />
              <h3 className="text-lg font-semibold tracking-tight text-teal-50">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-teal-100/60">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
