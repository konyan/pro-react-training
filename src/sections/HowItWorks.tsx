import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

const steps = [
  {
    number: '1',
    title: 'Build & ship it',
    body: 'In Course 01 you create a working React app with clean components and solid state, add a real Supabase backend for accounts and data, then make it production-ready: tested, audited with Lighthouse, accessible, and secure.',
  },
  {
    number: '2',
    title: 'Extend it with AI',
    body: 'In Course 02 you add a new feature entirely through an agent workflow, landing it as a clean pull request with a spec and passing tests.',
  },
]

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-6 py-24 lg:px-[120px]">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[2px] text-primary">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[40px]">
            One project carries you the whole way through.
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, idx) => (
            <AnimatedCard
              key={idx}
              className="flex flex-col gap-5 rounded-xl border border-border bg-bg-light p-8"
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
          className="flex items-start gap-6 rounded-xl border-l-4 border-primary bg-callout-bg p-8"
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
              Capstone project — You finish with a real product in your portfolio.
            </h3>
            <p className="text-[15px] leading-relaxed text-text-primary">
              Not toy exercises — one genuine application you build, harden, and extend across both
              courses. Exactly the kind of work that gets you hired or promoted.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
