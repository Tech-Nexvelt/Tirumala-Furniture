import React from "react";
import { ShieldCheck, Award, Flame, Sparkles, Truck, CreditCard } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Tirumala Furniture | 100% Solid Teak Guarantee & 10-Year Warranty",
  description: "Learn why over 45,000 homeowners and architects trust Tirumala Furniture. 100% solid Burma teak wood, kiln seasoning guarantee, custom dimensions, and white-glove installation.",
};

const PILLARS = [
  {
    title: "100% Genuine Grade-A Burma Teak",
    desc: "We never use cheap particle board, low-density MDF, or synthetic veneers for structural load-bearing frameworks. Only 100% seasoned teak wood.",
    icon: ShieldCheck,
    accent: "emerald",
  },
  {
    title: "45-Day Kiln Seasoning Process",
    desc: "Every log is dried in automated timber kilns to lower internal moisture below 10%, rendering it completely immune to warping, expansion, and cracking.",
    icon: Flame,
    accent: "amber",
  },
  {
    title: "10-Year Anti-Termite Guarantee",
    desc: "Our structural warranty protects your investment against termite attacks, joint loosening, and wood splitting for an entire decade.",
    icon: Award,
    accent: "gold",
  },
  {
    title: "Bespoke Architectural Customization",
    desc: "Have specific room dimensions or fabric choices? Our interior concierge and master carpenters customize length, depth, finish, and upholstery.",
    icon: Sparkles,
    accent: "gold",
  },
  {
    title: "White-Glove Delivery & Assembly",
    desc: "Complimentary unboxing, assembly, and precise room positioning by our trained master carpenters across South India.",
    icon: Truck,
    accent: "emerald",
  },
  {
    title: "Transparent GST Billing & 0% EMI",
    desc: "100% legal GST invoices for tax claims, along with flexible zero-interest monthly installment options.",
    icon: CreditCard,
    accent: "amber",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <Award className="w-4 h-4 text-[#C59D5F]" /> The Teak Benchmark
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Why Tirumala Furniture?
          </h1>
          <p className="text-sm text-gray-400">
            For 28 years, we have set the gold standard in solid teak wood furniture. Discover the engineering principles that make our furniture multi-generational heirlooms.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            const iconColor =
              pillar.accent === "emerald"
                ? "text-emerald-400 bg-emerald-900/30 border-emerald-500/30"
                : pillar.accent === "amber"
                ? "text-amber-400 bg-amber-900/30 border-amber-500/30"
                : "text-[#C59D5F] bg-[#C59D5F]/10 border-[#C59D5F]/30";

            return (
              <div
                key={i}
                className="bg-[#1C1C1C] p-8 rounded-3xl border border-[#C59D5F]/20 hover:border-[#C59D5F] transition-all duration-300 shadow-2xl space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-serif font-bold text-white">{pillar.title}</h2>
                <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Showroom CTA Banner */}
        <div className="bg-gradient-to-br from-[#1C1C1C] via-[#0D0D0D] to-[#1C1C1C] rounded-3xl p-8 sm:p-12 border border-[#C59D5F]/40 shadow-2xl text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">Experience the Difference in Person</h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Visit our flagship Siddipet showroom to touch live teak wood polishes, test cushion firmness, and consult with our interior architects — completely at no cost.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider"
          >
            Book Showroom VIP Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
