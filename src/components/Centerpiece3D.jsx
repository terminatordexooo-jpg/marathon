import { Suspense, lazy } from 'react'
import FadeUp from './FadeUp.jsx'

const Hero3D = lazy(() => import('./Hero3D.jsx'))

export default function Centerpiece3D() {
  return (
    <section id="program" className="relative overflow-hidden bg-parchment py-24">
      <div className="mx-auto mb-10 flex max-w-7xl items-center justify-between gap-6 px-6">
        <div>
          <p className="text-[10px] font-bold tracking-[3px] uppercase text-rust">· ОБ'ЄКТ Nº 01</p>
          <h2 className="mt-2 font-display text-[clamp(2rem,5vw,56px)] leading-[0.95] text-ink">
            <span className="italic">обертається</span> разом з тобою
          </h2>
        </div>
        <p className="hidden max-w-xs text-[13px] leading-relaxed text-ink/55 md:block">
          Курсор керує сценою. Як тіло, що відгукується на тебе.
        </p>
      </div>

      <FadeUp y={20} duration={1}>
        <div className="relative mx-auto h-[70vh] max-h-[680px] w-full max-w-[1200px] px-6">
          <div className="absolute inset-x-6 inset-y-0 overflow-hidden rounded-[40px] border border-ink/15 bg-gradient-to-b from-parchment-50 via-parchment to-parchment-200">
            <Suspense fallback={null}>
              <Hero3D />
            </Suspense>

            <div className="pointer-events-none absolute left-6 top-5 text-[10px] tracking-[3px] text-ink/40">
              ✦ BODY BY SAVI · 2026
            </div>
            <div className="pointer-events-none absolute right-6 top-5 text-[10px] tracking-[3px] text-ink/40">
              SCENE 01
            </div>

            <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <p className="font-display text-2xl italic text-ink/70">
                твоє тіло — це не проєкт. це дім.
              </p>
              <span className="font-script text-2xl text-rust">Savi</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
