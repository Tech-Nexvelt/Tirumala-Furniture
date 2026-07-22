import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  showTagline = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-DPI Logo Mark — Desktop: 44px (h-11), Mobile: 34px (h-8.5/9) */}
      <div className="relative w-8.5 sm:w-11 h-8.5 sm:h-11 shrink-0">
        <Image
          src="/logo.png"
          alt="Tirumala Furniture Logo"
          fill
          sizes="(max-width: 640px) 34px, 44px"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-serif font-bold tracking-[0.18em] text-base sm:text-lg leading-none text-[#111827]">
          TIRUMALA
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="h-[1px] w-2.5 sm:w-3 bg-[#C19A6B]" />
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-bold text-[#8B5E3C]">
            FURNITURE
          </span>
          <span className="h-[1px] w-2.5 sm:w-3 bg-[#C19A6B]" />
        </div>
        {showTagline && (
          <span className="text-[7.5px] sm:text-[8px] tracking-[0.25em] text-[#6B7280] font-medium uppercase mt-0.5">
            Comfort. Quality. Elegance.
          </span>
        )}
      </div>
    </div>
  );
}
