import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-parchment grain">
      <TopNav />

      {/* magazine cover marks */}
      <div className="pointer-events-none absolute left-6 top-32 z-10 hidden text-[10px] tracking-[3px] text-ink/40 md:block">
        ВИПУСК Nº 01 · 2026
      </div>
      <div className="pointer-events-none absolute right-6 top-32 z-10 hidden text-[10px] tracking-[3px] text-ink/40 md:block">
        КИЇВ · ОНЛАЙН
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl flex-col justify-between px-6 pt-32 pb-12 md:pt-44">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-ink/20 bg-parchment/80 px-4 py-2 backdrop-blur-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rust text-[9px] font-black text-parchment">
              %
            </span>
            <span className="text-xs font-semibold tracking-wide text-ink/80">
              Перші 10 — 499 грн замість{' '}
              <span className="line-through opacity-50">1899 грн</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="font-display font-medium leading-[0.86] tracking-[-0.04em] text-ink"
          >
            <span className="block text-[clamp(4rem,16vw,240px)]">BODY</span>
            <span className="block text-[clamp(4rem,16vw,240px)]">
              by <span className="italic text-rust">Savi</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-8 flex items-baseline gap-4"
          >
            <span className="h-px w-16 self-center bg-ink/30" />
            <p className="font-display text-2xl italic text-ink/70 md:text-3xl">
              клуб змін · шлях до кращої версії себе
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-16 grid items-end gap-10 border-t border-ink/15 pt-8 md:grid-cols-12 md:gap-6"
        >
          <div className="md:col-span-4">
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-ink/45">Тривалість</p>
            <p className="mt-2 font-display text-3xl text-ink">21 день</p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-ink/45">Ціна</p>
            <p className="mt-2 flex items-baseline gap-3 font-display text-3xl text-ink">
              499 грн
              <span className="text-base text-ink/40 line-through">1899</span>
            </p>
          </div>

          <div className="md:col-span-4 md:text-right">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[13px] font-semibold tracking-wide text-parchment transition-all hover:bg-ink-900"
            >
              Я готова до змін
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rust transition-transform group-hover:translate-x-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  )
}

function TopNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 mx-auto flex max-w-7xl items-center justify-between px-6 pt-7">
      <a href="#top" className="flex items-center gap-2.5">
        <span className="font-display text-2xl italic text-ink">Savi</span>
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {[
          ['Про мене', '#about'],
          ['Програма', '#program'],
          ['Як це працює', '#process'],
          ['Ціна', '#pricing'],
        ].map(([t, h]) => (
          <a key={h} href={h} className="text-[13px] font-medium text-ink/65 transition-colors hover:text-ink">
            {t}
          </a>
        ))}
      </nav>
      <a
        href="#pricing"
        className="rounded-full border border-ink/25 px-4 py-2 text-[11px] font-semibold tracking-wide text-ink transition-all hover:bg-ink hover:text-parchment"
      >
        499 грн →
      </a>
    </header>
  )
}

function Marquee() {
  const items = [
    '21 день',
    'Закритий Telegram-клуб',
    'Щоденні уроки',
    'Без крайнощів',
    '−9 кг особистий результат',
    'Особистий супровід Savi',
    'Без дієт',
    'Гарантія 7 днів',
  ]
  const row = [...items, ...items, ...items]
  return (
    <div className="relative z-10 overflow-hidden border-y border-ink/15 bg-ink py-5">
      <div className="flex animate-marquee whitespace-nowrap gap-14">
        {row.map((t, i) => (
          <span key={i} className="font-display text-3xl italic text-parchment">
            {t}
            <span className="ml-14 text-rust">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
