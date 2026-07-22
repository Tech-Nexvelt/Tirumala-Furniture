"use client";

import React from "react";
import Link from "next/link";
import {
  Sofa,
  BedDouble,
  Utensils,
  Briefcase,
  Sun,
  Wrench,
  ChevronRight,
} from "lucide-react";

interface CollectionsDropdownProps {
  onClose: () => void;
}

export default function CollectionsDropdown({ onClose }: CollectionsDropdownProps) {
  const collectionItems = [
    {
      id: "living",
      label: "Living Room",
      desc: "Handcrafted solid teak sofas, recliners & coffee tables",
      icon: Sofa,
      href: "/collections/living",
    },
    {
      id: "bedroom",
      label: "Bedroom Suite",
      desc: "Royal teak storage beds, wardrobes & nightstands",
      icon: BedDouble,
      href: "/collections/bedroom",
    },
    {
      id: "dining",
      label: "Dining Room",
      desc: "Italian marble & Burma teak 6/8 seater dining sets",
      icon: Utensils,
      href: "/collections/dining",
    },
    {
      id: "office",
      label: "Executive Office",
      desc: "Presidential teak desks & top-grain leather chairs",
      icon: Briefcase,
      href: "/collections/office",
    },
    {
      id: "outdoor",
      label: "Outdoor & Patio",
      desc: "All-weather teak loungers & deck dining furniture",
      icon: Sun,
      href: "/collections/outdoor",
    },
    {
      id: "custom",
      label: "Custom Furniture",
      desc: "Bespoke architectural dimensions & custom joinery",
      icon: Wrench,
      href: "/collections/custom",
    },
  ];

  return (
    <div className="absolute top-full left-0 w-80 bg-[#FFFFFF] border border-[#EFEFEA] rounded-2xl shadow-xl z-50 p-3 mt-2 animate-fade-in text-[#111827]">
      <div className="space-y-1">
        {collectionItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F4F4F0] transition-all group border border-transparent hover:border-[#E5E7EB]"
            >
              <div className="w-9 h-9 rounded-lg bg-[#FAFAF8] text-[#C19A6B] flex items-center justify-center shrink-0 border border-[#EFEFEA] group-hover:bg-[#C19A6B] group-hover:text-white transition-colors">
                <Icon className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-xs text-[#111827] group-hover:text-[#C19A6B] transition-colors">
                  {item.label}
                </h4>
                <p className="text-[11px] text-[#6B7280] line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>

              <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#C19A6B] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          );
        })}
      </div>

      <div className="mt-2 pt-2 border-t border-[#EFEFEA] text-center">
        <Link
          href="/collections"
          onClick={onClose}
          className="text-[11px] font-bold uppercase tracking-wider text-[#C19A6B] hover:text-[#A37C4C] inline-block py-1"
        >
          View All 6 Room Collections →
        </Link>
      </div>
    </div>
  );
}
