export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-slate-dark py-20 sm:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <h2
          id="cta-heading"
          className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Join Us On The Journey
        </h2>
        <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Help us build a future where technology is accessible to everyone.
        </p>

        <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:contact@rollnenterprises.io"
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl sm:w-auto"
          >
            Contact Us
          </a>
          <a
            href="#products"
            className="inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-600 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/5 sm:w-auto"
          >
            Explore Products
          </a>
        </div>

        <address className="relative mt-12 not-italic">
          <p className="text-sm text-slate-400">
            Reach us at{' '}
            <a
              href="mailto:contact@rollnenterprises.io"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              contact@rollnenterprises.io
            </a>
          </p>
        </address>
      </div>
    </section>
  )
}
