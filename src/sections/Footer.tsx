import { motion, useReducedMotion } from 'framer-motion'

export default function Footer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.footer
      initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border-dark bg-[#0A0C11]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 py-10 lg:flex-row lg:px-[120px]">
        <motion.span
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="font-mono text-sm font-semibold text-primary"
        >
          The Frontend Path
        </motion.span>
        <div className="hidden h-px flex-1 bg-border-dark lg:block" />
        <p className="text-center text-sm text-text-tertiary lg:text-right">
          © 2026 Nyan Lin Tun. Production-Grade React & AI Coding — a hands-on path for junior & mid
          developers.
        </p>
      </div>
    </motion.footer>
  )
}
