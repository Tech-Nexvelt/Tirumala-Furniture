"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { Rotate3d, Sparkles, MessageSquare, RefreshCw, Eye, Check } from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";
import { createWhatsAppUrl, formatPrice } from "@/lib/utils";

// Swatch Data
export const FABRIC_OPTIONS = [
  { id: "emerald", name: "Royal Emerald Velvet", hex: "#0F4C3A" },
  { id: "saddle", name: "Saddle Tan Leather", hex: "#8B4513" },
  { id: "charcoal", name: "Charcoal Slate Fabric", hex: "#2F3E46" },
  { id: "gold", name: "Honey Gold Velvet", hex: "#C59D5F" },
  { id: "white", name: "Champagne Ivory Linen", hex: "#E8DCC4" },
];

export const WOOD_OPTIONS = [
  { id: "burma", name: "Burma Teak Natural", hex: "#C59D5F" },
  { id: "walnut", name: "Royal Walnut Polish", hex: "#3D2314" },
  { id: "dark_walnut", name: "Dark Walnut Polish", hex: "#1A1A1A" },
  { id: "rosewood", name: "Heritage Rosewood", hex: "#4A1525" },
];

// GLB Model Loader Component with material overrides
function Model({
  url = "/models/sofa.glb",
  fabricColor,
  woodColor,
}: {
  url?: string;
  fabricColor: string;
  woodColor: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  let gltf: any = null;

  try {
    // Attempt useGLTF
    gltf = useGLTF(url);
  } catch {
    // If GLB asset is not present yet, gltf remains null
  }

  useEffect(() => {
    if (!gltf || !gltf.scene) return;

    gltf.scene.traverse((child: any) => {
      if (child.isMesh) {
        const meshName = child.name.toLowerCase();
        if (meshName.includes("leg") || meshName.includes("wood") || meshName.includes("frame")) {
          child.material.color.set(woodColor);
          child.material.roughness = 0.3;
        } else {
          child.material.color.set(fabricColor);
          child.material.roughness = 0.6;
        }
      }
    });
  }, [gltf, fabricColor, woodColor]);

  if (gltf && gltf.scene) {
    return <primitive object={gltf.scene} scale={1.2} position={[0, -0.5, 0]} />;
  }

  // Fallback 3D Mesh structure when GLB file is ready to be placed in /public/models/sofa.glb
  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Main Base Cushion */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.4, 0.4, 1.6]} />
        <meshStandardMaterial color={fabricColor} roughness={0.65} metalness={0.1} />
      </mesh>

      {/* 3 Seat Cushions */}
      {[-1.1, 0, 1.1].map((x, i) => (
        <React.Fragment key={i}>
          <mesh position={[x, 0.7, 0.05]} castShadow receiveShadow>
            <boxGeometry args={[1.05, 0.3, 1.45]} />
            <meshStandardMaterial color={fabricColor} roughness={0.6} metalness={0.1} />
          </mesh>
          <mesh position={[x, 1.25, -0.6]} castShadow receiveShadow>
            <boxGeometry args={[1.05, 0.95, 0.35]} />
            <meshStandardMaterial color={fabricColor} roughness={0.6} metalness={0.1} />
          </mesh>
        </React.Fragment>
      ))}

      {/* Left & Right Armrests */}
      <mesh position={[-1.85, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.35, 0.85, 1.65]} />
        <meshStandardMaterial color={fabricColor} roughness={0.65} metalness={0.1} />
      </mesh>
      <mesh position={[1.85, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.35, 0.85, 1.65]} />
        <meshStandardMaterial color={fabricColor} roughness={0.65} metalness={0.1} />
      </mesh>

      {/* Solid Teak Wood Legs */}
      {[
        [-1.8, 0.15, -0.7],
        [1.8, 0.15, -0.7],
        [-1.8, 0.15, 0.7],
        [1.8, 0.15, 0.7],
        [0, 0.15, -0.7],
        [0, 0.15, 0.7],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} castShadow>
          <cylinderGeometry args={[0.06, 0.04, 0.3, 16]} />
          <meshStandardMaterial color={woodColor} roughness={0.3} metalness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

// R3F Canvas Loading Fallback
function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 bg-[#0D0D0D]/90 p-4 rounded-2xl border border-[#C59D5F]/40 text-[#DFB978] backdrop-blur-md">
        <Rotate3d className="w-6 h-6 animate-spin" />
        <span className="text-xs font-bold uppercase tracking-wider">Loading 3D Scene...</span>
      </div>
    </Html>
  );
}

export default function SofaModelViewer() {
  const controlsRef = useRef<any>(null);
  const [selectedFabric, setSelectedFabric] = useState(FABRIC_OPTIONS[0]);
  const [selectedWood, setSelectedWood] = useState(WOOD_OPTIONS[0]);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <section className="py-20 bg-[#0D0D0D] text-[#E8E6E1] relative overflow-hidden border-t border-b border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <Rotate3d className="w-4 h-4 text-[#C59D5F] animate-spin" /> Interactive R3F 3D Sofa Customizer
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Royal Teak Sovereign 3D Showcase
          </h2>
          <p className="text-sm text-gray-400">
            Real WebGL 3D Canvas • Drag mouse to rotate • Pinch/Scroll to zoom • Live materials
          </p>
        </div>

        {/* 3D Scene Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* R3F Canvas Stage (7 Cols) */}
          <div className="lg:col-span-7 relative h-[480px] sm:h-[540px] w-full rounded-3xl overflow-hidden bg-[#1C1C1C] border border-[#C59D5F]/30 shadow-2xl group">
            <Canvas
              shadows
              camera={{ position: [0, 2, 5.5], fov: 45 }}
              className="w-full h-full cursor-grab active:cursor-grabbing"
            >
              <ambientLight intensity={1.2} />
              <directionalLight
                position={[5, 8, 5]}
                intensity={1.8}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <directionalLight position={[-5, 3, -5]} intensity={0.6} color="#C59D5F" />

              <Suspense fallback={<CanvasLoader />}>
                <Model fabricColor={selectedFabric.hex} woodColor={selectedWood.hex} />
                <Environment preset="city" />
                <ContactShadows opacity={0.6} scale={10} blur={2} far={4} resolution={512} />
              </Suspense>

              <OrbitControls
                ref={controlsRef}
                enableZoom={true}
                enablePan={true}
                autoRotate={autoRotate}
                autoRotateSpeed={0.8}
                minDistance={3}
                maxDistance={8}
                maxPolarAngle={Math.PI / 2 - 0.05}
                onStart={() => setAutoRotate(false)}
              />
            </Canvas>

            {/* Top Bar Controls Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="bg-[#0D0D0D]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C59D5F]/40 text-[11px] font-semibold text-[#DFB978] flex items-center gap-1.5 pointer-events-auto">
                <Rotate3d className="w-3.5 h-3.5" /> Interactive 3D Canvas
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border transition-all ${
                    autoRotate
                      ? "bg-[#C59D5F] text-[#0D0D0D] border-[#C59D5F]"
                      : "bg-[#0D0D0D]/80 text-[#E8E6E1] border-gray-700 hover:border-[#C59D5F]"
                  }`}
                >
                  {autoRotate ? "Auto-Rotating" : "Paused"}
                </button>

                <button
                  onClick={handleResetCamera}
                  className="p-2 rounded-full bg-[#0D0D0D]/80 hover:bg-[#0D0D0D] text-white border border-gray-700 hover:border-[#C59D5F] transition-colors"
                  title="Reset Camera Angle"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Dimension Badge */}
            <div className="absolute bottom-4 left-4 bg-[#0D0D0D]/90 backdrop-blur-md p-3 rounded-2xl border border-[#1C1C1C] text-xs text-gray-300">
              <span className="text-[10px] font-bold uppercase text-[#C59D5F] block">Sofa Dimensions</span>
              <span className="font-mono text-white block font-bold">88&quot; L × 38&quot; W × 36&quot; H (Seat H: 18&quot;)</span>
            </div>
          </div>

          {/* Material Swatches & CTAs (5 Cols) */}
          <div className="lg:col-span-5 bg-[#1C1C1C] p-8 rounded-3xl border border-[#C59D5F]/30 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C59D5F]">
                100% Solid Burma Teak Structure
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">Sovereign 3-Seater Sofa</h3>
              <span className="text-2xl font-bold text-white block mt-2">{formatPrice(145000)}</span>
            </div>

            {/* Fabric Swatch Selector */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-gray-400 block">
                3D Fabric Material: <span className="text-[#DFB978]">{selectedFabric.name}</span>
              </span>
              <div className="flex items-center gap-2.5">
                {FABRIC_OPTIONS.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`w-9 h-9 rounded-full border-2 transition-transform relative flex items-center justify-center ${
                      selectedFabric.id === fabric.id
                        ? "border-[#C59D5F] scale-110 shadow-gold"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ backgroundColor: fabric.hex }}
                    title={fabric.name}
                  >
                    {selectedFabric.id === fabric.id && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Wood Swatch Selector */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-gray-400 block">
                3D Wood Finish: <span className="text-[#DFB978]">{selectedWood.name}</span>
              </span>
              <div className="flex items-center gap-2.5">
                {WOOD_OPTIONS.map((wood) => (
                  <button
                    key={wood.id}
                    onClick={() => setSelectedWood(wood)}
                    className={`w-9 h-9 rounded-full border-2 transition-transform relative flex items-center justify-center ${
                      selectedWood.id === wood.id
                        ? "border-[#C59D5F] scale-110 shadow-gold"
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

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#0D0D0D]">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4" /> Request Quote
              </button>

              <a
                href={createWhatsAppUrl(`Hi Tirumala Furniture, I inspected your R3F 3D Sofa with ${selectedFabric.name} and ${selectedWood.name} finish. Please send me official quote.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp 3D Model Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <QuickQuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        productName={`Royal Teak Sovereign Sofa (${selectedFabric.name} / ${selectedWood.name})`}
        productPrice={145000}
      />
    </section>
  );
}
