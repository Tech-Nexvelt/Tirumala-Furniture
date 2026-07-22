import React from "react";
import HeroBanner from "@/components/home/HeroBanner";
import LuxurySofaConfigurator from "@/components/products/LuxurySofaConfigurator";
import BestSellersGrid from "@/components/home/BestSellersGrid";
import ShopTheRoom from "@/components/home/ShopTheRoom";
import MaterialsCraft from "@/components/home/MaterialsCraft";
import VirtualShowroom from "@/components/home/VirtualShowroom";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import StoreLocationMap from "@/components/home/StoreLocationMap";

export default function HomePage() {
  return (
    <div className="bg-[#0D0D0D]">
      <HeroBanner />
      <LuxurySofaConfigurator />
      <BestSellersGrid />
      <ShopTheRoom />
      <MaterialsCraft />
      <VirtualShowroom />
      <TestimonialsSlider />
      <StoreLocationMap />
    </div>
  );
}
