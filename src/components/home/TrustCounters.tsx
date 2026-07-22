"use client";

import React from "react";
import { ShieldCheck, Award, Star, Users, CheckCircle2 } from "lucide-react";

export default function TrustCounters() {
  const METRICS = [
    {
      value: "28+",
      label: "Years of Craftsmanship",
      sub: "Master carpentry since 1998",
      icon: Award,
    },
    {
      value: "45,000+",
      label: "Homes Furnished",
      sub: "Across Telangana & Andhra Pradesh",
      icon: Users,
    },
    {
      value: "1,480+",
      label: "Verified 5-Star Reviews",
      sub: "4.9/5.0 Google rating",
      icon: Star,
    },
    {
      value: "10-Year",
      label: "Termite & Structural Guarantee",
      sub: "Comprehensive anti-termite coverage",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-white text-[#111827] relative border-t border-b border-[#EFEFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAF8] p-8 rounded-3xl border border-[#EFEFEA] hover:border-[#C19A6B] transition-all space-y-3 shadow-sm hover:shadow-luxury group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-[#C19A6B] flex items-center justify-center border border-[#EFEFEA] group-hover:bg-[#C19A6B] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] block">
                    {item.value}
                  </span>
                  <h4 className="font-bold text-sm text-[#111827]">{item.label}</h4>
                  <p className="text-xs text-[#6B7280]">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certified Quality Highlights */}
        <div className="mt-12 pt-8 border-t border-[#EFEFEA] flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#111827]">100% Genuine Burma Teak Logs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#111827]">Automated 45-Day Timber Kiln Drying</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#111827]">White-Glove Assembly & Placement</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#111827]">100% GST Tax Compliant Billing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
