import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

gsap.registerPlugin(ScrollTrigger)

const rows = [
  { week: '1', dates: '01–02 Aug', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'React Fundamentals', desc: 'How Rendering Works: JSX, components, props, controlled forms & TypeScript · build a product card' },
  { week: '2', dates: '08–09 Aug', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'Hooks', desc: 'State & Side Effects: useState, useEffect, custom hooks & first tests · build a live search box' },
  { week: '3', dates: '15–16 Aug', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'Bigger State — Reducers & Context', desc: 'useReducer, Context & re-render traps · build a cart with a global badge' },
  { week: '4', dates: '22–23 Aug', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'Loading States Done Right — Suspense', desc: 'Declarative loading & useTransition · build a profile with skeleton loaders' },
  { week: '5', dates: '29–30 Aug', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'Reusable Component Patterns', desc: 'Compound components & render props · build a Modal/Dialog family' },
  { week: '6', dates: '05–06 Sep', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'Performance & Optimization', desc: 'Profile first, React 19 Compiler, virtualization · build an infinite feed' },
  { week: '7', dates: '12–13 Sep', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'React Server Components (RSC)', desc: 'Server vs Client, Server Actions · build a blog post + comment form' },
  { week: '8', dates: '19–20 Sep', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'Backend Without a Backend — Supabase & BaaS', desc: 'Auth, Postgres, storage & Row-Level Security · give your app real accounts & data' },
  { week: '9', dates: '26–27 Sep', phase: 'Course 01 · React', phaseColor: 'bg-callout-bg text-primary', title: 'Shipping It — Production Essentials', desc: 'Testing, Core Web Vitals, a11y & security · ship a hardened login form' },
  { week: '10', dates: '03–04 Oct', phase: 'Course 02 · AI Coding', phaseColor: 'bg-blue-100 text-accent-blue', title: 'AI On-Ramp + How Agents Work', desc: 'Prompting, reviewing AI output, context budgets · pick your own project' },
  { week: '11', dates: '10–11 Oct', phase: 'Course 02 · AI Coding', phaseColor: 'bg-blue-100 text-accent-blue', title: 'Consistency → Slicing → Spec-Driven Dev', desc: 'AGENTS.md, vertical slicing, plan mode & CI guardrails · spec a real feature' },
  { week: '12', dates: '17–18 Oct', phase: 'Capstone · Group Build', phaseColor: 'bg-amber-100 text-amber-700', title: 'Group Build — Week 1', desc: 'Drive your own full-stack project feature-by-feature through a full agent workflow' },
  { week: '13', dates: '24–25 Oct', phase: 'Capstone · Group Build', phaseColor: 'bg-amber-100 text-amber-700', title: 'Group Build — Week 2 + Demo', desc: 'Harden, test & ship, then present your finished app on demo day' },
]

export default function Timeline() {
  const tableRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const shouldReduceMotion = useReducedMotion()

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
    <section id="timeline" className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 lg:px-[120px] lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[1px] text-primary">
            THE 13-WEEK TIMELINE
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[36px]">
            Thirteen weeks, one weekend at a time.
          </h2>
          <p className="max-w-[720px] text-[17px] leading-relaxed text-text-secondary">
            Nine weeks to build production React with a real Supabase backend, two to work with AI
            agents, then a two-week group build where you ship your own full-stack project.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="w-fit rounded-full border border-border bg-bg-light px-4 py-2 text-sm text-text-primary">
            Starts Sat 1 Aug 2026 · 13 weeks · 6 hrs/week · Sat & Sun · 3 hrs/day
          </div>
        </AnimatedSection>

        <div ref={tableRef} className="overflow-hidden rounded-lg border border-border bg-bg-light">
          <div className="hidden grid-cols-[60px_140px_200px_1fr] gap-4 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary lg:grid">
            <span>Week</span>
            <span>Dates</span>
            <span>Phase</span>
            <span>Focus</span>
          </div>

          <div className="hidden h-px bg-border lg:block" />

          {rows.map((row, idx) => (
            <div
              key={row.week}
              ref={(el) => { rowRefs.current[idx] = el }}
              className={`border-b border-border transition-colors last:border-b-0 hover:bg-callout-bg/30 lg:grid lg:grid-cols-[60px_140px_200px_1fr] lg:items-center lg:gap-4 lg:border-b-0 lg:px-6 lg:py-4 ${idx % 2 === 1 ? 'bg-surface' : 'bg-bg-light'}`}
            >
              <div className="flex flex-col gap-3 p-5 lg:hidden">
                <div className="flex items-center justify-between gap-3">
                  <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${row.phaseColor}`}>
                    {row.phase}
                  </span>
                  <span className="font-mono text-sm text-text-secondary">{row.dates}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-surface font-mono text-sm font-bold text-text-primary">
                    {row.week}
                  </span>
                  <span className="text-[15px] font-semibold text-text-primary">{row.title}</span>
                </div>
                <span className="text-sm leading-relaxed text-text-secondary">{row.desc}</span>
              </div>

              <span className="hidden text-[15px] font-semibold text-text-primary lg:block">{row.week}</span>
              <span className="hidden text-sm text-text-secondary lg:block">{row.dates}</span>
              <span className={`hidden w-fit rounded-full px-2.5 py-1 text-xs font-semibold lg:block ${row.phaseColor}`}>
                {row.phase}
              </span>
              <div className="hidden flex-col gap-1 lg:flex">
                <span className="text-[15px] font-semibold text-text-primary">{row.title}</span>
                <span className="text-sm leading-relaxed text-text-secondary">{row.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
