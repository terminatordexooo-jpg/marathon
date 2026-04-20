import FadeUp from './FadeUp.jsx'

const cards = [
  {
    title: 'Week 1 · Reset',
    body: 'Morning anchor ritual, energy audit, clearing mental clutter.',
    tags: ['Foundations', 'Rituals', 'Audit'],
    grad: 'from-[#FA93FA]/40 via-[#C967E8]/30 to-[#010101]',
  },
  {
    title: 'Week 2 · Build',
    body: 'Tiny habit stacking, nutrition without diets, movement you actually enjoy.',
    tags: ['Habits', 'Nutrition', 'Movement'],
    grad: 'from-[#C967E8]/40 via-[#983AD6]/30 to-[#010101]',
  },
  {
    title: 'Week 3 · Stick',
    body: 'Relapse-proofing toolkit, your personal protocol, life after the marathon.',
    tags: ['System', 'Protocol', 'Lifetime'],
    grad: 'from-[#983AD6]/40 via-[#6B21A8]/30 to-[#010101]',
  },
]

export default function Showcase() {
  return (
    <section id="program" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <FadeUp y={60} duration={0.9}>
          <p className="mb-3 text-center text-xs font-semibold tracking-[4px] uppercase text-[#C967E8]">Program</p>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-white md:text-5xl">
            What's inside
          </h2>
        </FadeUp>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={0.08 * i} y={40}>
              <div className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all hover:border-[#C967E8]/30 hover:bg-white/[0.04]">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.grad}`} />
                  <AnimatedPreview grad={c.grad} />
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[#010101]/80 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#010101] to-transparent" />
                </div>
                <div className="p-7">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{c.title}</h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 transition-colors group-hover:text-[#C967E8]">
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                  <p className="mb-4 text-[15px] leading-relaxed text-white/50">{c.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedPreview({ grad }) {
  // faux 'page' scrolling like the reference's iframe preview
  return (
    <div
      className="absolute left-1/2 top-0 origin-top animate-previewScroll"
      style={{ width: 1200, marginLeft: -600 }}
    >
      <div className="space-y-6 p-12" style={{ width: 1200, height: 2400 }}>
        <div className={`h-56 rounded-xl bg-gradient-to-br ${grad} opacity-80`} />
        <div className="h-8 w-3/5 rounded-full bg-white/10" />
        <div className="h-5 w-4/5 rounded-full bg-white/5" />
        <div className="h-5 w-3/4 rounded-full bg-white/5" />
        <div className="grid grid-cols-3 gap-6 pt-6">
          {[0,1,2,3,4,5].map((i) => (
            <div key={i} className="h-48 rounded-xl bg-white/[0.04] border border-white/[0.06]" />
          ))}
        </div>
        <div className="h-8 w-2/5 rounded-full bg-white/10" />
        <div className="h-4 w-3/5 rounded-full bg-white/5" />
        <div className="h-4 w-1/2 rounded-full bg-white/5" />
        <div className={`h-96 rounded-2xl bg-gradient-to-br ${grad} opacity-60`} />
      </div>
    </div>
  )
}
