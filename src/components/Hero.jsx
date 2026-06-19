import logoImg from '../assets/logo.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative pt-20 pb-6 sm:pt-24 sm:pb-8"
      aria-labelledby="hero-heading"
    >
      <div className="section-block relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] animate-pulse-glow" />
          <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-emerald-500/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[80px]" />
        </div>

        <div className="relative px-5 pt-12 pb-8 text-center sm:px-10 sm:pt-16 sm:pb-12 lg:px-14 lg:pt-20">
          <p className="eyebrow mb-5 text-cyan-400 animate-fade-in-up">Accessibility-First Technology</p>

          <h1
            id="hero-heading"
            className="display-xl mx-auto max-w-4xl animate-fade-in-up animate-delay-100"
          >
            <span className="gradient-heading">
              Technology built for accessibility, independence, and everyday life.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl animate-fade-in-up animate-delay-200">
            RollnEnterprises creates innovative digital products that empower people
            with disabilities through fitness, navigation, and accessibility-focused
            solutions.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 animate-fade-in-up animate-delay-300">
            <a href="#products" className="btn-pill btn-pill-primary min-w-[11rem] px-7 py-3">
              Explore Products
            </a>
            <a href="#mission" className="link-cta">
              Learn more
            </a>
          </div>

          <div className="relative mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 animate-fade-in-up animate-delay-400">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80" />
            </div>
            <img
              src={logoImg}
              alt="RollnEnterprises logo — athlete in wheelchair with technology and nature energy trails"
              className="logo-glow relative mx-auto w-full max-w-md animate-subtle-float sm:max-w-lg"
              width={512}
              height={512}
            />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:mt-12">
            {[
              { label: 'Fitness', color: 'text-cyan-400' },
              { label: 'Navigation', color: 'text-blue-400' },
              { label: 'Living', color: 'text-emerald-400' },
            ].map((item) => (
              <div key={item.label} className="bg-surface/80 px-4 py-4 text-center backdrop-blur-sm">
                <p className={`text-xs font-semibold uppercase tracking-widest ${item.color}`}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
