const product = {
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
  bg: 'bg-gradient-to-b from-[#eff6ff] via-[#f8fafc] to-white',
  accent: 'text-primary',
  iconBg: 'bg-primary/10 text-primary',
  icon: (
    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
}

export default function Products() {
  return (
    <section id="products" className="section-shell py-4 sm:py-6" aria-labelledby="products-heading">
      <div className="mb-8 text-center sm:mb-10">
        <p className="eyebrow mb-3 text-slate-400">Our Products</p>
        <h2 id="products-heading" className="display-md text-slate-text">
          Our Products
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
          Our first platform focused on adaptive fitness, wellness, and independence.
        </p>
      </div>

      <article
        className={`product-tile section-block mx-auto flex max-w-2xl flex-col ${product.bg} ring-1 ring-black/5`}
      >
        <div className="flex flex-1 flex-col items-center px-6 pt-10 pb-6 text-center sm:px-10 sm:pt-12">
          <div className={`mb-6 inline-flex rounded-2xl p-4 ${product.iconBg}`}>
            {product.icon}
          </div>
          <p className="eyebrow mb-2 text-slate-400">{product.tagline}</p>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-text sm:text-3xl">
            {product.name}
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-500 sm:text-base">
            {product.description}
          </p>

          <h4 className="sr-only">{product.name} features</h4>
          <ul className="mt-8 grid w-full max-w-sm gap-2 text-left sm:max-w-md" role="list">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-[15px] text-slate-600">
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
    </section>
  )
}
