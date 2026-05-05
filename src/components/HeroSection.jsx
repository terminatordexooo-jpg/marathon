import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 50%, rgba(16,11,31,0.85) 0%, rgba(16,11,31,0.7) 40%, rgba(16,11,31,0.45) 65%, rgba(16,11,31,0.2) 85%, rgba(16,11,31,0) 100%)',
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:pt-28 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-rose mb-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-rose-light sm:px-4 sm:py-2 sm:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-glowPulse rounded-full bg-rose sm:h-2 sm:w-2" />
          <span className="sm:hidden">499 грн · перші 100 місць</span>
          <span className="hidden sm:inline">499 грн замість 1899 грн · перші 100 місць</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="text-[3.4rem] font-black leading-[1] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Body by{' '}
          <span className="font-display italic font-bold text-gradient-rose">Savi</span>
          <br />
          <span
            className="font-display italic mt-2 inline-block text-4xl font-medium tracking-tight text-rose-light sm:text-6xl md:text-7xl"
            style={{
              textShadow:
                '0 0 14px rgba(232,167,181,0.55), 0 0 32px rgba(232,167,181,0.35), 0 0 60px rgba(155,107,255,0.3)',
            }}
          >
            клуб змін
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-xl text-base font-semibold text-white sm:mt-10 sm:text-lg"
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
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cream px-9 py-4 text-sm font-semibold text-night-900 transition-transform hover:scale-[1.03] glow-rose"
          >
            <span className="relative z-10">Я готова до змін</span>
            <span className="relative z-10 grid h-7 w-7 place-items-center rounded-full bg-night-900 text-cream transition-transform group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-rose-light via-rose to-plum opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-30" />
          </a>
          <span className="font-display italic text-base text-rose-light/80 tracking-wide">
            старт — одразу після оплати
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-cream/40"
        >
          <span className="text-[11px] uppercase tracking-[0.3em]">scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-cream/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
