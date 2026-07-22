import React from "react";
import BrandedPreloader from "@/components/layout/BrandedPreloader";
import HeroBanner from "@/components/home/HeroBanner";
import TrustCounters from "@/components/home/TrustCounters";
import CraftsmanshipStory from "@/components/home/CraftsmanshipStory";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import LuxurySofaConfigurator from "@/components/products/LuxurySofaConfigurator";
import BestSellersGrid from "@/components/home/BestSellersGrid";
import ShopTheRoom from "@/components/home/ShopTheRoom";
import InstallationsLightbox from "@/components/gallery/InstallationsLightbox";
import VirtualShowroom from "@/components/home/VirtualShowroom";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import StoreLocationMap from "@/components/home/StoreLocationMap";

export default function HomePage() {
  return (
    <div className="bg-[#FAFAF8] text-[#111827]">
      <BrandedPreloader />
      <HeroBanner />
      <TrustCounters />
      <CraftsmanshipStory />
      <BeforeAfterSlider />
      <LuxurySofaConfigurator />
      <BestSellersGrid />
      <ShopTheRoom />
      <InstallationsLightbox />
      <TestimonialsSlider />
      <VirtualShowroom />
      <StoreLocationMap />
    </div>
  );
}
