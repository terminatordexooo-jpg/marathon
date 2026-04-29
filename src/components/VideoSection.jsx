import { useRef, useState } from 'react'
import FadeUp from './FadeUp.jsx'

export default function VideoSection() {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="relative bg-parchment px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp y={30} duration={0.9}>
          <div className="mb-10 flex items-end justify-between border-b border-ink/15 pb-6">
            <div>
              <p className="text-[10px] font-bold tracking-[3px] uppercase text-rust">
                · ВІД АВТОРКИ
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,5vw,56px)] leading-[0.95] text-ink">
                Привіт.{' '}
                <span className="italic text-rust">Я Savi.</span>
              </h2>
            </div>
            <p className="hidden max-w-xs text-[13px] leading-relaxed text-ink/55 md:block">
              Подивись 60 секунд — і ти зрозумієш, чи підходить тобі мій підхід.
            </p>
          </div>
        </FadeUp>

        <FadeUp y={30} duration={0.9}>
          <div className="relative overflow-hidden rounded-sm border border-ink/15 bg-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
            <video
              ref={ref}
              src="/savi/savi-video.mp4"
              className="block w-full"
              playsInline
              preload="metadata"
              onClick={toggle}
              onEnded={() => setPlaying(false)}
            />

            {!playing && (
              <button
                type="button"
                onClick={toggle}
                className="absolute inset-0 flex items-center justify-center bg-ink/35 transition-all hover:bg-ink/45"
                aria-label="Грати"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-parchment text-ink transition-transform hover:scale-110">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}

            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5">
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[3px] uppercase text-parchment/85">
                <span className="h-2 w-2 animate-pulse rounded-full bg-rust" />
                BODY BY SAVI · 2026
              </span>
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-parchment/55">
                відео-інтерв'ю
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
