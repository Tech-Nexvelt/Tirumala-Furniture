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
      <section className="py-24 bg-[#0D0D0D] text-[#E8E6E1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1C1C1C] pb-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C59D5F]" /> Handpicked Showroom Masterpieces
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Signature Teak Collections
              </h2>
              <p className="text-sm text-gray-400 max-w-xl">
                Explore our most requested solid teak living room, dining, and bedroom furniture crafted for lifetime durability.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === "all"
                    ? "bg-[#C59D5F] text-[#0D0D0D] font-bold shadow-gold"
                    : "bg-[#1C1C1C] text-gray-300 border border-[#C59D5F]/20 hover:border-[#C59D5F]"
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
                      ? "bg-[#C59D5F] text-[#0D0D0D] font-bold shadow-gold"
                      : "bg-[#1C1C1C] text-gray-300 border border-[#C59D5F]/20 hover:border-[#C59D5F]"
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
                className="bg-[#1C1C1C] rounded-3xl border border-[#C59D5F]/20 overflow-hidden shadow-2xl hover:shadow-gold hover:border-[#C59D5F] transition-all duration-300 flex flex-col group"
              >
                {/* Image Showcase */}
                <div className="relative h-72 w-full bg-[#0D0D0D] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent" />

                  {/* Badges */}
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-[#0D0D0D]/90 backdrop-blur-md text-[#DFB978] font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[#C59D5F]/40 shadow-md">
                      {product.tag}
                    </span>
                  )}

                  <span className="absolute top-4 right-4 bg-[#0D0D0D]/90 backdrop-blur-md text-white font-bold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {product.rating}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold bg-[#0D0D0D]/90 px-3 py-1 rounded-full backdrop-blur-sm border border-[#C59D5F]/30 text-[11px] text-[#DFB978]">
                      {product.woodType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59D5F]">
                      {product.roomCollection}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-white line-clamp-1 group-hover:text-[#DFB978] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#0D0D0D] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-gray-500 block">Pricing</span>
                        <span className="text-xl font-bold text-white">{formatPrice(product.price)}</span>
                      </div>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="py-2.5 rounded-xl border border-gray-700 hover:border-[#C59D5F] text-[#E8E6E1] font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors uppercase tracking-wider"
                      >
                        <Eye className="w-3.5 h-3.5" /> Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleOpenQuote(product)}
                        className="py-2.5 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-gold transition-all uppercase tracking-wider cursor-pointer"
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
