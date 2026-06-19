const products = [
  {
    name: 'RollnFitness',
    tagline: 'Adaptive fitness and wellness.',
    description:
      'Adaptive fitness and wellness platform designed for individuals with disabilities.',
    features: [
      'Adaptive workouts',
      'Nutrition guidance',
      'Sports training programs',
      'Accessibility-first design',
    ],
    cardClass: 'card-glow-blue',
    accent: 'text-cyan-400',
    glowHover: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]',
    span: 'lg:col-span-2',
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: 'RollPath',
    tagline: 'Navigate with confidence.',
    description: 'Accessibility-focused navigation platform.',
    features: [
      'Wheelchair-friendly routes',
      'Accessibility intelligence',
      'Real-time accessibility information',
      'Community reporting',
    ],
    cardClass: 'card-glow-blue',
    accent: 'text-blue-400',
    glowHover: 'hover:shadow-[0_0_40px_rgba(37,99,235,0.2)]',
    span: '',
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    name: 'RollLiving',
    tagline: 'Smarter accessible homes.',
    description: 'Home accessibility intelligence platform.',
    features: [
      'Accessibility assessments',
      'Home mapping',
      'Accessibility scoring',
      'Improvement recommendations',
    ],
    cardClass: 'card-glow-green',
    accent: 'text-emerald-400',
    glowHover: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]',
    span: '',
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section id="products" className="section-shell py-4 sm:py-6" aria-labelledby="products-heading">
      <div className="mb-8 text-center sm:mb-10">
        <p className="eyebrow mb-3 text-cyan-400">Our Products</p>
        <h2 id="products-heading" className="display-md text-white">
          Our Products
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Purpose-built platforms for independence, mobility, and daily living.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
        {products.map((product) => (
          <article
            key={product.name}
            className={`product-tile section-block flex flex-col ${product.cardClass} ${product.glowHover} ${product.span}`}
          >
            <div className="flex flex-1 flex-col items-center px-6 pt-10 pb-6 text-center sm:px-10 sm:pt-12">
              <div className={`mb-6 inline-flex rounded-2xl bg-void/60 p-4 ${product.accent}`}>
                {product.icon}
              </div>
              <p className="eyebrow mb-2 text-muted">{product.tagline}</p>
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {product.name}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
                {product.description}
              </p>

              <h4 className="sr-only">{product.name} features</h4>
              <ul className="mt-8 grid w-full max-w-sm gap-2 text-left sm:max-w-md" role="list">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-[15px] text-slate-300">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current ${product.accent}`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`link-cta mt-8 ${product.accent}`}>
                Learn more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
