import { useEffect, useState } from 'react'
import ScrollProgress from './components/ScrollProgress.jsx'
import AuroraBackdrop from './components/AuroraBackdrop.jsx'
import BubblesBackdrop from './components/BubblesBackdrop.jsx'
import HeroSection from './components/HeroSection.jsx'
import WhoAmIBlock from './components/WhoAmIBlock.jsx'
import SystemBlock from './components/SystemBlock.jsx'
import TestimonialsBlock from './components/TestimonialsBlock.jsx'
import PricingBlock from './components/PricingBlock.jsx'
import Footer from './components/Footer.jsx'
import SuccessModal from './components/SuccessModal.jsx'

export default function App() {
  const [successOpen, setSuccessOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('status') === 'success' || window.location.hash === '#success') {
      setSuccessOpen(true)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#1A1815]">
      <AuroraBackdrop />
      <BubblesBackdrop />
      <ScrollProgress />
      <HeroSection />
      <WhoAmIBlock />
      <SystemBlock />
      <TestimonialsBlock />
      <PricingBlock onSuccessPreview={() => setSuccessOpen(true)} />
      <Footer />
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </div>
  )
}
