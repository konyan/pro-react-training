import { motion, useReducedMotion } from 'framer-motion'
import AnimatedButton from '../components/AnimatedButton'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

const tags = ['React 19 & RSC', 'Server Components', 'TypeScript', 'Supabase', 'Full-Stack', 'AI-Assisted', 'Testing']

const codeLines = [
  { tokens: [{ text: "'use server'", color: 'text-warning' }] },
  { tokens: [] },
  { tokens: [
    { text: 'import', color: 'text-purple-400' },
    { text: ' { ', color: 'text-gray-200' },
    { text: 'createClient', color: 'text-blue-400' },
    { text: ' } ', color: 'text-gray-200' },
    { text: 'from', color: 'text-purple-400' },
    { text: " '@/lib/supabase'", color: 'text-emerald-400' },
  ]},
  { tokens: [] },
  { tokens: [
    { text: 'export async function', color: 'text-purple-400' },
    { text: ' ', color: 'text-gray-200' },
    { text: 'Enroll', color: 'text-blue-400' },
    { text: '() {', color: 'text-gray-200' },
  ]},
  { tokens: [
    { text: '  const', color: 'text-purple-400' },
    { text: ' supabase ', color: 'text-gray-200' },
    { text: '= ', color: 'text-gray-200' },
    { text: 'createClient', color: 'text-blue-400' },
    { text: '()', color: 'text-gray-200' },
  ]},
  { tokens: [
    { text: '  const', color: 'text-purple-400' },
    { text: ' { data } ', color: 'text-gray-200' },
    { text: '= await', color: 'text-purple-400' },
    { text: ' supabase', color: 'text-gray-200' },
  ]},
  { tokens: [
    { text: '    .from', color: 'text-blue-400' },
    { text: '(', color: 'text-gray-200' },
    { text: "'students'", color: 'text-emerald-400' },
    { text: ').insert(', color: 'text-gray-200' },
    { text: 'cohort', color: 'text-red-400' },
    { text: ')', color: 'text-gray-200' },
  ]},
  { tokens: [] },
  { tokens: [
    { text: '  return', color: 'text-purple-400' },
    { text: ' ', color: 'text-gray-200' },
    { text: '<Success', color: 'text-blue-400' },
    { text: ' name', color: 'text-red-400' },
    { text: '=', color: 'text-gray-200' },
    { text: '{data.name}', color: 'text-emerald-400' },
    { text: ' />', color: 'text-blue-400' },
  ]},
  { tokens: [{ text: '}', color: 'text-gray-200' }] },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
  },
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-20 px-6 py-24 lg:flex-row lg:px-[120px]">
        <StaggerContainer className="flex flex-1 flex-col items-start gap-7" stagger={0.08} delay={0.1}>
          <StaggerItem>
            <div className="flex items-center gap-2.5 rounded-full bg-callout-bg px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary">Now enrolling · Junior & Mid developers</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-sm font-medium uppercase tracking-[2px] text-text-secondary">
              THE FRONTEND PATH · 2026
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-text-primary lg:text-[56px]">
              Go from writing React to engineering the real thing.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[640px] text-lg leading-relaxed text-text-secondary">
              A hands-on, two-course path that teaches modern React deeply, all the way to a tested,
              production-ready full-stack app with real accounts and a database, then shows you how
              to build software with AI agents the way senior engineers actually work in 2026.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <span>⚡</span> 13 weeks · 6 hrs/week
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <span>💻</span> Live online + OJT mentoring
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <span>🚀</span> Starts Aug 2026
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-3">
              <AnimatedButton variant="primary" className="gap-2 px-5 py-3 text-[15px]">
                Message me to join <span>→</span>
              </AnimatedButton>
              <AnimatedButton variant="secondary" className="px-5 py-3 text-[15px]">
                See the curriculum
              </AnimatedButton>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, backgroundColor: '#E5E7EB' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="rounded-full bg-surface px-2.5 py-1.5 font-mono text-xs text-text-secondary"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        <motion.div
          className="w-full lg:w-[560px]"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="overflow-hidden rounded-xl bg-surface-dark shadow-xl"
          >
            <div className="flex items-center gap-3 border-b border-border-dark px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-error" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning" />
                <span className="h-2.5 w-2.5 rounded-full bg-success" />
              </div>
              <span className="font-mono text-xs text-text-tertiary">app/page.tsx</span>
            </div>

            <div className="flex text-sm">
              <div className="w-11 flex-shrink-0 py-5 pr-4 text-right font-mono leading-6 text-[#3F4757]">
                {codeLines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              <div className="flex-1 py-5 pr-5 font-mono leading-6">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="flex min-h-[24px] flex-wrap items-center"
                  >
                    {line.tokens.map((token, j) => (
                      <span key={j} className={token.color}>
                        {token.text}
                      </span>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
