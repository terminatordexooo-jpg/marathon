import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function WhoAmIBlock() {
  return (
    <section id="about" className="relative z-10 px-5 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          variants={fadeIn}
          className="mb-14 max-w-3xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-rose-deep/70">
            знайомство
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            Хто я? <em className="text-gradient-rose">І чому ти маєш</em>
            <br />
            довіритись саме мені?
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeIn}
            className="md:col-span-5"
          >
            <div className="md:sticky md:top-24 grid grid-cols-2 gap-4">
              {[
                { k: '−9', s: 'кг власного шляху' },
                { k: '500+', s: 'дівчат у клубі' },
              ].map((it) => (
                <div
                  key={it.k}
                  className="glass-rose rounded-3xl px-5 py-10 text-center ring-glow"
                >
                  <div className="font-display text-5xl text-ink sm:text-6xl">{it.k}</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-ink/65">
                    {it.s}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeIn}
            className="space-y-6 text-ink/85 md:col-span-7"
          >
            <div className="glass rounded-[1.75rem] p-7 sm:p-8">
              <p className="font-display text-2xl italic text-rose-deep">
                «Я — Savi, засновниця системи Body by Savi і людина, яка
                пройшла шлях змін не тільки фізично, а й внутрішньо.»
              </p>
            </div>

            <p className="leading-relaxed">
              Від небажання дивитись на себе в дзеркало я прийшла до фігури
              мрії та любові до себе. Мій досвід{' '}
              <span className="text-rose-deep">−9 кг</span> — не як короткий
              результат, а як стабільний стан.
            </p>

            <p className="leading-relaxed text-ink/75">
              Я знаю, як це: жити з постійними думками про їжу, дивитись на
              себе в дзеркало і бути «майже задоволеною», починати «з
              понеділка» знову і знову.
            </p>

            <p className="leading-relaxed">
              Але в певний момент я перестала шукати швидкі рішення — і
              створила систему, яка дійсно працює без крайнощів.
            </p>

            <div className="glass-rose rounded-[1.75rem] p-7 sm:p-8">
              <h3 className="font-display text-2xl text-ink">
                Чому тобі варто довіритись саме мені?
              </h3>
              <p className="mt-3 text-ink/80">
                Тут все просто: я — результат того, що даю.
              </p>
              <p className="mt-3 text-ink/75">
                Якщо тобі відгукується моя естетика — підтягнуте тіло, рельєф
                без «перекачаності», соковиті сідниці без масивних ніг,
                баланс жіночності та сили — значить, мій підхід може
                відгукнутись і тобі.
              </p>
              <p className="mt-3 text-ink/75">
                Я не продаю «мінус 5 кг за 7 днів». Я даю інструменти, з
                якими ти зможеш стати кращою версією себе.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl text-ink">Мій підхід — це:</h4>
              <ul className="mt-4 grid gap-2.5">
                {[
                  'баланс без заборон',
                  'розуміння процесів у тілі, а не сліпе слідування плану',
                  'тренування, які не виснажують, а дають енергію і результат',
                  'харчування без зривів',
                  'зміни через любов до себе',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-rose to-plum" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-ink/70">
              Я працюю не тільки з тілом, а з причинами: переїдання, набряки,
              нестабільна вага, відсутність енергії та мотивації.
            </p>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] glow-rose"
            >
              Я готова до змін →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
