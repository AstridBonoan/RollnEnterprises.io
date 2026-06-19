export default function CTA() {
  return (
    <section
      id="contact"
      className="section-shell py-4 pb-8 sm:py-6 sm:pb-10"
      aria-labelledby="cta-heading"
    >
      <div className="section-block relative overflow-hidden px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/8 blur-[60px]" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <p className="eyebrow mb-4 text-bronze-light">Get Involved</p>
          <h2 id="cta-heading" className="display-md">
            <span className="gradient-heading">Join us on the journey</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            Help us build a future where technology is accessible to everyone.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="mailto:contact@rollnenterprises.io"
              className="btn-pill btn-pill-primary min-w-[11rem] px-7 py-3"
            >
              Contact Us
            </a>
            <a href="#products" className="link-cta link-cta-bronze">
              Explore products
            </a>
          </div>

          <address className="mt-12 not-italic">
            <p className="text-sm text-muted">
              Reach us at{' '}
              <a
                href="mailto:contact@rollnenterprises.io"
                className="font-medium text-cyan-400 underline-offset-4 transition-colors hover:text-cyan-300 hover:underline"
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
