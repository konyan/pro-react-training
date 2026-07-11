import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const navLinks = ['Curriculum', 'Timeline', 'Instructor', 'Details']

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion()
  const [mobileOpen, setMobileOpen] = useState(false)

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

        <div className="hidden md:block">
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

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text-primary"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-text-primary"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text-primary"
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-border bg-bg-light md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {navLinks.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    scrollTo(label)
                    setMobileOpen(false)
                  }}
                  className="text-left text-base font-medium text-text-secondary transition hover:text-text-primary"
                >
                  {label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  scrollTo('cta')
                  setMobileOpen(false)
                }}
                className="mt-2 rounded-md bg-primary px-[18px] py-2.5 text-center text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Enroll now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
