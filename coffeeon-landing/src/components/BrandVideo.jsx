import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Play, Pause, Smartphone, Zap, Clock, Coffee as CoffeeIcon, Volume2 } from 'lucide-react'

export default function BrandVideo() {
  const containerRef = useRef(null)
  const videoTextRef = useRef(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Enhanced video text sequences with cinematic timing
  const videoSequences = [
    {
      phase: 'intro',
      texts: [
        { text: "CoffeeOn doesn't vend.", duration: 2500, style: 'dramatic' },
        { text: "It's your smart barista", duration: 2500, style: 'elegant' }
      ]
    },
    {
      phase: 'selection',
      texts: [
        { text: "Save your perfect cup in the app", duration: 3000, style: 'tech' },
        { text: "skip the queue", duration: 2000, style: 'bold' },
        { text: "and make every coffee yours.", duration: 2500, style: 'personal' }
      ]
    },
    {
      phase: 'brewing',
      texts: [
        { text: "Hot, iced, or your own signature recipe", duration: 3500, style: 'luxurious' },
        { text: "in under a minute", duration: 2000, style: 'fast' },
        { text: "Real Milk – Fresh beans – Iced Options", duration: 3500, style: 'ingredients' }
      ]
    },
    {
      phase: 'collection',
      texts: [
        { text: "Available 24/7", duration: 2500, style: 'always' },
        { text: "CoffeeOn, Rule Your Ritual", duration: 4000, isTagline: true, style: 'tagline' }
      ]
    }
  ]

  const allTexts = videoSequences.flatMap(seq => seq.texts)
  const taglineText = "Coffee that moves with you, fits your routine, and feels like it's made just for you."

  useEffect(() => {
    // Cinematic hero section animations
    const tl = gsap.timeline()
    
    // Create cinematic entrance
    tl.set('.hero-bg', { scale: 1.2, opacity: 0 })
      .to('.hero-bg', { duration: 2, scale: 1, opacity: 1, ease: 'power2.out' })
      .from('.hero-title', {
        duration: 1.5,
        y: 150,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
      }, '-=1')
      .from('.hero-subtitle', {
        duration: 1.2,
        y: 80,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
      }, '-=0.8')
      .from('.hero-cta', {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)'
      }, '-=0.5')

    // Start video text animation
    setTimeout(() => animateVideoText(), 1500)

    return () => {
      tl.kill()
    }
  }, [])

  const animateVideoText = () => {
    if (!isPlaying) return

    const currentText = allTexts[currentTextIndex]
    if (!currentText) {
      setCurrentTextIndex(0)
      return
    }

    // Enhanced text animation based on style
    const getAnimationConfig = (style) => {
      switch (style) {
        case 'dramatic':
          return {
            initial: { opacity: 0, y: 80, scale: 0.8, rotateX: -15 },
            animate: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
            exit: { opacity: 0, y: -40, scale: 1.1, rotateX: 15 }
          }
        case 'elegant':
          return {
            initial: { opacity: 0, x: -60, scale: 0.9 },
            animate: { opacity: 1, x: 0, scale: 1 },
            exit: { opacity: 0, x: 60, scale: 0.9 }
          }
        case 'tech':
          return {
            initial: { opacity: 0, y: 30, skewX: 10 },
            animate: { opacity: 1, y: 0, skewX: 0 },
            exit: { opacity: 0, y: -30, skewX: -10 }
          }
        case 'tagline':
          return {
            initial: { opacity: 0, scale: 0.5, rotateY: -20 },
            animate: { opacity: 1, scale: 1, rotateY: 0 },
            exit: { opacity: 0, scale: 1.2, rotateY: 20 }
          }
        default:
          return {
            initial: { opacity: 0, y: 40, scale: 0.95 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -20, scale: 1.05 }
          }
      }
    }

    const config = getAnimationConfig(currentText.style)

    // Set initial state
    gsap.set('.video-text', config.initial)
    
    // Animate in
    gsap.to('.video-text', {
      ...config.animate,
      duration: 0.8,
      ease: currentText.isTagline ? 'back.out(1.7)' : 'power3.out',
      onComplete: () => {
        // Wait for duration, then animate out
        setTimeout(() => {
          gsap.to('.video-text', {
            ...config.exit,
            duration: 0.6,
            ease: 'power2.in',
            onComplete: () => {
              setCurrentTextIndex((prev) => (prev + 1) % allTexts.length)
            }
          })
        }, currentText.duration)
      }
    })
  }

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(animateVideoText, 100)
      return () => clearTimeout(timer)
    }
  }, [currentTextIndex, isPlaying])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const currentText = allTexts[currentTextIndex]

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Video Background */}
      <div className="hero-bg absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        {/* Cinematic particles */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-accent-gold/10 rounded-full animate-pulse-slow blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-cream-200/10 rounded-full animate-float blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-coffee-500/5 rounded-full animate-pulse-slow blur-2xl"></div>
        
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Video Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Video Text Display */}
          <div className="mb-20 h-40 flex items-center justify-center perspective-1000">
            <div
              ref={videoTextRef}
              className={`video-text font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight ${
                currentText?.isTagline 
                  ? 'tagline-text text-6xl md:text-8xl lg:text-9xl' 
                  : ''
              } ${
                currentText?.style === 'ingredients' 
                  ? 'text-accent-gold' 
                  : ''
              }`}
              style={{
                textShadow: currentText?.isTagline 
                  ? '0 0 30px rgba(212, 165, 116, 0.5), 2px 2px 4px rgba(0, 0, 0, 0.3)'
                  : '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              {currentText?.text || ''}
            </div>
          </div>

          {/* Enhanced Video Controls */}
          <div className="mb-16 flex items-center justify-center space-x-6">
            <button
              onClick={togglePlayback}
              className="group flex items-center justify-center w-20 h-20 glass rounded-full hover:scale-110 transition-all duration-300 hover:shadow-glow"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-white group-hover:text-accent-gold transition-colors" />
              ) : (
                <Play className="h-8 w-8 text-white group-hover:text-accent-gold transition-colors ml-1" />
              )}
            </button>
            
            <div className="hidden md:flex items-center space-x-4 text-white/90 text-base">
              <span className="font-mono">{String(Math.floor(currentTextIndex / 2)).padStart(2, '0')}:00</span>
              <div className="w-40 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-accent-gold to-accent-copper rounded-full transition-all duration-500 shadow-glow"
                  style={{ width: `${((currentTextIndex + 1) / allTexts.length) * 100}%` }}
                ></div>
              </div>
              <span className="font-mono">04:30</span>
              <Volume2 className="h-5 w-5 text-white/60" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="hero-title text-white mb-8">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
              <span className="block">{taglineText}</span>
            </h1>
          </div>

          {/* Enhanced Feature Highlights */}
          <div className="hero-subtitle grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="group flex flex-col items-center space-y-4 p-6 glass rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-accent-gold" />
              </div>
              <div className="text-center">
                <span className="font-semibold text-white text-lg block">Fast & Smart</span>
                <span className="text-white/70 text-sm">AI-powered brewing</span>
              </div>
            </div>
            
            <div className="group flex flex-col items-center space-y-4 p-6 glass rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-accent-gold" />
              </div>
              <div className="text-center">
                <span className="font-semibold text-white text-lg block">Available 24/7</span>
                <span className="text-white/70 text-sm">Never closed</span>
              </div>
            </div>
            
            <div className="group flex flex-col items-center space-y-4 p-6 glass rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CoffeeIcon className="h-8 w-8 text-accent-gold" />
              </div>
              <div className="text-center">
                <span className="font-semibold text-white text-lg block">Café Quality</span>
                <span className="text-white/70 text-sm">Barista-level drinks</span>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="hero-cta">
            <button className="group relative bg-gradient-gold hover:shadow-glow text-coffee-900 font-bold py-5 px-10 rounded-full text-xl transition-all duration-300 hover:scale-105 btn-pulse flex items-center space-x-4 mx-auto overflow-hidden">
              <Smartphone className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Download App</span>
              <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-white/80 text-lg mt-6 font-medium">
              Join <span className="text-accent-gold font-bold">50,000+</span> who've made the switch to smart coffee
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-6 bg-gradient-to-b from-accent-gold to-accent-copper rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-white/60 text-sm mt-2 font-medium tracking-wider">SCROLL</p>
      </div>
    </div>
  )
}