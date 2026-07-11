import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

const badgesRow1 = ['React', 'Next.js', 'TypeScript', 'Supabase']
const badgesRow2 = ['Hono / Node', 'Edge / Cloudflare', 'Agentic Coding']

export default function Instructor() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="instructor" className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 lg:gap-12 lg:px-[120px] lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[1px] text-primary">
            YOUR INSTRUCTOR
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[36px]">
            Learn from someone who ships & leads.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            className="flex h-[360px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-dark lg:h-[480px]"
          >
            <img
              src="/konyan.webp"
              alt="Nyan Lin Tun"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="flex flex-1 flex-col gap-5">
            <AnimatedSection>
              <h3 className="text-[28px] font-bold text-text-primary">Nyan Lin Tun</h3>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-base italic text-primary">
                Senior Full-Stack JS Developer & Project Director
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-base leading-relaxed text-text-secondary">
                8+ years building and leading production apps across web, mobile and IoT. I run
                developer training programs and teach junior devs React, Next.js and agentic coding
                in a real on-the-job format — this course is that experience, structured.
              </p>
            </AnimatedSection>

            <StaggerContainer className="flex flex-wrap gap-2" stagger={0.05}>
              {badgesRow1.map((badge) => (
                <StaggerItem key={badge}>
                  <motion.span
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, borderColor: '#0D9373', color: '#0D9373' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="inline-block rounded-full border border-border bg-bg-light px-3.5 py-1.5 font-mono text-sm text-text-primary"
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
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, borderColor: '#0D9373', color: '#0D9373' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="inline-block rounded-full border border-border bg-bg-light px-3.5 py-1.5 font-mono text-sm text-text-primary"
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
