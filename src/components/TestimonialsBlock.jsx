import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const BASE = import.meta.env.BASE_URL
const phoneList = [
  `${BASE}reviews/review-5.jpg`,
  `${BASE}reviews/review-6.jpg`,
  `${BASE}reviews/review-7.jpg`,
  `${BASE}reviews/review-8.jpg`,
  `${BASE}reviews/review-9.jpg`,
  `${BASE}reviews/review-10.jpg`,
  `${BASE}reviews/review-11.jpg`,
  `${BASE}reviews/review-12.jpg`,
  `${BASE}reviews/review-13.jpg`,
  `${BASE}reviews/review-14.jpg`,
  `${BASE}reviews/review-15.jpg`,
  `${BASE}reviews/review-16.jpg`,
  `${BASE}reviews/review-17.jpg`,
  `${BASE}reviews/review-18.jpg`,
  `${BASE}reviews/review-19.jpg`,
]

export default function TestimonialsBlock() {
  return (
    <section id="reviews" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          variants={fadeIn}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-rose-light/70">
            Блок 03 · соціальний доказ
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
            <em className="text-gradient-rose">Відгуки</em> та результати
            <br />
            дівчат
          </h2>
          <p className="mt-5 text-cream/70">
            Реальні скрін-шоти з клубу — без обробки, у тому ж порядку, як
            їх писали учасниці.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          variants={fadeIn}
          className="grid gap-10 md:grid-cols-12 md:items-start"
        >
          <div className="md:col-span-5">
            <h3 className="font-display text-3xl text-cream">
              Як це виглядає в Telegram
            </h3>
            <p className="mt-4 text-cream/70">
              Гортай як у телефоні — це справжні повідомлення від дівчат у
              закритому чаті марафону. Жодних рекламних креативів.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="glass rounded-xl p-3">
                <div className="font-display text-2xl text-cream">−1.5 кг</div>
                <div className="mt-1 text-cream/60">за перший тиждень</div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="font-display text-2xl text-cream">98%</div>
                <div className="mt-1 text-cream/60">проходять до кінця</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-center">
            <div className="relative w-[300px] sm:w-[320px]">
              <div className="absolute -inset-3 -z-10 rounded-[3rem] bg-gradient-to-br from-rose/40 via-plum/30 to-transparent blur-2xl" />
              <div className="relative rounded-[2.4rem] border border-white/10 bg-night-800 p-2 shadow-[0_30px_70px_-20px_rgba(155,107,255,0.45)]">
                <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-night-900" />
                <div
                  className="relative h-[600px] overflow-y-auto overflow-x-hidden rounded-[2rem] bg-night-900"
                  style={{ scrollbarWidth: 'thin' }}
                >
                  <div className="px-3 py-9 space-y-3">
                    {phoneList.map((src, i) => (
                      <div
                        key={src}
                        className="overflow-hidden rounded-2xl border border-white/5 bg-night-800/60"
                      >
                        <img
                          src={src}
                          alt={`Відгук ${i + 1}`}
                          loading="lazy"
                          className="block w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          variants={fadeIn}
          className="mt-16 grid gap-6 md:grid-cols-12"
        >
          <div className="md:col-span-7 glass rounded-[1.75rem] p-7 sm:p-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rose-light/80">
              Особистий шлях Savi
            </span>
            <h3 className="mt-3 font-display text-3xl text-cream">−9 кг</h3>
            <p className="mt-3 text-cream/75 leading-relaxed">
              Не маркетингова цифра, а стабільний стан, який тримається не
              на дієтах, а на системі. Це доказ, що Body by Savi — не
              «мінус 5 кг за 7 днів», а підхід, який залишається з тобою.
            </p>
            <p className="mt-4 font-script text-2xl text-rose-light">
              Я — результат того, що даю.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  k: 'Спорт',
                  v: 'тренування 4–5×',
                  d: 'на тиждень, без виснаження',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M6.5 6.5L17.5 17.5" />
                      <path d="M3 9l3-3 3 3-3 3z" />
                      <path d="M21 15l-3 3-3-3 3-3z" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                    </svg>
                  ),
                },
                {
                  k: 'Харчування',
                  v: 'без зривів',
                  d: 'смачно і стабільно',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 2C8 6 8 11 12 14c4-3 4-8 0-12z" />
                      <path d="M5 13c0 4 3 8 7 8s7-4 7-8H5z" />
                      <path d="M12 13v8" />
                    </svg>
                  ),
                },
                {
                  k: 'Мислення',
                  v: 'без крайнощів',
                  d: 'через любов до себе',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 21s-7-4.5-7-11a5 5 0 019-3 5 5 0 019 3c0 6.5-7 11-7 11h-4z" />
                      <path d="M12 8v4" />
                    </svg>
                  ),
                },
              ].map((p) => (
                <div
                  key={p.k}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-black/40 p-4 backdrop-blur-md transition-colors hover:border-rose/40"
                >
                  <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br from-rose to-plum opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
                  <div className="relative flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose/20 to-plum/20 text-rose-light">
                      {p.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55">
                        {p.k}
                      </p>
                      <p className="font-display text-lg leading-tight text-cream">{p.v}</p>
                    </div>
                  </div>
                  <p className="relative mt-3 text-xs leading-snug text-cream/55">{p.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-cream/45">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cream/15 to-transparent" />
              <span>= система Body by Savi</span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cream/15 to-transparent" />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[1.75rem] glass ring-glow">
              <video
                src={`${BASE}savi/savi-video.mp4`}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          variants={fadeIn}
          className="mt-14 max-w-3xl"
        >
          <div className="glass-rose rounded-[1.75rem] p-7 sm:p-9">
            <p className="font-display text-xl italic leading-relaxed text-cream sm:text-2xl">
              «Тут не буде окремих тарифів, як на інших марафонах: лише
              харчування або лише тренування. Чому? Тому що результат
              не складається з чогось одного.
              <br /><br />
              Результат — це <em className="text-rose-light">система</em>.
              Харчування, спорт і мислення працюють разом. І я відкрию
              тобі всі ключові елементи змін.»
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
