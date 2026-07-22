"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/data";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <HelpCircle className="w-4 h-4 text-[#C59D5F]" /> Help & Care Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-400">
            Find instant answers regarding 100% Solid Teak Wood quality, 10-Year Warranty coverage, customization options, and showroom visits.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-4 top-3.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions about warranty, customization, delivery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#1C1C1C] border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C59D5F] transition-colors"
          />
        </div>

        {/* Accordion FAQs */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-[#1C1C1C] rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-[#C59D5F]/50" : "border-[#C59D5F]/20 hover:border-[#C59D5F]/40"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-white hover:text-[#DFB978] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C59D5F] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#0D0D0D] pt-4 animate-fade-in">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[10px] uppercase font-bold text-[#C59D5F] bg-[#C59D5F]/10 px-2.5 py-1 rounded border border-[#C59D5F]/30">
                      {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
