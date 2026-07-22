"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-white/20"
        aria-label="Chat on WhatsApp"
        title="Chat with Tirumala Furniture on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current text-white" />
      </a>
    </div>
  );
}
