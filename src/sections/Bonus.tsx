import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

const modules = [
  {
    number: '01',
    title: 'Preparing to Get Hired',
    subtitle: 'Know the target',
    bullets: [
      'What employers actually hire for',
      'Reading job descriptions like a detective',
      'Full-time vs freelance — which path fits you now',
      'Your one-sentence positioning line',
    ],
    deliverable: 'Write your positioning line: "I build [X] with [tech] for [audience]."',
  },
  {
    number: '02',
    title: 'CV / Résumé That Gets Read',
    subtitle: 'One page that sells you',
    bullets: [
      'One-page dev CV led by the capstone',
      'Action + tech + result bullet formula',
      'Beating the ATS (applicant tracking system)',
      'Tailoring per role without rewriting',
    ],
    deliverable: 'Ship a one-page CV with your capstone as the lead project.',
  },
  {
    number: '03',
    title: 'LinkedIn Profile Setup',
    subtitle: 'Be findable, be credible',
    bullets: [
      'Headline & About section that sell',
      'Projects section with your capstone',
      'Keywords recruiters actually search for',
      'Making your profile discoverable',
    ],
    deliverable: 'Publish a LinkedIn profile with headline, About, and your capstone in Projects.',
  },
  {
    number: '04',
    title: 'Project Portfolio Setup',
    subtitle: 'Show, don\'t tell',
    bullets: [
      'Deploy your capstone live (Vercel / Netlify)',
      'A portfolio site that links everything together',
      'A proper case study with before/after & decisions',
      'A professional GitHub README',
      'A 60-second demo video',
    ],
    deliverable: 'Live URL + portfolio site + one written case study published.',
  },
  {
    number: '05',
    title: 'Freelancing & First Clients',
    subtitle: 'Getting paid to build',
    bullets: [
      'Where freelance work actually comes from',
      'Packaging a service (not selling hours)',
      'Pricing without guessing',
      'Writing proposals that win',
      'Delivering professionally & getting referrals',
      'Using your AI workflow to deliver faster',
    ],
    deliverable: 'Create one service package page and send your first proposal.',
  },
  {
    number: '06',
    title: 'Interviews & Landing the Offer',
    subtitle: 'Close the deal',
    bullets: [
      'The interview flow — what actually happens',
      'Walking through your capstone like a pro',
      'Common React / JS questions & how to answer them',
      'Take-home assignments — speed vs polish',
      'Behavioral answers (STAR method)',
      'Negotiation basics — don\'t leave money on the table',
    ],
    deliverable: 'Record yourself walking through the capstone in under 3 minutes.',
  },
]

const addons = [
  'Personal brand & content creation',
  'Open-source PR for credibility',
  'Networking that isn\'t awkward',
  'Contracts & invoicing basics',
]

export default function Bonus() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="bonus" className="bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 lg:gap-16 lg:px-[120px] lg:py-24">
        <AnimatedSection className="flex max-w-[900px] flex-col gap-4">
          <p className="font-mono text-sm font-semibold uppercase tracking-[2px] text-amber-600">
            BONUS TRACK
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-[40px]">
            Getting Hired — Career Launch Bonus.
          </h2>
          <p className="max-w-[820px] text-[17px] leading-relaxed text-text-secondary">
            Runs right after the build while your capstone is fresh. Every module ends with a
            concrete deliverable that reuses the app you already shipped — no new project to invent.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {modules.map((mod) => (
            <StaggerItem key={mod.number}>
              <AnimatedCard
                className="flex h-full flex-col gap-5 rounded-xl border border-border bg-surface p-6 lg:p-8"
                hover
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 font-mono text-sm font-bold text-amber-700">
                    {mod.number}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold leading-tight text-text-primary">{mod.title}</h3>
                    <span className="text-sm text-text-secondary">{mod.subtitle}</span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <ul className="flex flex-col gap-2.5">
                  {mod.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">
                        ✓
                      </span>
                      <span className="text-[14px] leading-snug text-text-primary">{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto flex items-start gap-2.5 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-3.5"
                >
                  <span className="flex-shrink-0 text-sm">🎯</span>
                  <p className="text-[13px] font-medium leading-snug text-text-primary">
                    <span className="font-semibold">Do this now:</span> {mod.deliverable}
                  </p>
                </motion.div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Optional Add-ons */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-6 lg:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">✦</span>
                <h3 className="text-xl font-bold text-text-primary">Optional Add-ons</h3>
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                  Extra
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {addons.map((addon) => (
                  <div key={addon} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">
                      +
                    </span>
                    <span className="text-[15px] text-text-primary">{addon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Teaching note */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
          className="flex flex-col items-start gap-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6 lg:flex-row lg:gap-6 lg:p-8"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white"
          >
            🎓
          </motion.div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-text-primary">
              Teaching Note — Hands-on from day one.
            </h3>
            <p className="text-[15px] leading-relaxed text-text-primary">
              This bonus track reuses the capstone you already built across both courses. No new
              projects — just packaging, presenting, and leveraging what you've got. It runs right
              after the build while everything is fresh and deployable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
