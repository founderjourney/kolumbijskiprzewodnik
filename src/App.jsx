import LanguageSelector from './components/LanguageSelector'
import HeroSection from './components/HeroSection'
import PurposeSection from './components/PurposeSection'
import DestinationsSection from './components/DestinationsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="App">
      <LanguageSelector />
      <HeroSection />
      <PurposeSection />
      <DestinationsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default App