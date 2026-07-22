"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/data";
import { ArrowRight, Sparkles } from "lucide-react";

interface MegaMenuProps {
  onClose: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-2xl z-40 py-8 px-6 transition-all duration-300 animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Collections Grid */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" /> Curated Room Collections
            </h3>
            <Link
              href="/collections"
              onClick={onClose}
              className="text-xs font-semibold text-brand-secondary hover:text-brand-primary flex items-center gap-1 group"
            >
              View All 6 Collections <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.id}`}
                onClick={onClose}
                className="group p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-gray-200 flex flex-col"
              >
                <div className="relative h-28 w-full rounded-lg overflow-hidden mb-3 bg-gray-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {cat.count}+ Models
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-gray-900 group-hover:text-brand-secondary transition-colors">
                  {cat.name}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Bespoke Custom Teak & Showroom Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div className="relative z-10 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent bg-brand-primary/20 px-2.5 py-1 rounded-full border border-brand-accent/30 inline-block">
              Custom Craftsmanship
            </span>
            <h4 className="text-xl font-serif font-bold leading-snug">
              Bespoke Solid Teak Interior Tailoring
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Have specific architectural drawings or custom room dimensions? Our master woodcrafters handcraft furniture to your exact specifications.
            </p>
          </div>

          <div className="relative z-10 pt-6 border-t border-gray-800 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-gray-400 block">Siddipet Flagship Center</span>
              <span className="text-xs font-semibold text-white">Azam Pura • Near Court</span>
            </div>
            <Link
              href="/contact"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-brand-primary text-gray-900 font-bold text-xs hover:bg-brand-accent transition-all shadow-glow"
            >
              Book Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
