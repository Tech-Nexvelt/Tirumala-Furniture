"use client";

import React, { useState } from "react";
import Image from "next/image";
import { OFFER_BUNDLES } from "@/lib/data";
import { Sparkles, Tag, CheckCircle2 } from "lucide-react";
import QuickQuoteDrawer from "@/components/layout/QuickQuoteDrawer";
import { formatPrice } from "@/lib/utils";

export default function OffersPage() {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);

  const [sofaSelected, setSofaSelected] = useState(true);
  const [bedSelected, setBedSelected] = useState(true);
  const [diningSelected, setDiningSelected] = useState(false);
  const [tvUnitSelected, setTvUnitSelected] = useState(true);

  const calculateCustomTotal = () => {
    let base = 0;
    if (sofaSelected) base += 145000;
    if (bedSelected) base += 128000;
    if (diningSelected) base += 185000;
    if (tvUnitSelected) base += 64000;
    return base;
  };

  const calculateDiscountedTotal = () => Math.round(calculateCustomTotal() * 0.85);

  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <Tag className="w-4 h-4 text-[#C59D5F]" /> Festival & Package Bundles
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Exclusive Showroom Offers
          </h1>
          <p className="text-sm text-gray-400">
            Combine furniture sets to unlock up to 20% bundle savings, complimentary white-glove delivery, and 0% EMI payment options.
          </p>
        </div>

        {/* Offer Bundle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFER_BUNDLES.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-[#1C1C1C] rounded-3xl border border-[#C59D5F]/25 overflow-hidden shadow-2xl hover:border-[#C59D5F] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full bg-[#0D0D0D]">
                <Image
                  src={bundle.image}
                  alt={bundle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {bundle.badge} • Save {bundle.discountPercentage}%
                </span>
              </div>

              <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white">{bundle.title}</h2>
                  <p className="text-xs text-gray-400 mt-1">{bundle.description}</p>

                  <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-3xl font-bold text-white">{formatPrice(bundle.offerPrice)}</span>
                    <span className="text-sm text-gray-500 line-through">{formatPrice(bundle.originalPrice)}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#0D0D0D]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C59D5F] block">
                    Package Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {bundle.itemsIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedBundle(bundle.title)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Sparkles className="w-4 h-4" /> Claim Bundle & Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Package Calculator */}
        <div className="bg-[#1C1C1C] p-8 sm:p-12 rounded-3xl border border-[#C59D5F]/30 shadow-2xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59D5F]">Interactive Tool</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">Build Your Own Custom Package</h3>
            <p className="text-xs text-gray-400">Select items to simulate instant package pricing & bundle discounts.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Royal Teak Sofa", price: "₹1,45,000", checked: sofaSelected, toggle: setSofaSelected },
              { label: "Teak King Bed", price: "₹1,28,000", checked: bedSelected, toggle: setBedSelected },
              { label: "Marble Dining Set", price: "₹1,85,000", checked: diningSelected, toggle: setDiningSelected },
              { label: "Teak TV Console", price: "₹64,000", checked: tvUnitSelected, toggle: setTvUnitSelected },
            ].map((item) => (
              <label
                key={item.label}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                  item.checked
                    ? "bg-[#0D0D0D] border-[#C59D5F] shadow-gold"
                    : "bg-[#0D0D0D] border-gray-800 hover:border-[#C59D5F]/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => item.toggle(e.target.checked)}
                  className="w-4 h-4 accent-[#C59D5F]"
                />
                <div>
                  <span className="font-bold text-sm text-white block">{item.label}</span>
                  <span className="text-xs text-gray-400">{item.price}</span>
                </div>
              </label>
            ))}
          </div>

          <div className="pt-6 border-t border-[#0D0D0D] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-gray-400 block">Bundle Estimate (15% Savings Applied):</span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-3xl font-bold text-[#C59D5F]">{formatPrice(calculateDiscountedTotal())}</span>
                <span className="text-sm text-gray-500 line-through">{formatPrice(calculateCustomTotal())}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedBundle("Custom Package Combination")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider cursor-pointer"
            >
              Request Quote for Selected Items
            </button>
          </div>
        </div>
      </div>

      <QuickQuoteDrawer
        isOpen={Boolean(selectedBundle)}
        onClose={() => setSelectedBundle(null)}
        productName={selectedBundle || undefined}
      />
    </div>
  );
}
