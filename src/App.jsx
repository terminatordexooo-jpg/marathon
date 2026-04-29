import { useEffect, useState } from 'react'
import ScrollProgress from './components/ScrollProgress.jsx'
import AuroraBackdrop from './components/AuroraBackdrop.jsx'
import ThunderClouds from './components/ThunderClouds.jsx'
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
    <div className="relative min-h-screen overflow-hidden bg-night-900 text-cream">
      <div className="pointer-events-none fixed inset-0 z-0">
        <ThunderClouds />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-black/70" />
      <AuroraBackdrop />
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
