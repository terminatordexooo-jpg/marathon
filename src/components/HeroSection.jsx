import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-rose mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] text-rose-light"
        >
          <span className="h-2 w-2 animate-glowPulse rounded-full bg-rose" />
          499 грн замість 1899 грн · перші 10 місць
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="font-display text-5xl leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Body by <span className="italic text-gradient-rose">Savi</span>
          <br />
          <span className="font-script text-4xl text-rose-light sm:text-5xl md:text-6xl">клуб змін</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 max-w-xl text-base text-cream/70 sm:text-lg"
        >
          21-денний марафон з щоденними тренуваннями, харчуванням і
          закритим Telegram-клубом — шлях до кращої версії себе.
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
          <span className="font-script text-base text-rose-light/80">
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-b from-transparent to-night-900" />
    </section>
  )
}
