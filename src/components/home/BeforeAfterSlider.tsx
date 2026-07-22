"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative border-t border-b border-[#EFEFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C19A6B] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#EFEFEA] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C19A6B]" /> Architectural Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
            Before & After Room Transformation
          </h2>
          <p className="text-sm text-[#6B7280]">
            Drag the handle left or right to explore how solid Burma Teak furniture transforms bare space into a warm luxury home.
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[400px] sm:h-[540px] w-full rounded-3xl overflow-hidden border border-[#EFEFEA] shadow-2xl select-none cursor-ew-resize group"
        >
          {/* AFTER Image (Full background) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90"
              alt="After: Furnished Luxury Living Room with Teak Sofa & Marble Table"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute top-6 right-6 bg-[#00D9D9] text-[#111827] text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
              AFTER: Tirumala Teak Sanctuary
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full h-full min-w-[100vw] sm:min-w-[1200px]">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=90"
                alt="Before: Unfurnished Bare Room Space"
                fill
                sizes="100vw"
                className="object-cover filter contrast-90"
              />
            </div>
            <div className="absolute top-6 left-6 bg-white/95 text-[#111827] text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-[#EFEFEA]">
              BEFORE: Bare Space
            </div>
          </div>

          {/* Draggable Divider Line & Knob */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-xl border-2 border-white">
              <MoveHorizontal className="w-5 h-5 text-[#C19A6B]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
