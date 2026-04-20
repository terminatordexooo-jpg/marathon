import { useEffect } from 'react'

export default function SuccessModal({ open, onClose }) {
  const telegram = import.meta.env.VITE_TELEGRAM_INVITE || 'https://t.me/+REPLACE_WITH_PRIVATE_INVITE'

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
      className="fixed inset-0 z-[100] grid place-items-center bg-bg/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-accent via-accent-mid to-accent-deep p-[1.5px] shadow-glow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-3xl bg-bg">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/30 blur-2xl"
          />
          <div className="relative px-8 py-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-accent/40 bg-accent/15 text-accent-light shadow-glow">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 id="success-title" className="mt-5 text-2xl font-bold text-white">
              <span className="gradient-text-accent">You're in!</span>
            </h3>
            <p className="mt-3 text-sm text-white/65">
              Payment received. Join the private Telegram channel to get your first lesson.
            </p>
          </div>

          <div className="relative px-8 pb-7">
            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3.5 text-base"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.64 6.8l-1.57 7.39c-.12.54-.43.67-.87.42l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.48.24l.17-2.43 4.43-4c.2-.17-.04-.27-.3-.1l-5.48 3.45-2.36-.74c-.51-.16-.52-.51.11-.76l9.22-3.55c.43-.16.8.1.69.73z" />
              </svg>
              Open Telegram channel
            </a>

            <p className="mt-4 text-center text-xs text-white/40">
              A confirmation email has been sent. If you don't see it, check spam.
            </p>

            <button
              onClick={onClose}
              className="mt-2 w-full py-2 text-xs text-white/35 hover:text-white/70"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
