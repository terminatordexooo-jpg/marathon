import { useEffect, useState } from 'react'
import CursorGlow from './components/CursorGlow.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import Process from './components/Process.jsx'
import Showcase from './components/Showcase.jsx'
import TerminalSection from './components/TerminalSection.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'
import SuccessModal from './components/SuccessModal.jsx'

function Divider() {
  return (
    <div className="mx-auto my-4 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#C967E8]/30 to-transparent" />
  )
}

export default function App() {
  const [successOpen, setSuccessOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('status') === 'success' || window.location.hash === '#success') {
      setSuccessOpen(true)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#010101] text-white">
      <CursorGlow />
      <ScrollProgress />
      <Hero />
      <div className="relative bg-[#010101]">
        <Process />
        <Divider />
        <Showcase />
        <Divider />
        <TerminalSection />
        <Divider />
        <Pricing onSuccessPreview={() => setSuccessOpen(true)} />
        <Footer />
      </div>
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </div>
  )
}
