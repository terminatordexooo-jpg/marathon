import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative isolate z-10 min-h-[100svh] overflow-hidden">
      {/* soft white halo behind copy so headline reads on bubbles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 80%)',
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:pt-28 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-rose/40 bg-white/70 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-rose-deep backdrop-blur sm:px-4 sm:py-2 sm:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-glowPulse rounded-full bg-rose-deep sm:h-2 sm:w-2" />
          <span className="sm:hidden">499 грн · перші 100 місць</span>
          <span className="hidden sm:inline">499 грн замість 1899 грн · перші 100 місць</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="text-[3.4rem] font-black leading-[1] tracking-tight text-[#1A1815] sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Body by{' '}
          <span className="font-display italic font-bold text-rose-deep">Savi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-xl text-base font-semibold text-[#1A1815] sm:mt-10 sm:text-lg"
        >
          Зроби перший крок до кращої версії себе.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#1A1815] px-9 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03] shadow-[0_20px_60px_-20px_rgba(216,139,150,0.7)]"
          >
            <span className="relative z-10">Я готова до змін</span>
            <span className="relative z-10 grid h-7 w-7 place-items-center rounded-full bg-white text-[#1A1815] transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <span className="text-[11px] uppercase tracking-[0.35em] text-rose-deep/70">
            старт — одразу після оплати
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-[#1A1815]/40"
        >
          <span className="text-[11px] uppercase tracking-[0.3em]">scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-[#1A1815]/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
