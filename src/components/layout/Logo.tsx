import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "gold";
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  showTagline = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Logo Image */}
      <div className="relative w-12 h-12 shrink-0">
        <Image
          src="/logo.png"
          alt="Tirumala Furniture Logo"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-serif font-bold tracking-[0.18em] text-lg leading-none text-[#111827]">
          TIRUMALA
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="h-[1px] w-3 bg-[#C19A6B]" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#C19A6B]">
            FURNITURE
          </span>
          <span className="h-[1px] w-3 bg-[#C19A6B]" />
        </div>
        {showTagline && (
          <span className="text-[8px] tracking-[0.25em] text-[#6B7280] font-medium uppercase mt-0.5">
            Comfort. Quality. Elegance.
          </span>
        )}
      </div>
    </div>
  );
}
