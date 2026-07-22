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
    <div className="absolute top-full left-0 w-80 bg-[#1C1C1C] border border-[#C59D5F]/30 rounded-2xl shadow-2xl z-50 p-3 mt-2 animate-fade-in text-[#E8E6E1]">
      <div className="space-y-1">
        {collectionItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0D0D0D] transition-all group border border-transparent hover:border-[#C59D5F]/30"
            >
              <div className="w-9 h-9 rounded-lg bg-[#0D0D0D] text-[#C59D5F] flex items-center justify-center shrink-0 border border-[#C59D5F]/30 group-hover:bg-[#C59D5F] group-hover:text-[#0D0D0D] transition-colors">
                <Icon className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-xs text-white group-hover:text-[#DFB978] transition-colors">
                  {item.label}
                </h4>
                <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>

              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-[#C59D5F] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          );
        })}
      </div>

      <div className="mt-2 pt-2 border-t border-[#0D0D0D] text-center">
        <Link
          href="/collections"
          onClick={onClose}
          className="text-[11px] font-bold uppercase tracking-wider text-[#C59D5F] hover:text-[#DFB978] inline-block py-1"
        >
          View All 6 Room Collections →
        </Link>
      </div>
    </div>
  );
}
