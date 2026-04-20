import { motion } from 'framer-motion'

export default function FadeUp({
  children,
  delay = 0,
  y = 40,
  blur = 0,
  once = true,
  amount = 0.3,
  duration = 0.8,
  className,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y, filter: blur ? `blur(${blur}px)` : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
