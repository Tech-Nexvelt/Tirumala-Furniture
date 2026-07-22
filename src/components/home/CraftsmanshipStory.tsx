"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Flame, Award, Wrench, CheckCircle2, Truck } from "lucide-react";

export default function CraftsmanshipStory() {
  const [activeStage, setActiveStage] = useState(0);

  const STAGES = [
    {
      id: "wood",
      step: "01",
      title: "Grade-A Burma Teak Sourcing",
      icon: Award,
      desc: "Every log is hand-selected from mature Grade-A Burma & CP Teak timber, chosen for uniform density, natural oil richness, and tight grain structure.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      detail: "Zero particle board, synthetic veneer, or hollow MDF.",
    },
    {
      id: "seasoning",
      step: "02",
      title: "45-Day Automated Kiln Drying",
      icon: Flame,
      desc: "Timber logs undergo 45 days of automated kiln seasoning to lower internal moisture content below 10%, rendering the wood completely immune to warping.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      detail: "Termite & anti-fungal oil deep infusion process.",
    },
    {
      id: "craft",
      step: "03",
      title: "Hand Mortise & Tenon Joinery",
      icon: Wrench,
      desc: "Our master carpenters shape interlocking mortise and tenon wood joints that distribute weight evenly without relying on weak nails or synthetic glues.",
      image: "https://images.unsplash.com/photo-1540518614846-7ede433c5172?auto=format&fit=crop&w=1200&q=80",
      detail: "Multi-generational structural integrity.",
    },
    {
      id: "sanding",
      step: "04",
      title: "5-Stage Precision Sanding",
      icon: Sparkles,
      desc: "Hand-sanded across 5 progressive grit levels (from 80 to 400 grit) to reveal smooth natural wood grain patterns before polish application.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      detail: "Silky smooth feel across every surface.",
    },
    {
      id: "polish",
      step: "05",
      title: "Italian Polyurethane & Oil Polish",
      icon: Award,
      desc: "Finished with non-toxic, heat-resistant Italian PU and natural beeswax polishes that highlight golden teak tones while shielding against spills.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      detail: "Stain-resistant & scratch-protected surface.",
    },
    {
      id: "inspection",
      step: "06",
      title: "24-Point Quality Audit",
      icon: ShieldCheck,
      desc: "Each furniture piece undergoes a rigorous 24-point inspection covering joint strength, moisture levels, cushion density, and polish consistency.",
      image: "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80",
      detail: "10-Year Warranty certification approved.",
    },
    {
      id: "delivery",
      step: "07",
      title: "White-Glove Home Delivery",
      icon: Truck,
      desc: "Delivered in protective blankets and assembled by our in-house technicians, positioned precisely inside your home.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      detail: "Complimentary unboxing & hardware setup.",
    },
  ];

  const currentStage = STAGES[activeStage];

  return (
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative border-t border-b border-[#E5E7EB]" id="craftsmanship">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#8B5E3C]" /> Uncompromising Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
            Crafted to Last Generations
          </h2>
          <p className="text-sm text-[#6B7280]">
            Explore the 7-stage master carpentry workflow that transforms raw Grade-A Burma Teak logs into heirloom luxury furniture.
          </p>
        </div>

        {/* Timeline Stage Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#E5E7EB]">
          {STAGES.map((stg, idx) => (
            <button
              key={stg.id}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeStage === idx
                  ? "bg-[#8B5E3C] text-white shadow-md"
                  : "bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#8B5E3C]"
              }`}
            >
              <span className="opacity-70">{stg.step}</span>
              <span>{stg.title.split(" ")[0]} {stg.title.split(" ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Spotlight Active Stage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#E5E7EB] shadow-xl">
          {/* Stage Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#8B5E3C] block uppercase tracking-widest">
                Stage {currentStage.step} of 07
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
                {currentStage.title}
              </h3>
            </div>

            <p className="text-sm text-[#6B7280] leading-relaxed">
              {currentStage.desc}
            </p>

            <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] text-xs text-[#111827] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{currentStage.detail}</span>
            </div>

            {/* Stage Navigation Controls */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
              <button
                type="button"
                disabled={activeStage === 0}
                onClick={() => setActiveStage((prev) => prev - 1)}
                className="px-4 py-2 rounded-xl border border-[#E5E7EB] text-xs font-semibold hover:border-[#8B5E3C] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ← Previous Stage
              </button>
              <button
                type="button"
                disabled={activeStage === STAGES.length - 1}
                onClick={() => setActiveStage((prev) => prev + 1)}
                className="px-4 py-2 rounded-xl bg-[#8B5E3C] text-white text-xs font-bold hover:bg-[#6E472B] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Next Stage →
              </button>
            </div>
          </div>

          {/* Stage Image Showcase (7 cols) */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[440px] w-full rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#FAFAF8] shadow-sm">
            <Image
              src={currentStage.image}
              alt={currentStage.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              {currentStage.title} • Handcrafted in Siddipet Workshop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
