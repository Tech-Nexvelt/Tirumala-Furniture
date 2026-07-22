"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";

export default function HeroBanner() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-[#0D0D0D] text-[#E8E6E1] pt-16">
        {/* Full-Bleed Dark Luxury Furniture Background (70% Visual Attention) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90"
            alt="Tirumala Teak Luxury Living Room"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/40" />
        </div>

        {/* Hero Content Overlay (Minimal, 20% Text, 10% Nav) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            {/* 1. Luxury Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D]/80 border border-[#C59D5F]/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C59D5F] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#DFB978] uppercase">
                100% Solid Burma Teak • Siddipet Flagship
              </span>
            </div>

            {/* 2. Premium Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
              Crafted for Generations. <br />
              <span className="text-gradient-gold italic">Defined by Luxury.</span>
            </h1>

            {/* 3. One Sentence Description */}
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-lg">
              Experience 100% Solid Burma Teak wood furniture hand-carved with precision joinery, custom architectural dimensions, and a 10-year warranty guarantee.
            </p>

            {/* 4. Two Clean CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Request Official Quote
              </button>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0D0D0D]/70 hover:bg-[#1C1C1C] text-white border border-[#C59D5F]/40 font-bold text-xs backdrop-blur-md transition-all uppercase tracking-wider flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C59D5F]" /> Book Showroom Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Drawer */}
      <QuickQuoteDrawer isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
