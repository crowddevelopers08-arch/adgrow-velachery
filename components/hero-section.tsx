// "use client"

// import React, { useState, useEffect } from 'react';

// interface Slide {
//   url: string;
//   headline: React.ReactNode;
//   sub: string;
// }

// const slides: Slide[] = [
//   {
//     url: "/banner2.jpg",
//     headline: <>Discover <span style={{ color: '#1a1a1a' }}>Velachery's Secret</span> To Beautiful Skin</>,
//     sub: "Achieve your desired look with our Expert Beauty Solutions",
//   },
//   {
//     url: "/banners.jpg",
//     headline: <>Glow Like Never <span style={{ color: '#1a1a1a' }}>Before With Us</span></>,
//     sub: "Premium skincare treatments tailored just for you",
//   },
//   {
//     url: "/banner3.jpg",
//     headline: <>Your Beauty Journey <span style={{ color: '#1a1a1a' }}>Starts Here</span></>,
//     sub: "Step in and experience the difference expert care makes",
//   },
// ]

// export default function VelacheryBeautyBanner() {
//   const [current, setCurrent] = useState<number>(0)
//   const [contentKey, setContentKey] = useState<number>(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent(prev => {
//         const next = prev === slides.length - 1 ? 0 : prev + 1
//         setContentKey(k => k + 1)
//         return next
//       })
//     }, 5000)
    
//     return () => clearInterval(interval)
//   }, [])

//   const goTo = (index: number): void => {
//     setCurrent(index)
//     setContentKey(k => k + 1)
//   }

//   const handleBookNow = () => {
//     const formElement = document.getElementById('appointment-form');
//     if (formElement) {
//       formElement.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'center'
//       });
//     }
//   }

//   return (
//     <section style={{
//       position: 'relative',
//       width: '100%',
//       height: 'clamp(450px, 85vh, 700px)',
//       overflow: 'hidden',
//       backgroundColor: '#1a1a2e',
//     }}>
//       {/* Background Images - NO OVERFLOW */}
//       {slides.map((slide: Slide, index: number) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             opacity: index === current ? 1 : 0,
//             transition: 'opacity 1.2s ease-in-out',
//             overflow: 'hidden',
//           }}
//         >
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundImage: `url('${slide.url}')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               animation: index === current ? 'zoomIn 8s ease-out forwards' : 'none',
//             }}
//           />
//           {/* Overlay */}
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(236,72,153,0.3) 100%)',
//           }} />
//         </div>
//       ))}

//       {/* CENTERED CONTENT */}
//       <div key={contentKey} style={{
//         position: 'relative',
//         zIndex: 10,
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px',
//         textAlign: 'center',
//       }}>
//         <div style={{
//           maxWidth: '900px',
//           width: '100%',
//         }}>
//           {/* Eyebrow */}
//           <p style={{
//             color: '#f9a8d4',
//             fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
//             letterSpacing: '0.2em',
//             textTransform: 'uppercase',
//             marginBottom: '1rem',
//             fontFamily: "'Playfair Display', serif",
//             animation: 'fadeDown 0.6s ease-out both',
//             animationDelay: '0.1s',
//           }}>
//             ✦ Premium Beauty Studio · Velachery ✦
//           </p>

//           {/* Headline */}
//           <h1 style={{
//             fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
//             fontWeight: 800,
//             color: '#ffffff',
//             lineHeight: 1.2,
//             marginBottom: '1rem',
//             fontFamily: "'Playfair Display', serif",
//             textShadow: '0 2px 20px rgba(0,0,0,0.5)',
//             animation: 'fadeUp 0.7s ease-out both',
//             animationDelay: '0.25s',
//           }}>
//             {slides[current].headline}
//           </h1>

//           {/* Subheadline */}
//           <p style={{
//             fontSize: 'clamp(0.95rem, 3vw, 1.2rem)',
//             color: 'rgba(255,255,255,0.9)',
//             marginBottom: '2rem',
//             fontFamily: "'Lato', sans-serif",
//             textShadow: '0 1px 8px rgba(0,0,0,0.4)',
//             animation: 'fadeUp 0.7s ease-out both',
//             animationDelay: '0.4s',
//             maxWidth: '700px',
//             margin: '0 auto 2rem auto',
//           }}>
//             {slides[current].sub}
//           </p>

//           {/* Button */}
//           <div style={{
//             animation: 'fadeUp 0.7s ease-out both',
//             animationDelay: '0.55s',
//           }}>
//             <button
//               onClick={handleBookNow}
//               style={{
//                 background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
//                 color: '#ffffff',
//                 fontFamily: "'Lato', sans-serif",
//                 fontWeight: 700,
//                 fontSize: 'clamp(0.9rem, 3vw, 1.05rem)',
//                 padding: 'clamp(0.75rem, 2vh, 1rem) clamp(1.5rem, 5vw, 2.5rem)',
//                 borderRadius: '6px',
//                 border: '2px solid rgba(255,255,255,0.3)',
//                 cursor: 'pointer',
//                 letterSpacing: '0.05em',
//                 transition: 'all 0.3s ease',
//                 boxShadow: '0 8px 32px rgba(236,72,153,0.5)',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//                 e.currentTarget.style.boxShadow = '0 12px 40px rgba(236,72,153,0.7)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 8px 32px rgba(236,72,153,0.5)';
//               }}
//             >
//               Book Your Appointment Now!
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Dot Indicators */}
//       <div style={{
//         position: 'absolute',
//         bottom: 'clamp(1rem, 3vh, 2rem)',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         zIndex: 20,
//         display: 'flex',
//         gap: 'clamp(0.5rem, 2vw, 0.75rem)',
//         alignItems: 'center',
//       }}>
//         {slides.map((_: Slide, index: number) => (
//           <button
//             key={index}
//             onClick={() => goTo(index)}
//             style={{
//               height: 'clamp(6px, 1.5vw, 8px)',
//               width: index === current ? 'clamp(24px, 6vw, 36px)' : 'clamp(6px, 1.5vw, 8px)',
//               borderRadius: '9999px',
//               background: index === current ? '#f472b6' : 'rgba(255,255,255,0.5)',
//               border: 'none',
//               cursor: 'pointer',
//               transition: 'all 0.4s ease',
//               padding: 0,
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Bottom Line */}
//       <div style={{
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         height: 'clamp(2px, 0.5vh, 3px)',
//         background: 'linear-gradient(to right, transparent, #f472b6, #be185d, #f472b6, transparent)',
//       }} />

//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@400;700&display=swap');

//         @keyframes zoomIn {
//           0% { 
//             transform: scale(1.05);
//           }
//           100% { 
//             transform: scale(1);
//           }
//         }

//         @keyframes fadeUp {
//           from { 
//             opacity: 0; 
//             transform: translateY(30px); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateY(0); 
//           }
//         }

//         @keyframes fadeDown {
//           from { 
//             opacity: 0; 
//             transform: translateY(-20px); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateY(0); 
//           }
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  url: string;
  rightImage: string;   // ✅ each slide has its own right-side image
  headline: React.ReactNode;
  sub: string;
}

const slides: Slide[] = [
  {
    url: "/banner2.jpg",
    rightImage: "/before1.webp",   // ✅ change to your image
    headline: <>Discover <span style={{ color: '#f9a8d4' }}>Velachery's Secret</span> To Beautiful Skin</>,
    sub: "Achieve your desired look with our Expert Beauty Solutions",
  },
  {
    url: "/banners.jpg",
    rightImage: "/before2.webp",   // ✅ change to your image
    headline: <>Glow Like Never <span style={{ color: '#f9a8d4' }}>Before With Us</span></>,
    sub: "Premium skincare treatments tailored just for you",
  },
  {
    url: "/banner3.jpg",
    rightImage: "/before3.webp",   // ✅ change to your image
    headline: <>Your Beauty Journey <span style={{ color: '#f9a8d4' }}>Starts Here</span></>,
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
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@400;700&display=swap');

        @keyframes zoomIn {
          0%   { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tagPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(0.8); }
        }

        /* ════════════════════════════════
           ROOT
        ════════════════════════════════ */
        .vbb-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: #1a1a2e;
          height: clamp(450px, 85vh, 700px);
        }

        /* Full-width bg slides */
        .vbb-bg-slide {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          transition: opacity 1.2s ease-in-out;
          overflow: hidden;
        }
        .vbb-bg-img {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .vbb-bg-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(236,72,153,0.3) 100%);
        }

        /* ════════════════════════════════
           CONTENT LAYER — 2-col
        ════════════════════════════════ */
        .vbb-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
          padding: 64px 80px;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ════════════════════════════════
           LEFT — text
        ════════════════════════════════ */
        .vbb-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .vbb-eyebrow {
          color: #f9a8d4;
          font-size: clamp(0.7rem, 1.5vw, 0.85rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
          animation: fadeDown 0.6s ease-out both 0.1s;
        }
        .vbb-headline {
          font-size: clamp(1.8rem, 3.6vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
          text-shadow: 0 2px 20px rgba(0,0,0,0.5);
          animation: fadeUp 0.7s ease-out both 0.25s;
          word-break: break-word;
        }
        .vbb-sub {
          font-size: clamp(0.9rem, 1.5vw, 1.2rem);
          color: rgba(255,255,255,0.9);
          font-family: 'Lato', sans-serif;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
          animation: fadeUp 0.7s ease-out both 0.4s;
          margin-bottom: 2rem;
          max-width: 480px;
        }
        .vbb-btn-wrap {
          animation: fadeUp 0.7s ease-out both 0.55s;
        }
        .vbb-btn {
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          color: #ffffff;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          padding: clamp(0.75rem, 2vh, 1rem) clamp(1.5rem, 3vw, 2.5rem);
          border-radius: 6px;
          border: 2px solid rgba(255,255,255,0.3);
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(236,72,153,0.5);
          white-space: nowrap;
        }
        .vbb-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(236,72,153,0.7);
        }
        .vbb-btn:active { transform: translateY(0); }

        .vbb-dots {
          display: flex;
          gap: clamp(6px, 1.5vw, 10px);
          align-items: center;
          margin-top: 24px;
          animation: fadeUp 0.7s ease-out both 0.65s;
        }
        .vbb-dot {
          height: clamp(6px, 1.5vw, 8px);
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 0;
        }

        /* ════════════════════════════════
           RIGHT — image box
        ════════════════════════════════ */
        .vbb-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          animation: fadeUp 0.8s ease-out both 0.3s;
        }
        .vbb-frame-glow {
          position: absolute;
          inset: -16px;
          border-radius: 28px;
          background: radial-gradient(ellipse at center, rgba(192,23,75,0.25) 0%, transparent 65%);
          z-index: 0;
          pointer-events: none;
        }
        .vbb-frame {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 480px;
          height: clamp(280px, 55vh, 520px);
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.08),
            0 24px 64px rgba(0,0,0,0.65),
            0 0 48px rgba(192,23,75,0.22);
        }
        .vbb-corner-tl {
          position: absolute; top: 14px; left: 14px; z-index: 5;
          width: 40px; height: 40px;
          border-top: 2px solid rgba(244,114,182,0.7);
          border-left: 2px solid rgba(244,114,182,0.7);
          border-radius: 4px 0 0 0;
          pointer-events: none;
        }
        .vbb-corner-br {
          position: absolute; bottom: 14px; right: 14px; z-index: 5;
          width: 40px; height: 40px;
          border-bottom: 2px solid rgba(244,114,182,0.7);
          border-right: 2px solid rgba(244,114,182,0.7);
          border-radius: 0 0 4px 0;
          pointer-events: none;
        }

        /* Right image slides */
        .vbb-right-slide {
          position: absolute;
          inset: 0;
          transition: opacity 1.2s ease-in-out;
        }
        .vbb-frame-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, transparent 40%, rgba(0,0,0,0.3) 100%);
          pointer-events: none;
        }

        /* Floating pill tag */
        .vbb-tag {
          position: absolute; bottom: 18px; left: 18px; z-index: 6;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(244,114,182,0.3);
          border-radius: 50px;
          padding: 7px 16px;
          display: flex; align-items: center; gap: 8px;
        }
        .vbb-tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #f472b6;
          animation: tagPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .vbb-tag-text {
          font-family: 'Lato', sans-serif;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.88);
          white-space: nowrap;
        }

        /* Bottom accent */
        .vbb-accent {
          position: absolute;
          bottom: 0; left: 0; right: 0; z-index: 20;
          height: clamp(2px, 0.5vh, 3px);
          background: linear-gradient(to right, transparent, #f472b6, #be185d, #f472b6, transparent);
        }

        /* ════════════════════════════════
           RESPONSIVE
        ════════════════════════════════ */
        @media (min-width: 1441px) {
          .vbb-root    { height: clamp(600px, 88vh, 800px); }
          .vbb-content { padding: 80px 96px; gap: 64px; }
          .vbb-frame   { max-width: 560px; height: clamp(360px, 60vh, 600px); border-radius: 24px; }
          .vbb-headline { font-size: clamp(2.8rem, 3.4vw, 3.8rem); }
        }
        @media (max-width: 1280px) {
          .vbb-content { padding: 56px 56px; gap: 40px; }
          .vbb-frame   { max-width: 420px; height: clamp(260px, 50vh, 460px); }
          .vbb-headline { font-size: clamp(1.8rem, 3.4vw, 3rem); }
        }
        @media (max-width: 1024px) {
          .vbb-content { padding: 48px 36px; gap: 28px; }
          .vbb-frame   { max-width: 360px; height: clamp(240px, 46vh, 400px); border-radius: 16px; }
          .vbb-headline { font-size: clamp(1.65rem, 3.2vw, 2.6rem); }
          .vbb-sub     { font-size: 0.9rem; margin-bottom: 1.5rem; }
          .vbb-corner-tl, .vbb-corner-br { width: 32px; height: 32px; }
        }
        @media (max-width: 768px) {
          .vbb-root    { height: auto; min-height: clamp(700px, 100vh, 900px); }
          .vbb-content {
            grid-template-columns: 1fr;
            padding: 48px 28px 56px;
            gap: 28px;
            height: auto;
            min-height: clamp(700px, 100vh, 900px);
            align-content: center;
          }
          .vbb-left    { align-items: center; text-align: center; order: 2; }
          .vbb-sub     { text-align: center; max-width: 100%; }
          .vbb-dots    { justify-content: center; }
          .vbb-right   { order: 1; height: auto; }
          .vbb-frame   { max-width: 100%; height: clamp(240px, 42vw, 380px); border-radius: 16px; }
          .vbb-headline { font-size: clamp(1.7rem, 5vw, 2.4rem); }
        }
        @media (max-width: 600px) {
          .vbb-root    { min-height: clamp(680px, 100vh, 860px); }
          .vbb-content { padding: 40px 20px 48px; gap: 22px; min-height: clamp(680px, 100vh, 860px); }
          .vbb-eyebrow  { font-size: 0.62rem; letter-spacing: 0.16em; margin-bottom: 0.75rem; }
          .vbb-headline { font-size: clamp(1.55rem, 6.5vw, 2.1rem); margin-bottom: 0.85rem; }
          .vbb-sub      { font-size: 0.87rem; margin-bottom: 1.5rem; }
          .vbb-frame    { height: clamp(220px, 44vw, 340px); border-radius: 14px; }
          .vbb-tag      { bottom: 12px; left: 12px; padding: 6px 13px; }
          .vbb-tag-text { font-size: 0.62rem; }
          .vbb-btn      { font-size: 0.87rem; padding: 0.82rem 1.8rem; width: 100%; }
          .vbb-corner-tl { top: 10px; left: 10px; width: 28px; height: 28px; }
          .vbb-corner-br { bottom: 10px; right: 10px; width: 28px; height: 28px; }
        }
        @media (max-width: 480px) {
          .vbb-root    { min-height: clamp(640px, 105vw, 820px); }
          .vbb-content { padding: 36px 16px 44px; gap: 20px; min-height: clamp(640px, 105vw, 820px); }
          .vbb-frame   { height: clamp(200px, 48vw, 300px); border-radius: 12px; }
          .vbb-headline { font-size: clamp(1.4rem, 7.5vw, 2rem); }
          .vbb-sub     { font-size: 0.84rem; margin-bottom: 1.25rem; }
          .vbb-btn     { font-size: 0.84rem; padding: 0.78rem 1.6rem; }
          .vbb-dots    { margin-top: 18px; }
        }
        @media (max-width: 375px) {
          .vbb-root    { min-height: clamp(620px, 110vw, 800px); }
          .vbb-content { padding: 30px 14px 40px; gap: 18px; min-height: clamp(620px, 110vw, 800px); }
          .vbb-frame   { height: clamp(185px, 46vw, 270px); border-radius: 10px; }
          .vbb-headline { font-size: clamp(1.3rem, 8vw, 1.85rem); }
          .vbb-sub     { font-size: 0.82rem; }
          .vbb-btn     { font-size: 0.8rem; padding: 0.74rem 1.4rem; }
        }
        @media (max-width: 320px) {
          .vbb-root    { min-height: clamp(600px, 115vw, 780px); }
          .vbb-content { padding: 26px 12px 36px; gap: 16px; min-height: clamp(600px, 115vw, 780px); }
          .vbb-frame   { height: clamp(170px, 44vw, 250px); border-radius: 9px; }
          .vbb-headline { font-size: 1.22rem; }
          .vbb-sub     { font-size: 0.78rem; }
          .vbb-btn     { font-size: 0.76rem; padding: 0.7rem 1.2rem; }
        }
        @media (hover: none) {
          .vbb-btn:hover { transform: none; box-shadow: 0 8px 32px rgba(236,72,153,0.5); }
        }
      `}</style>

      <section className="vbb-root">

        {/* Full-width bg slides */}
        {slides.map((slide: Slide, index: number) => (
          <div
            key={index}
            className="vbb-bg-slide"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <div
              className="vbb-bg-img"
              style={{
                backgroundImage: `url('${slide.url}')`,
                animation: index === current ? 'zoomIn 8s ease-out forwards' : 'none',
              }}
            />
            <div className="vbb-bg-overlay" />
          </div>
        ))}

        {/* 2-col content */}
        <div key={contentKey} className="vbb-content">

          {/* LEFT */}
          <div className="vbb-left">
            <p className="vbb-eyebrow">✦ Premium Beauty Studio · Velachery ✦</p>
            <h1 className="vbb-headline">{slides[current].headline}</h1>
            <p className="vbb-sub">{slides[current].sub}</p>

            <div className="vbb-btn-wrap">
              <button
                className="vbb-btn"
                onClick={handleBookNow}
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

            <div className="vbb-dots">
              {slides.map((_: Slide, index: number) => (
                <button
                  key={index}
                  className="vbb-dot"
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    width: index === current ? 'clamp(24px, 6vw, 36px)' : 'clamp(6px, 1.5vw, 8px)',
                    background: index === current ? '#f472b6' : 'rgba(255,255,255,0.5)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — image box with per-slide images */}
          <div className="vbb-right">
            <div className="vbb-frame-glow" />

            <div className="vbb-frame">
              <div className="vbb-corner-tl" />
              <div className="vbb-corner-br" />

              {/* Each slide has its own right image — fades in/out with current */}
              {slides.map((slide: Slide, index: number) => (
                <div
                  key={index}
                  className="vbb-right-slide"
                  style={{ opacity: index === current ? 1 : 0 }}
                >
                  <Image
                    src={slide.rightImage}
                    alt={`Advanced Gloskin ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority={index === 0}
                  />
                </div>
              ))}

              <div className="vbb-frame-overlay" />

              <div className="vbb-tag">
                <div className="vbb-tag-dot" />
                <span className="vbb-tag-text">Advanced Gloskin</span>
              </div>
            </div>
          </div>

        </div>

        <div className="vbb-accent" />
      </section>
    </>
  )
}