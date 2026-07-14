import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'
import AnimatedButton from '../components/AnimatedButton'
import { trackCta } from '../hooks/useAnalytics'

export default function Pricing() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const fullFeatures = t('pricing.full.features', { returnObjects: true }) as string[]
  const splitFeatures = t('pricing.split.features', { returnObjects: true }) as string[]

  return (
    <section id="pricing" className="bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-16 lg:gap-16 lg:px-12 lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-action">
            {t('pricing.heading')}
          </p>
          <h2 className="text-[2.125rem] font-extrabold tracking-tight text-text">
            {t('pricing.title')}
          </h2>
          <p className="max-w-[820px] text-[1.0625rem] leading-[1.55] text-text-muted">
            {t('pricing.description')}
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Option 01 — Full payment */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            className="flex flex-col gap-6 rounded-[6px] border border-border-default bg-surface-sunken p-6 lg:p-8"
          >
            <div className="flex flex-col gap-2">
              <span className="font-data text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-text-dim">
                {t('pricing.full.label')}
              </span>
              <h3 className="text-[1.5rem] font-extrabold text-text">
                {t('pricing.full.title')}
              </h3>
              <p className="text-text-muted">
                {t('pricing.full.subtitle')}
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-action lg:text-5xl">
                {t('pricing.full.price')}
              </span>
              <span className="text-sm font-medium text-text-dim">MMK</span>
            </div>

            <div className="h-px bg-border-default" />

            <StaggerContainer className="flex flex-col gap-3" stagger={0.04}>
              {fullFeatures.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-action/10 text-[10px] font-bold text-action">
                      ✓
                    </span>
                    <span className="text-[15px] leading-snug text-text">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-auto pt-2">
              <AnimatedButton
                variant="secondary"
                className="w-full px-5 py-3 text-[15px]"
                onClick={() => {
                  trackCta('pricing_full')
                  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t('pricing.ctaButton')}
              </AnimatedButton>
            </div>
          </motion.div>

          {/* Option 02 — Split payment */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            className="relative flex flex-col gap-6 rounded-[6px] border-2 border-action bg-surface-sunken p-6 shadow-[0_4px_12px_0_#15308F1A] lg:p-8"
          >
            <span className="absolute -top-3 right-6 rounded-full bg-action px-3 py-1 font-data text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-white">
              {t('pricing.split.badge')}
            </span>

            <div className="flex flex-col gap-2">
              <span className="font-data text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-text-dim">
                {t('pricing.split.label')}
              </span>
              <h3 className="text-[1.5rem] font-extrabold text-text">
                {t('pricing.split.title')}
              </h3>
              <p className="text-text-muted">
                {t('pricing.split.subtitle')}
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-action lg:text-5xl">
                {t('pricing.split.price')}
              </span>
              <span className="text-sm font-medium text-text-dim">× 2</span>
              <span className="text-sm font-medium text-text-dim">= {t('pricing.split.total')} MMK</span>
            </div>

            <div className="h-px bg-border-default" />

            <StaggerContainer className="flex flex-col gap-3" stagger={0.04}>
              {splitFeatures.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-action/10 text-[10px] font-bold text-action">
                      ✓
                    </span>
                    <span className="text-[15px] leading-snug text-text">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-auto pt-2">
              <AnimatedButton
                variant="primary"
                className="w-full px-5 py-3 text-[15px]"
                onClick={() => {
                  trackCta('pricing_split')
                  window.open('https://forms.gle/K7qDLEQT4wfJcoJP7', '_blank')
                }}
              >
                {t('pricing.ctaButton')}
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.2}>
          <p className="max-w-[720px] text-center text-[15px] leading-[1.55] text-text-muted">
            {t('pricing.note')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
