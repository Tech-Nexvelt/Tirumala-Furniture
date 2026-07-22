"use client";

import React, { useState } from "react";
import { BRAND_INFO } from "@/lib/data";
import { MapPin, Phone, Clock, Navigation, Loader2 } from "lucide-react";

const STORE_LAT = 18.1016;
const STORE_LNG = 78.8521;

export default function StoreLocationMap() {
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  const handleGetDirections = () => {
    setGpsError(null);

    if (!navigator.geolocation) {
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
        const mapsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${STORE_LAT},${STORE_LNG}`;
        window.open(mapsUrl, "_blank", "noopener,noreferrer");
      },
      (error) => {
        setGpsLoading(false);
        if (error.code === error.PERMISSION_DENIED) {
          setGpsError("Location access denied. Opening map without current location.");
        } else {
          setGpsError("Could not detect your location. Opening map instead.");
        }

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
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#EFEFEA] p-8 sm:p-12 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Store Information */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C19A6B] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C19A6B]" /> Visit Our Flagship Center
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight">
              Tirumala Furniture Siddipet
            </h2>

            <p className="text-[#6B7280] text-sm leading-relaxed">
              Located in Azam Pura near Court, our flagship showroom features curated solid teak furniture, dining sets, master bedroom suites, and walk-in wardrobe displays.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#6B7280]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C19A6B] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#111827]">{BRAND_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{BRAND_INFO.workingHours}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <a href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-[#C19A6B] font-semibold">
                  {BRAND_INFO.phone}
                </a>
              </div>
            </div>

            {gpsError && (
              <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl">
                ⚠ {gpsError}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleGetDirections}
                disabled={gpsLoading}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 uppercase tracking-wider cursor-pointer"
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
                className="px-6 py-3.5 rounded-xl bg-[#FAFAF8] hover:bg-white text-[#111827] border border-[#E5E7EB] font-bold text-xs transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-emerald-600" /> Call Store Concierge
              </a>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#EFEFEA] bg-[#FAFAF8] shadow-inner">
            <iframe
              title="Tirumala Furniture Siddipet Store Location Map"
              src="https://maps.google.com/maps?q=Shop%20No.%208%2C%204-2%2C%20Charwadan%20Lane%20No.%202%2C%20Near%20Court%2C%20Azam%20Pura%2C%20Siddipet%2C%20Telangana%20502103&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#EFEFEA] text-xs text-[#6B7280] flex items-center justify-between shadow-sm">
              <span className="font-semibold text-[#111827]">Azam Pura, Near Court • Siddipet</span>
              <span className="text-emerald-600 font-bold">Open Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
