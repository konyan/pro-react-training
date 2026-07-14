import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

export default function HowItWorks() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const steps = [
    {
      number: '1',
      title: t('howToLearn.step1.title'),
      body: t('howToLearn.step1.body'),
    },
    {
      number: '2',
      title: t('howToLearn.step2.title'),
      body: t('howToLearn.step2.body'),
    },
    {
      number: '3',
      title: t('howToLearn.step3.title'),
      body: t('howToLearn.step3.body'),
    },
  ]

  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-16 lg:gap-16 lg:px-12 lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-action">
            {t('howToLearn.heading')}
          </p>
          <h2 className="text-[2.125rem] font-extrabold tracking-tight text-text lg:text-[2.5rem] leading-[1.25]">
            {t('howToLearn.title')}
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <AnimatedCard
              key={idx}
              className="flex flex-col gap-5 rounded-[6px] border border-border-default bg-surface p-6 lg:p-8"
              delay={idx * 0.15}
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { rotate: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-action text-xl font-bold text-white"
              >
                {step.number}
              </motion.div>
              <h3 className="text-[1.375rem] font-extrabold text-text">{step.title}</h3>
              <p className="text-[15px] leading-[1.55] text-text-muted">{step.body}</p>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
          className="flex flex-col items-start gap-4 rounded-[6px] border-l-4 border-action bg-surface-selected p-6 lg:flex-row lg:gap-6 lg:p-8"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-action text-xl font-bold text-white"
          >
            ★
          </motion.div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.25rem] font-extrabold text-text">
              {t('howToLearn.capstone.title')}
            </h3>
            <p className="text-[15px] leading-[1.55] text-text">
              {t('howToLearn.capstone.body')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
