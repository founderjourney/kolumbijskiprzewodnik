import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import PurposeSection from './components/PurposeSection'
import DestinationsSection from './components/DestinationsSection'
import TestimonialsSection from './components/TestimonialsSection'
import AboutAdrianSection from './components/AboutAdrianSection'
import CTASection from './components/CTASection'
import BackToTopButton from './components/BackToTopButton'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <PurposeSection />
      <div id="destinations">
        <DestinationsSection />
      </div>
      <TestimonialsSection />
      <div id="about">
        <AboutAdrianSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <BackToTopButton />
    </div>
  )
}

export default App