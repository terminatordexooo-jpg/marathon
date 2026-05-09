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
    <section id="reviews" className="relative z-10 px-5 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          variants={fadeIn}
          className="mb-14 max-w-3xl text-center mx-auto"
        >
          <h2 className="font-sans text-4xl font-black tracking-tight text-[#0E0D0B] [text-shadow:0_2px_18px_rgba(255,255,255,0.7)] sm:text-5xl md:text-6xl">
            Відгуки та результати <span className="text-gradient-rose">дівчат</span>
          </h2>
          <p className="mt-5 font-display italic text-base text-rose-deep/85 sm:text-lg">
            ↓ гортай, щоб побачити результати дівчаток
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          variants={fadeIn}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[340px]">
            {/* glow */}
            <div className="absolute -inset-4 -z-10 rounded-[3.2rem] bg-gradient-to-br from-rose/40 via-plum/30 to-transparent blur-2xl" />
            {/* side buttons */}
            <span className="absolute left-[-3px] top-[20%] h-10 w-[3px] rounded-r-sm bg-night-700" />
            <span className="absolute left-[-3px] top-[34%] h-16 w-[3px] rounded-r-sm bg-night-700" />
            <span className="absolute right-[-3px] top-[28%] h-20 w-[3px] rounded-l-sm bg-night-700" />
            {/* phone body */}
            <div className="relative rounded-[2.6rem] border border-white/10 bg-gradient-to-b from-[#1a1424] to-[#0d0a16] p-[6px] shadow-[0_40px_90px_-25px_rgba(155,107,255,0.55)]">
              <div className="relative rounded-[2.2rem] border border-white/5 bg-black p-1.5">
                {/* dynamic island */}
                <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
                <div
                  className="relative h-[620px] overflow-y-auto overflow-x-hidden rounded-[1.9rem] bg-night-900"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <div className="px-3 py-10 space-y-3">
                    {phoneList.map((src, i) => (
                      <div
                        key={src}
                        className="overflow-hidden rounded-2xl border border-white/5 bg-white/70"
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
                  {/* home indicator */}
                  <div className="pointer-events-none sticky bottom-2 z-20 mx-auto h-1 w-24 rounded-full bg-white/40" />
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
          className="mt-16 mx-auto max-w-3xl"
        >
          <div className="glass rounded-[1.75rem] p-7 sm:p-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rose-deep/80">
              Особистий шлях Savi
            </span>
            <h3 className="mt-3 font-display text-3xl text-ink">−9 кг</h3>
            <p className="mt-3 text-ink/75 leading-relaxed">
              Не маркетингова цифра, а стабільний стан, який тримається не
              на дієтах, а на системі. Це доказ, що Body by Savi — не
              «мінус 5 кг за 7 днів», а підхід, який залишається з тобою.
            </p>
            <p className="mt-4 font-display italic text-2xl text-rose-deep">
              Я — результат того, що даю.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { src: `${import.meta.env.BASE_URL}savi/before.jpg`, label: 'до' },
                { src: `${import.meta.env.BASE_URL}savi/after.jpg`, label: 'після' },
              ].map((p) => (
                <figure
                  key={p.label}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/70"
                >
                  <img
                    src={p.src}
                    alt={`Savi ${p.label}`}
                    loading="lazy"
                    className="block aspect-[3/4] w-full object-cover"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream backdrop-blur">
                    {p.label}
                  </figcaption>
                </figure>
              ))}
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
            <p className="font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
              «Тут не буде окремих тарифів, як на інших марафонах: лише
              харчування або лише тренування. Чому? Тому що результат
              не складається з чогось одного.
              <br /><br />
              Результат — це <em className="text-rose-deep">система</em>.
              Харчування, спорт і мислення працюють разом. І я відкрию
              тобі всі ключові елементи змін.»
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
