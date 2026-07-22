import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { Star, ShieldCheck, Sparkles, ArrowLeft, MessageSquare, CheckCircle2 } from "lucide-react";
import { createWhatsAppUrl, formatPrice } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#C59D5F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products Catalog
        </Link>

        {/* Product Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Product Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[450px] sm:h-[540px] w-full rounded-3xl overflow-hidden bg-[#1C1C1C] border border-[#C59D5F]/30 shadow-2xl">
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
                    className="relative h-28 w-full rounded-2xl overflow-hidden bg-[#1C1C1C] border border-[#C59D5F]/20"
                  >
                    <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information & Specification Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#1C1C1C] p-8 sm:p-10 rounded-3xl border border-[#C59D5F]/30 shadow-2xl space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F]">
                  {product.roomCollection}
                </span>
                <span className="bg-[#0D0D0D] text-amber-400 font-bold text-xs px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> {product.rating} ({product.reviewCount})
                </span>
              </div>

              <h1 className="text-3xl font-serif font-bold text-white leading-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-3xl font-bold text-white">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed border-t border-[#0D0D0D] pt-4">
              {product.description}
            </p>

            {/* Specifications Card */}
            <div className="space-y-2 bg-[#0D0D0D] p-4 rounded-2xl border border-[#C59D5F]/20 text-xs">
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Timber Species</span>
                <span className="font-bold text-white">{product.woodType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Polish Finish</span>
                <span className="font-bold text-white">{product.finish}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Dimensions</span>
                <span className="font-bold text-[#DFB978]">{product.dimensions.length} × {product.dimensions.width}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Warranty</span>
                <span className="font-bold text-emerald-400">{product.warranty}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2 text-xs text-gray-300">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#0D0D0D]">
              <a
                href={createWhatsAppUrl(`Hi Tirumala Furniture, I'd like to get official quotation for ${product.name} (${formatPrice(product.price)}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-wider block text-center"
              >
                <Sparkles className="w-4 h-4" /> Request WhatsApp Quotation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
