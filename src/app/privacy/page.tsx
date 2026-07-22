import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tirumala Furniture",
  description: "Read Tirumala Furniture's privacy policy regarding customer data protection, quotation requests, and website security.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1C1C] p-8 sm:p-12 rounded-3xl border border-[#C59D5F]/30 shadow-2xl space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Privacy Policy</h1>
            <p className="text-xs text-gray-500 mt-2">Last updated: July 2026</p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <p>
              At <strong className="text-white">Tirumala Furniture</strong>, accessible from https://www.tirumalafurniture.com, we prioritize the privacy and confidentiality of our visitors and showroom clients.
            </p>

            <div>
              <h2 className="text-lg font-serif font-bold text-[#DFB978] mb-2">1. Information We Collect</h2>
              <p>
                When you request an official quotation, schedule a VIP showroom visit, or contact us via WhatsApp, we may collect your name, phone number, email address, city, and custom furniture requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-serif font-bold text-[#DFB978] mb-2">2. How We Use Your Information</h2>
              <p>
                We use collected information solely to generate customized price estimates, provide 3D furniture renders, schedule showroom consultations, send warranty certificates, and deliver white-glove assembly services. We never sell or share your personal details with third-party telemarketers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-serif font-bold text-[#DFB978] mb-2">3. Data Security & GST Invoicing</h2>
              <p>
                All submitted data is stored securely. Your invoices and GST records are maintained in compliance with Indian taxation laws and corporate audit standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
