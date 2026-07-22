"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRAND_INFO } from "@/lib/data";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Logo from "./Logo";
import { createWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-[#FAFAF8] text-[#111827] pt-16 pb-12 border-t border-[#EFEFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-[#EFEFEA]">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] text-[#C19A6B] flex items-center justify-center shrink-0 border border-[#EFEFEA]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#111827]">100% Solid Teak</h4>
              <p className="text-xs text-[#6B7280]">Kiln-seasoned Grade-A Burma Teak</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] text-[#C19A6B] flex items-center justify-center shrink-0 border border-[#EFEFEA]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#111827]">10-Year Warranty</h4>
              <p className="text-xs text-[#6B7280]">Termite & structural guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] text-[#C19A6B] flex items-center justify-center shrink-0 border border-[#EFEFEA]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#111827]">White-Glove Delivery</h4>
              <p className="text-xs text-[#6B7280]">Free assembly & room positioning</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] text-[#C19A6B] flex items-center justify-center shrink-0 border border-[#EFEFEA]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#111827]">Bespoke Customization</h4>
              <p className="text-xs text-[#6B7280]">Dimensions, polish & fabric tailoring</p>
            </div>
          </div>
        </div>

        {/* Multi-Column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-[#EFEFEA]">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />

            <p className="text-xs text-[#6B7280] leading-relaxed max-w-sm">
              South India&apos;s premier destination for 100% Solid Teak Wood living, bedroom, dining, and executive office interiors. Master crafted since 1998.
            </p>

            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#C19A6B] mb-2">
                Subscribe to Catalog & Private Offers
              </h5>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-white border border-[#E5E7EB] text-xs px-3.5 py-2.5 rounded-xl text-[#111827] focus:outline-none focus:border-[#C19A6B]"
                  />
                  <button
                    type="submit"
                    className="bg-[#00D9D9] hover:bg-[#00B8B8] text-[#111827] font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                  >
                    Join <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing!
                </div>
              )}
            </div>
          </div>

          {/* Column 1: Collections */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#C19A6B]">Collections</h5>
            <ul className="space-y-2 text-xs text-[#6B7280]">
              <li><Link href="/collections/living" className="hover:text-[#111827] transition-colors">Living Room Teak Sofas</Link></li>
              <li><Link href="/collections/bedroom" className="hover:text-[#111827] transition-colors">Imperial King Storage Beds</Link></li>
              <li><Link href="/collections/dining" className="hover:text-[#111827] transition-colors">Italian Marble Dining Sets</Link></li>
              <li><Link href="/collections/office" className="hover:text-[#111827] transition-colors">Executive Office Desks</Link></li>
              <li><Link href="/collections/custom" className="hover:text-[#111827] transition-colors">Walk-in Wardrobes & Kitchens</Link></li>
              <li><Link href="/collections/outdoor" className="hover:text-[#111827] transition-colors">Patio & Deck Furniture</Link></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#C19A6B]">Explore</h5>
            <ul className="space-y-2 text-xs text-[#6B7280]">
              <li><Link href="/shop-the-room" className="hover:text-[#111827] transition-colors">Shop The Room Hotspots</Link></li>
              <li><Link href="/offers" className="hover:text-[#111827] transition-colors">Festive Bundles & Offers</Link></li>
              <li><Link href="/gallery" className="hover:text-[#111827] transition-colors">Customer Home Transformations</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-[#111827] transition-colors">Teak Wood Guarantee</Link></li>
              <li><Link href="/reviews" className="hover:text-[#111827] transition-colors">Verified Customer Reviews</Link></li>
              <li><Link href="/about" className="hover:text-[#111827] transition-colors">Our 28-Year Legacy</Link></li>
              <li><Link href="/faq" className="hover:text-[#111827] transition-colors">FAQ & Care Guide</Link></li>
            </ul>
          </div>

          {/* Column 3: Flagship Store Details */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#C19A6B]">Flagship Showroom</h5>
            <div className="space-y-2.5 text-xs text-[#6B7280]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C19A6B] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-[#111827] font-semibold">{BRAND_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C19A6B] shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[#111827] font-medium">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Open 7 Days: 10 AM – 9 PM</span>
              </div>
              <div className="pt-2">
                <a
                  href={createWhatsAppUrl(`Hi Tirumala Furniture, I'd like to get directions to your Siddipet showroom at ${BRAND_INFO.address}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold hover:bg-emerald-100 transition-colors"
                >
                  Get Directions via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>© {new Date().getFullYear()} {BRAND_INFO.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#111827] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#111827] transition-colors">Terms of Service</Link>
            <span className="text-[#E5E7EB]">|</span>
            <span className="text-[#6B7280]">GST Registration: 36AAAAT1234F1Z9</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
