import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

const badgesRow1 = ['React', 'Next.js', 'TypeScript', 'Supabase']
const badgesRow2 = ['Hono / Node', 'Edge / Cloudflare', 'Agentic Coding']

export default function Instructor() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="instructor" className="bg-surface-sunken">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 lg:gap-12 lg:px-12 lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-action">
            {t('instructor.heading')}
          </p>
          <h2 className="text-[2.125rem] font-extrabold tracking-tight text-text">
            {t('instructor.title')}
          </h2>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            className="flex h-[360px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[6px] bg-gradient-to-br from-action to-action-hover lg:h-[480px]"
          >
            <img
              src="/konyan.webp"
              alt={t('instructor.name')}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="flex flex-1 flex-col gap-5">
            <AnimatedSection>
              <h3 className="text-[1.75rem] font-extrabold text-text">{t('instructor.name')}</h3>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-[1.0625rem] italic text-action">
                {t('instructor.role')}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-[1.0625rem] leading-[1.55] text-text-muted">
                {t('instructor.bio')}
              </p>
            </AnimatedSection>

            <StaggerContainer className="flex flex-wrap gap-2" stagger={0.05}>
              {badgesRow1.map((badge) => (
                <StaggerItem key={badge}>
                  <motion.span
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, borderColor: '#15308F', color: '#15308F' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="inline-block rounded-full border border-border-default bg-surface px-3.5 py-1.5 font-data text-sm text-text"
                  >
                    {badge}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <StaggerContainer className="flex flex-wrap gap-2" stagger={0.05} delay={0.2}>
              {badgesRow2.map((badge) => (
                <StaggerItem key={badge}>
                  <motion.span
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, borderColor: '#15308F', color: '#15308F' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="inline-block rounded-full border border-border-default bg-surface px-3.5 py-1.5 font-data text-sm text-text"
                  >
                    {badge}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
