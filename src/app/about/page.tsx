import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_INFO } from "@/lib/data";
import { Award, ShieldCheck, Sparkles, Users, Building2, Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our 28-Year Teak Craftsmanship Legacy | Tirumala Furniture",
  description: "Learn about Tirumala Furniture's heritage since 1998, master woodcrafters, sustainable Burma Teak sourcing, and flagship showroom in Siddipet.",
};

const STATS = [
  { value: "28+", label: "Years of Excellence", gold: true },
  { value: "45,000+", label: "Happy Homeowners", gold: false },
  { value: "1,480+", label: "5-Star Reviews", gold: true },
  { value: "10-Year", label: "Termite Warranty", gold: false },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <Sparkles className="w-4 h-4 text-[#C59D5F]" /> Heritage & Craft
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            28 Years of Teak Craftsmanship
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Founded in 1998, Tirumala Furniture has grown from a master carpentry workshop into South India's most revered solid teak wood furniture brand.
          </p>
        </div>

        {/* Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-serif font-bold text-white">Crafting Heirlooms for Generations</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our philosophy rests on a simple conviction: true luxury lies in uncompromised material integrity. We do not use particle board or short-lived veneers. Every dining table, sofa frame, and storage bed begins with mature Grade-A Burma Teak, kiln-seasoned to achieve less than 10% moisture content.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              With over 60+ master carpenters in our specialized workshop and a flagship experience center in Siddipet, Telangana, we bridge traditional woodcraft with modern architectural aesthetics.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#C59D5F]/30 text-xs text-gray-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 10-Year Anti-Termite Warranty
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#C59D5F]/30 text-xs text-gray-200">
                <Award className="w-4 h-4 text-[#C59D5F]" /> Grade-A Burma Teak Certified
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#C59D5F]/30 text-xs text-gray-200">
                <Users className="w-4 h-4 text-[#C59D5F]" /> 60+ Master Carpenters
              </div>
            </div>
          </div>

          <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-[#C59D5F]/30">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
              alt="Master Teak Wood Carpentry Workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="bg-[#1C1C1C] rounded-3xl p-8 sm:p-12 border border-[#C59D5F]/30 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i}>
              <span className={`text-4xl font-serif font-bold block ${stat.gold ? "text-[#C59D5F]" : "text-white"}`}>
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 mt-1 block">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Craftsmanship Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif font-bold text-white">Our Craftsmanship Process</h2>
            <p className="text-sm text-gray-400">Every piece passes through 7 quality control stages before entering your home.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Teak Selection", desc: "Grade-A Burma Teak logs inspected for density, grain, and moisture." },
              { step: "02", title: "Kiln Seasoning", desc: "45-day kiln drying to reduce moisture below 10% for permanent stability." },
              { step: "03", title: "Hand Joinery", desc: "Traditional mortise & tenon joints with zero nails for lifelong strength." },
              { step: "04", title: "Polish & Finish", desc: "5-stage hand sanding and premium polyurethane or natural polish application." },
            ].map((item) => (
              <div key={item.step} className="bg-[#1C1C1C] p-6 rounded-2xl border border-[#C59D5F]/20 hover:border-[#C59D5F] transition-all space-y-3">
                <span className="text-4xl font-serif font-bold text-[#C59D5F]/30">{item.step}</span>
                <h3 className="font-serif font-bold text-lg text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Showroom CTA */}
        <div className="bg-gradient-to-br from-[#1C1C1C] via-[#0D0D0D] to-[#1C1C1C] rounded-3xl p-8 sm:p-12 border border-[#C59D5F]/40 shadow-2xl text-center space-y-6">
          <Building2 className="w-12 h-12 text-[#C59D5F] mx-auto" />
          <h2 className="text-3xl font-serif font-bold text-white">Experience Our Flagship Showroom</h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Visit our Siddipet experience center to walk through curated room setups, feel live teak wood grain polishes, and consult with our interior architect team.
          </p>
          <p className="text-xs text-gray-400">{BRAND_INFO.address}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider"
          >
            <Building2 className="w-4 h-4" /> Book VIP Showroom Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
