export default function CTA() {
  return (
    <section
      id="contact"
      className="section-shell relative w-full overflow-hidden bg-slate-dark"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="section-inner relative px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-4 text-slate-400">Get Involved</p>
          <h2 id="cta-heading" className="display-md text-white">
            Join us on the journey
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400 sm:text-xl">
            Help us build a future where technology is accessible to everyone.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="mailto:contact@rollnenterprises.io"
              className="btn-pill btn-pill-light min-w-[11rem] px-7 py-3"
            >
              Contact Us
            </a>
            <a href="#products" className="link-cta link-cta-light">
              Explore products
            </a>
          </div>

          <address className="mt-12 not-italic">
            <p className="text-sm text-slate-500">
              Reach us at{' '}
              <a
                href="mailto:contact@rollnenterprises.io"
                className="font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                contact@rollnenterprises.io
              </a>
            </p>
          </address>
        </div>
      </div>
    </section>
  )
}
