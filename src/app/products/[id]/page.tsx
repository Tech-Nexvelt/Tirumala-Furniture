import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { Star, Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";
import { createWhatsAppUrl, formatPrice } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  return (
    <div className="bg-[#FAFAF8] text-[#111827] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B7280] hover:text-[#8B5E3C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products Catalog
        </Link>

        {/* Product Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Product Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[450px] sm:h-[540px] w-full rounded-3xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xl">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-28 w-full rounded-2xl overflow-hidden bg-white border border-[#E5E7EB]"
                  >
                    <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information & Specification Panel (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-xl space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
                  {product.roomCollection}
                </span>
                <span className="bg-[#FAFAF8] text-amber-600 font-bold text-xs px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> {product.rating} ({product.reviewCount})
                </span>
              </div>

              <h1 className="text-3xl font-serif font-bold text-[#111827] leading-tight">
                {product.name}
              </h1>

              <div className="pt-1">
                <span className="inline-block text-xs font-bold text-[#8B5E3C] bg-[#8B5E3C]/10 px-4 py-1.5 rounded-full border border-[#8B5E3C]/20 uppercase tracking-wider">
                  Showroom Price on Request • Customized Dimensions
                </span>
              </div>
            </div>

            <p className="text-xs text-[#6B7280] leading-relaxed border-t border-[#E5E7EB] pt-4">
              {product.description}
            </p>

            {/* Specifications Card */}
            <div className="space-y-2 bg-[#FAFAF8] p-4 rounded-2xl border border-[#E5E7EB] text-xs">
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-[#6B7280]">Timber Species</span>
                <span className="font-bold text-[#111827]">{product.woodType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-[#6B7280]">Polish Finish</span>
                <span className="font-bold text-[#111827]">{product.finish}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-[#6B7280]">Dimensions</span>
                <span className="font-bold text-[#8B5E3C]">{product.dimensions.length} × {product.dimensions.width}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#6B7280]">Warranty</span>
                <span className="font-bold text-emerald-600">{product.warranty}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2 text-xs text-[#6B7280]">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
              <a
                href={createWhatsAppUrl(`Hi Tirumala Furniture, I'd like to get official quotation for ${product.name} (${formatPrice(product.price)}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#8B5E3C] hover:bg-[#6E472B] text-white font-bold text-xs shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-wider block text-center"
              >
                <Sparkles className="w-4 h-4 text-[#C19A6B]" /> Request WhatsApp Quotation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
