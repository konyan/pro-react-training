import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

const toolkits = [
  {
    icon: '⌨︎',
    iconColor: 'text-primary',
    borderColor: 'border-primary',
    label: 'Code & AI editor',
    meta: '4 tools',
    metaColor: 'text-primary',
    chips: ['VS Code', 'Claude', 'Claude Code', 'Cursor'],
    chipColor: 'bg-primary',
  },
  {
    icon: '◐',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-400',
    label: 'Design & handoff',
    meta: '2 tools',
    metaColor: 'text-purple-400',
    chips: ['Figma', 'Pencil'],
    chipColor: 'bg-purple-400',
  },
  {
    icon: '⚛',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-400',
    label: 'Frontend stack',
    meta: '5 tools',
    metaColor: 'text-blue-400',
    chips: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query' , 'React Router' ,'Tanstack Form','Zod'],
    chipColor: 'bg-blue-400',
  },
  {
    icon: '⌘',
    iconColor: 'text-success',
    borderColor: 'border-success',
    label: 'Backend / BaaS',
    meta: '2 tools',
    metaColor: 'text-success',
    chips: ['Supabase', 'Firebase'],
    chipColor: 'bg-success',
  },
  {
    icon: '✓',
    iconColor: 'text-warning',
    borderColor: 'border-warning',
    label: 'Testing & quality',
    meta: '4 tools',
    metaColor: 'text-warning',
    chips: ['Vitest', 'React Testing Library', 'Playwright', 'Lighthouse'],
    chipColor: 'bg-warning',
  },
  {
    icon: '↗',
    iconColor: 'text-error',
    borderColor: 'border-error',
    label: 'Ship & collaborate',
    meta: '4 tools',
    metaColor: 'text-error',
    chips: ['Git & GitHub', 'GitHub Actions CI', 'Vercel', 'Cloudflare'],
    chipColor: 'bg-error',
  },
]

export default function Toolkit() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-bg-dark">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-6 py-24 lg:px-[120px]">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[2px] text-primary">
            THE TOOLKIT
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-50 lg:text-[40px]">
            The tools you'll actually use.
          </h2>
          <p className="max-w-[820px] text-[17px] leading-relaxed text-text-tertiary">
            The same editor, AI agents, design and shipping stack that senior engineers reach for
            every day, you'll be comfortable in all of them by the end.
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-col gap-4" stagger={0.08}>
          {toolkits.map((group) => (
            <StaggerItem key={group.label}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -3, borderColor: 'rgba(45, 55, 72, 0.8)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="flex flex-col items-start gap-6 rounded-xl border border-border-dark bg-surface-dark p-6 transition-colors md:flex-row md:items-center"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { rotate: 5, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border ${group.borderColor} bg-[#12141C] text-lg ${group.iconColor}`}
                >
                  {group.icon}
                </motion.div>

                <div className="flex w-[200px] flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-gray-50">{group.label}</span>
                  <span className={`font-mono text-[11px] font-medium uppercase tracking-wider ${group.metaColor}`}>
                    {group.meta}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.chips.map((chip) => (
                    <motion.span
                      key={chip}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05, backgroundColor: '#1f2937' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="flex items-center gap-1.5 rounded-full border border-border-dark bg-[#12141C] px-3 py-1.5 font-mono text-sm text-gray-200"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${group.chipColor}`} />
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
