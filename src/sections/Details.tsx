import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

const details = [
  {
    icon: '🗓️',
    title: 'Schedule & duration',
    desc: '13 weeks · 6 hrs/week — Saturday & Sunday sessions, 3 hours each day, with hands-on labs — 9 weeks of React (including a Supabase backend), 2 of AI coding, and a 2-week group build. Starts August 2026.',
  },
  {
    icon: '💻',
    title: 'Format',
    desc: 'Live online classes combined with on-the-job (OJT) mentoring — you code, get reviewed, and improve with direct feedback.',
  },
  {
    icon: '🎯',
    title: "Who it's for",
    desc: 'Junior & mid developers comfortable with HTML, CSS and JavaScript who want to become production-grade frontend engineers.',
  },
]

export default function Details() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="details" className="bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 lg:gap-12 lg:px-[120px] lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[1px] text-primary">
            THE DETAILS
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[36px]">
            What you need to know before you join.
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
