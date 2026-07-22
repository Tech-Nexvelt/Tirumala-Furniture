"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
  Html,
  Center,
} from "@react-three/drei";
import * as THREE from "three";
import {
  Rotate3d,
  Sparkles,
  MessageSquare,
  RefreshCw,
  Check,
  ShieldCheck,
  Box,
} from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";
import { createWhatsAppUrl } from "@/lib/utils";

// Bed Headboard Upholstery PBR Fabric Options
export const BED_UPHOLSTERY_OPTIONS = [
  { id: "ivory", name: "Champagne Linen", hex: "#F5F5DC", roughness: 0.8 },
  { id: "emerald", name: "Emerald Velvet", hex: "#0F4C3A", roughness: 0.7 },
  { id: "grey", name: "Ash Grey Fabric", hex: "#4A4E69", roughness: 0.85 },
  { id: "navy", name: "Navy Velvet", hex: "#002147", roughness: 0.65 },
  { id: "brown", name: "Leather Brown", hex: "#8B4513", roughness: 0.4 },
];

// Solid Wood Polish Options
export const BED_WOOD_OPTIONS = [
  { id: "burma_teak", name: "Natural Burma Teak", hex: "#C19A6B", roughness: 0.35 },
  { id: "walnut", name: "Walnut", hex: "#3D2314", roughness: 0.3 },
  { id: "dark_walnut", name: "Dark Walnut", hex: "#2A1810", roughness: 0.28 },
  { id: "ebony", name: "Ebony", hex: "#1A1A1A", roughness: 0.25 },
  { id: "mahogany", name: "Mahogany", hex: "#4A1525", roughness: 0.3 },
];

// Real GLTF Bed Model Component
function RealImperialBedModel({
  fabricColor,
  fabricRoughness,
  woodColor,
  woodRoughness,
}: {
  fabricColor: string;
  fabricRoughness: number;
  woodColor: string;
  woodRoughness: number;
}) {
  const { scene } = useGLTF("/models/imperial-bed.glb");

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const meshName = (child.name || "").toLowerCase();
        const matName = (child.material?.name || "").toLowerCase();

        if (
          meshName.includes("wood") ||
          meshName.includes("frame") ||
          meshName.includes("rail") ||
          meshName.includes("leg") ||
          meshName.includes("slat") ||
          matName.includes("wood")
        ) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(woodColor),
            roughness: woodRoughness,
            metalness: 0.1,
          });
        } else if (
          meshName.includes("headboard") ||
          meshName.includes("pillow") ||
          meshName.includes("fabric") ||
          matName.includes("upholstery") ||
          matName.includes("fabric")
        ) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(fabricColor),
            roughness: fabricRoughness,
            metalness: 0.05,
          });
        }
      }
    });
  }, [scene, fabricColor, fabricRoughness, woodColor, woodRoughness]);

  return <primitive object={scene} scale={1.2} position={[0, -0.3, 0]} />;
}

// React Error Boundary for 3D GLB loading
class BedGLBErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Html center className="w-max">
          <div className="flex flex-col items-center gap-3 bg-white/95 p-6 rounded-3xl border border-[#E5E7EB] text-[#111827] backdrop-blur-md shadow-2xl text-center max-w-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#FAFAF8] text-[#8B5E3C] flex items-center justify-center border border-[#E5E7EB]">
              <Box className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B5E3C]">
              Imperial Bed GLB Required
            </span>
            <p className="text-xs text-[#6B7280]">
              Place model at <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#111827] font-mono">public/models/imperial-bed.glb</code> to render 3D model.
            </p>
          </div>
        </Html>
      );
    }
    return this.props.children;
  }
}

function SceneLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 bg-white/95 p-5 rounded-2xl border border-[#E5E7EB] text-[#111827] backdrop-blur-md shadow-lg">
        <Rotate3d className="w-8 h-8 animate-spin text-[#8B5E3C]" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#111827]">
          Loading 3D Photorealistic Bed...
        </span>
      </div>
    </Html>
  );
}

export default function LuxuryBedConfigurator() {
  const controlsRef = useRef<any>(null);
  const [selectedUpholstery, setSelectedUpholstery] = useState(BED_UPHOLSTERY_OPTIONS[0]);
  const [selectedWood, setSelectedWood] = useState(BED_WOOD_OPTIONS[0]);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <section className="py-24 bg-[#FAFAF8] text-[#111827] relative overflow-hidden border-t border-b border-[#E5E7EB]" id="bed-configurator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-sm">
            <Rotate3d className="w-4 h-4 text-[#8B5E3C] animate-spin" /> Live WebGL 3D Studio
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
            Burma Teak Imperial King Bed 3D Configurator
          </h2>
          <p className="text-sm text-[#6B7280]">
            Drag to orbit 360° • Scroll to zoom • Select PBR Upholstery & Solid Teak wood polishes
          </p>
        </div>

        {/* Configurator Layout (Canvas 7 Cols, Swatches 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* R3F WebGL Canvas (7 Cols) */}
          <div className="lg:col-span-7 relative h-[480px] sm:h-[550px] w-full rounded-3xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xl group">
            <Canvas
              shadows
              camera={{ position: [2.5, 2.2, 3.8], fov: 45 }}
              className="w-full h-full cursor-grab active:cursor-grabbing"
            >
              <ambientLight intensity={1.2} />
              <directionalLight
                position={[5, 8, 5]}
                intensity={2.2}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <directionalLight position={[-5, 3, -5]} intensity={0.8} color="#C19A6B" />

              <BedGLBErrorBoundary>
                <Suspense fallback={<SceneLoader />}>
                  <Center>
                    <RealImperialBedModel
                      fabricColor={selectedUpholstery.hex}
                      fabricRoughness={selectedUpholstery.roughness}
                      woodColor={selectedWood.hex}
                      woodRoughness={selectedWood.roughness}
                    />
                  </Center>

                  <Environment preset="city" />
                  <ContactShadows opacity={0.65} scale={10} blur={2.5} far={4} resolution={512} />
                </Suspense>
              </BedGLBErrorBoundary>

              <OrbitControls
                ref={controlsRef}
                enableZoom={true}
                enablePan={true}
                autoRotate={autoRotate}
                autoRotateSpeed={0.8}
                minDistance={2.5}
                maxDistance={7}
                maxPolarAngle={Math.PI / 2 - 0.05}
                onStart={() => setAutoRotate(false)}
              />
            </Canvas>

            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex justify-end pointer-events-none">
              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border transition-all ${
                    autoRotate
                      ? "bg-[#8B5E3C] text-white border-[#8B5E3C] font-bold"
                      : "bg-white/90 text-[#111827] border-[#E5E7EB] hover:border-[#8B5E3C]"
                  }`}
                >
                  {autoRotate ? "Auto-Rotating" : "Paused"}
                </button>

                <button
                  type="button"
                  onClick={handleResetCamera}
                  className="p-2 rounded-full bg-white/90 hover:bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#8B5E3C] transition-colors shadow-sm"
                  title="Reset Camera View"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dimensions Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#E5E7EB] text-xs text-[#6B7280] shadow-sm">
              <span className="text-[10px] font-bold uppercase text-[#8B5E3C] block">Bed Dimensions</span>
              <span className="font-mono text-[#111827] block font-bold text-sm">82&quot; L × 76&quot; W × 54&quot; Headboard H</span>
            </div>
          </div>

          {/* Swatches & Detail Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B5E3C] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Solid Burma Teak Wood
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#111827] mt-1">Imperial Presidential King Bed</h3>
              <span className="inline-block text-xs font-bold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full border border-[#8B5E3C]/20 uppercase tracking-wider mt-2">
                Price on Request • Bespoke Dimensions
              </span>
            </div>

            {/* Upholstery Swatches */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase text-[#6B7280] block">
                Headboard Upholstery: <span className="text-[#111827]">{selectedUpholstery.name}</span>
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {BED_UPHOLSTERY_OPTIONS.map((fab) => (
                  <button
                    key={fab.id}
                    type="button"
                    onClick={() => setSelectedUpholstery(fab)}
                    className={`w-10 h-10 rounded-full border-2 transition-all relative flex items-center justify-center cursor-pointer ${
                      selectedUpholstery.id === fab.id
                        ? "border-[#8B5E3C] scale-110 shadow-md"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ backgroundColor: fab.hex }}
                    title={fab.name}
                  >
                    {selectedUpholstery.id === fab.id && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Teak Wood Polish Swatches */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase text-[#6B7280] block">
                Teak Wood Polish: <span className="text-[#111827]">{selectedWood.name}</span>
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {BED_WOOD_OPTIONS.map((wood) => (
                  <button
                    key={wood.id}
                    type="button"
                    onClick={() => setSelectedWood(wood)}
                    className={`w-10 h-10 rounded-full border-2 transition-all relative flex items-center justify-center cursor-pointer ${
                      selectedWood.id === wood.id
                        ? "border-[#8B5E3C] scale-110 shadow-md"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ backgroundColor: wood.hex }}
                    title={wood.name}
                  >
                    {selectedWood.id === wood.id && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Save & Share Configuration Controls */}
            <div className="flex items-center justify-between text-xs text-[#6B7280] pt-2 border-t border-[#E5E7EB]">
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    localStorage.setItem(
                      "saved_bed_config",
                      JSON.stringify({ upholstery: selectedUpholstery, wood: selectedWood })
                    );
                    alert("Configuration saved successfully!");
                  }
                }}
                className="hover:text-[#8B5E3C] font-bold flex items-center gap-1 cursor-pointer transition-colors"
              >
                💾 Save Configuration
              </button>
              <button
                type="button"
                onClick={() => {
                  if (typeof navigator !== "undefined") {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Bed configuration link copied to clipboard!");
                  }
                }}
                className="hover:text-[#8B5E3C] font-bold flex items-center gap-1 cursor-pointer transition-colors"
              >
                🔗 Share Setup Link
              </button>
            </div>

            {/* Spec Highlights */}
            <div className="space-y-2 text-xs text-[#6B7280]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>10-Year Anti-Termite & Structural Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bespoke Dimensions Tailored on Request</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="space-y-3 pt-3">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="w-full py-4 rounded-xl bg-[#8B5E3C] hover:bg-[#6E472B] text-white font-bold text-xs shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C19A6B]" /> Request Official Quote
              </button>

              <a
                href={createWhatsAppUrl(`Hi Tirumala Furniture, I customized the Imperial King Bed in ${selectedUpholstery.name} with ${selectedWood.name}. Please share quote.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp 3D Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <QuickQuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        productName={`Imperial King Storage Bed (${selectedUpholstery.name} / ${selectedWood.name})`}
      />
    </section>
  );
}

useGLTF.preload("/models/imperial-bed.glb");
