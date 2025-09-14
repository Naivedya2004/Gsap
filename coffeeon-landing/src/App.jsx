import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BrandVideo from './components/BrandVideo'
import WhoWeAre from './components/WhoWeAre'
import Navigation from './components/Navigation'
import ThreeBackground from './components/ThreeBackground'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.set('body', { opacity: 1 })
    
    // Smooth scroll configuration
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false
    })

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-cream overflow-x-hidden">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Brand Video Section */}
        <section id="home" className="relative">
          <BrandVideo />
        </section>

        {/* Who We Are Section */}
        <section id="about" className="relative">
          <WhoWeAre />
        </section>
      </main>
    </div>
  )
}

export default App