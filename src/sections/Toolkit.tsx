import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

const toolkitGroups = [
  {
    icon: '⌨︎',
    iconColor: 'text-action',
    borderColor: 'border-action',
    labelKey: 'toolkit.codeEditor',
    chips: ['VS Code', 'Claude', 'Claude Code', 'Cursor'],
    chipColor: 'bg-action',
  },
  {
    icon: '◐',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-400',
    labelKey: 'toolkit.designHandoff',
    chips: ['Figma', 'Pencil'],
    chipColor: 'bg-blue-400',
  },
  {
    icon: '⚛',
    iconColor: 'text-blue-300',
    borderColor: 'border-blue-300',
    labelKey: 'toolkit.frontendStack',
    chips: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Router', 'Tanstack Form', 'Zod'],
    chipColor: 'bg-blue-300',
  },
  {
    icon: '⌘',
    iconColor: 'text-feedback-success',
    borderColor: 'border-feedback-success',
    labelKey: 'toolkit.backendBaas',
    chips: ['Supabase', 'Firebase'],
    chipColor: 'bg-feedback-success',
  },
  {
    icon: '✓',
    iconColor: 'text-feedback-warning',
    borderColor: 'border-feedback-warning',
    labelKey: 'toolkit.testingQuality',
    chips: ['Vitest', 'React Testing Library', 'Playwright', 'Lighthouse'],
    chipColor: 'bg-feedback-warning',
  },
  {
    icon: '↗',
    iconColor: 'text-feedback-error',
    borderColor: 'border-feedback-error',
    labelKey: 'toolkit.shipCollaborate',
    chips: ['Git & GitHub', 'GitHub Actions CI', 'Vercel', 'Cloudflare'],
    chipColor: 'bg-feedback-error',
  },
  {
    icon: '⊞',
    iconColor: 'text-blue-200',
    borderColor: 'border-blue-200',
    labelKey: 'toolkit.projectManagement',
    chips: ['Trello', 'Notion', 'Discord', 'Jira'],
    chipColor: 'bg-blue-200',
  },
]

export default function Toolkit() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-surface-inverse">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 lg:gap-14 lg:px-12 lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-accent">
            {t('toolkit.heading')}
          </p>
          <h2 className="text-[2.125rem] font-extrabold tracking-tight text-neutral-100 lg:text-[2.5rem]">
            {t('toolkit.title')}
          </h2>
          <p className="max-w-[820px] text-[1.0625rem] leading-[1.55] text-text-dim">
            {t('toolkit.description')}
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-col gap-4" stagger={0.08}>
          {toolkitGroups.map((group) => {
            const label = t(group.labelKey)
            const count = group.chips.length
            return (
              <StaggerItem key={group.labelKey}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -3, borderColor: 'rgba(45, 55, 72, 0.8)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="flex flex-col items-start gap-4 rounded-[6px] border border-border-inverse bg-surface-code p-5 transition-colors md:flex-row md:items-center md:gap-6 lg:p-6"
                >
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { rotate: 5, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[6px] border ${group.borderColor} bg-neutral-900 text-lg ${group.iconColor}`}
                  >
                    {group.icon}
                  </motion.div>

                  <div className="flex w-full flex-col gap-0.5 md:w-[200px]">
                    <span className="text-[15px] font-semibold text-neutral-100">{label}</span>
                    <span className={`font-data text-[11px] font-medium uppercase tracking-wider ${group.iconColor}`}>
                      {t('toolkit.toolsCount', { count })}
                    </span>
                  </div>

                  <div className="flex w-full flex-wrap gap-2">
                    {group.chips.map((chip) => (
                      <motion.span
                        key={chip}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05, backgroundColor: '#373737' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        className="flex items-center gap-1.5 rounded-full border border-border-inverse bg-neutral-900 px-3 py-1.5 font-data text-sm text-neutral-300"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${group.chipColor}`} />
                        {chip}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
