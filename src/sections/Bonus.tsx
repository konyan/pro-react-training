import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

export default function Bonus() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const modules = t('bonus.modules', { returnObjects: true }) as Array<{
    title: string
    subtitle: string
    bullets: string[]
    deliverable: string
  }>

  const addons = t('bonus.addons.items', { returnObjects: true }) as string[]

  return (
    <section id="bonus" className="bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 lg:gap-16 lg:px-[120px] lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[2px] text-amber-600">
            {t('bonus.heading')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[40px]">
            {t('bonus.title')}
          </h2>
          <p className="max-w-[820px] text-[17px] leading-relaxed text-text-secondary">
            {t('bonus.description')}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {modules.map((mod, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard
                className="flex h-full flex-col gap-5 rounded-xl border border-border bg-surface p-6 lg:p-8"
                hover
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 font-mono text-sm font-bold text-amber-700">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold leading-tight text-text-primary">{mod.title}</h3>
                    <span className="text-sm text-text-secondary">{mod.subtitle}</span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <ul className="flex flex-col gap-2.5">
                  {mod.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">
                        ✓
                      </span>
                      <span className="text-[14px] leading-snug text-text-primary">{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto flex items-start gap-2.5 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-3.5"
                >
                  <span className="flex-shrink-0 text-sm">🎯</span>
                  <p className="text-[13px] font-medium leading-snug text-text-primary">
                    <span className="font-semibold">{t('bonus.doThisNow')}</span> {mod.deliverable}
                  </p>
                </motion.div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Optional Add-ons */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-6 lg:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">✦</span>
                <h3 className="text-xl font-bold text-text-primary">{t('bonus.addons.title')}</h3>
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                  {t('bonus.addons.label')}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {addons.map((addon) => (
                  <div key={addon} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">
                      +
                    </span>
                    <span className="text-[15px] text-text-primary">{addon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Teaching note */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
          className="flex flex-col items-start gap-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6 lg:flex-row lg:gap-6 lg:p-8"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white"
          >
            🎓
          </motion.div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-text-primary">
              {t('bonus.teachingNote.title')}
            </h3>
            <p className="text-[15px] leading-relaxed text-text-primary">
              {t('bonus.teachingNote.body')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
