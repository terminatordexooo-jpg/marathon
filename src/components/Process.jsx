import FadeUp from './FadeUp.jsx'

const steps = [
  {
    n: '01',
    title: 'Sign up',
    body: 'Send your ask in Telegram — we align on your goal in 5 minutes.',
    grad: ['#FA93FA', '#983AD6'],
    id: 'stepGrad1',
    icon: (
      <>
        <path d="M21 3L3 10.5l6.5 2.5L13 21l3-7.5L21 3z" stroke="url(#stepGrad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 13L13 21" stroke="url(#stepGrad1)" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    n: '02',
    title: 'Follow 21 days',
    body: 'Daily micro-lessons, community support in Telegram. 5–8 minutes a day.',
    grad: ['#C967E8', '#6B21A8'],
    id: 'stepGrad2',
    icon: (
      <>
        <path d="M8 18l-6-6 6-6" stroke="url(#stepGrad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6l6 6-6 6" stroke="url(#stepGrad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4l-4 16" stroke="url(#stepGrad2)" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    n: '03',
    title: 'Transform',
    body: 'A system that sticks. Not satisfied? Full refund, no questions.',
    grad: ['#983AD6', '#FA93FA'],
    id: 'stepGrad3',
    icon: (
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="url(#stepGrad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="px-6 pt-24 pb-20">
      <div className="mx-auto max-w-5xl">
        <FadeUp y={60} duration={0.9}>
          <p className="mb-3 text-center text-xs font-semibold tracking-[4px] uppercase text-[#C967E8]">Process</p>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-white md:text-5xl">
            How it works
          </h2>
        </FadeUp>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={0.08 * i} y={40}>
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm transition-all hover:border-[#C967E8]/30 hover:bg-white/[0.04]"
                style={{ transformStyle: 'preserve-3d', transform: 'perspective(800px)' }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#C967E8]/[0.12] to-transparent blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] text-sm font-bold text-white shadow-lg shadow-[#983AD6]/25">
                      {s.n}
                    </span>
                    <div className="h-px w-8 bg-gradient-to-r from-[#C967E8]/40 to-transparent" />
                  </div>
                  <div className="relative flex h-12 w-12 items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-xl blur-xl"
                      style={{ background: `linear-gradient(135deg, ${s.grad[0]}33, ${s.grad[1]}33)` }}
                    />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative">
                      {s.icon}
                      <defs>
                        <linearGradient id={s.id} x1="3" y1="3" x2="21" y2="21">
                          <stop stopColor={s.grad[0]} />
                          <stop offset="1" stopColor={s.grad[1]} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/50">{s.body}</p>
                <div className="mt-6 h-px w-full bg-white/[0.04]">
                  <div className="h-full bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6] w-0 transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-8 hidden justify-center md:flex">
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#FA93FA] to-[#983AD6]" />
                {i < 2 && <div className="h-px w-24 bg-gradient-to-r from-[#C967E8]/30 to-[#C967E8]/10" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
