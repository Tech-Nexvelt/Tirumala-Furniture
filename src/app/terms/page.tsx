import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & 10-Year Warranty Policy | Tirumala Furniture",
  description: "Terms of service, custom furniture order conditions, 10-year teak warranty coverage, and white-glove delivery policies.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1C1C] p-8 sm:p-12 rounded-3xl border border-[#C59D5F]/30 shadow-2xl space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Terms of Service & Warranty Guarantee</h1>
            <p className="text-xs text-gray-500 mt-2">Last updated: July 2026</p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-lg font-serif font-bold text-[#DFB978] mb-2">1. 10-Year Structural & Anti-Termite Guarantee</h2>
              <p>
                Tirumala Furniture warrants all 100% Solid Burma Teak and CP Teak wood furniture against structural breakdown, joint loosening, wood splitting, and termite infestation for a period of 10 years from the date of invoice.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-serif font-bold text-[#DFB978] mb-2">2. Bespoke Custom Orders</h2>
              <p>
                Custom tailored dimensions and customer-specified imported upholstery fabrics require an advance deposit. Once carpentry cutting is initiated based on approved architectural drawings, dimension modifications must be submitted within 48 hours.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-serif font-bold text-[#DFB978] mb-2">3. White-Glove Delivery & Installation</h2>
              <p>
                Complimentary white-glove delivery includes transit insurance, unboxing, hardware assembly, and final positioning in your home by our trained master technicians.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
