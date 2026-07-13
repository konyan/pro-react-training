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
    <section className="bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 lg:gap-16 lg:px-[120px] lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[2px] text-primary">
            {t('howToLearn.heading')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[40px] leading-relaxed">
            {t('howToLearn.title')}
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <AnimatedCard
              key={idx}
              className="flex flex-col gap-5 rounded-xl border border-border bg-bg-light p-6 lg:p-8"
              delay={idx * 0.15}
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { rotate: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white"
              >
                {step.number}
              </motion.div>
              <h3 className="text-[22px] font-bold text-text-primary">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-secondary">{step.body}</p>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
          className="flex flex-col items-start gap-4 rounded-xl border-l-4 border-primary bg-callout-bg p-6 lg:flex-row lg:gap-6 lg:p-8"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white"
          >
            ★
          </motion.div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-text-primary">
              {t('howToLearn.capstone.title')}
            </h3>
            <p className="text-[15px] leading-relaxed text-text-primary">
              {t('howToLearn.capstone.body')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
