import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { trackCta } from '../hooks/useAnalytics'

const navLinkKeys = ['curriculum', 'timeline', 'instructor', 'details', 'pricing'] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const shouldReduceMotion = useReducedMotion()
  const [mobileOpen, setMobileOpen] = useState(false)

  const currentLang = i18n.language === 'en' ? 'en' : 'my'

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'my' : 'en')
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-border-default bg-surface/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:px-12">
        <motion.div
          className="flex items-center gap-2.5"
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <img src="/logo.png" alt="The Frontend Path" className="h-14 w-14" />
          <span className="text-base font-semibold text-text">Sprint Lab</span>
        </motion.div>

        <div className="hidden items-center gap-9 md:flex">
          {navLinkKeys.map((key, i) => (
            <motion.button
              key={key}
              onClick={() => scrollTo(key)}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              whileHover={shouldReduceMotion ? {} : { y: -1 }}
              className="text-sm font-medium text-text-muted transition hover:text-text"
            >
              {t(`nav.${key}`)}
            </motion.button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <motion.button
            onClick={toggleLanguage}
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="rounded-[3px] border border-border-default px-3 py-2 text-sm font-semibold text-text-muted transition hover:border-action hover:text-action"
          >
            {currentLang === 'en' ? 'MY' : 'EN'}
          </motion.button>

          <motion.button
            onClick={() => { trackCta('nav_enroll'); scrollTo('cta') }}
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="rounded-[3px] bg-action px-[18px] py-2 text-sm font-semibold text-white transition hover:bg-action-hover"
          >
            {t('nav.enrollNow')}
          </motion.button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={t('nav.toggleMenu')}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[3px] md:hidden"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-text"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text"
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
            className="overflow-hidden border-b border-border-default bg-surface md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {navLinkKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    scrollTo(key)
                    setMobileOpen(false)
                  }}
                  className="text-left text-base font-medium text-text-muted transition hover:text-text"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="rounded-[3px] border border-border-default px-4 py-2.5 text-center text-sm font-semibold text-text-muted transition hover:border-action hover:text-action"
                >
                  {currentLang === 'en' ? 'MY' : 'EN'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    trackCta('nav_enroll_mobile')
                    scrollTo('cta')
                    setMobileOpen(false)
                  }}
                  className="flex-1 rounded-[3px] bg-action px-[18px] py-2.5 text-center text-sm font-semibold text-white transition hover:bg-action-hover"
                >
                  {t('nav.enrollNow')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
