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
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-rose-light/70">
            знайомство
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
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
            <div className="relative overflow-hidden rounded-[2rem] glass ring-glow">
              <video
                src={`${import.meta.env.BASE_URL}savi/savi-video.mp4`}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-900/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display italic text-2xl text-rose-light">Savi</p>
                <p className="text-xs text-cream/60">засновниця Body by Savi</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { k: '−9', s: 'кг власного шляху' },
                { k: '500+', s: 'дівчат у клубі' },
              ].map((it) => (
                <div key={it.k} className="glass rounded-2xl px-3 py-4 text-center">
                  <div className="font-display text-3xl text-cream">{it.k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-cream/55">
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
            className="space-y-6 text-cream/85 md:col-span-7"
          >
            <div className="glass rounded-[1.75rem] p-7 sm:p-8">
              <p className="font-display text-2xl italic text-rose-light">
                «Я — Savi, засновниця системи Body by Savi і людина, яка
                пройшла шлях змін не тільки фізично, а й внутрішньо.»
              </p>
            </div>

            <p className="leading-relaxed">
              Від небажання дивитись на себе в дзеркало я прийшла до фігури
              мрії та любові до себе. Мій досвід{' '}
              <span className="text-rose-light">−9 кг</span> — не як короткий
              результат, а як стабільний стан.
            </p>

            <p className="leading-relaxed text-cream/75">
              Я знаю, як це: жити з постійними думками про їжу, дивитись на
              себе в дзеркало і бути «майже задоволеною», починати «з
              понеділка» знову і знову.
            </p>

            <p className="leading-relaxed">
              Але в певний момент я перестала шукати швидкі рішення — і
              створила систему, яка дійсно працює без крайнощів.
            </p>

            <div className="glass-rose rounded-[1.75rem] p-7 sm:p-8">
              <h3 className="font-display text-2xl text-cream">
                Чому тобі варто довіритись саме мені?
              </h3>
              <p className="mt-3 text-cream/80">
                Тут все просто: я — результат того, що даю.
              </p>
              <p className="mt-3 text-cream/75">
                Якщо тобі відгукується моя естетика — підтягнуте тіло, рельєф
                без «перекачаності», соковиті сідниці без масивних ніг,
                баланс жіночності та сили — значить, мій підхід може
                відгукнутись і тобі.
              </p>
              <p className="mt-3 text-cream/75">
                Я не продаю «мінус 5 кг за 7 днів». Я даю інструменти, з
                якими ти зможеш стати кращою версією себе.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl text-cream">Мій підхід — це:</h4>
              <ul className="mt-4 grid gap-2.5">
                {[
                  'баланс без заборон',
                  'розуміння процесів у тілі, а не сліпе слідування плану',
                  'тренування, які не виснажують, а дають енергію і результат',
                  'харчування без зривів',
                  'зміни через любов до себе',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-cream/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-rose to-plum" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-cream/70">
              Я працюю не тільки з тілом, а з причинами: переїдання, набряки,
              нестабільна вага, відсутність енергії та мотивації.
            </p>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-semibold text-night-900 transition-transform hover:scale-[1.03] glow-rose"
            >
              Я готова до змін →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
