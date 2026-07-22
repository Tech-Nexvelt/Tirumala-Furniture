import React from "react";
import Image from "next/image";
import { Camera, MapPin } from "lucide-react";

export const metadata = {
  title: "Showroom Gallery & Home Transformations | Tirumala Furniture",
  description: "Browse high-resolution photographs of Tirumala Furniture's showroom floor, master teak craftsmanship, and verified customer villa installations.",
};

const GALLERY_IMAGES = [
  { title: "Burma Teak Living Room Setup", city: "Siddipet Flagship Showroom", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" },
  { title: "Italian Marble 8-Seater Dining", city: "Banjara Hills Villa Installation", url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80" },
  { title: "Imperial King Storage Suite", city: "Gachibowli Modern Penthouse", url: "https://images.unsplash.com/photo-1540518614846-7ede433c5172?auto=format&fit=crop&w=1200&q=80" },
  { title: "Executive Teak Office Suite", city: "Corporate HQ Project", url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" },
  { title: "Custom Walk-in Teak Wardrobe", city: "Financial District Luxury Apartment", url: "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80" },
  { title: "All-Weather Teak Patio Set", city: "Jubilee Hills Rooftop Villa", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <Camera className="w-4 h-4 text-[#C59D5F]" /> Visual Inspiration
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Showroom & Customer Transformations
          </h1>
          <p className="text-sm text-gray-400">
            Explore authentic photographs of our experience center and real home installations across South India.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative h-80 w-full rounded-3xl overflow-hidden shadow-2xl border border-[#C59D5F]/20 hover:border-[#C59D5F] transition-all duration-300 group"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/85 via-[#0D0D0D]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif font-bold text-base">{img.title}</h3>
                <span className="text-xs text-[#DFB978] flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-[#C59D5F]" /> {img.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
