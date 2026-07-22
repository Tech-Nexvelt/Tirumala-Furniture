"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROOM_HOTSPOTS } from "@/lib/data";
import { Sparkles, Eye } from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";
import { formatPrice } from "@/lib/utils";

export default function ShopTheRoom() {
  const [activeHotspot, setActiveHotspot] = useState(ROOM_HOTSPOTS[0]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative border-t border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#8B5E3C]" /> Interactive Interior Hotspots
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
            Shop The Villa Living Collection
          </h2>
          <p className="text-sm text-[#6B7280]">
            Click hotspot pins on the room setup to inspect individual solid teak furniture models and request instant quotations.
          </p>
        </div>

        {/* Hotspot Room Visualizer Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Room Image with Hotspots (8 Cols) */}
          <div className="lg:col-span-8 relative h-[450px] sm:h-[540px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#E5E7EB] group">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
              alt="Shop The Room Luxury Teak Suite"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Hotspot Pins */}
            {ROOM_HOTSPOTS.map((spot) => {
              const isActive = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ top: `${spot.topPercent}%`, left: `${spot.leftPercent}%` }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#8B5E3C] text-white ring-4 ring-[#8B5E3C]/40 scale-125 z-30 shadow-gold"
                      : "bg-white/95 text-[#111827] hover:scale-110 z-20 border border-[#E5E7EB] shadow-md"
                  }`}
                  title={spot.productName}
                >
                  <span className="w-3 h-3 rounded-full bg-[#C19A6B]" />
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Detail Card (4 Cols) */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-xl space-y-6">
            <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-[#FAFAF8] border border-[#E5E7EB]">
              <Image
                src={activeHotspot.image}
                alt={activeHotspot.productName}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B5E3C]">
                {activeHotspot.category}
              </span>
              <h3 className="text-xl font-serif font-bold text-[#111827]">{activeHotspot.productName}</h3>
              <span className="inline-block text-xs font-bold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3 py-1 rounded-full border border-[#8B5E3C]/20 uppercase tracking-wider mt-1">
                Price on Request
              </span>
            </div>

            <div className="space-y-3 pt-2 border-t border-[#E5E7EB]">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="w-full py-4 rounded-xl bg-[#8B5E3C] hover:bg-[#6E472B] text-white font-bold text-xs shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C19A6B]" /> Request Quote for Item
              </button>

              <Link
                href={`/products/${activeHotspot.productId}`}
                className="w-full py-3 rounded-xl border border-[#E5E7EB] hover:border-[#8B5E3C] text-[#111827] font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors uppercase tracking-wider block bg-white"
              >
                <Eye className="w-4 h-4" /> View Product Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>

      <QuickQuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        productName={activeHotspot.productName}
        productPrice={activeHotspot.price}
      />
    </section>
  );
}
