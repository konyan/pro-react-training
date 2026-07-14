import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'

gsap.registerPlugin(ScrollTrigger)

const phaseColorMap: Record<string, string> = {
  'Course 01 · React': 'bg-surface-selected text-action',
  'Course 02 · AI Coding': 'bg-blue-100 text-accent',
  'Capstone · Group Build': 'bg-feedback-warning-surface text-feedback-warning-text',
  'Bonus · Career Launch': 'bg-feedback-warning/15 text-feedback-warning-text',
}

export default function Timeline() {
  const { t } = useTranslation()
  const tableRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const shouldReduceMotion = useReducedMotion()

  const rows = t('timeline.rows', { returnObjects: true }) as Array<{
    week: string
    dates: string
    phase: string
    title: string
    desc: string
  }>

  useEffect(() => {
    if (shouldReduceMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rowRefs.current.filter(Boolean),
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 75%',
            end: 'bottom 60%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, tableRef)

    return () => ctx.revert()
  }, [shouldReduceMotion])

  return (
    <section id="timeline" className="bg-surface-sunken">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-16 lg:px-12 lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-action">
            {t('timeline.heading')}
          </p>
          <h2 className="text-[2.125rem] font-extrabold tracking-tight text-text">
            {t('timeline.title')}
          </h2>
          <p className="max-w-[720px] text-[1.0625rem] leading-[1.55] text-text-muted">
            {t('timeline.description')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="w-fit rounded-full border border-border-default bg-surface px-4 py-2 text-sm text-text">
            {t('timeline.scheduleInfo')}
          </div>
        </AnimatedSection>

        <div ref={tableRef} className="overflow-hidden rounded-[6px] border border-border-default bg-surface">
          <div className="hidden grid-cols-[60px_140px_200px_1fr] gap-4 px-6 py-4 text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-text-muted lg:grid">
            <span>{t('timeline.weekHeader')}</span>
            <span>{t('timeline.datesHeader')}</span>
            <span>{t('timeline.phaseHeader')}</span>
            <span>{t('timeline.focusHeader')}</span>
          </div>

          <div className="hidden h-px bg-border-default lg:block" />

          {rows.map((row, idx) => {
            const isBonus = row.phase === 'Bonus · Career Launch'
            const phaseColor = phaseColorMap[row.phase] ?? 'bg-surface-selected text-action'

            return (
              <div
                key={row.week}
                ref={(el) => { rowRefs.current[idx] = el }}
                className={`border-b border-border-default transition-colors last:border-b-0 lg:grid lg:grid-cols-[60px_140px_200px_1fr] lg:items-center lg:gap-4 lg:border-b-0 lg:px-6 lg:py-4 ${
                  isBonus
                    ? 'bg-gradient-to-r from-feedback-warning-surface via-feedback-warning-surface/80 to-surface hover:bg-feedback-warning-surface/90'
                    : `hover:bg-surface-selected/30 ${idx % 2 === 1 ? 'bg-surface-sunken' : 'bg-surface'}`
                }`}
              >
                {/* Mobile */}
                <div className="flex flex-col gap-3 p-5 lg:hidden">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${phaseColor}`}>
                      {isBonus && <span className="mr-1">🎁</span>}
                      {row.phase}
                    </span>
                    <span className="font-data text-sm text-text-muted">{row.dates}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-data text-sm font-bold ${
                      isBonus
                        ? 'bg-feedback-warning text-white'
                        : 'bg-surface-sunken text-text'
                    }`}>
                      {row.week}
                    </span>
                    <span className="text-[15px] font-semibold text-text">{row.title}</span>
                  </div>
                  <span className="text-sm leading-[1.55] text-text-muted">{row.desc}</span>
                </div>

                {/* Desktop */}
                <span className="hidden lg:block">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-data text-sm font-bold ${
                    isBonus
                      ? 'bg-feedback-warning text-white'
                      : 'text-text'
                  }`}>
                    {row.week}
                  </span>
                </span>
                <span className="hidden text-sm text-text-muted lg:block">{row.dates}</span>
                <span className={`hidden w-fit rounded-full px-2.5 py-1 text-xs font-semibold lg:block ${phaseColor}`}>
                  {isBonus && <span className="mr-1">🎁</span>}
                  {row.phase}
                </span>
                <div className="hidden flex-col gap-1 lg:flex">
                  <span className="text-[15px] font-semibold text-text">{row.title}</span>
                  <span className="text-sm leading-[1.55] text-text-muted">{row.desc}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
