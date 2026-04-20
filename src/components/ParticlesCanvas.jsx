import { useEffect, useRef } from 'react'

export default function ParticlesCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w, h, particles, raf

    const resize = () => {
      const parent = canvas.parentElement
      w = parent.offsetWidth
      h = parent.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const makeParticle = (randomY = true) => ({
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + Math.random() * 40,
      r: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -(Math.random() * 0.8 + 0.25),           // drift upward
      a: Math.random() * 0.7 + 0.25,
      twinkleSpeed: Math.random() * 0.04 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
      hue: Math.random() < 0.5 ? '250,147,250' : '201,103,232',
    })

    const reset = () => {
      const count = Math.min(160, Math.max(60, Math.floor((w * h) / 9000)))
      particles = Array.from({ length: count }, () => makeParticle(true))
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.twinklePhase += p.twinkleSpeed

        // respawn off screen
        if (p.y < -10) Object.assign(p, makeParticle(false))
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10

        const tw = 0.55 + 0.45 * Math.sin(p.twinklePhase)
        const alpha = p.a * tw
        ctx.beginPath()
        ctx.fillStyle = `rgba(${p.hue},${alpha})`
        ctx.shadowColor = `rgba(${p.hue},${alpha})`
        ctx.shadowBlur = 10
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(step)
    }

    resize()
    reset()
    step()
    const onResize = () => { resize(); reset() }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[15]"
    />
  )
}
