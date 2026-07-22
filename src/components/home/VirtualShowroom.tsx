"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, MapPin, Calendar, Clock, Car, Coffee, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";

export default function VirtualShowroom() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "11:00 AM",
    interest: "Living & Bedroom Teak",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Showroom Image Showcase */}
          <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#EFEFEA] group">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
              alt="Tirumala Furniture Siddipet Flagship Showroom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute top-4 left-4 bg-white/95 text-[#C19A6B] text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 border border-[#EFEFEA] shadow-sm">
              <Building2 className="w-4 h-4 text-[#C19A6B]" /> Flagship Experience Center
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <h3 className="text-2xl font-serif font-bold">Siddipet Flagship Showroom</h3>
              <p className="text-xs text-gray-200 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C19A6B]" /> {BRAND_INFO.address}
              </p>
            </div>
          </div>

          {/* Right: Showroom Experience Details & Booking */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EFEFEA] text-[#C19A6B] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Touch & Feel Quality
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
              Experience Siddipet&apos;s Largest Teak Furniture Showroom
            </h2>

            <p className="text-[#6B7280] text-sm leading-relaxed">
              Step into our flagship center in Azam Pura, Siddipet. Walk through curated room setups, feel live wood grain polishes, examine fabric swatches with our interior architects, and enjoy complimentary refreshments.
            </p>

            {/* Showroom Amenities Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm">
                <Car className="w-5 h-5 text-[#C19A6B] shrink-0" />
                <span className="text-xs font-semibold text-[#111827]">Complimentary Parking</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm">
                <Coffee className="w-5 h-5 text-[#C19A6B] shrink-0" />
                <span className="text-xs font-semibold text-[#111827]">VIP Customer Lounge</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm">
                <Users className="w-5 h-5 text-[#C19A6B] shrink-0" />
                <span className="text-xs font-semibold text-[#111827]">Architect & Designer Desk</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#EFEFEA] shadow-sm">
                <Clock className="w-5 h-5 text-[#C19A6B] shrink-0" />
                <span className="text-xs font-semibold text-[#111827]">Open 7 Days: 10 AM – 9 PM</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00D9D9] hover:bg-[#00B8B8] text-[#111827] font-bold text-xs shadow-gold hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Schedule VIP Showroom Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#EFEFEA] text-[#111827]">
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                setBookingSubmitted(false);
              }}
              className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#111827] font-bold"
            >
              ✕
            </button>

            {!bookingSubmitted ? (
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="text-center space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C19A6B]">
                    VIP Showroom Appointment
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#111827]">Book Store Visit</h3>
                  <p className="text-xs text-[#6B7280]">
                    Select your preferred date and time for dedicated interior architect guidance.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111827] uppercase mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mrs. Sunita Rao"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-sm text-[#111827] focus:border-[#00D9D9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111827] uppercase mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98855 33343"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-sm text-[#111827] focus:border-[#00D9D9] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] uppercase mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-sm text-[#111827] focus:border-[#00D9D9] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] uppercase mb-1">Preferred Time</label>
                    <select
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-sm text-[#111827]"
                    >
                      <option>11:00 AM</option>
                      <option>02:00 PM</option>
                      <option>05:00 PM</option>
                      <option>07:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00D9D9] hover:bg-[#00B8B8] text-[#111827] font-bold text-xs shadow-gold uppercase tracking-wider transition-all"
                >
                  Confirm Showroom Appointment
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#111827]">Appointment Confirmed!</h3>
                <p className="text-xs text-[#6B7280]">
                  We look forward to welcoming you to our Siddipet experience center on <span className="font-bold text-[#111827]">{bookingData.date || "your requested date"}</span> at <span className="font-bold text-[#111827]">{bookingData.time}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#C19A6B] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
