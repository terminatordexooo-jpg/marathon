import FadeUp from './FadeUp.jsx'

const weeks = [
  {
    n: 'I',
    label: 'тиждень 01',
    title: 'Reset',
    body: 'Аудит харчування, ранкові ритуали, базові тренування. Запускаємо метаболізм без стресу.',
    tags: ['Основи', 'Ритуали', 'Аудит'],
  },
  {
    n: 'II',
    label: 'тиждень 02',
    title: 'Build',
    body: 'Тренування на сідниці і прес, харчування без зривів, дрібні звички, що залишаються.',
    tags: ['Звички', 'Сила', 'Тіло'],
  },
  {
    n: 'III',
    label: 'тиждень 03',
    title: 'Stick',
    body: 'Твій особистий протокол: як втримати результат, що робити з зривами, життя після марафону.',
    tags: ['Система', 'Протокол', 'Назавжди'],
  },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-parchment-50 px-6 py-32 grain">
      <div className="mx-auto max-w-7xl">
        <FadeUp y={30} duration={0.9}>
          <div className="mb-20 flex items-end justify-between border-b border-ink/15 pb-6">
            <div>
              <p className="text-[10px] font-bold tracking-[3px] uppercase text-rust">
                · ПРОГРАМА
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,80px)] leading-[0.95] text-ink">
                Три тижні.{' '}
                <span className="italic text-rust">Один результат.</span>
              </h2>
            </div>
            <p className="hidden max-w-xs text-[13px] leading-relaxed text-ink/55 md:block">
              Не марафон, а нова версія тебе. Кожен тиждень — наступний шар.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-2">
          {weeks.map((w, i) => (
            <FadeUp key={w.n} y={20} duration={0.8} delay={0.06 * i}>
              <article className="group relative grid grid-cols-12 items-baseline gap-6 border-b border-ink/15 py-10 transition-colors hover:bg-parchment/60">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-display text-7xl italic leading-none text-rust md:text-8xl">
                    {w.n}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-3">
                  <p className="text-[10px] font-bold tracking-[3px] uppercase text-ink/45">{w.label}</p>
                  <h3 className="mt-2 font-display text-4xl text-ink md:text-5xl">{w.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-[15px] leading-relaxed text-ink/70">{w.body}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink/20 px-3 py-1 text-[11px] font-medium text-ink/60"
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
