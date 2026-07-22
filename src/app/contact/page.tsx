import React from "react";
import StoreLocationMap from "@/components/home/StoreLocationMap";
import { BRAND_INFO } from "@/lib/data";
import { MapPin, Phone, Clock } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "Contact & Showroom Visit | Tirumala Furniture Siddipet",
  description: "Visit our flagship solid teak furniture showroom in Siddipet, Telangana. Book a consultation or request a custom quotation.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <MapPin className="w-4 h-4 text-[#C59D5F]" /> Siddipet Flagship Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Visit Our Showroom or Request a Quote
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Our interior concierges and master carpenters are available 7 days a week to guide your luxury teak furniture selections.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1C1C1C] p-8 rounded-3xl border border-[#C59D5F]/30 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#C59D5F]/10 text-[#C59D5F] flex items-center justify-center mx-auto border border-[#C59D5F]/30">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Store Address</h3>
            <p className="text-xs text-gray-300 leading-relaxed">{BRAND_INFO.address}</p>
          </div>

          <div className="bg-[#1C1C1C] p-8 rounded-3xl border border-[#C59D5F]/30 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-900/40 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Phone & WhatsApp</h3>
            <p className="text-xs text-gray-300">{BRAND_INFO.phone}</p>
            <a
              href={createWhatsAppUrl("Hi Tirumala Furniture, I want to book a showroom visit in Siddipet.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold text-emerald-400 underline"
            >
              Start WhatsApp Chat
            </a>
          </div>

          <div className="bg-[#1C1C1C] p-8 rounded-3xl border border-[#C59D5F]/30 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-900/40 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Showroom Hours</h3>
            <p className="text-xs text-gray-300">{BRAND_INFO.workingHours}</p>
          </div>
        </div>

        {/* Store Location Map Component */}
        <StoreLocationMap />
      </div>
    </div>
  );
}
