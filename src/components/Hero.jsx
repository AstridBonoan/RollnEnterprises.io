export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative w-full overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-100/80 via-indigo-50/50 to-teal-100/60 blur-3xl" />
      </div>

      <div className="relative flex min-h-[calc(100svh-3rem)] flex-col justify-center pt-14 sm:min-h-[calc(100svh-3.5rem)] sm:pt-16">
        <div className="section-inner relative px-5 py-6 text-center sm:px-8 lg:px-12">
          <p className="eyebrow mb-3 text-primary animate-fade-in-up sm:mb-4">Accessibility-First Technology</p>

          <h1
            id="hero-heading"
            className="display-hero mx-auto max-w-4xl text-slate-text animate-fade-in-up animate-delay-100"
          >
            Technology built for accessibility, independence, and everyday life.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:mt-5 sm:text-lg lg:text-xl animate-fade-in-up animate-delay-200">
            RollnEnterprises creates innovative digital products that empower people
            with disabilities through adaptive fitness and accessibility-focused
            solutions.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-5 animate-fade-in-up animate-delay-300">
            <a href="#products" className="btn-pill btn-pill-primary min-w-[11rem] px-7 py-3">
              Explore Products
            </a>
            <a href="#mission" className="link-cta">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
