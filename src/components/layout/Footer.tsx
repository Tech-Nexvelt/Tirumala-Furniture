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
    <footer className="bg-[#0D0D0D] text-[#E8E6E1] pt-16 pb-12 border-t border-[#1C1C1C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-[#1C1C1C]">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1C1C1C]/70 border border-[#C59D5F]/20 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#C59D5F]/10 text-[#C59D5F] flex items-center justify-center shrink-0 border border-[#C59D5F]/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">100% Solid Teak</h4>
              <p className="text-xs text-gray-400">Kiln-seasoned Grade-A Burma Teak</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1C1C1C]/70 border border-[#C59D5F]/20 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#C59D5F]/10 text-[#C59D5F] flex items-center justify-center shrink-0 border border-[#C59D5F]/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">10-Year Warranty</h4>
              <p className="text-xs text-gray-400">Termite & structural guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1C1C1C]/70 border border-[#C59D5F]/20 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#C59D5F]/10 text-[#C59D5F] flex items-center justify-center shrink-0 border border-[#C59D5F]/30">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">White-Glove Delivery</h4>
              <p className="text-xs text-gray-400">Free assembly & room positioning</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1C1C1C]/70 border border-[#C59D5F]/20 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#C59D5F]/10 text-[#C59D5F] flex items-center justify-center shrink-0 border border-[#C59D5F]/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">Bespoke Customization</h4>
              <p className="text-xs text-gray-400">Dimensions, polish & fabric tailoring</p>
            </div>
          </div>
        </div>

        {/* Multi-Column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-[#1C1C1C]">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="gold" />

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              South India&apos;s premier destination for 100% Solid Teak Wood living, bedroom, dining, and executive office interiors. Master crafted since 1998.
            </p>

            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#C59D5F] mb-2">
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
                    className="flex-1 bg-[#1C1C1C] border border-gray-800 text-xs px-3.5 py-2.5 rounded-xl text-white focus:outline-none focus:border-[#C59D5F]"
                  />
                  <button
                    type="submit"
                    className="bg-[#C59D5F] hover:bg-[#DFB978] text-[#0D0D0D] font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                  >
                    Join <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing!
                </div>
              )}
            </div>
          </div>

          {/* Column 1: Collections */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#C59D5F]">Collections</h5>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/collections/living" className="hover:text-white transition-colors">Living Room Teak Sofas</Link></li>
              <li><Link href="/collections/bedroom" className="hover:text-white transition-colors">Imperial King Storage Beds</Link></li>
              <li><Link href="/collections/dining" className="hover:text-white transition-colors">Italian Marble Dining Sets</Link></li>
              <li><Link href="/collections/office" className="hover:text-white transition-colors">Executive Office Desks</Link></li>
              <li><Link href="/collections/custom" className="hover:text-white transition-colors">Walk-in Wardrobes & Kitchens</Link></li>
              <li><Link href="/collections/outdoor" className="hover:text-white transition-colors">Patio & Deck Furniture</Link></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#C59D5F]">Explore</h5>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/shop-the-room" className="hover:text-white transition-colors">Shop The Room Hotspots</Link></li>
              <li><Link href="/offers" className="hover:text-white transition-colors">Festive Bundles & Offers</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Customer Home Transformations</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-white transition-colors">Teak Wood Guarantee</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Verified Customer Reviews</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our 28-Year Legacy</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ & Care Guide</Link></li>
            </ul>
          </div>

          {/* Column 3: Flagship Store Details */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#C59D5F]">Flagship Showroom</h5>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59D5F] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-white font-medium">{BRAND_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#DFB978] shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-gray-300 font-medium">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open 7 Days: 10 AM – 9 PM</span>
              </div>
              <div className="pt-2">
                <a
                  href={createWhatsAppUrl(`Hi Tirumala Furniture, I'd like to get directions to your Siddipet showroom at ${BRAND_INFO.address}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold hover:bg-emerald-500/30 transition-colors"
                >
                  Get Directions via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>© {new Date().getFullYear()} {BRAND_INFO.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <span className="text-gray-700">|</span>
            <span className="text-gray-400">GST Registration: 36AAAAT1234F1Z9</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
