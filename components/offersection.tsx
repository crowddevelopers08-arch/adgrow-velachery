'use client';

import React from "react";
import Image from "next/image";
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { CheckCircle, Sparkles, Phone } from 'lucide-react';

const dmSans   = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700', '800'] });

const offers = [
  {
    badge: '50% OFF',
    badgeColor: 'from-[#ec4899] to-[#be185d]',
    title: 'Full Body Skin Whitening',
    desc: 'Choose any one premium treatment:',
    features: ['White Veil Therapy', 'Hydrafacial', 'Glow Booster Serum'],
    original: '₹1,00,000',
    price: '₹50,000',
    priceColor: 'text-[#ec4899]',
    btnColor: 'from-[#ec4899] to-[#be185d]',
  },
];

export default function SkinOfferSection() {
  return (
    <section
      id="offers"
      className={`${dmSans.className} relative py-16 md:py-20 px-4 overflow-hidden`}
      style={{ background: 'linear-gradient(135deg,#fff0f6 0%,#ffffff 50%,#f0fdf4 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-pink-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-emerald-100 opacity-40 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg mb-4"
            style={{ background: 'linear-gradient(135deg,#ec4899,#be185d)' }}>
            <Sparkles className="w-4 h-4" />
            Flat 60% OFF — Limited Time
          </span>
          <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 leading-tight`}>
            Skin Care <span style={{ background: 'linear-gradient(90deg,#ec4899,#be185d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Special Offer</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Book your <span className="font-semibold text-[#ec4899]">FREE consultation</span> today and transform your skin.
          </p>
        </div>

        {/* ── OFFER CARDS ── */}
        <div className="flex flex-col gap-10">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
            >
              {/* LEFT — Image */}
              <div className="relative min-h-[260px] md:min-h-[340px] overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/ti3453sgoo/ChatGPT%20Image%20Mar%2020,%202026,%2002_16_09%20PM.png"
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 60%)' }}
                />
                {/* Badge */}
                <div className={`absolute top-5 left-5 px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-lg bg-gradient-to-r ${offer.badgeColor}`}>
                  {offer.badge}
                </div>
              </div>

              {/* RIGHT — Content */}
              <div className="bg-white p-8 md:p-10 flex flex-col justify-center gap-5">
                <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold text-gray-900 leading-snug`}>
                  {offer.title}
                </h3>

                <p className="text-gray-500 text-sm">{offer.desc}</p>

                <ul className="space-y-2.5">
                  {offer.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#ec4899]" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-end gap-3">
                  {offer.original && (
                    <span className="text-gray-400 line-through text-base">{offer.original}</span>
                  )}
                  <span className={`text-3xl font-extrabold ${offer.priceColor}`}>{offer.price}</span>
                  {!offer.original && (
                    <span className="text-gray-400 text-sm mb-1">onwards</span>
                  )}
                  {offer.original && (
                    <span className="text-gray-400 text-sm mb-1">only</span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href="#contact"
                    className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 bg-gradient-to-r ${offer.btnColor}`}
                  >
                    <Sparkles className="w-4 h-4" />
                    Book Free Consultation
                  </a>
                  <a
                    href="tel:+918970656789"
                    className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-gray-700 font-semibold text-sm border-2 border-gray-200 hover:border-[#ec4899] hover:text-[#ec4899] transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
