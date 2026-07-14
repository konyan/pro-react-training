import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

function Bullet({ item, color }: { item: string; color: 'action' | 'accent' | 'warning' }) {
  const bgColor =
    color === 'action'
      ? 'bg-surface-selected text-action'
      : color === 'accent'
        ? 'bg-blue-100 text-accent'
        : 'bg-feedback-warning-surface text-feedback-warning-text'

  return (
    <StaggerItem>
      <li className="flex items-center gap-3">
        <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${bgColor}`}>
          ✓
        </span>
        <span className="text-[15px] text-text">{item}</span>
      </li>
    </StaggerItem>
  )
}

export default function Curriculum() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const courseOneBullets = t('curriculum.courseOne.bullets', { returnObjects: true }) as string[]
  const courseTwoBullets = t('curriculum.courseTwo.bullets', { returnObjects: true }) as string[]
  const bonusBullets = t('curriculum.bonus.bullets', { returnObjects: true }) as string[]

  return (
    <section id="curriculum" className="bg-surface-sunken">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-16 lg:gap-16 lg:px-12 lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-action">
            {t('curriculum.heading')}
          </p>
          <h2 className="text-[2.125rem] font-extrabold tracking-tight text-text lg:text-[2.5rem] leading-[1.25]">
            {t('curriculum.title')}
          </h2>
          <p className="max-w-[820px] text-[1.0625rem] leading-[1.55] text-text-muted">
            {t('curriculum.description')}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard className="flex flex-col gap-6 rounded-[6px] border border-border-default bg-surface p-6 shadow-[0_1px_2px_0_#15308F14] lg:p-10">
            <div className="flex flex-col gap-3">
              <span className="w-fit rounded-full bg-surface-selected px-3 py-1 text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-action">
                {t('curriculum.courseOne.label')}
              </span>
              <h3 className="text-[1.5rem] font-extrabold text-text">{t('curriculum.courseOne.title')}</h3>
              <p className="text-[1.0625rem] leading-[1.55] text-text-muted">
                {t('curriculum.courseOne.description')}
              </p>
            </div>

            <div className="h-px bg-border-default" />

            <StaggerContainer className="flex flex-col gap-3" stagger={0.05}>
              {courseOneBullets.map((item) => (
                <Bullet key={item} item={item} color="action" />
              ))}
            </StaggerContainer>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-auto flex items-start gap-3 rounded-[6px] border-l-4 border-action bg-surface-selected p-4"
            >
              <span className="text-base text-action">★</span>
              <p className="text-sm font-medium italic text-text">
                {t('curriculum.courseOne.outcome')}
              </p>
            </motion.div>
          </AnimatedCard>

          <AnimatedCard className="flex flex-col gap-6 rounded-[6px] border border-border-default bg-surface p-6 shadow-[0_1px_2px_0_#15308F14] lg:p-10" delay={0.15}>
            <div className="flex flex-col gap-3">
              <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-accent">
                {t('curriculum.courseTwo.label')}
              </span>
              <h3 className="text-[1.5rem] font-extrabold text-text">{t('curriculum.courseTwo.title')}</h3>
              <p className="text-[1.0625rem] leading-[1.55] text-text-muted">
                {t('curriculum.courseTwo.description')}
              </p>
            </div>

            <div className="h-px bg-border-default" />

            <StaggerContainer className="flex flex-col gap-3" stagger={0.05}>
              {courseTwoBullets.map((item) => (
                <Bullet key={item} item={item} color="accent" />
              ))}
            </StaggerContainer>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-auto flex items-start gap-3 rounded-[6px] border-l-4 border-accent bg-blue-50 p-4"
            >
              <span className="text-base text-accent">★</span>
              <p className="text-sm font-medium italic text-text">
                {t('curriculum.courseTwo.outcome')}
              </p>
            </motion.div>
          </AnimatedCard>
        </div>

        {/* Bonus Track */}
        <AnimatedCard
          className="flex flex-col gap-6 rounded-[6px] border-2 border-feedback-warning-border bg-gradient-to-br from-feedback-warning-surface to-surface p-6 shadow-[0_1px_2px_0_#15308F14] lg:p-10"
          delay={0.3}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-fit rounded-full bg-feedback-warning-surface px-3 py-1 text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-feedback-warning-text">
                {t('curriculum.bonus.label')}
              </span>
              <span className="rounded-full bg-feedback-warning-border/50 px-2 py-0.5 text-[11px] font-medium text-feedback-warning-text">
                {t('curriculum.bonus.sublabel')}
              </span>
            </div>
            <h3 className="text-[1.5rem] font-extrabold text-text">{t('curriculum.bonus.title')}</h3>
            <p className="text-[1.0625rem] leading-[1.55] text-text-muted">
              {t('curriculum.bonus.description')}
            </p>
          </div>

          <div className="h-px bg-feedback-warning-border" />

          <StaggerContainer className="grid gap-3 sm:grid-cols-2" stagger={0.05}>
            {bonusBullets.map((item) => (
              <Bullet key={item} item={item} color="warning" />
            ))}
          </StaggerContainer>

          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-auto flex items-start gap-3 rounded-[6px] border-l-4 border-feedback-warning bg-feedback-warning-surface p-4"
          >
            <span className="text-base">🎯</span>
            <p className="text-sm font-medium italic text-text">
              {t('curriculum.bonus.outcome')}
            </p>
          </motion.div>
        </AnimatedCard>
      </div>
    </section>
  )
}
