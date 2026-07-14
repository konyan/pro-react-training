import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedButton from '../components/AnimatedButton'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

import { trackCta } from '../hooks/useAnalytics'

// Tags for potential future use
// const tags = ['React 19 & RSC', 'Server Components', 'TypeScript', 'Supabase', 'Full-Stack', 'AI-Assisted', 'Testing']

const codeLines = [
  { tokens: [{ text: "'use server'", color: 'text-feedback-warning' }] },
  { tokens: [] },
  { tokens: [
    { text: 'import', color: 'text-blue-300' },
    { text: ' { ', color: 'text-neutral-300' },
    { text: 'createClient', color: 'text-blue-200' },
    { text: ' } ', color: 'text-neutral-300' },
    { text: 'from', color: 'text-blue-300' },
    { text: " '@/lib/supabase'", color: 'text-emerald-400' },
  ]},
  { tokens: [] },
  { tokens: [
    { text: 'export async function', color: 'text-blue-300' },
    { text: ' ', color: 'text-neutral-300' },
    { text: 'Enroll', color: 'text-blue-200' },
    { text: '() {', color: 'text-neutral-300' },
  ]},
  { tokens: [
    { text: '  const', color: 'text-blue-300' },
    { text: ' supabase ', color: 'text-neutral-300' },
    { text: '= ', color: 'text-neutral-300' },
    { text: 'createClient', color: 'text-blue-200' },
    { text: '()', color: 'text-neutral-300' },
  ]},
  { tokens: [
    { text: '  const', color: 'text-blue-300' },
    { text: ' { data } ', color: 'text-neutral-300' },
    { text: '= await', color: 'text-blue-300' },
    { text: ' supabase', color: 'text-neutral-300' },
  ]},
  { tokens: [
    { text: '    .from', color: 'text-blue-200' },
    { text: '(', color: 'text-neutral-300' },
    { text: "'students'", color: 'text-emerald-400' },
    { text: ').insert(', color: 'text-neutral-300' },
    { text: 'cohort', color: 'text-red-400' },
    { text: ')', color: 'text-neutral-300' },
  ]},
  { tokens: [] },
  { tokens: [
    { text: '  return', color: 'text-blue-300' },
    { text: ' ', color: 'text-neutral-300' },
    { text: '<Success', color: 'text-blue-200' },
    { text: ' name', color: 'text-red-400' },
    { text: '=', color: 'text-neutral-300' },
    { text: '{data.name}', color: 'text-emerald-400' },
    { text: ' />', color: 'text-blue-200' },
  ]},
  { tokens: [{ text: '}', color: 'text-neutral-300' }] },
]

const TYPING_SPEED_MS = 35

interface CodeChar {
  char: string
  color: string
  line: number
}

function useTypewriterCode(lines: typeof codeLines, startDelay = 600) {
  const chars = useMemo<CodeChar[]>(() => {
    const result: CodeChar[] = []
    lines.forEach((line, lineIndex) => {
      line.tokens.forEach((token) => {
        for (const char of token.text) {
          result.push({ char, color: token.color, line: lineIndex })
        }
      })
      if (lineIndex < lines.length - 1) {
        result.push({ char: '\n', color: '', line: lineIndex })
      }
    })
    return result
  }, [lines])

  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev >= chars.length) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, TYPING_SPEED_MS)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(startTimeout)
  }, [chars, startDelay])

  return { chars, visibleCount }
}

export default function Hero() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()
  const { chars, visibleCount } = useTypewriterCode(codeLines)
  const activeLine =
    visibleCount > 0 ? chars[Math.min(visibleCount - 1, chars.length - 1)].line + 1 : 0
  const renderedCount = shouldReduceMotion ? chars.length : visibleCount

  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-16 lg:flex-row lg:gap-20 lg:px-12 lg:py-24">
        <StaggerContainer className="flex flex-1 flex-col items-start gap-7" stagger={0.08} delay={0.1}>
          <StaggerItem>
            <div className="flex items-center gap-2.5 rounded-full bg-surface-selected px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-action" />
              <span className="text-sm font-semibold text-action">{t('hero.badge')}</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-text-muted">
              {t('hero.subtitle')}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-[2.125rem] font-extrabold italic leading-[1.05] tracking-[-0.02em] text-text lg:text-[3.375rem]">
              {t('hero.title')}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[640px] text-[1.0625rem] leading-[1.55] text-text-muted lg:text-lg">
              {t('hero.description')}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-text">
                <span>⚡</span> {t('hero.weeksInfo')}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-text">
                <span>💻</span> {t('hero.formatInfo')}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-text">
                <span>🚀</span> {t('hero.startDate')}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-3">
              <AnimatedButton variant="primary" className="gap-2 px-5 py-3 text-[15px]" onClick={() => {
                trackCta('hero_join')
                window.open('https://forms.gle/K7qDLEQT4wfJcoJP7', '_blank')
              }}>
                {t('hero.ctaPrimary')} <span>→</span>
              </AnimatedButton>
              <AnimatedButton variant="secondary" className="px-5 py-3 text-[15px]" onClick={() => {
                trackCta('hero_see_curriculum')
                document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                {t('hero.ctaSecondary')}
              </AnimatedButton>
            </div>
          </StaggerItem>

          {/* <StaggerItem>
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
          </StaggerItem> */}
        </StaggerContainer>

        <motion.div
          className="w-full min-w-0 lg:w-[560px]"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="overflow-hidden rounded-[6px] bg-surface-code shadow-[0_12px_32px_0_#15308F24]"
          >
            <div className="flex items-center gap-3 border-b border-border-inverse px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-feedback-error" />
                <span className="h-2.5 w-2.5 rounded-full bg-feedback-warning" />
                <span className="h-2.5 w-2.5 rounded-full bg-feedback-success" />
              </div>
              <span className="font-data text-xs text-text-dim">app/page.tsx</span>
            </div>

            <div className="flex overflow-x-auto text-xs lg:text-sm">
              <div className="w-10 flex-shrink-0 py-4 pr-3 text-right font-data leading-6 text-neutral-600 lg:w-11 lg:py-5 lg:pr-4">
                {Array.from({ length: activeLine }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              <div className="flex-1 whitespace-pre py-4 pr-4 font-data leading-6 lg:py-5 lg:pr-5">
                {chars.slice(0, renderedCount).map((item, i) => (
                  <span key={i} className={item.color}>
                    {item.char === '\n' ? '\n' : item.char === ' ' ? '\u00A0' : item.char}
                  </span>
                ))}
                <span className="animate-cursor text-neutral-300">|</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
