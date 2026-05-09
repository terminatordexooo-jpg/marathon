import { motion } from 'framer-motion'

export default function SaviIntroVideo() {
  return (
    <section className="relative z-10 px-5 pb-10 pt-2 sm:px-6 sm:pb-16 sm:pt-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-3xl"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-night-900/40 shadow-[0_40px_120px_-30px_rgba(216,139,150,0.55)]">
          <div className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[2rem] bg-gradient-to-br from-rose/40 via-plum/30 to-transparent blur-2xl" />
          <video
            src={`${import.meta.env.BASE_URL}savi/savi-video.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="block aspect-[3/4] w-full object-cover sm:aspect-[4/5]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-900/55 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="font-display italic text-2xl text-rose-light">Savi</p>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/65">
              засновниця Body by Savi
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
