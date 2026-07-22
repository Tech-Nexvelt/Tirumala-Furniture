"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Rotate3d, ShieldCheck, Award } from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";

export default function HeroBanner() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center bg-[#FAFAF8] text-[#111827] pt-24 pb-16 overflow-hidden border-b border-[#E5E7EB]">
        {/* Subtle Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C19A6B]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-7 animate-fade-in">
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#8B5E3C] animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#8B5E3C] uppercase">
                  100% Solid Burma Teak • Siddipet Flagship
                </span>
              </div>

              {/* Large Premium Typography */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#111827] tracking-tight leading-[1.08]">
                Crafted for Generations. <br />
                <span className="italic font-normal text-[#8B5E3C]">Defined by Luxury.</span>
              </h1>

              {/* Editorial Description */}
              <p className="text-base sm:text-lg text-[#6B7280] font-light leading-relaxed max-w-xl">
                Experience South India&apos;s premier solid teak wood furniture. Kiln-seasoned for 45 days, hand-sculpted by master carpenters, and backed by a 10-year anti-termite guarantee.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#111827] font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>10-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C19A6B] shrink-0" />
                  <span>Grade-A Burma Teak</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8B5E3C] shrink-0" />
                  <span>Bespoke Dimensions</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-8 py-4 rounded-xl bg-[#8B5E3C] hover:bg-[#6E472B] text-white font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C19A6B]" /> Request Official Quote
                </button>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-white hover:bg-[#F4F4F0] text-[#111827] border border-[#E5E7EB] font-bold text-xs shadow-sm transition-all uppercase tracking-wider flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#8B5E3C]" /> Book Showroom Visit
                </Link>
              </div>
            </div>

            {/* Hero Right Visual Showcase (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] sm:h-[520px] w-full rounded-3xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xl group">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90"
                  alt="Tirumala Teak Living Room Showcase"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Interactive 3D Callout */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5E7EB] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] text-[#8B5E3C] flex items-center justify-center border border-[#E5E7EB]">
                      <Rotate3d className="w-5 h-5 animate-spin" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#8B5E3C] uppercase tracking-wider block">Interactive Studio</span>
                      <h4 className="font-serif font-bold text-xs text-[#111827]">3D Teak Sofa Configurator</h4>
                    </div>
                  </div>

                  <a
                    href="#3d-configurator"
                    className="px-3.5 py-2 rounded-xl bg-[#111827] text-white text-[11px] font-semibold hover:bg-[#8B5E3C] transition-colors"
                  >
                    Try 3D →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Quote Drawer */}
      <QuickQuoteDrawer isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
