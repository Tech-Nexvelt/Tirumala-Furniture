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
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* High-DPI Logo Mark — Desktop: 56px, Tablet: 48px, Mobile: 42px */}
      <div className="relative h-[42px] sm:h-[48px] lg:h-[56px] aspect-[293/156] shrink-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Tirumala Furniture Logo"
          fill
          sizes="(max-width: 640px) 79px, (max-width: 1024px) 90px, 105px"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span className="font-serif font-bold tracking-[0.2em] text-lg sm:text-xl lg:text-2xl leading-none text-[#111827]">
          TIRUMALA
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className="h-[1px] w-3 sm:w-4 bg-[#C19A6B]" />
          <span className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B5E3C]">
            FURNITURE
          </span>
          <span className="h-[1px] w-3 sm:w-4 bg-[#C19A6B]" />
        </div>
        {showTagline && (
          <span className="text-[8px] sm:text-[8.5px] tracking-[0.28em] text-[#6B7280] font-medium uppercase mt-0.5">
            Comfort. Quality. Elegance.
          </span>
        )}
      </div>
    </div>
  );
}
