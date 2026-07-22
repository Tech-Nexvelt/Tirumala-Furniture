"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Sparkles, Flame, CheckCircle2 } from "lucide-react";

export default function MaterialsCraft() {
  return (
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative overflow-hidden border-t border-[#EFEFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Wood Standards & Specs */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EFEFEA] text-[#C19A6B] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Uncompromising Quality Standard
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#111827] leading-tight">
              100% Solid Burma Teak Wood & Master Joinery
            </h2>

            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
              At Tirumala Furniture, we do not compromise with particle board, cheap veneers, or hollow MDF. Every piece of wood is hand-selected from mature Grade-A Burma Teak logs, kiln-seasoned for 45 days to eliminate moisture, and bonded with mortise & tenon joinery.
            </p>

            {/* Quality Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm space-y-2">
                <Flame className="w-6 h-6 text-amber-500 mb-1" />
                <h4 className="font-bold text-sm text-[#111827]">Kiln-Dried to &lt;10% Moisture</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Prevents wood cracking, warping, and swelling in humid climates.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-1" />
                <h4 className="font-bold text-sm text-[#111827]">10-Year Termite Guarantee</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Deep anti-fungal & anti-termite oil infusion during seasoning.
                </p>
              </div>
            </div>

            {/* Key Craft Highlights */}
            <div className="space-y-2.5 pt-4 border-t border-[#EFEFEA] text-xs text-[#6B7280]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Seasoned Grade-A Burma & CP Teak Timber</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hand-Carved Sculpted Detailing by Master Artisans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Particle Board, Veneer or Hollow MDF Construction</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Craftsmanship Image */}
          <div className="relative h-[480px] sm:h-[580px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#EFEFEA] group">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
              alt="Teak Wood Carpentry Craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EFEFEA] shadow-lg space-y-2">
              <div className="flex items-center gap-2 text-[#C19A6B] font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#C19A6B]" /> Heritage Wood Crafters
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Over 60+ master carpenters in our specialized workshop bring decades of hand-carving expertise to every dining set, bed, and customized wardrobe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
