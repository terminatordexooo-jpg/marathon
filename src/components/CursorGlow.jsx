import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let x = -9999, y = -9999, tx = x, ty = y, raf
    const onMove = (e) => { tx = e.clientX; ty = e.clientY }
    const loop = () => {
      x += (tx - x) * 0.14
      y += (ty - y) * 0.14
      el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    loop()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
      style={{
        width: 500,
        height: 500,
        background:
          'radial-gradient(circle, rgba(201,103,232,0.15) 0%, rgba(250,147,250,0.08) 30%, rgba(152,58,214,0.03) 55%, transparent 70%)',
        borderRadius: '50%',
        willChange: 'transform',
        transform: 'translate3d(-750px, -750px, 0px)',
      }}
    />
  )
}
