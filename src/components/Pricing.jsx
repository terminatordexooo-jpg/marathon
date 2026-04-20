import FadeUp from './FadeUp.jsx'
import PaymentButton from './PaymentButton.jsx'

const stats = [
  { k: 'PRICE', v: '$59' },
  { k: 'DURATION', v: '21 days' },
  { k: 'GUARANTEE', v: '100%' },
]

export default function Pricing({ onSuccessPreview }) {
  const price = import.meta.env.VITE_PRICE_USD || '59'

  return (
    <section id="pricing" className="px-6 pt-20 pb-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14">
          <FadeUp y={60} duration={0.9}>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 text-center backdrop-blur-sm transition-all hover:border-[#C967E8]/25"
                >
                  <p className="mb-1 text-[10px] font-semibold tracking-[3px] text-[#C967E8]">{s.k}</p>
                  <p className="text-2xl font-black text-white">{s.v === '$59' ? `$${price}` : s.v}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp y={40} duration={0.9}>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] px-8 py-16 text-center backdrop-blur-sm md:px-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,103,232,0.12)_0%,transparent_70%)]" />
            <h2 className="relative text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ready to{' '}
              <span className="bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6] bg-clip-text text-transparent">
                start
              </span>
              ?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-lg text-white/50">
              One payment. 21 days. Instant Telegram access after checkout.
            </p>
            <div className="relative mt-10 flex justify-center">
              <PaymentButton
                onPreview={onSuccessPreview}
                className="group inline-flex items-center rounded-full border border-white/15 p-[3px] backdrop-blur-sm transition-all hover:border-white/25"
              >
                <span className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-all group-hover:bg-white/95">
                  Get instant access
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </PaymentButton>
            </div>
            <p className="relative mt-6 text-xs text-white/35">
              Secure card checkout · LemonSqueezy · 7-day refund
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
