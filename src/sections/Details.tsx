import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

const detailIcons = ['🗓️', '💻', '🎯']

export default function Details() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const details = [
    { icon: detailIcons[0], title: t('details.schedule.title'), desc: t('details.schedule.desc') },
    { icon: detailIcons[1], title: t('details.format.title'), desc: t('details.format.desc') },
    { icon: detailIcons[2], title: t('details.audience.title'), desc: t('details.audience.desc') },
  ]

  return (
    <section id="details" className="bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 lg:gap-12 lg:px-[120px] lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[1px] text-primary">
            {t('details.heading')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[36px]">
            {t('details.title')}
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {details.map((item, idx) => (
            <AnimatedCard key={item.title} className="flex flex-col gap-4 rounded-lg border border-border bg-bg-light p-6 lg:p-8" delay={idx * 0.1}>
              <motion.span
                whileHover={shouldReduceMotion ? {} : { scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="text-3xl"
              >
                {item.icon}
              </motion.span>
              <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-secondary">{item.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
