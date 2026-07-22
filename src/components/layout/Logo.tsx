import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "gold" | "white";
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  variant = "gold",
  showTagline = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Logo Image */}
      <div className="relative w-16 h-16 shrink-0">
        <Image
          src="/logo.png"
          alt="Tirumala Furniture Logo"
          fill
          sizes="64px"
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-serif font-bold tracking-[0.18em] text-lg leading-none text-[#C59D5F]">
          TIRUMALA
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="h-[1px] w-3 bg-gradient-to-r from-transparent to-[#C59D5F]" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#DFB978]">
            FURNITURE
          </span>
          <span className="h-[1px] w-3 bg-gradient-to-l from-transparent to-[#C59D5F]" />
        </div>
        {showTagline && (
          <span className="text-[8px] tracking-[0.25em] text-gray-400 font-medium uppercase mt-0.5">
            Comfort. Quality. Elegance.
          </span>
        )}
      </div>
    </div>
  );
}
