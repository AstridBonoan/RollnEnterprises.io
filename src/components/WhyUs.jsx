const stats = [
  {
    label: 'Accessibility Focused',
    value: '100%',
    description: 'Every product designed with WCAG standards in mind.',
  },
  {
    label: 'Community Driven',
    value: 'By Us',
    description: 'Founded by members of the disability community.',
  },
  {
    label: 'Built For Impact',
    value: '1st',
    description: 'RollnFitness — our first platform in active development.',
  },
]

const team = [
  {
    name: 'Co-Founder',
    role: 'CEO & Chief Marketing Officer (CMO)',
    bio: 'Leads company strategy, brand, and outreach — connecting RollnEnterprises with the communities we serve.',
    initials: 'CM',
  },
  {
    name: 'Co-Founder',
    role: 'CEO & Chief Technology Officer (CTO)',
    bio: 'Leads product development and engineering — building accessible technology with inclusion at the core.',
    initials: 'CT',
  },
]

function TeamAvatar({ initials }) {
  return (
    <div
      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary"
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function TeamCard({ member }) {
  return (
    <article className="flex flex-col rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
      <div className="flex items-center gap-4">
        <TeamAvatar initials={member.initials} />
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-text">{member.name}</h3>
          <p className="text-sm font-medium text-primary">{member.role}</p>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-slate-500">{member.bio}</p>
    </article>
  )
}

function WhyVisual() {
  return (
    <div className="relative h-full min-h-[20rem] lg:min-h-full" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950" />
      <div className="relative flex h-full min-h-[20rem] items-center justify-center p-8 sm:p-12 lg:min-h-[28rem]">
        <svg viewBox="0 0 400 400" className="w-full max-w-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="140" stroke="#334155" strokeWidth="1" fill="none" opacity="0.6" />
          <circle cx="200" cy="200" r="90" stroke="#475569" strokeWidth="1" strokeDasharray="6 6" fill="none" />
          <circle cx="200" cy="110" r="10" fill="#2563EB" />
          <circle cx="290" cy="200" r="10" fill="#14B8A6" />
          <circle cx="200" cy="290" r="10" fill="#4F46E5" />
          <circle cx="110" cy="200" r="10" fill="#60A5FA" opacity="0.7" />
          <rect x="168" y="168" width="64" height="64" rx="16" fill="#2563EB" />
          <path d="M184 200 L194 210 L216 186" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="200" y="350" textAnchor="middle" fill="#64748B" fontSize="13" fontFamily="Inter, sans-serif">
            Accessibility Ecosystem
          </text>
        </svg>
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="about" className="section-shell w-full border-t border-slate-200 bg-white" aria-labelledby="why-heading">
      <div className="grid lg:grid-cols-2">
        <WhyVisual />

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <p className="eyebrow mb-4 text-slate-400">Why We Exist</p>
          <h2 id="why-heading" className="display-md text-slate-text">
            Why We Exist
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            People with disabilities often face barriers that many technologies
            overlook. RollnEnterprises exists to create products specifically
            designed around accessibility, independence, and real-world usability.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base">
            Founded by members of the disability community, we bring lived
            experience to every decision — from product design to engineering to
            community engagement.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-50 px-4 py-5 ring-1 ring-slate-100"
              >
                <p className="text-2xl font-bold tracking-tight text-slate-text">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-text">{stat.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-inner border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20 lg:py-24" aria-labelledby="team-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 text-slate-400">Meet The Team</p>
          <h2 id="team-heading" className="display-md text-slate-text">
            Meet The Team
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            RollnEnterprises is led by two co-founders building accessible technology
            with lived experience and purpose.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:mt-16 sm:grid-cols-2">
          {team.map((member) => (
            <TeamCard key={member.role} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
