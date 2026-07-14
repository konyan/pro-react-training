import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Curriculum from './sections/Curriculum'
import HowItWorks from './sections/HowItWorks'
import Toolkit from './sections/Toolkit'
import Timeline from './sections/Timeline'
import Details from './sections/Details'
import Instructor from './sections/Instructor'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import ScrollProgress from './components/ScrollProgress'
import TrackedSection from './components/TrackedSection'

function App() {
  return (
    <div className="min-h-screen bg-bg-light text-text-primary">
      <ScrollProgress />
      <Navbar />
      <main>
        <TrackedSection name="hero"><Hero /></TrackedSection>
        <TrackedSection name="curriculum"><Curriculum /></TrackedSection>
        <TrackedSection name="howToLearn"><HowItWorks /></TrackedSection>
        <TrackedSection name="toolkit"><Toolkit /></TrackedSection>
        <TrackedSection name="timeline"><Timeline /></TrackedSection>
        <TrackedSection name="details"><Details /></TrackedSection>
        <TrackedSection name="instructor"><Instructor /></TrackedSection>
        <TrackedSection name="cta"><CTA /></TrackedSection>
      </main>
      <Footer />
    </div>
  )
}

export default App
