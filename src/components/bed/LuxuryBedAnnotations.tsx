"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface BedAnnotationProps {
  step: string;
  title: string;
  badge: string;
  desc: string;
}

export default function LuxuryBedAnnotations({
  step,
  title,
  badge,
  desc,
}: BedAnnotationProps) {
  return (
    <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-[#E5E7EB] shadow-xl max-w-md space-y-2 text-[#111827] transition-all duration-300">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono font-bold text-[#8B5E3C] bg-[#8B5E3C]/10 px-2.5 py-0.5 rounded-full border border-[#8B5E3C]/20">
          {step}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B5E3C] flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" /> {badge}
        </span>
      </div>
      <h3 className="text-xl font-serif font-bold">{title}</h3>
      <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
      <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-[#111827]">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 10-Year Anti-Termite & Structural Guarantee
      </div>
    </div>
  );
}
