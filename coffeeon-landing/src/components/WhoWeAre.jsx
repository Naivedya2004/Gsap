import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Smartphone, 
  Zap, 
  Coffee, 
  Clock, 
  Leaf, 
  Users, 
  Star,
  Download,
  ArrowRight
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhoWeAre() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    // Main section animation
    gsap.fromTo(content, 
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate feature cards
    gsap.from('.feature-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate quote sections
    gsap.from('.quote-section', {
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.quotes-container',
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate CTA section
    gsap.from('.cta-section', {
      duration: 1,
      scale: 0.9,
      opacity: 0,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.cta-container',
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

  }, [])

  return (
    <div ref={sectionRef} className="relative py-20 bg-gradient-to-b from-cream to-white">
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Who We Are Section */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-dark mb-8">
            Who We Are
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="text-xl font-medium text-coffee-brown">
              CoffeeOn isn't a vending machine. It isn't a café either.
            </p>
            <p className="text-xl font-medium text-coffee-brown">
              It's a new category altogether.
            </p>
            <p className="text-lg">
              It's your smart barista: café-quality coffee, made personal, available 24/7, wherever you are.
            </p>
            <p>
              At its core, CoffeeOn is about transforming an everyday routine into something smarter, faster, and better.
            </p>
            
            <div className="flex flex-wrap justify-center items-center space-x-8 py-8">
              <div className="flex items-center space-x-2 text-coffee-brown font-semibold">
                <Coffee className="h-5 w-5" />
                <span>Real milk</span>
              </div>
              <div className="flex items-center space-x-2 text-coffee-brown font-semibold">
                <Leaf className="h-5 w-5" />
                <span>Fresh beans</span>
              </div>
              <div className="flex items-center space-x-2 text-coffee-brown font-semibold">
                <Zap className="h-5 w-5" />
                <span>Iced options</span>
              </div>
            </div>
            
            <p>
              Fully customizable through an app that remembers your preferences.
            </p>
            <p className="font-medium">
              This is coffee that fits into people's lives, not the other way around.
            </p>
          </div>

          {/* Brand Quote */}
          <div className="quotes-container mt-16">
            <blockquote className="quote-section text-2xl md:text-3xl font-display font-semibold text-coffee-dark italic border-l-4 border-coffee-accent pl-6 max-w-3xl mx-auto">
              "We're building a brand that challenges the status quo. One that's rooted in tech and taste, but built for culture, habit, and lifestyle."
            </blockquote>
            
            <p className="text-xl font-semibold text-coffee-brown mt-8">
              Smart, seamless, and built around you.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-coffee-dark text-center mb-12">
            What We Do
          </h3>
          
          <div className="max-w-4xl mx-auto text-center space-y-6 text-lg leading-relaxed text-gray-700 mb-12">
            <p className="text-xl font-medium text-coffee-brown">
              We created CoffeeOn to solve a simple problem: great coffee is too often slow, inconsistent, or hard to access.
            </p>
            <p>
              Our smart barista platform delivers café-quality drinks—fast, customizable, and app-connected—whenever and wherever people need them.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-coffee-accent mx-auto mb-4" />
                <h4 className="font-semibold text-coffee-dark text-lg">No queues</h4>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-coffee-accent mx-auto mb-4" />
                <h4 className="font-semibold text-coffee-dark text-lg">No baristas</h4>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-coffee-accent mx-auto mb-4" />
                <h4 className="font-semibold text-coffee-dark text-lg">No compromise</h4>
              </div>
            </div>
            
            <p>
              By delivering smart, flexible coffee experiences, CoffeeOn becomes part of your daily rhythm, whether you are drinking it, managing it, or building a business around it.
            </p>
          </div>

          {/* Vision Quote */}
          <blockquote className="quote-section text-2xl md:text-3xl font-display font-bold text-center text-coffee-dark bg-coffee-accent/10 p-8 rounded-2xl max-w-4xl mx-auto">
            "WE'RE BUILDING A WORLD WHERE SMART ON-THE-GO COFFEE IS THE STANDARD, NOT THE EXCEPTION"
          </blockquote>
        </div>

        {/* Why Us Section */}
        <div className="mb-20">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-coffee-dark text-center mb-4">
            Why Us
          </h3>
          <p className="text-center text-xl text-coffee-brown font-medium mb-16">
            Lifestyle. Innovation. Access
          </p>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="feature-card bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <Clock className="h-12 w-12 text-coffee-accent mb-6" />
              <h4 className="font-display text-xl font-bold text-coffee-dark mb-4">
                INSTANT CONVENIENCE
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Premium, personalized coffee without the wait. Available 24/7, app-controlled, and always close. It fits into your life, not the other way around.
              </p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <Zap className="h-12 w-12 text-coffee-accent mb-6" />
              <h4 className="font-display text-xl font-bold text-coffee-dark mb-4">
                SMART TECH, REAL COFFEE
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We pair intelligent tech with real ingredients: fresh milk, bean-to-cup brewing, and ice, for café-level quality that is consistently perfect every single time.
              </p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <Star className="h-12 w-12 text-coffee-accent mb-6" />
              <h4 className="font-display text-xl font-bold text-coffee-dark mb-4">
                BUILT FOR WHAT'S NEXT
              </h4>
              <p className="text-gray-600 leading-relaxed">
                CoffeeOn isn't just a better way to get your coffee. It is a signal that you are ahead of the curve. A brand that feels modern, mobile, and made for now.
              </p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <Coffee className="h-12 w-12 text-coffee-accent mb-6" />
              <h4 className="font-display text-xl font-bold text-coffee-dark mb-4">
                BREW BOLD
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We lead with originality. We challenge norms, break old habits, and create new rituals in every cup.
              </p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <Leaf className="h-12 w-12 text-coffee-accent mb-6" />
              <h4 className="font-display text-xl font-bold text-coffee-dark mb-4">
                BUILD CONSCIOUSLY
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We embed sustainability into every layer of the system, because great coffee should never cost the planet.
              </p>
            </div>

            <div className="feature-card bg-gradient-coffee rounded-2xl p-8 shadow-lg hover-lift text-white">
              <Smartphone className="h-12 w-12 text-coffee-accent mb-6" />
              <h4 className="font-display text-xl font-bold mb-4">
                READY TO START?
              </h4>
              <p className="mb-6 opacity-90">
                Join the coffee revolution. Download the app and rule your ritual.
              </p>
              <button className="bg-coffee-accent hover:bg-coffee-light text-coffee-dark font-bold py-3 px-6 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105 flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-container text-center">
          <div className="cta-section bg-gradient-coffee rounded-3xl p-12 md:p-16 text-white max-w-4xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Rule Your Ritual?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands who've made the switch to smart, personalized coffee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-coffee-accent hover:bg-coffee-light text-coffee-dark font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105 flex items-center space-x-3">
                <Smartphone className="h-5 w-5" />
                <span>Download App</span>
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-coffee-dark text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-200 flex items-center space-x-3">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}