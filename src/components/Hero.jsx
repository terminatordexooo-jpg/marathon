import { motion } from 'framer-motion'
import ParticlesCanvas from './ParticlesCanvas.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bg">
      <ParticlesCanvas />

      <div className="relative z-20 flex flex-col items-center px-6 pt-32 pb-0 text-center md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#C967E8]/30 bg-[#C967E8]/[0.08] px-5 py-2.5 backdrop-blur-sm"
        >
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#FA93FA] to-[#983AD6]">
            <span className="text-[10px] font-black text-white">%</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FA93FA] to-[#983AD6] opacity-60 blur-md" />
          </span>
          <span className="text-sm font-semibold text-[#FA93FA]">
            First 10 women — $20 off
          </span>
        </motion.div>

        <h1 className="max-w-4xl text-5xl font-bold leading-[1.12] tracking-tight md:text-7xl lg:text-[80px]">
          <HeroSpan className="from-white via-white/90 to-white/80" delay={0.10}>Transform</HeroSpan>{' '}
          <HeroSpan className="from-white/80 via-white/70 to-white/60" delay={0.18}>in</HeroSpan>{' '}
          <HeroSpanAccent className="from-[#FA93FA] via-[#C967E8] to-[#983AD6]" delay={0.26}>21 days</HeroSpanAccent>
          <br />
          <HeroSpan className="from-white/70 via-white/60 to-white/50" delay={0.34}>with</HeroSpan>{' '}
          <HeroSpanAccent className="from-[#C967E8] via-[#983AD6] to-[#6B21A8]" delay={0.42}>Dasha</HeroSpanAccent>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-white/70 md:text-xl"
        >
          A guided online marathon with daily lessons, a private Telegram
          community, and direct access to the author. Not for you — full refund.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <a href="#pricing" className="group relative inline-flex items-center rounded-full border border-white/15 p-[3px] backdrop-blur-sm transition-all hover:border-white/25">
            <span className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-all group-hover:bg-white/95">
              Join the marathon
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </span>
          </a>
          <span className="text-xs text-white/30">Write “I'm in” — get the early-bird discount</span>
        </motion.div>
      </div>

      {/* fading gradient video placeholder (animated hero backdrop) */}
      <div className="relative z-10 -mt-[150px] w-full">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#010101] via-transparent to-[#010101]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[#010101] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#010101] to-transparent" />
        <div className="relative mx-auto h-[420px] w-full max-w-5xl overflow-hidden mix-blend-screen">
          <AuroraBackdrop />
        </div>
      </div>

      <MarqueeBar />
    </section>
  )
}

function HeroSpan({ className, children, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 1, delay, ease }}
      className={`inline bg-gradient-to-b ${className} bg-clip-text text-transparent`}
    >
      {children}
    </motion.span>
  )
}

function HeroSpanAccent({ className, children, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: 'blur(10px)', y: 30, scale: 0.9 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease }}
      className={`inline-block bg-gradient-to-r ${className} bg-clip-text text-transparent`}
    >
      {children}
    </motion.span>
  )
}

function AuroraBackdrop() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#FA93FA]/40 via-[#C967E8]/30 to-[#983AD6]/20 blur-[120px] animate-pulseGlow" />
      <div className="absolute left-[20%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#FA93FA]/30 blur-[80px]" />
      <div className="absolute right-[15%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#983AD6]/40 blur-[100px]" />
    </div>
  )
}

function MarqueeBar() {
  const items = [
    '21 daily lessons',
    'Private Telegram',
    'Workbook & trackers',
    '2 live Q&As',
    'Lifetime access',
    '1,400+ alumni',
    '4.9 rating',
    '7-day refund',
  ]
  const row = [...items, ...items]
  return (
    <div className="relative z-20 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:gap-0 md:py-6">
        <div className="flex shrink-0 items-center gap-3 md:pr-10">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#FA93FA] to-[#983AD6]" />
          <span className="whitespace-nowrap text-sm font-medium text-white/50">What's included</span>
        </div>
        <div className="hidden h-8 w-px bg-white/10 md:block md:mx-10" />
        <div className="min-w-0 flex-1 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            style={{ gap: 56 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {row.map((t, i) => (
              <div key={i} className="flex shrink-0 items-center gap-2 opacity-50 transition-opacity hover:opacity-80">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C967E8" strokeWidth="2.4"><path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-xs font-medium text-white/60">{t}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
