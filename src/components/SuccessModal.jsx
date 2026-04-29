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
      className="fixed inset-0 z-[100] grid place-items-center bg-night-900/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-night-800 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative px-8 pt-9 pb-6 text-center">
          <div className="absolute -top-16 left-1/2 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-rose to-plum opacity-50 blur-3xl" />
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-rose to-plum text-cream">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 id="success-title" className="mt-5 font-display text-3xl text-cream">
            Ти в клубі
          </h3>
          <p className="mt-3 text-sm text-cream/65">
            Оплата отримана. Долучайся до закритого Telegram-клубу — перший урок чекає.
          </p>
        </div>

        <div className="relative px-8 pb-8">
          <a
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cream px-6 py-3.5 text-sm font-semibold text-night-900 transition-transform hover:scale-[1.02]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.64 6.8l-1.57 7.39c-.12.54-.43.67-.87.42l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.48.24l.17-2.43 4.43-4c.2-.17-.04-.27-.3-.1l-5.48 3.45-2.36-.74c-.51-.16-.52-.51.11-.76l9.22-3.55c.43-.16.8.1.69.73z" />
            </svg>
            Відкрити Telegram-клуб
          </a>
          <button
            onClick={onClose}
            className="mt-3 w-full py-2 text-xs text-cream/45 hover:text-cream/75"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  )
}
