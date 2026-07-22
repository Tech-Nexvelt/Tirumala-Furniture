"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import { createWhatsAppUrl, formatPrice } from "@/lib/utils";

interface QuickQuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productPrice?: number;
}

export default function QuickQuoteDrawer({
  isOpen,
  onClose,
  productName,
  productPrice,
}: QuickQuoteDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Siddipet",
    roomInterest: "Living Room Teak Sofa",
    customNotes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1C1C1C] text-[#E8E6E1] shadow-2xl border-l border-[#C59D5F]/30 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#0D0D0D] flex items-center justify-between bg-[#0D0D0D]">
            <div className="flex items-center gap-2 text-[#C59D5F]">
              <Sparkles className="w-5 h-5 text-[#C59D5F]" />
              <h3 className="font-serif font-bold text-lg text-white">Request Official Quote</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#1C1C1C]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            {productName && (
              <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-[#C59D5F]/30 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C59D5F]">Item Requested</span>
                <h4 className="font-bold text-sm text-white">{productName}</h4>
                {productPrice && (
                  <span className="text-xs font-bold text-gray-300 block">
                    Starting from {formatPrice(productPrice)}
                  </span>
                )}
              </div>
            )}

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Srinivas Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D0D] border border-gray-800 text-sm text-white focus:border-[#C59D5F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98855 33343"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D0D] border border-gray-800 text-sm text-white focus:border-[#C59D5F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">City / Delivery Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Siddipet, Hyderabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D0D] border border-gray-800 text-sm text-white focus:border-[#C59D5F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">Customization Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Provide specific dimensions, wood finish, or fabric color preferences..."
                    value={formData.customNotes}
                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D0D] border border-gray-800 text-sm text-white focus:border-[#C59D5F] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider shadow-gold hover:scale-[1.01] transition-all cursor-pointer"
                >
                  Send Quotation Request
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Quotation Request Received!</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Our interior concierge will send your detailed PDF quotation to <span className="font-bold text-white">{formData.phone || "your WhatsApp"}</span> within 15 minutes.
                </p>
                <div className="pt-4 space-y-2">
                  <a
                    href={createWhatsAppUrl(`Hi Tirumala Furniture, I requested a quote for ${productName || "custom teak furniture"}. Please send details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    Open Live WhatsApp Chat
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 text-xs text-gray-400 font-semibold"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
