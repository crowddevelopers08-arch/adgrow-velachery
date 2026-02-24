"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Slide {
  url: string;
  headline: React.ReactNode;
  sub: string;
}

const slides: Slide[] = [
  {
    url: "/home-slider-3.jpg",
    headline: <>Discover <span style={{ color: '#1a1a1a' }}>Velachery's Secret</span> To Beautiful Skin</>,
    sub: "Achieve your desired look with our Expert Beauty Solutions",
  },
  {
    url: "/slide4.jpg",
    headline: <>Glow Like Never <span style={{ color: '#1a1a1a' }}>Before With Us</span></>,
    sub: "Premium skincare treatments tailored just for you",
  },
  {
    url: "/hero.png",
    headline: <>Your Beauty Journey <span style={{ color: '#1a1a1a' }}>Starts Here</span></>,
    sub: "Step in and experience the difference expert care makes",
  },
]

export default function VelacheryBeautyBanner() {

  const [current, setCurrent] = useState<number>(0)
  const [contentKey, setContentKey] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Check screen size for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => {
        const next = prev === slides.length - 1 ? 0 : prev + 1
        setContentKey(k => k + 1)
        return next
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (index: number): void => {
    setCurrent(index)
    setContentKey(k => k + 1)
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: isMobile ? '500px' : '600px' }}>
      {/* Background Images with Ken Burns zoom */}
      {slides.map((slide: Slide, index: number) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: index === current ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.url}')`,
              animation: index === current ? 'kenBurns 6s ease-in-out forwards' : 'none',
            }}
          />
          {/* Overlay: stronger on left for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: isMobile 
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(236,72,153,0.3) 100%)'
                : 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(236,72,153,0.25) 100%)',
            }}
          />
        </div>
      ))}

      {/* Animated Content — key forces re-mount on slide change */}
      <div
        key={contentKey}
        className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ minHeight: isMobile ? '500px' : '600px' }}
      >
        <div style={{ 
          maxWidth: isMobile ? '100%' : '720px', 
          textAlign: 'center', 
          padding: isMobile ? '0 1rem' : '0 1.5rem',
          width: '100%',
        }}>
          {/* Eyebrow label */}
          <p
            style={{
              color: '#f9a8d4',
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: '0.2em',
              fontSize: isMobile ? '0.7rem' : '0.85rem',
              textTransform: 'uppercase',
              marginBottom: isMobile ? '0.75rem' : '1rem',
              animation: 'fadeDown 0.6s ease-out both',
              animationDelay: '0.1s',
            }}
          >
            ✦ Premium Beauty Studio · Velachery ✦
          </p>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: isMobile ? '0.75rem' : '1.25rem',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              animation: 'fadeUp 0.7s ease-out both',
              animationDelay: '0.25s',
            }}
          >
            {slides[current].headline}
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: isMobile ? 'clamp(0.875rem, 3vw, 1rem)' : 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: isMobile ? '1.5rem' : '2.5rem',
              textShadow: '0 1px 8px rgba(0,0,0,0.4)',
              fontFamily: "'Lato', sans-serif",
              animation: 'fadeUp 0.7s ease-out both',
              animationDelay: '0.4s',
              padding: isMobile ? '0 0.5rem' : '0',
            }}
          >
            {slides[current].sub}
          </p>

          {/* CTA Button — fully visible, no animation conflict */}
          <div
            style={{
              animation: 'fadeUp 0.7s ease-out both',
              animationDelay: '0.55s',
              display: 'inline-block',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            <button    onClick={() => {
      const formElement = document.getElementById('appointment-form');
      if (formElement) {
        formElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center' // Adjusts vertical alignment: 'start', 'center', 'end', or 'nearest'
        });
      }
    }}

               style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                color: '#ffffff',
                fontFamily: "'Lato', sans-serif",
                fontWeight: '700',
                fontSize: isMobile ? 'clamp(0.875rem, 4vw, 1rem)' : '1.05rem',
                padding: isMobile 
                  ? 'clamp(0.75rem, 3vw, 0.875rem) clamp(1.5rem, 6vw, 2rem)' 
                  : '1rem 2.5rem',
                borderRadius: '4px',
                border: '2px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                // boxShadow: '0 8px 32px rgba(236,72,153,0.5), 0 2px 8px rgba(0,0,0,0.3)',
                letterSpacing: '0.05em',
                transition: 'all 0.2s ease',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '300px' : 'none',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(236,72,153,0.7), 0 4px 12px rgba(0,0,0,0.3)'
                }
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(236,72,153,0.5), 0 2px 8px rgba(0,0,0,0.3)'
                }
              }}
            >
              Book Your Appointment Now!
            </button>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div
        className="absolute z-20 flex"
        style={{
          bottom: isMobile ? '1.5rem' : '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          gap: isMobile ? '0.5rem' : '0.75rem',
          alignItems: 'center',
        }}
      >
        {slides.map((_: Slide, index: number) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            style={{
              height: isMobile ? '6px' : '8px',
              width: index === current ? (isMobile ? '24px' : '36px') : (isMobile ? '6px' : '8px'),
              borderRadius: '9999px',
              background: index === current ? '#f472b6' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: isMobile ? '2px' : '3px',
          background: 'linear-gradient(to right, transparent, #f472b6, #be185d, #f472b6, transparent)',
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@400;700&display=swap');

        @keyframes kenBurns {
          from { transform: scale(1); transform-origin: center center; }
          to   { transform: scale(1.12); transform-origin: 60% 40%; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Mobile-specific adjustments */
        @media (max-width: 480px) {
          h1 {
            word-break: break-word;
          }
          
          button {
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* Landscape mode on mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .relative {
            min-height: 300px !important;
          }
        }
      `}</style>
    </div>
  )
}