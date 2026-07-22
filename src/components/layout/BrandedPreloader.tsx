"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function BrandedPreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate smooth progress loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 5;
        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAF8] text-[#111827] transition-opacity duration-700 ${
        progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-6 animate-fade-in text-center px-4">
        {/* Animated Brand Logo Mark */}
        <div className="relative w-20 h-20 animate-pulse">
          <Image
            src="/logo.png"
            alt="Tirumala Furniture Monogram"
            fill
            sizes="80px"
            className="object-contain"
            priority
          />
        </div>

        {/* Brand Name */}
        <div className="space-y-1">
          <h2 className="font-serif font-bold tracking-[0.25em] text-xl text-[#111827]">
            TIRUMALA FURNITURE
          </h2>
          <p className="text-[10px] tracking-[0.35em] text-[#C19A6B] font-semibold uppercase">
            Crafted for Generations
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 space-y-2 pt-4">
          <div className="h-[2px] w-full bg-[#EFEFEA] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C19A6B] to-[#00D9D9] transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] font-mono font-semibold text-[#6B7280]">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
