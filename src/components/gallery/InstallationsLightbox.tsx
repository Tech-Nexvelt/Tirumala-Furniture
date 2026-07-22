"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, MapPin, Calendar, X, Sparkles } from "lucide-react";

export const CUSTOMER_INSTALLATIONS = [
  {
    id: "inst_1",
    title: "Royal Burma Teak Sofa Suite",
    location: "Siddipet Flagship Villa",
    date: "June 2026",
    furnitureUsed: "Sovereign 3-Seater Recliner & Coffee Table",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "inst_2",
    title: "Italian Calacatta Marble 8-Seater Dining",
    location: "Banjara Hills Villa Project",
    date: "May 2026",
    furnitureUsed: "Imperial Teak Dining Table & Sculpted Chairs",
    url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "inst_3",
    title: "Imperial King Storage Bed Suite",
    location: "Gachibowli Modern Penthouse",
    date: "April 2026",
    furnitureUsed: "Presidential Hydraulic Teak Bed & Nightstands",
    url: "https://images.unsplash.com/photo-1540518614846-7ede433c5172?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "inst_4",
    title: "Executive Teak Office Suite",
    location: "Financial District Headquarters",
    date: "March 2026",
    furnitureUsed: "Presidential Executive Desk & Bookcases",
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "inst_5",
    title: "Custom Walk-in Teak Wardrobe",
    location: "Jubilee Hills Duplex Villa",
    date: "February 2026",
    furnitureUsed: "Floor-to-Ceiling Solid Teak Wardrobe",
    url: "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "inst_6",
    title: "All-Weather Teak Outdoor Patio Lounge",
    location: "Rooftop Villa Project",
    date: "January 2026",
    furnitureUsed: "Teak Deck Loungers & Outdoor Bar Table",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function InstallationsLightbox() {
  const [activeImage, setActiveImage] = useState<typeof CUSTOMER_INSTALLATIONS[0] | null>(null);

  return (
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative border-t border-b border-[#EFEFEA]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C19A6B] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#EFEFEA] shadow-sm">
            <Camera className="w-4 h-4 text-[#C19A6B]" /> Authentic Home Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
            Verified Customer Installations
          </h2>
          <p className="text-sm text-[#6B7280]">
            Explore high-resolution photography from recent villa and penthouse installations completed by our master carpenters across South India.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_INSTALLATIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative h-80 w-full rounded-3xl overflow-hidden shadow-sm hover:shadow-luxury border border-[#EFEFEA] hover:border-[#C19A6B] transition-all duration-300 group cursor-pointer bg-white"
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-bold text-[#C19A6B] uppercase tracking-wider block bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full w-max border border-white/10">
                  {item.furnitureUsed}
                </span>
                <h3 className="font-serif font-bold text-base line-clamp-1">{item.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-200">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C19A6B]" /> {item.location}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-[#EFEFEA]">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 rounded-full hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8 relative h-[360px] sm:h-[480px] bg-black">
                <Image
                  src={activeImage.url}
                  alt={activeImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-4 p-8 space-y-4 flex flex-col justify-between bg-white text-[#111827]">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C19A6B]">
                    Verified Installation
                  </span>
                  <h3 className="text-xl font-serif font-bold">{activeImage.title}</h3>
                  <div className="space-y-2 text-xs text-[#6B7280] border-t border-[#EFEFEA] pt-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C19A6B]" />
                      <span>{activeImage.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C19A6B]" />
                      <span>{activeImage.date}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FAFAF8] border border-[#EFEFEA] text-xs font-semibold text-[#111827]">
                    Item: {activeImage.furnitureUsed}
                  </div>
                </div>

                <a
                  href="/contact"
                  className="w-full py-3.5 rounded-xl bg-[#00D9D9] hover:bg-[#00B8B8] text-[#111827] font-bold text-xs uppercase tracking-wider text-center block shadow-gold"
                >
                  Request Similar Customization
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
