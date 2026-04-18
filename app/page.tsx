import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

// Lazy load below-fold sections for performance
const StatsBar = dynamic(() => import('@/components/sections/StatsBar'))
const About = dynamic(() => import('@/components/sections/About'))
const Services = dynamic(() => import('@/components/sections/Services'))
const WhyMedrix = dynamic(() => import('@/components/sections/WhyMedrix'))
const Works = dynamic(() => import('@/components/sections/Works'))
const Clients = dynamic(() => import('@/components/sections/Clients'))
const Process = dynamic(() => import('@/components/sections/Process'))
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <WhyMedrix />
        <Works />
        <Clients />
        <Process />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton floating />
    </>
  )
}
