import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Curriculum from './sections/Curriculum'
import HowItWorks from './sections/HowItWorks'
import Toolkit from './sections/Toolkit'
import Timeline from './sections/Timeline'
import Details from './sections/Details'
import Instructor from './sections/Instructor'
import CTA from './sections/CTA'
import Bonus from './sections/Bonus'
import Footer from './sections/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-bg-light text-text-primary">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Curriculum />
        <HowItWorks />
        <Toolkit />
        <Timeline />
        <Details />
        <Instructor />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
