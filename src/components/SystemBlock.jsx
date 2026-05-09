import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const pillars = [
  {
    tag: 'Тренування',
    title: 'тренування, які змусять тебе полюбити спорт',
    body: 'Спрямовані на рельєфні ручки та спинку, сухий прес та соковиті сідниці без перекачаних ніг. Усі тренування у зручному відео-форматі — просто вмикаєш і повторюєш за мною.',
    accent: 'from-rose to-plum',
  },
  {
    tag: 'Харчування',
    title: 'лекції про харчування, з якими ти розбереш і зрозумієш його вплив на твою красу',
    bullets: [
      'смачні і легкі рецепти, які переконають тебе, що корисне може бути смачним',
      'невеличке завдання, після якого твоє сприйняття їжі зміниться',
    ],
    accent: 'from-rose-light to-rose',
  },
  {
    tag: 'Звички',
    title: 'корисні звички, з якими ти досягнеш результату',
    body: 'Вчимось правильно збирати продуктовий кошик. Розбір базового раціону, щоб уникнути зривів. Чітко за системою Body by Savi, без шкоди для фігури.',
    accent: 'from-plum-light to-plum',
  },
]

const lectures = [
  '«Як почати сьогодні і не закінчити завтра»',
  '«Аскеза — інструмент на шляху саморозвитку» + мій маленький секрет',
  '«Зрив при схудненні: як досягти сталевої сили волі»',
  '«Як харчування впливає на твою красу та здоров’я»',
]

const bonuses = [
  {
    title: 'Все про боротьбу з целюлітом',
    sub: '+ комплекс, після якого він втече від тебе назавжди',
  },
  {
    title: 'Комплекс проти набряків',
    sub: 'щоденна практика для легкості тіла',
  },
  {
    title: 'Чому відпочинок — ключовий елемент системи тренувань',
    sub: 'лекція, яка перевертає підхід до прогресу',
  },
]

export default function SystemBlock() {
  return (
    <section id="system" className="relative z-10 px-5 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          variants={fadeIn}
          className="mb-16 max-w-3xl"
        >
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            Система змін:
            <br />
            <em className="text-gradient-plum">всередині марафону</em>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.tag}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-10%' }}
              variants={fadeIn}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition-transform hover:-translate-y-1"
            >
              <div
                className={`absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br ${p.accent} opacity-25 blur-3xl transition-opacity group-hover:opacity-50`}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-rose-deep/80">
                0{i + 1} · {p.tag}
              </span>
              <h3 className="mt-5 font-display text-2xl leading-snug text-ink">
                {p.title}
              </h3>
              {p.body && (
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.body}</p>
              )}
              {p.bullets && (
                <ul className="mt-3 space-y-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm leading-relaxed text-ink/70"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-rose to-plum" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          variants={fadeIn}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          <div className="glass rounded-[1.75rem] p-7 sm:p-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rose-deep/80">
              Лекції
            </span>
            <h3 className="mt-3 font-display text-2xl text-ink">
              Глибокий розбір — не просто список вправ
            </h3>
            <ul className="mt-5 space-y-3">
              {lectures.map((l) => (
                <li key={l} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-rose to-plum" />
                  <span className="leading-relaxed">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] glass-rose p-7 sm:p-8">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-rose to-plum opacity-30 blur-3xl" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rose-deep">
              🎁 Бонуси
            </span>
            <h3 className="mt-3 font-display text-2xl text-ink">
              Усе, що зазвичай продають окремо — тут включено
            </h3>
            <div className="mt-5 space-y-4">
              {bonuses.map((b) => (
                <div key={b.title} className="rounded-2xl bg-white/65 p-4">
                  <p className="text-sm font-semibold text-ink">{b.title}</p>
                  <p className="mt-1 text-xs text-ink/60">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          variants={fadeIn}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-9 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03] glow-rose"
          >
            Я готова до змін →
          </a>
          <p className="font-display italic text-base text-rose-deep/80">
            старт одразу після оплати
          </p>
        </motion.div>
      </div>
    </section>
  )
}
