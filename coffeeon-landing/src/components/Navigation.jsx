import React, { useState, useEffect } from 'react'
import { Coffee, Menu, X, Smartphone, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Cinematic navigation entrance
    gsap.from('.nav-item', {
      duration: 1.2,
      y: -50,
      opacity: 0,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.5
    })

    // Logo animation
    gsap.from('.logo-text', {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: 'back.out(1.7)',
      delay: 0.3
    })
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    
    if (!isMenuOpen) {
      gsap.to('.mobile-menu', {
        duration: 0.4,
        opacity: 1,
        y: 0,
        ease: 'power3.out'
      })
      gsap.from('.mobile-nav-item', {
        duration: 0.6,
        x: -40,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1
      })
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-dark shadow-coffee backdrop-blur-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="nav-item flex items-center space-x-3 cursor-pointer group" 
                 onClick={() => scrollToSection('home')}>
              <div className="relative">
                <Coffee className="h-10 w-10 text-accent-gold group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl group-hover:bg-accent-gold/40 transition-all duration-300"></div>
              </div>
              <div className="logo-text">
                <span className="font-heading font-bold text-2xl bg-gradient-to-r from-accent-gold via-accent-copper to-accent-bronze bg-clip-text text-transparent">
                  CoffeeOn
                </span>
                <div className="h-0.5 bg-gradient-to-r from-accent-gold to-transparent group-hover:from-accent-copper transition-all duration-300"></div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <button
                onClick={() => scrollToSection('home')}
                className="nav-item relative text-white hover:text-accent-gold transition-all duration-300 font-medium text-lg group"
              >
                Home
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-item relative text-white hover:text-accent-gold transition-all duration-300 font-medium text-lg group"
              >
                About
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></div>
              </button>
              
              {/* Enhanced CTA Button */}
              <button className="nav-item group relative bg-gradient-gold hover:shadow-glow text-coffee-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="flex items-center space-x-2 relative z-10">
                  <Smartphone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Download App</span>
                </div>
                <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="nav-item relative p-2 text-white hover:text-accent-gold transition-all duration-300 group"
              >
                <div className="w-6 h-6 relative">
                  {isMenuOpen ? (
                    <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden glass-dark backdrop-blur-2xl border-t border-accent-gold/20">
            <div className="px-6 pt-4 pb-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="mobile-nav-item block w-full text-left px-4 py-3 text-white hover:text-accent-gold hover:bg-accent-gold/10 rounded-xl transition-all duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="mobile-nav-item block w-full text-left px-4 py-3 text-white hover:text-accent-gold hover:bg-accent-gold/10 rounded-xl transition-all duration-300 font-medium"
              >
                About
              </button>
              <button className="mobile-nav-item w-full bg-gradient-gold hover:shadow-glow text-coffee-900 px-6 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group">
                <Smartphone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Download App</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}