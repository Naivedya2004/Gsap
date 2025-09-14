/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced coffee-inspired color palette
        'coffee': {
          50: '#FAF7F2',
          100: '#F5F1EB',
          200: '#E8DDD0',
          300: '#D4A574',
          400: '#B8956A',
          500: '#8B5A2B',
          600: '#6B4226',
          700: '#4A2C17',
          800: '#3D2415',
          900: '#2A1810',
        },
        'cream': {
          50: '#FFFEF9',
          100: '#F5F1EB',
          200: '#F0EBE0',
          300: '#E8DDD0',
          400: '#D4C7B5',
        },
        'accent': {
          gold: '#D4A574',
          copper: '#B87333',
          bronze: '#CD7F32',
        },
        // Modern gradients
        'gradient': {
          start: '#6B4226',
          middle: '#4A2C17',
          end: '#2A1810',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
        'scale-up': 'scaleUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 165, 116, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'coffee-gradient': 'linear-gradient(135deg, #6B4226 0%, #4A2C17 50%, #2A1810 100%)',
        'cream-gradient': 'linear-gradient(135deg, #F5F1EB 0%, #E8DDD0 50%, #D4A574 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'coffee': '0 10px 40px rgba(107, 66, 38, 0.3)',
        'cream': '0 10px 40px rgba(245, 241, 235, 0.5)',
        'glow': '0 0 30px rgba(212, 165, 116, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(212, 165, 116, 0.2)',
      }
    },
  },
  plugins: [],
}