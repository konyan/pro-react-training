import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
    <section className="bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 lg:flex-row lg:gap-20 lg:px-[120px] lg:py-24">
        <StaggerContainer className="flex flex-1 flex-col items-start gap-7" stagger={0.08} delay={0.1}>
          <StaggerItem>
            <div className="flex items-center gap-2.5 rounded-full bg-callout-bg px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary">{t('hero.badge')}</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-sm font-medium uppercase tracking-[2px] text-text-secondary">
              {t('hero.subtitle')}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-text-primary lg:text-[48px] leading-[1.4]">
              {t('hero.title')}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[640px] text-base leading-relaxed text-text-secondary lg:text-lg">
              {t('hero.description')}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <span>⚡</span> {t('hero.weeksInfo')}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <span>💻</span> {t('hero.formatInfo')}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <span>🚀</span> {t('hero.startDate')}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-3">
              <AnimatedButton variant="primary" className="gap-2 px-5 py-3 text-[15px]">
                {t('hero.ctaPrimary')} <span>→</span>
              </AnimatedButton>
              <AnimatedButton variant="secondary" className="px-5 py-3 text-[15px]">
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

            <div className="flex overflow-x-auto text-xs lg:text-sm">
              <div className="w-10 flex-shrink-0 py-4 pr-3 text-right font-mono leading-6 text-[#3F4757] lg:w-11 lg:py-5 lg:pr-4">
                {Array.from({ length: activeLine }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              <div className="flex-1 whitespace-pre py-4 pr-4 font-mono leading-6 lg:py-5 lg:pr-5">
                {chars.slice(0, renderedCount).map((item, i) => (
                  <span key={i} className={item.color}>
                    {item.char === '\n' ? '\n' : item.char === ' ' ? '\u00A0' : item.char}
                  </span>
                ))}
                <span className="animate-cursor text-gray-200">|</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
