import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { Star, Eye, ArrowLeft } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: catId } = await params;

  const currentCategory =
    CATEGORIES.find((c) => c.id === catId) || CATEGORIES[0];

  const categoryProducts = PRODUCTS.filter(
    (p) => p.category === catId || catId === "all"
  );

  return (
    <div className="bg-[#FAFAF8] text-[#111827] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B7280] hover:text-[#8B5E3C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Collections
        </Link>

        {/* Category Banner */}
        <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-[#E5E7EB] group">
          <Image
            src={currentCategory.image}
            alt={currentCategory.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111827] bg-white/95 px-3.5 py-1 rounded-full border border-[#E5E7EB] backdrop-blur-md inline-block shadow-sm">
              {currentCategory.count}+ Teak Wood Models
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              {currentCategory.name} Collection
            </h1>
            <p className="text-sm text-gray-200 font-light leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </div>

        {/* Category Products Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
            <h2 className="text-xl font-serif font-bold text-[#111827]">
              Available Models ({categoryProducts.length})
            </h2>
            <span className="text-xs text-[#6B7280]">100% Solid Teak Wood Guarantee</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-luxury hover:border-[#8B5E3C] transition-all flex flex-col justify-between group"
              >
                <div className="relative h-72 w-full bg-[#FAFAF8] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-white/95 text-[#8B5E3C] font-bold text-[10px] uppercase px-3 py-1 rounded-full border border-[#E5E7EB] shadow-sm">
                      {product.tag}
                    </span>
                  )}

                  <span className="absolute top-4 right-4 bg-white/95 text-[#111827] font-bold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#E5E7EB] shadow-sm">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {product.rating}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B5E3C]">
                      {product.woodType}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#111827] line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#6B7280] line-clamp-2">{product.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3 py-1 rounded-full border border-[#8B5E3C]/20 uppercase tracking-wider">
                      Price on Request
                    </span>

                    <Link
                      href={`/products/${product.id}`}
                      className="px-4 py-2.5 rounded-xl bg-[#8B5E3C] hover:bg-[#6E472B] text-white font-bold text-xs flex items-center gap-1.5 uppercase tracking-wider shadow-gold"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
