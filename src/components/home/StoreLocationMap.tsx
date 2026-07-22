"use client";

import React, { useState } from "react";
import { BRAND_INFO } from "@/lib/data";
import { MapPin, Phone, Clock, Navigation, Loader2 } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

// Tirumala Furniture Siddipet store coordinates
const STORE_LAT = 18.1016;
const STORE_LNG = 78.8521;
const STORE_ADDRESS_ENCODED = encodeURIComponent(
  "Shop No. 8, 4-2, Charwadan Lane No. 2, Near Court, Azam Pura, Siddipet, Telangana 502103"
);

export default function StoreLocationMap() {
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  const handleGetDirections = () => {
    setGpsError(null);

    // Try to get the user's live GPS position
    if (!navigator.geolocation) {
      // Browser doesn't support geolocation — open Maps with just the destination
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${STORE_LAT},${STORE_LNG}`,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    setGpsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setGpsLoading(false);

        // Open Google Maps with live origin → store destination
        const mapsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${STORE_LAT},${STORE_LNG}`;
        window.open(mapsUrl, "_blank", "noopener,noreferrer");
      },
      (error) => {
        setGpsLoading(false);

        // Permission denied or unavailable — fallback to destination-only route
        if (error.code === error.PERMISSION_DENIED) {
          setGpsError("Location access denied. Opening map without current location.");
        } else {
          setGpsError("Could not detect your location. Opening map instead.");
        }

        // Fallback: open Google Maps with destination only
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${STORE_LAT},${STORE_LNG}`,
          "_blank",
          "noopener,noreferrer"
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 0,
      }
    );
  };

  return (
    <section className="py-24 bg-[#0D0D0D] text-[#E8E6E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1C1C] rounded-3xl border border-[#C59D5F]/30 p-8 sm:p-12 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Store Information */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C59D5F]" /> Visit Our Flagship Center
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Tirumala Furniture Siddipet
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Located in Azam Pura near Court, our flagship showroom features curated solid teak furniture, dining sets, master bedroom suites, and walk-in wardrobe displays.
            </p>

            <div className="space-y-3 pt-2 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C59D5F] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-white">{BRAND_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{BRAND_INFO.workingHours}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-[#C59D5F] font-semibold">
                  {BRAND_INFO.phone}
                </a>
              </div>
            </div>

            {/* GPS Error Message */}
            {gpsError && (
              <div className="text-xs text-amber-400 bg-amber-900/20 border border-amber-500/30 px-3 py-2 rounded-xl">
                ⚠ {gpsError}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleGetDirections}
                disabled={gpsLoading}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                {gpsLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Detecting Location…
                  </>
                ) : (
                  <>
                    <Navigation className="w-4 h-4" />
                    Get Live GPS Directions
                  </>
                )}
              </button>

              <a
                href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
                className="px-6 py-3.5 rounded-xl bg-[#0D0D0D] hover:bg-[#1C1C1C] text-white border border-[#C59D5F]/40 font-bold text-xs transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-emerald-400" /> Call Store Concierge
              </a>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#C59D5F]/30 bg-[#0D0D0D] shadow-inner">
            <iframe
              title="Tirumala Furniture Siddipet Store Location Map"
              src="https://maps.google.com/maps?q=Shop%20No.%208%2C%204-2%2C%20Charwadan%20Lane%20No.%202%2C%20Near%20Court%2C%20Azam%20Pura%2C%20Siddipet%2C%20Telangana%20502103&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0D]/90 backdrop-blur-md p-3 rounded-xl border border-gray-800 text-xs text-gray-300 flex items-center justify-between shadow-md">
              <span className="font-semibold text-white">Azam Pura, Near Court • Siddipet</span>
              <span className="text-emerald-400 font-bold">Open Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
