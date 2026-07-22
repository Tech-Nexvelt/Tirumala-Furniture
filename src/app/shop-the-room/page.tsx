import React from "react";
import ShopTheRoom from "@/components/home/ShopTheRoom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop The Room | Interactive Hotspot Furniture Experience | Tirumala Furniture",
  description: "Click furniture items directly inside luxury living rooms, master bedrooms, and dining spaces. Inspect Burma Teak craftsmanship, specs, and request instant quotes.",
};

export default function ShopTheRoomPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#E8E6E1] min-h-screen pt-20">
      <ShopTheRoom />
    </div>
  );
}
