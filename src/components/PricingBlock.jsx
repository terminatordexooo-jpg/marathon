import { motion } from 'framer-motion'
import PaymentButton from './PaymentButton.jsx'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const steps = [
  { n: '01', t: 'Тисни кнопку нижче', d: 'Активуй місце у потоці' },
  { n: '02', t: 'Переходиш у Telegram-бот', d: 'Бот проведе тебе крок за кроком' },
  { n: '03', t: 'Обираєш зручний спосіб оплати', d: 'Картка або платіжна система' },
  { n: '04', t: 'Відкривається доступ', d: 'Старт — одразу після оплати' },
]

const includes = [
  'тренування, з якими ти нарешті побачиш результат у зручному відео-форматі — просто вмикай і повторюй',
  'не шаблонне прописане меню, а детальний розбір харчування, після якого твої стосунки з їжею більше не будуть аб’юзивні',
  'мої особисті секрети, як бути в формі круглий рік без стресу',
  'лекції для розуміння всього механізму зсередини',
  'бонуси і плюшки, які інші блогери продають як окремий продукт 🤫',
]

export default function PricingBlock({ onSuccessPreview }) {
  return (
    <section id="pricing" className="relative z-10 px-5 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeIn}
            className="md:col-span-5"
          >
            <div className="rounded-[2rem] glass p-7 sm:p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rose-light/80">
                Усього 4 кроки
              </span>
              <h3 className="mt-3 font-display text-2xl text-cream">
                Як долучитись
              </h3>

              <ol className="mt-6 space-y-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-mono text-sm text-rose-light/80">{s.n}</span>
                    <div>
                      <p className="text-sm font-semibold text-cream">{s.t}</p>
                      <p className="mt-1 text-xs text-cream/60">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <a
              href="https://www.instagram.com/daria.savitskaya"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-night-800/60 px-5 py-4 text-sm text-cream/80 transition-colors hover:bg-night-700"
            >
              <span>
                Виникли питання?
                <br />
                <span className="text-cream">@daria.savitskaya</span>
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-night-900">
                →
              </span>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeIn}
            className="md:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] glass-rose p-8 sm:p-10 ring-glow">
              <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-gradient-to-br from-rose to-plum opacity-40 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cream/80 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-glowPulse rounded-full bg-rose-light" />
                  перші 100 місць
                </span>

                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-6xl leading-none text-cream sm:text-7xl md:text-8xl">
                    499
                    <span className="ml-1 text-3xl text-cream/70">грн</span>
                  </span>
                  <span className="font-display text-2xl text-cream/40 line-through">
                    1899 грн
                  </span>
                </div>
                <p className="mt-3 font-display italic text-2xl text-rose-light">
                  замість 1899 грн
                </p>

                <ul className="mt-7 grid gap-3.5">
                  {includes.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-cream/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-rose to-plum" />
                      <span className="text-sm leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <PaymentButton
                    onPreview={onSuccessPreview}
                    className="group inline-flex w-full items-center justify-between gap-3 rounded-2xl bg-cream px-7 py-5 text-base font-semibold text-night-900 transition-transform hover:scale-[1.01] glow-rose sm:w-auto"
                  >
                    <span>Я готова до змін</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-night-900 text-cream transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </PaymentButton>
                  <p className="mt-3 text-xs text-cream/55">
                    старт одразу після оплати
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
