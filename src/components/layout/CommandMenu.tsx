"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/data";
import { Search, X, ChevronRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.woodType.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 animate-fade-in">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#EFEFEA] overflow-hidden relative z-10 text-[#111827]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#EFEFEA] flex items-center gap-3 bg-[#FAFAF8]">
          <Search className="w-5 h-5 text-[#C19A6B]" />
          <input
            type="text"
            autoFocus
            placeholder="Search teak sofas, dining tables, beds..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base bg-transparent focus:outline-none text-[#111827] placeholder-gray-400"
          />
          <button onClick={onClose} className="p-2 text-[#9CA3AF] hover:text-[#111827]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C19A6B] block">
            {query ? "Search Results" : "Featured Furniture Models"}
          </span>

          <div className="space-y-2">
            {results.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                onClick={onClose}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#FAFAF8] transition-colors border border-transparent hover:border-[#E5E7EB] group"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#FAFAF8] shrink-0 border border-[#EFEFEA]">
                  <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm text-[#111827] group-hover:text-[#C19A6B] truncate">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#6B7280] block">{item.woodType}</span>
                </div>
                <span className="font-bold text-xs text-[#8B5E3C] bg-[#8B5E3C]/10 px-2.5 py-1 rounded-full border border-[#8B5E3C]/20 shrink-0">
                  Price on Request
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
