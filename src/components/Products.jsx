const products = [
  {
    name: 'RollnFitness',
    description:
      'Adaptive fitness and wellness platform designed for individuals with disabilities.',
    features: [
      'Adaptive workouts',
      'Nutrition guidance',
      'Sports training programs',
      'Accessibility-first design',
    ],
    gradient: 'from-blue-500 to-indigo-600',
    accent: 'text-primary',
    borderHover: 'hover:border-primary/40',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    name: 'RollPath',
    description: 'Accessibility-focused navigation platform.',
    features: [
      'Wheelchair-friendly routes',
      'Accessibility intelligence',
      'Real-time accessibility information',
      'Community reporting',
    ],
    gradient: 'from-indigo-500 to-purple-600',
    accent: 'text-secondary',
    borderHover: 'hover:border-secondary/40',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    name: 'RollLiving',
    description: 'Home accessibility intelligence platform.',
    features: [
      'Accessibility assessments',
      'Home mapping',
      'Accessibility scoring',
      'Improvement recommendations',
    ],
    gradient: 'from-teal-500 to-emerald-600',
    accent: 'text-accent',
    borderHover: 'hover:border-accent/40',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="products-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-text sm:text-4xl lg:text-5xl"
          >
            Our Products
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Purpose-built platforms designed to improve independence, mobility, and
            daily living.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${product.borderHover}`}
            >
              <div className={`bg-gradient-to-r ${product.gradient} px-8 py-10 text-white`}>
                <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-2 text-base text-white/90">{product.description}</p>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h4 className="sr-only">{product.name} features</h4>
                <ul className="flex-1 space-y-3" role="list">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-600">
                      <svg
                        className={`mt-0.5 h-5 w-5 shrink-0 ${product.accent}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-xl border-2 border-slate-200 px-6 py-3 text-base font-semibold text-slate-text transition-all hover:border-current ${product.accent}`}
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
