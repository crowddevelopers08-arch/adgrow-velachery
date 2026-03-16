'use client'

import { useEffect, useState } from "react";

function TropicalPlant() {
  return (
    <svg
      viewBox="0 0 220 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-auto absolute -left-4 top-1/2 -translate-y-1/2 drop-shadow-md"
      style={{ animation: "sway 6s ease-in-out infinite" }}
    >
      <path d="M30 200 Q-20 80 80 20 Q70 90 30 200Z" fill="#4caf50" opacity="0.92" />
      <path d="M30 200 Q-20 80 80 20" stroke="#388e3c" strokeWidth="1.5" fill="none" />
      <path d="M40 240 Q130 140 200 160 Q130 180 40 240Z" fill="#66bb6a" opacity="0.88" />
      <path d="M40 240 Q130 140 200 160" stroke="#388e3c" strokeWidth="1.5" fill="none" />
      <path d="M50 300 Q10 380 80 420 Q60 360 50 300Z" fill="#43a047" opacity="0.82" />
      <path d="M50 300 Q10 380 80 420" stroke="#2e7d32" strokeWidth="1.5" fill="none" />
      <path d="M80 160 Q160 90 180 40 Q160 110 80 160Z" fill="#81c784" opacity="0.78" />
      <path d="M80 160 Q160 90 180 40" stroke="#388e3c" strokeWidth="1" fill="none" />
      <path d="M60 320 Q160 330 200 290 Q150 340 60 320Z" fill="#66bb6a" opacity="0.72" />
      <path d="M60 320 Q160 330 200 290" stroke="#388e3c" strokeWidth="1.2" fill="none" />
      <path d="M45 360 Q0 430 60 490 Q50 420 45 360Z" fill="#388e3c" opacity="0.7" />
      <path d="M45 360 Q0 430 60 490" stroke="#2e7d32" strokeWidth="1.2" fill="none" />
      <path d="M45 200 Q50 320 55 490" stroke="#5d4037" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="82" cy="268" rx="5" ry="9" fill="#ef5350" opacity="0.85" />
      <ellipse cx="99" cy="282" rx="9" ry="5" fill="#ef5350" opacity="0.85" transform="rotate(-20 99 282)" />
      <ellipse cx="65" cy="282" rx="9" ry="5" fill="#ef5350" opacity="0.85" transform="rotate(20 65 282)" />
      <ellipse cx="82" cy="300" rx="5" ry="9" fill="#ef5350" opacity="0.85" />
      <circle cx="82" cy="285" r="10" fill="#ef5350" opacity="0.9" />
      <circle cx="82" cy="285" r="6" fill="#ff8a80" />
      <circle cx="82" cy="285" r="3" fill="#ffeb3b" />
      <ellipse cx="110" cy="200" rx="5" ry="9" fill="#ef9a9a" opacity="0.82" transform="rotate(20 110 200)" />
      <line x1="110" y1="209" x2="100" y2="228" stroke="#5d4037" strokeWidth="2" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#ec4899] transition-colors group-hover:bg-[#ec4899]/10 flex-shrink-0">
      <svg width="11" height="13" viewBox="0 0 11 13" fill="none" className="ml-0.5">
        <path d="M1 1.2L10 6.5L1 11.8V1.2Z" fill="#ec4899" stroke="#ec4899" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// The image panel — reused in both desktop (absolute) and mobile (inline)
function ImagePanel({ mobile }: { mobile: boolean }) {
  if (mobile) {
    return (
      <div
        style={{
          backgroundImage: "url('https://leospa.vercel.app/assets/images/spa.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          width: "100%",
          height: "240px",
          borderRadius: "16px",
          marginBottom: "24px",
        }}
      />
    );
  }
  return (
    <div className="hero-right-bg absolute right-0 top-0 bottom-0 w-[42%] z-0" />
  );
}

export default function SpaHero() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);

    // detect mobile
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", check);
    };
  }, []);

  const handleBookNow = () => {
    const formElement = document.getElementById('appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-dm       { font-family: 'DM Sans', sans-serif; }
          .animate-fadeUp { animation: fadeUp 0.85s ease both; }
          .delay-100 { animation-delay: 0.10s; }
          .delay-200 { animation-delay: 0.20s; }
          .delay-300 { animation-delay: 0.30s; }
        `}</style>

        <section className="font-dm bg-white min-h-screen flex flex-col overflow-hidden">
          {/* pink accent bar */}
          <div
            className="w-full h-[3px] opacity-70 flex-shrink-0"
            style={{ background: "linear-gradient(90deg,#f9a8d4,#ec4899,#f9a8d4)" }}
          />

          {/* Text block */}
          <div
            className={`flex flex-col px-5 pt-8 pb-0 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
          >
            <p className="font-dm text-[11px] font-medium tracking-[0.18em] uppercase text-[#ec4899] mb-4 animate-fadeUp">
              ✦ Premium Beauty Studio · Velachery ✦
            </p>

            <h1
              className="font-playfair font-black text-gray-900 mb-4 animate-fadeUp delay-100"
              style={{ fontSize: "30px", lineHeight: 1.15, letterSpacing: "-0.01em" }}
            >
              Discover{" "}
              <span style={{ color: "#ffffff", backgroundColor: "#f472b6", paddingLeft: "8px", paddingRight: "8px" }}>
                Velachery&apos;s Secret
              </span>{" "}
              To Beautiful Skin
            </h1>

            <p className="font-dm text-[13.5px] leading-[1.75] text-gray-500 mb-6 animate-fadeUp delay-200">
              Achieve your desired look with our Expert Beauty Solutions
            </p>

            {/* ── IMAGE HERE — between paragraph and buttons ── */}
            <ImagePanel mobile={true} />

            {/* Buttons */}
            <div className="flex flex-col gap-3 animate-fadeUp delay-300 pb-8">
              <button
                onClick={handleBookNow}
                className="font-dm font-medium text-sm text-white rounded-md px-9 py-[14px] transition-all duration-200 active:scale-95 text-center"
                style={{
                  background: "linear-gradient(135deg,#ec4899 0%,#be185d 100%)",
                  boxShadow: "0 8px 28px rgba(236,72,153,0.38)",
                }}
              >
                Book Your Appointment Now!
              </button>

              <button className="group flex items-center gap-3 bg-transparent border-0 font-dm text-sm text-gray-800">
                <PlayIcon />
                Watch our story
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ── DESKTOP LAYOUT — completely untouched ── */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes sway {
          0%, 100% { transform: translateY(-50%) rotate(-1deg); }
          50%       { transform: translateY(-50%) rotate(1.5deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm       { font-family: 'DM Sans', sans-serif; }
        .animate-fadeUp { animation: fadeUp 0.85s ease both; }
        .delay-100 { animation-delay: 0.10s; }
        .delay-200 { animation-delay: 0.20s; }
        .delay-300 { animation-delay: 0.30s; }
        .hero-right-bg {
          background-image: url('https://leospa.vercel.app/assets/images/spa.png');
          background-size: cover;
          background-position: center top;
          border-radius: 50% 0 0 50% / 50%;
        }
      `}</style>

      <section
        className="font-dm relative min-h-screen grid overflow-hidden bg-white"
        style={{ gridTemplateColumns: "180px 1fr 480px" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-10 opacity-70"
          style={{ background: "linear-gradient(90deg,#f9a8d4,#ec4899,#f9a8d4)" }}
        />

        <ImagePanel mobile={false} />

        <div className="relative z-10 flex items-center">
          <TropicalPlant />
        </div>

        <div
          className={`relative z-10 flex flex-col justify-center py-10 pr-10 pl-4 max-w-xl transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-dm text-[11px] font-medium tracking-[0.18em] uppercase text-[#ec4899] mb-5 animate-fadeUp">
            ✦ Premium Beauty Studio · Velachery ✦
          </p>

          <h1
            className="font-playfair text-[52px] leading-[1.1] font-black text-gray-900 mb-6 animate-fadeUp delay-100"
            style={{ letterSpacing: "-0.01em" }}
          >
            Discover{" "}
            <span style={{ color: "#ffffff", backgroundColor: "#f472b6", paddingLeft: "10px", paddingRight: "10px" }}>
              Velachery&apos;s Secret
            </span>{" "}
            To Beautiful Skin
          </h1>

          <p className="font-dm text-[14.5px] leading-[1.78] text-gray-500 max-w-sm max-sm:mb-5 mb-11 animate-fadeUp delay-200">
            Achieve your desired look with our Expert Beauty Solutions
          </p>

          <div className="flex items-center gap-7 flex-wrap animate-fadeUp delay-300">
            <button
              onClick={handleBookNow}
              className="font-dm font-medium text-sm text-white rounded-md px-9 py-[14px] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "linear-gradient(135deg,#ec4899 0%,#be185d 100%)",
                boxShadow: "0 8px 28px rgba(236,72,153,0.38)",
              }}
            >
              Book Your Appointment Now!
            </button>

            <button className="group flex items-center gap-3 bg-transparent border-0 font-dm text-sm text-gray-800 hover:text-[#ec4899] transition-colors duration-200">
              <PlayIcon />
              Watch our story
            </button>
          </div>
        </div>
      </section>
    </>
  );
}