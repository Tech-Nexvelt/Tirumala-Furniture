import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { Star, Eye, Sparkles, ShieldCheck } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata = {
  title: "Solid Teak Furniture Catalog | Tirumala Furniture",
  description: "Browse 100% Burma Teak Wood living room sofas, dining tables, storage beds, executive office desks, and outdoor loungers.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <Sparkles className="w-4 h-4 text-[#C59D5F]" /> Complete Showroom Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Solid Burma Teak Furniture
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            All models are hand-crafted from mature Grade-A Burma Teak logs with mortise & tenon joinery and backed by a 10-Year Warranty.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#1C1C1C] rounded-3xl border border-[#C59D5F]/20 overflow-hidden shadow-2xl hover:border-[#C59D5F] transition-all flex flex-col justify-between group"
            >
              <div className="relative h-72 w-full bg-[#0D0D0D] overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent" />

                {product.tag && (
                  <span className="absolute top-4 left-4 bg-[#0D0D0D]/90 text-[#DFB978] font-bold text-[10px] uppercase px-3 py-1 rounded-full border border-[#C59D5F]/40">
                    {product.tag}
                  </span>
                )}

                <span className="absolute top-4 right-4 bg-[#0D0D0D]/90 text-white font-bold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {product.rating}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59D5F]">
                    {product.roomCollection}
                  </span>
                  <h2 className="font-serif font-bold text-lg text-white line-clamp-1">
                    {product.name}
                  </h2>
                  <p className="text-xs text-gray-400 line-clamp-2">{product.description}</p>
                </div>

                <div className="pt-4 border-t border-[#0D0D0D] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 block">Price</span>
                    <span className="text-xl font-bold text-white">{formatPrice(product.price)}</span>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs flex items-center gap-1.5 uppercase tracking-wider shadow-gold"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Specifications
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
