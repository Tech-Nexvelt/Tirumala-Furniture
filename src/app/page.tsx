import HeroBanner from "@/components/home/HeroBanner";
import CraftsmanshipStory from "@/components/home/CraftsmanshipStory";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import SofaExplodedView from "@/components/products/SofaExplodedView";
import BestSellersGrid from "@/components/home/BestSellersGrid";
import ShopTheRoom from "@/components/home/ShopTheRoom";
import InstallationsLightbox from "@/components/gallery/InstallationsLightbox";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import VirtualShowroom from "@/components/home/VirtualShowroom";
import StoreLocationMap from "@/components/home/StoreLocationMap";
import TrustCounters from "@/components/home/TrustCounters";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111827]">
      {/* 1. Hero Opening */}
      <HeroBanner />

      {/* 2. Trust Metrics & Legacy */}
      <TrustCounters />

      {/* 3. 7-Stage Engineering Story */}
      <CraftsmanshipStory />

      {/* 4. Interactive 3D Disassembly & Reassembly Storytelling */}
      <SofaExplodedView />

      {/* 5. Before & After Architectural Room Transformation */}
      <BeforeAfterSlider />

      {/* 6. Signature Teak Collections */}
      <BestSellersGrid />

      {/* 7. Shop The Room Hotspot Visualizer */}
      <ShopTheRoom />

      {/* 8. Verified Customer Installations Gallery */}
      <InstallationsLightbox />

      {/* 9. Verified Reviews */}
      <TestimonialsSlider />

      {/* 10. Flagship Siddipet Showroom Experience */}
      <VirtualShowroom />

      {/* 11. GPS Store Directions Map */}
      <StoreLocationMap />
    </main>
  );
}
