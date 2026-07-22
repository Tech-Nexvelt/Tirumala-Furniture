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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-[#111827] shadow-2xl border-l border-[#EFEFEA] flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#EFEFEA] flex items-center justify-between bg-[#FAFAF8]">
            <div className="flex items-center gap-2 text-[#C19A6B]">
              <Sparkles className="w-5 h-5 text-[#C19A6B]" />
              <h3 className="font-serif font-bold text-lg text-[#111827]">Request Official Quote</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#9CA3AF] hover:text-[#111827] rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            {productName && (
              <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#EFEFEA] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C19A6B]">Item Requested</span>
                <h4 className="font-bold text-sm text-[#111827]">{productName}</h4>
                {productPrice && (
                  <span className="text-xs font-bold text-[#6B7280] block">
                    Starting from {formatPrice(productPrice)}
                  </span>
                )}
              </div>
            )}

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#111827] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Srinivas Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-sm text-[#111827] focus:border-[#00D9D9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#111827] mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98855 33343"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-sm text-[#111827] focus:border-[#00D9D9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#111827] mb-1">City / Delivery Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Siddipet, Hyderabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-sm text-[#111827] focus:border-[#00D9D9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#111827] mb-1">Customization Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Provide specific dimensions, wood finish, or fabric color preferences..."
                    value={formData.customNotes}
                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-sm text-[#111827] focus:border-[#00D9D9] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#00D9D9] hover:bg-[#00B8B8] text-[#111827] font-bold text-xs uppercase tracking-wider shadow-gold hover:scale-[1.01] transition-all cursor-pointer"
                >
                  Send Quotation Request
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#111827]">Quotation Request Received!</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Our interior concierge will send your detailed PDF quotation to <span className="font-bold text-[#111827]">{formData.phone || "your WhatsApp"}</span> within 15 minutes.
                </p>
                <div className="pt-4 space-y-2">
                  <a
                    href={createWhatsAppUrl(`Hi Tirumala Furniture, I requested a quote for ${productName || "custom teak furniture"}. Please send details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    Open Live WhatsApp Chat
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 text-xs text-[#6B7280] font-semibold"
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
