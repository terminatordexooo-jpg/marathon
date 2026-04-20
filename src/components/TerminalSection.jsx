import { useEffect, useState } from 'react'
import FadeUp from './FadeUp.jsx'

const lines = [
  { p: '$', t: 'marathon --start', d: 400 },
  { c: 'Analyzing your goals...', d: 500 },
  { c: 'Building your 21-day protocol...', d: 600 },
  { c: 'Connecting to private Telegram...', d: 500 },
  { ok: '✓ Day 1 unlocked. First lesson ready.', d: 700 },
  { c: '', d: 200 },
  { p: '$', t: 'marathon --day 1', d: 400 },
  { ok: '✓ Morning anchor ritual (6 min)', d: 500 },
  { ok: '✓ Reflection prompt', d: 400 },
  { ok: '✓ Community check-in', d: 500 },
  { c: 'See you tomorrow, Anna. 💜', d: 600 },
]

export default function TerminalSection() {
  const [visible, setVisible] = useState(0)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (!play) return
    let i = 0
    let timer
    const next = () => {
      if (i >= lines.length) return
      setVisible(i + 1)
      timer = setTimeout(() => { i++; next() }, lines[i].d)
    }
    next()
    return () => clearTimeout(timer)
  }, [play])

  return (
    <section id="preview" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <FadeUp y={60} duration={0.9}>
          <p className="mb-3 text-center text-xs font-semibold tracking-[4px] uppercase text-[#C967E8]">Experience</p>
          <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-white md:text-5xl">
            How it feels
          </h2>
        </FadeUp>

        <FadeUp y={30} duration={0.9}>
          <div
            onMouseEnter={() => !play && setPlay(true)}
            className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[10px] tracking-widest text-white/25">MARATHON</span>
              <span className="ml-auto h-2 w-2 rounded-full bg-[#C967E8] shadow-[0_0_8px_#C967E8]" />
            </div>
            <div className="p-6 font-mono text-[14px] leading-[1.8] min-h-[340px]">
              {lines.slice(0, visible).map((l, i) => (
                <div key={i}>
                  {l.p && <span className="text-[#C967E8]">{l.p} </span>}
                  {l.t && <span className="text-white">{l.t}</span>}
                  {l.c && <span className="text-white/60">{l.c}</span>}
                  {l.ok && <span className="text-[#FA93FA]">{l.ok}</span>}
                </div>
              ))}
              {!play && (
                <div className="text-white/40">
                  <span className="text-[#C967E8]">$ </span>
                  <span className="animate-blink">▌</span>{' '}
                  <span className="text-white/30">hover to run</span>
                </div>
              )}
              {play && visible >= lines.length && (
                <span className="text-[#C967E8] animate-blink">▌</span>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
