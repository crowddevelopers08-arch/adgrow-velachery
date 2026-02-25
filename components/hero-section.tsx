"use client"

import React, { useState, useEffect } from 'react';

interface Slide {
  url: string;
  headline: React.ReactNode;
  sub: string;
}

const slides: Slide[] = [
  {
    url: "/banner2.jpg",
    headline: <>Discover <span style={{ color: '#1a1a1a' }}>Velachery's Secret</span> To Beautiful Skin</>,
    sub: "Achieve your desired look with our Expert Beauty Solutions",
  },
  {
    url: "/banners.jpg",
    headline: <>Glow Like Never <span style={{ color: '#1a1a1a' }}>Before With Us</span></>,
    sub: "Premium skincare treatments tailored just for you",
  },
  {
    url: "/banner3.jpg",
    headline: <>Your Beauty Journey <span style={{ color: '#1a1a1a' }}>Starts Here</span></>,
    sub: "Step in and experience the difference expert care makes",
  },
]

export default function VelacheryBeautyBanner() {
  const [current, setCurrent] = useState<number>(0)
  const [contentKey, setContentKey] = useState<number>(0)

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

  const handleBookNow = () => {
    const formElement = document.getElementById('appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: 'clamp(450px, 85vh, 700px)',
      overflow: 'hidden',
      backgroundColor: '#1a1a2e',
    }}>
      {/* Background Images - NO OVERFLOW */}
      {slides.map((slide: Slide, index: number) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === current ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url('${slide.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              animation: index === current ? 'zoomIn 8s ease-out forwards' : 'none',
            }}
          />
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(236,72,153,0.3) 100%)',
          }} />
        </div>
      ))}

      {/* CENTERED CONTENT */}
      <div key={contentKey} style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '900px',
          width: '100%',
        }}>
          {/* Eyebrow */}
          <p style={{
            color: '#f9a8d4',
            fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            fontFamily: "'Playfair Display', serif",
            animation: 'fadeDown 0.6s ease-out both',
            animationDelay: '0.1s',
          }}>
            ✦ Premium Beauty Studio · Velachery ✦
          </p>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '1rem',
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            animation: 'fadeUp 0.7s ease-out both',
            animationDelay: '0.25s',
          }}>
            {slides[current].headline}
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: 'clamp(0.95rem, 3vw, 1.2rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2rem',
            fontFamily: "'Lato', sans-serif",
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
            animation: 'fadeUp 0.7s ease-out both',
            animationDelay: '0.4s',
            maxWidth: '700px',
            margin: '0 auto 2rem auto',
          }}>
            {slides[current].sub}
          </p>

          {/* Button */}
          <div style={{
            animation: 'fadeUp 0.7s ease-out both',
            animationDelay: '0.55s',
          }}>
            <button
              onClick={handleBookNow}
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                color: '#ffffff',
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 3vw, 1.05rem)',
                padding: 'clamp(0.75rem, 2vh, 1rem) clamp(1.5rem, 5vw, 2.5rem)',
                borderRadius: '6px',
                border: '2px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(236,72,153,0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(236,72,153,0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(236,72,153,0.5)';
              }}
            >
              Book Your Appointment Now!
            </button>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(1rem, 3vh, 2rem)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        gap: 'clamp(0.5rem, 2vw, 0.75rem)',
        alignItems: 'center',
      }}>
        {slides.map((_: Slide, index: number) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            style={{
              height: 'clamp(6px, 1.5vw, 8px)',
              width: index === current ? 'clamp(24px, 6vw, 36px)' : 'clamp(6px, 1.5vw, 8px)',
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

      {/* Bottom Line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'clamp(2px, 0.5vh, 3px)',
        background: 'linear-gradient(to right, transparent, #f472b6, #be185d, #f472b6, transparent)',
      }} />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@400;700&display=swap');

        @keyframes zoomIn {
          0% { 
            transform: scale(1.05);
          }
          100% { 
            transform: scale(1);
          }
        }

        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes fadeDown {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </section>
  )
}