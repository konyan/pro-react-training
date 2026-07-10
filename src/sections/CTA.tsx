import AnimatedButton from '../components/AnimatedButton'
import AnimatedSection from '../components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer'

export default function CTA() {
  return (
    <section id="cta" className="bg-bg-dark">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-6 py-24 text-center lg:px-[120px]">
        <AnimatedSection>
          <p className="font-mono text-sm font-semibold uppercase tracking-[1px] text-primary">
            READY WHEN YOU ARE
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="max-w-[900px] text-3xl font-bold leading-tight text-white lg:text-[44px]">
            Let's talk about joining.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="max-w-[720px] text-[17px] leading-relaxed text-text-tertiary">
            Seats are limited so I can give real feedback. Send me a message — tell me where you are as
            a developer and I'll help you figure out if this path is right for you.
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap justify-center gap-3" stagger={0.08} delay={0.2}>
          <StaggerItem>
            <AnimatedButton variant="primary" className="px-6 py-3.5 text-[15px]">
              Message me to join
            </AnimatedButton>
          </StaggerItem>
          <StaggerItem>
            <AnimatedButton variant="outline" className="gap-2 px-5 py-3.5 text-[15px]">
              <span>💬</span> Messenger
            </AnimatedButton>
          </StaggerItem>
          <StaggerItem>
            <AnimatedButton variant="outline" className="gap-2 px-5 py-3.5 text-[15px]">
              <span>✈️</span> Telegram
            </AnimatedButton>
          </StaggerItem>
          <StaggerItem>
            <AnimatedButton variant="outline" className="gap-2 px-5 py-3.5 text-[15px]">
              <span>✉️</span> Email
            </AnimatedButton>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
