import FadeUp from './FadeUp.jsx'
import PaymentButton from './PaymentButton.jsx'

const includes = [
  '21 щоденний урок',
  'Закритий Telegram-клуб',
  'Тренування + харчування',
  'Особистий супровід Savi',
  'Доступ назавжди',
  'Гарантія повернення 7 днів',
]

export default function Pricing({ onSuccessPreview }) {
  return (
    <section id="pricing" className="relative bg-ink px-6 py-32 text-parchment">
      <div className="mx-auto max-w-7xl">
        <FadeUp y={30} duration={0.9}>
          <div className="mb-20 flex items-end justify-between border-b border-parchment/15 pb-6">
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-rust-light">
              · ПРИЄДНАТИСЬ
            </p>
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-parchment/40">
              СТОРІНКА 04
            </p>
          </div>
        </FadeUp>

        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <FadeUp y={30} duration={0.9} className="md:col-span-7">
            <h2 className="font-display text-[clamp(2.5rem,6vw,80px)] leading-[0.92] text-parchment">
              Готова{' '}
              <span className="italic text-rust-light">почати?</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-parchment/70">
              Один платіж. 21 день. Доступ до закритого Telegram-клубу одразу
              після оплати.
            </p>

            <div className="mt-12 flex items-baseline gap-6">
              <span className="font-display text-[clamp(7rem,18vw,260px)] italic leading-[0.85] text-parchment">
                499
              </span>
              <div>
                <span className="block font-display text-3xl text-parchment">грн</span>
                <span className="mt-2 block text-base text-parchment/50 line-through">1899</span>
                <span className="mt-1 block rounded-full bg-rust px-3 py-1 text-[10px] font-bold tracking-[2px] uppercase text-parchment">
                  −74%
                </span>
              </div>
            </div>
          </FadeUp>

          <FadeUp y={30} duration={0.9} delay={0.1} className="md:col-span-5">
            <ul className="space-y-3 border-t border-parchment/15">
              {includes.map((it) => (
                <li
                  key={it}
                  className="flex items-baseline gap-4 border-b border-parchment/15 py-3.5 text-[14px] text-parchment/80"
                >
                  <span className="font-display text-base italic text-rust-light">✓</span>
                  {it}
                </li>
              ))}
            </ul>

            <PaymentButton
              onPreview={onSuccessPreview}
              className="group mt-10 inline-flex w-full items-center justify-between gap-3 rounded-full bg-parchment px-7 py-5 text-left text-ink transition-all hover:bg-parchment-50"
            >
              <span>
                <span className="block text-[10px] font-bold tracking-[3px] uppercase text-rust">
                  ОТРИМАТИ ДОСТУП
                </span>
                <span className="block font-display text-2xl italic">499 грн · 21 день</span>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-parchment transition-transform group-hover:translate-x-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </PaymentButton>

            <p className="mt-5 text-center text-[11px] tracking-wide text-parchment/40">
              Безпечна оплата · доступ одразу · повернення 7 днів
            </p>
          </FadeUp>
        </div>

        <FadeUp y={20} duration={0.9} delay={0.3}>
          <div className="mt-24 border-t border-parchment/15 pt-8 text-center">
            <p className="font-script text-3xl text-rust-light">
              чекаю тебе в клубі ·
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
