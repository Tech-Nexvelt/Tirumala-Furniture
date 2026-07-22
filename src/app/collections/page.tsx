import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Solid Teak Room Collections | Tirumala Furniture",
  description: "Explore 100% Solid Burma Teak furniture collections for Living Room, Bedroom Suite, Italian Marble Dining, Executive Office, and Custom Interiors.",
};

export default function CollectionsPage() {
  return (
    <div className="bg-[#FAFAF8] text-[#111827] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#8B5E3C]" /> Handcrafted Masterpieces
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#111827] tracking-tight">
            Curated Teak Wood Collections
          </h1>
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
            Every piece is crafted from 100% Grade-A Burma & CP Teak logs, kiln-seasoned for 45 days, and built with mortise & tenon joinery for multi-generational elegance.
          </p>
        </div>

        {/* Visually Rich Collections Grid */}
        <div className="space-y-12">
          {CATEGORIES.map((cat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#8B5E3C] transition-all duration-500"
              >
                {/* Collection Photography (7 cols) */}
                <div
                  className={`lg:col-span-7 relative h-[380px] sm:h-[450px] w-full overflow-hidden ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold text-[#111827] bg-white/95 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-[#E5E7EB] shadow-sm">
                    {cat.count}+ Exclusive Furniture Models
                  </span>
                </div>

                {/* Collection Content Details (5 cols) */}
                <div
                  className={`lg:col-span-5 p-8 sm:p-12 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> 10-Year Warranty
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-[#111827]">{cat.name}</h2>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{cat.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB]">
                    <Link
                      href={`/collections/${cat.id}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#8B5E3C] hover:bg-[#6E472B] text-white font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider"
                    >
                      Explore {cat.name} Collection <ArrowRight className="w-4 h-4 text-[#C19A6B]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
