import { useTranslation } from 'react-i18next'
import AnimatedButton from '../components/AnimatedButton'
import AnimatedSection from '../components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'
import { trackCta } from '../hooks/useAnalytics'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section id="cta" className="bg-surface-inverse">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 py-16 text-center lg:px-12 lg:py-24">
        <AnimatedSection>
          <p className="text-[0.6875rem] font-extrabold italic uppercase tracking-[0.14em] text-accent">
            {t('cta.heading')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="max-w-[900px] text-3xl font-bold leading-tight text-white lg:text-[44px]">
            {t('cta.title')}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="max-w-[720px] text-[1.0625rem] leading-[1.55] text-text-dim">
            {t('cta.description')}
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center" stagger={0.08} delay={0.2}>
          <StaggerItem className="w-full sm:w-auto">
            <AnimatedButton variant="primary" className="w-full px-6 py-3.5 text-[15px]" onClick={() => {
              trackCta('cta_join')
              window.open('https://forms.gle/K7qDLEQT4wfJcoJP7', '_blank')
            }}>
              {t('cta.buttonText')}
            </AnimatedButton>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
