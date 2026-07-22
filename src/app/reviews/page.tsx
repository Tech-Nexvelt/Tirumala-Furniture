import React from "react";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import { REVIEWS } from "@/lib/data";
import { Star, CheckCircle2, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Customer Reviews & Installation Stories | Tirumala Furniture",
  description: "Read 1,480+ verified 5-star customer reviews from villa owners, doctors, and interior architects across South India.",
};

export default function ReviewsPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            4.9 / 5.0 Star Rated • 1,480+ Google Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Client Testimonials & Home Stories
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Discover why over 45,000 homeowners, interior designers, and architects trust Tirumala Furniture for 100% Burma Teak wood living, dining, and bedroom interiors.
          </p>
        </div>

        {/* Featured Slider */}
        <TestimonialsSlider />

        {/* All Reviews Grid */}
        <div className="space-y-8 pt-8 border-t border-[#1C1C1C]">
          <h2 className="text-2xl font-serif font-bold text-white text-center">
            All Verified Installation Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#1C1C1C] rounded-3xl p-6 border border-[#C59D5F]/25 hover:border-[#C59D5F] transition-all space-y-4 shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Purchase
                    </span>
                  </div>

                  <p className="text-sm text-gray-200 leading-relaxed italic">&ldquo;{rev.comment}&rdquo;</p>
                </div>

                <div className="pt-4 border-t border-[#0D0D0D] flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-white">{rev.name}</h3>
                    <p className="text-xs text-gray-400">{rev.city}</p>
                  </div>
                  <span className="text-[11px] text-[#C59D5F] font-semibold bg-[#0D0D0D] px-2.5 py-1 rounded-md border border-[#C59D5F]/30">
                    {rev.productBought}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-[#1C1C1C] via-[#0D0D0D] to-[#1C1C1C] rounded-3xl p-8 sm:p-12 border border-[#C59D5F]/40 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl font-serif font-bold text-white">
            Ready to Create Your Own Teak Sanctuary?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Visit our flagship showroom in Siddipet or request a custom quotation with 3D room floorplan consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" /> Visit Siddipet Showroom
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
