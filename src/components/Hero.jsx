import Logo from './Logo'

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative flex min-h-svh w-full flex-col justify-center overflow-hidden pt-14 sm:pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="section-inner relative px-5 py-8 text-center sm:px-8 sm:py-12 lg:px-12">
        <Logo className="mx-auto w-full max-w-2xl animate-fade-in-up sm:max-w-3xl lg:max-w-4xl" />

        <h1 id="hero-heading" className="sr-only">
          Rolln Enterprises — Technology for mobility and life
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-teal-100/70 sm:mt-8 sm:text-lg lg:text-xl animate-fade-in-up animate-delay-100">
          Innovative digital products that empower people with disabilities through
          adaptive fitness and accessibility-focused solutions.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-5 animate-fade-in-up animate-delay-200">
          <a href="#products" className="btn-pill btn-pill-primary min-w-[11rem] px-7 py-3">
            Explore Products
          </a>
          <a href="#mission" className="link-cta">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
