import FadeUp from './FadeUp.jsx'

const bullets = [
  'баланс без заборон',
  'розуміння процесів у тілі, а не сліпе слідування плану',
  'тренування, які не виснажують, а дають енергію і результат',
  'харчування без зривів',
  'зміни через любов до себе',
]

export default function WhoAmI() {
  return (
    <section id="about" className="relative overflow-hidden bg-parchment px-6 py-32 grain">
      <div className="mx-auto max-w-7xl">
        {/* magazine header */}
        <FadeUp y={30} duration={0.9}>
          <div className="mb-16 flex items-end justify-between border-b border-ink/15 pb-6">
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-rust">
              · ІНТЕРВ'Ю · ВИПУСК 01
            </p>
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-ink/40">
              СТОРІНКА 02
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* LEFT — portrait block */}
          <FadeUp y={40} duration={1} className="md:col-span-5">
            <div className="sticky top-24">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gradient-to-br from-rust-light via-rust to-rust-deep">
                <div className="absolute inset-0 grain" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-6xl italic leading-none text-parchment">
                    −9 кг
                  </p>
                  <p className="mt-2 text-[10px] tracking-[3px] uppercase text-parchment/80">
                    ОСОБИСТИЙ РЕЗУЛЬТАТ
                  </p>
                </div>
                <div className="absolute right-5 top-5 rounded-full bg-parchment/90 px-3 py-1 text-[10px] font-bold tracking-[2px] uppercase text-ink">
                  Body by Savi
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between text-[11px] tracking-[2px] uppercase text-ink/50">
                <span>портрет авторки</span>
                <span>2026</span>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT — long-form */}
          <div className="md:col-span-7">
            <FadeUp y={30} duration={0.9}>
              <h2 className="font-display text-[clamp(2.5rem,6vw,80px)] font-medium leading-[0.95] tracking-tight text-ink">
                Хто я?{' '}
                <span className="block italic text-rust">
                  І чому ти маєш довіритись саме мені?
                </span>
              </h2>
            </FadeUp>

            <FadeUp y={20} duration={0.9} delay={0.1}>
              <p className="mt-10 max-w-xl font-display text-2xl leading-snug text-ink/85 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:leading-[0.85] first-letter:text-rust">
                Я — Savi, засновниця системи Body by Savi і людина, яка пройшла шлях
                змін не тільки фізично, а й внутрішньо.
              </p>
            </FadeUp>

            <FadeUp y={20} duration={0.9} delay={0.15}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/70">
                Від небажання дивитись на себе в дзеркало я прийшла до фігури мрії
                та любові до себе. Мій досвід <span className="font-display italic text-rust">−9 кг</span>{' '}
                — не як короткий результат, а як стабільний стан.
              </p>
            </FadeUp>

            <FadeUp y={20} duration={0.9} delay={0.2}>
              <blockquote className="my-12 border-l-2 border-rust pl-6">
                <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
                  «Я знаю, як це: жити з постійними думками про їжу, дивитись на
                  себе в дзеркало і бути майже задоволеною, починати з понеділка
                  знову і знову.»
                </p>
              </blockquote>
            </FadeUp>

            <FadeUp y={20} duration={0.9} delay={0.25}>
              <p className="max-w-xl text-[15px] leading-relaxed text-ink/70">
                В певний момент я перестала шукати швидкі рішення — і створила
                систему, яка дійсно працює без крайнощів.
              </p>
            </FadeUp>

            <FadeUp y={20} duration={0.9} delay={0.3}>
              <div className="mt-12">
                <p className="text-[10px] font-bold tracking-[3px] uppercase text-rust">
                  · МІЙ ПІДХІД
                </p>
                <ul className="mt-6 space-y-3">
                  {bullets.map((b, i) => (
                    <li key={b} className="flex items-baseline gap-5 border-b border-ink/10 pb-3">
                      <span className="font-display text-2xl italic text-ink/30">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-xl text-ink">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
