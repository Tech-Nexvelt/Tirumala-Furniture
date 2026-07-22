"use client";

import React, { useState } from "react";
import { REVIEWS } from "@/lib/data";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = REVIEWS[currentIndex];

  return (
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative border-t border-b border-[#EFEFEA]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C19A6B] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#EFEFEA] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C19A6B]" /> Verified Buyer Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
            Trusted by Over 45,000 Luxury Home Owners
          </h2>
          <p className="text-sm text-[#6B7280]">
            Real installation stories from homeowners, doctors, and interior architects across Telangana & Andhra Pradesh.
          </p>
        </div>

        {/* Main Testimonial Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EFEFEA] p-8 sm:p-12 shadow-xl relative">
          <Quote className="absolute top-6 left-6 w-16 h-16 text-[#C19A6B]/15 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Customer Room Photo Column (5 cols) */}
            <div className="md:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#FAFAF8] border border-[#EFEFEA] shadow-sm">
              {/* eslint-disable-next-html-element-suppress */}
              <img
                src={activeReview.roomPhoto || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"}
                alt={activeReview.productBought}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-[#EFEFEA] text-xs shadow-sm">
                <span className="text-[10px] text-[#C19A6B] font-bold uppercase block">Verified Purchase</span>
                <span className="font-semibold text-[#111827] truncate block">{activeReview.productBought}</span>
              </div>
            </div>

            {/* Testimonial Text Content Column (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-[#111827] ml-2 bg-[#FAFAF8] px-2 py-0.5 rounded border border-[#E5E7EB]">
                  5.0 / 5.0
                </span>
              </div>

              {/* Review Quote Text */}
              <blockquote className="text-base sm:text-lg text-[#111827] font-serif leading-relaxed italic">
                &ldquo;{activeReview.comment}&rdquo;
              </blockquote>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#EFEFEA]">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C19A6B] shrink-0 bg-[#FAFAF8] flex items-center justify-center font-bold text-[#111827] text-lg">
                  {activeReview.userImage ? (
                    <img src={activeReview.userImage} alt={activeReview.name} className="w-full h-full object-cover" />
                  ) : (
                    activeReview.name.charAt(0)
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#111827] flex items-center gap-1.5">
                    {activeReview.name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </h4>
                  <p className="text-xs text-[#6B7280]">{activeReview.city} • {activeReview.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#EFEFEA] relative z-20">
            {/* Slide Index Counter */}
            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
              <span className="font-bold text-[#C19A6B] text-base">{currentIndex + 1}</span>
              <span>/</span>
              <span className="font-bold text-[#111827] text-sm">{REVIEWS.length} Verified Reviews</span>
            </div>

            {/* Dots Indicator */}
            <div className="hidden sm:flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-[#C19A6B]" : "w-2.5 bg-gray-200 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-[#E5E7EB] hover:border-[#C19A6B] text-[#111827] hover:text-[#C19A6B] transition-all flex items-center justify-center cursor-pointer active:scale-90 shadow-sm"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-[#E5E7EB] hover:border-[#C19A6B] text-[#111827] hover:text-[#C19A6B] transition-all flex items-center justify-center cursor-pointer active:scale-90 shadow-sm"
                aria-label="Next Review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
