"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, useGLTF, Html, Center, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles as SparklesIcon, Rotate3d, Calendar, ArrowRight } from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";
import LuxuryBedAnnotations from "./LuxuryBedAnnotations";
import { getAdaptivePerformanceTier } from "@/lib/AdaptivePerformance";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 10-Chapter Bed Film Scene
function BedCraftsmanshipScene({ scrollProgress }: { scrollProgress: number }) {
  const { camera, scene } = useThree();
  const { scene: bedGltf } = useGLTF("/models/imperial-bed.glb");

  const mattressRef = useRef<THREE.Object3D | null>(null);
  const headboardRef = useRef<THREE.Object3D | null>(null);
  const sideRailLeftRef = useRef<THREE.Object3D | null>(null);
  const sideRailRightRef = useRef<THREE.Object3D | null>(null);
  const slatsRef = useRef<THREE.Object3D | null>(null);
  const legsRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!bedGltf) return;

    bedGltf.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const name = (child.name || "").toLowerCase();
        if (name.includes("mattress")) mattressRef.current = child;
        else if (name.includes("headboard")) headboardRef.current = child;
        else if (name.includes("left") || name.includes("rail_l")) sideRailLeftRef.current = child;
        else if (name.includes("right") || name.includes("rail_r")) sideRailRightRef.current = child;
        else if (name.includes("slat")) slatsRef.current = child;
        else if (name.includes("leg")) legsRef.current = child;
      }
    });
  }, [bedGltf]);

  useFrame(() => {
    const p = scrollProgress;

    // Camera dolly sequence
    let camX = 0;
    let camY = 2.2;
    let camZ = 4.2;

    if (p < 0.2) {
      camY = 2.2;
      camZ = 4.2;
    } else if (p < 0.45) {
      camX = -0.4;
      camY = 1.6;
      camZ = 3.2;
    } else if (p < 0.7) {
      camX = 0.6;
      camY = 1.4;
      camZ = 2.8;
    } else {
      camX = 0;
      camY = 2.2;
      camZ = 4.5;
    }

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, camX, 0.1);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, camY, 0.1);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, camZ, 0.1);
    camera.lookAt(0, 0.2, 0);

    scene.rotation.y = THREE.MathUtils.lerp(scene.rotation.y, p * Math.PI * 0.6, 0.08);

    // Mesh exploded transforms
    let factor = 0;
    if (p >= 0.3 && p < 0.85) {
      factor = Math.sin(((p - 0.3) / 0.55) * Math.PI);
    }

    if (mattressRef.current) mattressRef.current.position.y = factor * 1.0;
    if (sideRailLeftRef.current) sideRailLeftRef.current.position.x = -factor * 0.6;
    if (sideRailRightRef.current) sideRailRightRef.current.position.x = factor * 0.6;
    if (slatsRef.current) slatsRef.current.position.y = factor * 0.4;
    if (legsRef.current) legsRef.current.position.y = -factor * 0.3;
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={2.2} castShadow />
      <directionalLight position={[-5, 3, -5]} intensity={0.8} color="#C19A6B" />

      <Sparkles count={35} scale={6} size={2} speed={0.4} opacity={0.6} color="#C19A6B" />

      <Center>
        <primitive object={bedGltf} scale={1.2} position={[0, -0.3, 0]} />
      </Center>

      <Environment preset={scrollProgress > 0.85 ? "sunset" : "city"} />
      <ContactShadows opacity={0.65} scale={10} blur={2.5} far={4} resolution={512} />
    </>
  );
}

// Bed GLB Error Boundary
class BedFilmGLBErrorBoundary extends React.Component<
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
        <Html center>
          <div className="flex flex-col items-center gap-3 bg-white/95 p-6 rounded-3xl border border-[#E5E7EB] text-[#111827] backdrop-blur-md shadow-2xl text-center max-w-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B5E3C]">
              Imperial Bed GLB Asset Required
            </span>
            <p className="text-xs text-[#6B7280]">
              Developer Warning: Please place your high-resolution GLB model at <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">public/models/imperial-bed.glb</code> to enable 3D bed craftsmanship storytelling.
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
          Hydrating Bed Craftsmanship Story...
        </span>
      </div>
    </Html>
  );
}

export default function LuxuryBedExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [tier, setTier] = useState(getAdaptivePerformanceTier());

  useEffect(() => {
    setTier(getAdaptivePerformanceTier());

    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=350%",
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getBedChapterInfo = () => {
    if (progress < 0.2) {
      return {
        step: "0% — 20%",
        title: "Imperial Presidential King Storage Bed",
        badge: "Assembled Sanctuary",
        desc: "Hand-sculpted Solid Burma Teak timber engineered with optional hydraulic storage lift.",
      };
    } else if (progress < 0.4) {
      return {
        step: "30% — 40%",
        title: "Orthopedic Pocket Spring & Foam Layers",
        badge: "Mattress Cutaway Reveal",
        desc: "Breathable cashmere quilting over memory foam and isolated pocket spring core.",
      };
    } else if (progress < 0.6) {
      return {
        step: "50% — 60%",
        title: "Solid Burma Teak Side Rails & Slats",
        badge: "Internal Support Mechanics",
        desc: "Ergonomic wooden slat grid providing optimal weight distribution and air circulation.",
      };
    } else if (progress < 0.8) {
      return {
        step: "70% — 75%",
        title: "Traditional Mortise & Tenon Joinery",
        badge: "Solid Wood Craftsmanship",
        desc: "Nail-free interlocking Burma Teak joints built for multi-generational durability.",
      };
    } else if (progress < 0.9) {
      return {
        step: "80% — 90%",
        title: "Exploded Engineering & Reassembly",
        badge: "Magnetic Alignment",
        desc: "Components magnetically pull back into locked alignment with soft spring inertia.",
      };
    } else {
      return {
        step: "100%",
        title: "Crafted for Generations of Restful Sleep",
        badge: "Golden Hour Bedroom Sanctuary",
        desc: "Experience timeless solid teak bedroom luxury at Tirumala Furniture.",
      };
    }
  };

  const info = getBedChapterInfo();

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#FAFAF8] text-[#111827] border-t border-b border-[#E5E7EB] overflow-hidden"
      id="bed-craftsmanship"
    >
      {/* Top Floating Header & Film Scrub Progress */}
      <div className="absolute top-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-7xl mx-auto pointer-events-none">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-sm pointer-events-auto">
            <SparklesIcon className="w-3.5 h-3.5 text-[#8B5E3C]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B5E3C]">
              {info.step} • Bed Craftsmanship Film
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827]">
            {info.title}
          </h2>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#8B5E3C] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5E7EB] shadow-sm">
            Film Progress: {Math.round(progress * 100)}%
          </span>
        </div>
      </div>

      {/* R3F WebGL Canvas Film Stage */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          shadows={!tier.isLowEnd}
          dpr={tier.dpr}
          camera={{ position: [0, 2.2, 4.2], fov: 45 }}
          className="w-full h-full"
        >
          <BedFilmGLBErrorBoundary>
            <Suspense fallback={<SceneLoader />}>
              <BedCraftsmanshipScene scrollProgress={progress} />
            </Suspense>
          </BedFilmGLBErrorBoundary>
        </Canvas>
      </div>

      {/* Bottom Floating Annotation Card */}
      <div className="absolute bottom-6 left-6 right-6 z-20 max-w-7xl mx-auto flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 pointer-events-none">
        <div className="pointer-events-auto">
          <LuxuryBedAnnotations
            step={info.step}
            title={info.title}
            badge={info.badge}
            desc={info.desc}
          />
        </div>

        <div className="pointer-events-auto flex flex-wrap items-center gap-3">
          <a
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-[#111827] border border-[#E5E7EB] font-bold text-xs shadow-sm transition-all uppercase tracking-wider flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#8B5E3C]" /> Book Showroom Visit
          </a>

          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-[#8B5E3C] hover:bg-[#6E472B] text-white font-bold text-xs shadow-gold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
          >
            Request Official Quote <ArrowRight className="w-4 h-4 text-[#C19A6B]" />
          </button>
        </div>
      </div>

      <QuickQuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        productName="Imperial Presidential King Bed (Craftsmanship Film)"
      />
    </section>
  );
}

useGLTF.preload("/models/imperial-bed.glb");
