"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { Star, Sparkles, Eye } from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";
import { formatPrice } from "@/lib/utils";

export default function BestSellersGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleOpenQuote = (prod: any) => {
    setSelectedProduct(prod);
    setIsQuoteOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-[#FAFAF8] text-[#111827] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EFEFEA] pb-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C19A6B] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C19A6B]" /> Handpicked Showroom Masterpieces
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                Signature Teak Collections
              </h2>
              <p className="text-sm text-[#6B7280] max-w-xl">
                Explore our most requested solid teak living room, dining, and bedroom furniture crafted for lifetime durability.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === "all"
                    ? "bg-[#C19A6B] text-white font-bold shadow-md"
                    : "bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#C19A6B]"
                }`}
              >
                All Models
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-[#C19A6B] text-white font-bold shadow-md"
                      : "bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#C19A6B]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-[#EFEFEA] overflow-hidden shadow-sm hover:shadow-luxury hover:border-[#C19A6B] transition-all duration-300 flex flex-col group"
              >
                {/* Image Showcase */}
                <div className="relative h-72 w-full bg-[#FAFAF8] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Badges */}
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#C19A6B] font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[#EFEFEA] shadow-sm">
                      {product.tag}
                    </span>
                  )}

                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#111827] font-bold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#EFEFEA] shadow-sm">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {product.rating}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold bg-white/95 text-[#111827] px-3 py-1 rounded-full backdrop-blur-sm border border-[#EFEFEA] text-[11px]">
                      {product.woodType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C19A6B]">
                      {product.roomCollection}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#111827] line-clamp-1 group-hover:text-[#C19A6B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFEFEA] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-[#6B7280] block">Pricing</span>
                        <span className="text-xl font-bold text-[#111827]">{formatPrice(product.price)}</span>
                      </div>
                      {product.originalPrice && (
                        <span className="text-xs text-[#9CA3AF] line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="py-2.5 rounded-xl border border-[#E5E7EB] hover:border-[#C19A6B] text-[#111827] font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors uppercase tracking-wider bg-white"
                      >
                        <Eye className="w-3.5 h-3.5" /> Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleOpenQuote(product)}
                        className="py-2.5 rounded-xl bg-[#00D9D9] hover:bg-[#00B8B8] text-[#111827] font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-gold transition-all uppercase tracking-wider cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickQuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        productName={selectedProduct?.name}
        productPrice={selectedProduct?.price}
      />
    </>
  );
}
