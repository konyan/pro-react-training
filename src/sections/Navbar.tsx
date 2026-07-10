import { motion, useReducedMotion } from 'framer-motion'

const navLinks = ['Curriculum', 'Timeline', 'Instructor', 'Details']

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-border bg-bg-light/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-[120px]">
        <motion.div
          className="flex items-center gap-2.5"
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-white">
            {'</>'}
          </div>
          <span className="text-base font-semibold text-text-primary">The Frontend Path</span>
        </motion.div>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((label, i) => (
            <motion.button
              key={label}
              onClick={() => scrollTo(label)}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              whileHover={shouldReduceMotion ? {} : { y: -1 }}
              className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
            >
              {label}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => scrollTo('cta')}
          initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          className="rounded-md bg-primary px-[18px] py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Enroll now
        </motion.button>
      </div>
    </motion.nav>
  )
}
