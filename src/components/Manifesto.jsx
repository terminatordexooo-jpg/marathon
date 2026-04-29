import FadeUp from './FadeUp.jsx'

export default function Manifesto() {
  return (
    <section className="relative bg-ink px-6 py-32 text-parchment">
      <div className="mx-auto max-w-5xl">
        <FadeUp y={30} duration={0.9}>
          <p className="mb-10 text-[10px] font-bold tracking-[3px] uppercase text-rust-light">
            ✦ МАНІФЕСТ
          </p>
        </FadeUp>
        <FadeUp y={40} duration={1}>
          <p className="font-display text-[clamp(2rem,5vw,68px)] leading-[1.05] tracking-tight text-parchment">
            Я не продаю{' '}
            <span className="italic text-rust-light">«мінус 5 кг за 7 днів»</span>.
            <br />
            Я даю інструменти, з якими ти зможеш стати{' '}
            <span className="italic text-rust-light">кращою версією себе</span> —
            без зривів, без дієт, без «з понеділка».
          </p>
        </FadeUp>
        <FadeUp y={20} duration={0.9} delay={0.2}>
          <div className="mt-12 flex items-center gap-4">
            <span className="font-script text-3xl text-rust-light">— Savi</span>
            <span className="h-px w-16 bg-parchment/30" />
            <span className="text-[11px] tracking-[3px] uppercase text-parchment/45">
              засновниця Body by Savi
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
