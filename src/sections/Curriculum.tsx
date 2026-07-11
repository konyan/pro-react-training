import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

const courseOneBullets = [
  'Rendering, JSX & components',
  'Hooks, state & side effects',
  'Context, reducers & Suspense',
  'Reusable patterns & performance',
  'Server Components (RSC)',
  'Supabase backend — auth, database & storage',
  'Testing, Core Web Vitals, a11y & security',
]

const courseTwoBullets = [
  'AI coding basics & prompting',
  'Reviewing & testing AI output',
  'How agents work & context budgets',
  'Agent setup & AGENTS.md',
  'Spec-driven development',
  'Automated, guarded pipelines',
]

const bonusBullets = [
  'Know the target — what employers hire for',
  'One-page CV led by the capstone',
  'LinkedIn profile that sells',
  'Live portfolio + case study',
  'Freelancing & first clients',
  'Interviews & landing the offer',
]

function Bullet({ item, color }: { item: string; color: 'primary' | 'accent-blue' | 'amber' }) {
  const bgColor =
    color === 'primary'
      ? 'bg-callout-bg text-primary'
      : color === 'accent-blue'
        ? 'bg-blue-100 text-accent-blue'
        : 'bg-amber-100 text-amber-700'

  return (
    <StaggerItem>
      <li className="flex items-center gap-3">
        <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${bgColor}`}>
          ✓
        </span>
        <span className="text-[15px] text-text-primary">{item}</span>
      </li>
    </StaggerItem>
  )
}

export default function Curriculum() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="curriculum" className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 lg:gap-16 lg:px-[120px] lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[2px] text-primary">
            THE CURRICULUM
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[40px]">
            Two courses + a bonus track. All building on each other.
          </h2>
          <p className="max-w-[820px] text-[17px] leading-relaxed text-text-secondary">
            Each course follows the same rhythm: understand the concept, watch it built live, build
            it yourself, then a checkpoint before moving on. The bonus track packages everything for
            your job hunt.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard className="flex flex-col gap-6 rounded-xl border border-border bg-bg-light p-6 shadow-sm lg:p-10">
            <div className="flex flex-col gap-3">
              <span className="w-fit rounded-full bg-callout-bg px-3 py-1 text-xs font-semibold text-primary">
                Course 01
              </span>
              <h3 className="text-2xl font-bold text-text-primary">Production-Grade React</h3>
              <p className="text-base leading-relaxed text-text-secondary">
                Learn React deeply and take it all the way to a tested, shippable full-stack app.
              </p>
            </div>

            <div className="h-px bg-border" />

            <StaggerContainer className="flex flex-col gap-3" stagger={0.05}>
              {courseOneBullets.map((item) => (
                <Bullet key={item} item={item} color="primary" />
              ))}
            </StaggerContainer>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-auto flex items-start gap-3 rounded-lg border-l-4 border-primary bg-callout-bg p-4"
            >
              <span className="text-base text-primary">★</span>
              <p className="text-sm font-medium italic text-text-primary">
                You leave able to build & ship a real, full-stack app.
              </p>
            </motion.div>
          </AnimatedCard>

          <AnimatedCard className="flex flex-col gap-6 rounded-xl border border-border bg-bg-light p-6 shadow-sm lg:p-10" delay={0.15}>
            <div className="flex flex-col gap-3">
              <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-accent-blue">
                Course 02
              </span>
              <h3 className="text-2xl font-bold text-text-primary">Planned AI Coding</h3>
              <p className="text-base leading-relaxed text-text-secondary">
                Build software with AI agents the way senior engineers do, planned, reviewed, clean.
              </p>
            </div>

            <div className="h-px bg-border" />

            <StaggerContainer className="flex flex-col gap-3" stagger={0.05}>
              {courseTwoBullets.map((item) => (
                <Bullet key={item} item={item} color="accent-blue" />
              ))}
            </StaggerContainer>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-auto flex items-start gap-3 rounded-lg border-l-4 border-accent-blue bg-blue-50 p-4"
            >
              <span className="text-base text-accent-blue">★</span>
              <p className="text-sm font-medium italic text-text-primary">
                You leave able to ship faster with agents, safely.
              </p>
            </motion.div>
          </AnimatedCard>
        </div>

        {/* Bonus Track */}
        <AnimatedCard
          className="flex flex-col gap-6 rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-bg-light p-6 shadow-sm lg:p-10"
          delay={0.3}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                🎁 Bonus Track
              </span>
              <span className="rounded-full bg-amber-200/50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                Career Launch
              </span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary">Getting Hired</h3>
            <p className="text-base leading-relaxed text-text-secondary">
              Package your capstone for the real world — CV, portfolio, LinkedIn, interviews.
              Every module ends with a concrete deliverable reusing the app you already built.
            </p>
          </div>

          <div className="h-px bg-amber-200" />

          <StaggerContainer className="grid gap-3 sm:grid-cols-2" stagger={0.05}>
            {bonusBullets.map((item) => (
              <Bullet key={item} item={item} color="amber" />
            ))}
          </StaggerContainer>

          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-auto flex items-start gap-3 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4"
          >
            <span className="text-base">🎯</span>
            <p className="text-sm font-medium italic text-text-primary">
              You leave with a job-ready portfolio, CV, and interview prep.
            </p>
          </motion.div>
        </AnimatedCard>
      </div>
    </section>
  )
}
