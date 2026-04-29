import FadeUp from './FadeUp.jsx'

const cards = [
  {
    n: 'I',
    title: 'Reset',
    week: 'Тиждень 1',
    body: 'Аудит харчування, ранкові ритуали, базові тренування. Запускаємо метаболізм без стресу.',
    tags: ['Основи', 'Ритуали', 'Аудит'],
    bg: 'from-rose-warm via-terracotta-light to-cream-200',
    quote: '«Без жодної дієти. Просто звички, які залишаються.»',
  },
  {
    n: 'II',
    title: 'Build',
    week: 'Тиждень 2',
    body: 'Тренування на сідниці і прес, харчування без зривів, дрібні звички, що залишаються.',
    tags: ['Звички', 'Харчування', 'Сила'],
    bg: 'from-terracotta-light via-rose-dust to-cream-200',
    quote: '«Тіло змінюється, але голова — швидше.»',
  },
  {
    n: 'III',
    title: 'Stick',
    week: 'Тиждень 3',
    body: 'Твій особистий протокол: як втримати результат, що робити з зривами, життя після марафону.',
    tags: ['Система', 'Протокол', 'Назавжди'],
    bg: 'from-terracotta via-terracotta-light to-cream-200',
    quote: '«Це не марафон, це новий спосіб жити.»',
  },
]

export default function Showcase() {
  return (
    <section id="program" className="relative bg-cream px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeUp y={40} duration={0.9}>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[11px] font-bold tracking-[4px] uppercase text-terracotta">
                · ПРОГРАМА
              </p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,72px)] font-medium leading-[0.95] tracking-tight text-ink">
                Що{' '}
                <span className="font-display italic text-terracotta">всередині</span>
              </h2>
            </div>
            <p className="max-w-xs text-[14px] leading-relaxed text-ink/60">
              Три тижні. Три фази. Один результат — система, з якою ти не зриваєшся.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={0.08 * i} y={30}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-cream-50 transition-all hover:shadow-card">
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${c.bg}`}>
                  <span className="absolute left-6 top-5 font-display text-7xl italic text-cream/95 drop-shadow">
                    {c.n}
                  </span>
                  <span className="absolute right-5 top-5 rounded-full bg-cream/85 px-3 py-1 text-[10px] font-semibold tracking-[2px] uppercase text-ink/70 backdrop-blur">
                    {c.week}
                  </span>
                  <div className="absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-terracotta/30 blur-2xl" />
                  <p className="absolute bottom-5 left-6 right-12 font-display text-base italic leading-snug text-cream/95">
                    {c.quote}
                  </p>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-3xl text-ink">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{c.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink/15 bg-cream px-3 py-1 text-[11px] font-medium text-ink/65"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
