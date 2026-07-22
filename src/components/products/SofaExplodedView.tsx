"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, useGLTF, Html, Center, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles as SparklesIcon, ShieldCheck, CheckCircle2, Rotate3d, Calendar, ArrowRight } from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";
import { getAdaptivePerformanceTier } from "@/lib/AdaptivePerformance";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Multi-State Cinematic Sofa Film Scene Component
function CinematicSofaFilmScene({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const { scene, camera } = useThree();
  const { scene: sofaGltf } = useGLTF("/models/sofa.glb");

  const seatCushionRef = useRef<THREE.Object3D | null>(null);
  const backCushionRef = useRef<THREE.Object3D | null>(null);
  const leftArmrestRef = useRef<THREE.Object3D | null>(null);
  const rightArmrestRef = useRef<THREE.Object3D | null>(null);
  const frameRef = useRef<THREE.Object3D | null>(null);
  const legsRef = useRef<THREE.Object3D | null>(null);

  const mainLightRef = useRef<THREE.DirectionalLight | null>(null);
  const accentLightRef = useRef<THREE.DirectionalLight | null>(null);

  useEffect(() => {
    if (!sofaGltf) return;

    sofaGltf.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const name = (child.name || "").toLowerCase();
        const matName = (child.material?.name || "").toLowerCase();

        if (name.includes("seat") || matName.includes("seat")) {
          seatCushionRef.current = child;
        } else if (name.includes("back") || name.includes("pillow") || matName.includes("back")) {
          backCushionRef.current = child;
        } else if (name.includes("left") || name.includes("arm_l")) {
          leftArmrestRef.current = child;
        } else if (name.includes("right") || name.includes("arm_r")) {
          rightArmrestRef.current = child;
        } else if (name.includes("leg") || name.includes("foot")) {
          legsRef.current = child;
        } else {
          frameRef.current = child;
        }
      }
    });
  }, [sofaGltf]);

  useFrame(() => {
    const p = scrollProgress;

    // ----------------------------------------------------
    // CAMERA FILM SYSTEM: Dynamic Orbit, Push, Pull & Tilt
    // ----------------------------------------------------
    let targetCamX = 0;
    let targetCamY = 1.8;
    let targetCamZ = 4.5;
    let targetRotY = p * Math.PI * 0.75;

    if (p < 0.15) {
      // Chapter 1: First Impression Wide Shot
      targetCamX = 0;
      targetCamY = 1.8;
      targetCamZ = 4.5;
    } else if (p < 0.3) {
      // Chapter 2: Macro Fabric Close-up
      targetCamX = 0.5;
      targetCamY = 1.2;
      targetCamZ = 2.8;
    } else if (p < 0.45) {
      // Chapter 3: Cushion Lift Elevation Shot
      targetCamX = -0.3;
      targetCamY = 2.2;
      targetCamZ = 3.8;
    } else if (p < 0.6) {
      // Chapter 4: Joinery & Wood Grain Close-up
      targetCamX = 0.8;
      targetCamY = 1.1;
      targetCamZ = 2.5;
    } else if (p < 0.75) {
      // Chapter 5: X-Ray & Wireframe Structural Inspection
      targetCamX = 0;
      targetCamY = 2.0;
      targetCamZ = 4.0;
    } else if (p < 0.9) {
      // Chapter 6: Floating Magnetic Reassembly
      targetCamX = -0.4;
      targetCamY = 1.6;
      targetCamZ = 4.2;
    } else {
      // Chapter 7: Golden Hour Living Suite Sanctuary
      targetCamX = 0;
      targetCamY = 1.8;
      targetCamZ = 4.6;
    }

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetCamX, 0.1);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetCamY, 0.1);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCamZ, 0.1);
    camera.lookAt(0, 0.2, 0);

    scene.rotation.y = THREE.MathUtils.lerp(scene.rotation.y, targetRotY, 0.08);

    // ----------------------------------------------------
    // MULTI-STATE VISUAL & MATERIAL TRANSFORMATIONS
    // ----------------------------------------------------
    sofaGltf.traverse((child: any) => {
      if (child.isMesh) {
        // X-Ray Mode (0.6 - 0.75) toggle wireframe mode
        if (p >= 0.6 && p < 0.75) {
          child.material.wireframe = true;
        } else {
          child.material.wireframe = false;
        }
      }
    });

    // Mesh Transforms (Exploded & Floating Reassembly)
    let factor = 0;
    if (p >= 0.25 && p < 0.85) {
      factor = Math.sin(((p - 0.25) / 0.6) * Math.PI);
    }

    if (seatCushionRef.current) {
      seatCushionRef.current.position.y = factor * 0.9;
    }
    if (backCushionRef.current) {
      backCushionRef.current.position.y = factor * 0.85;
      backCushionRef.current.position.z = -factor * 0.45;
    }
    if (leftArmrestRef.current) {
      leftArmrestRef.current.position.x = -factor * 0.75;
    }
    if (rightArmrestRef.current) {
      rightArmrestRef.current.position.x = factor * 0.75;
    }
    if (legsRef.current) {
      legsRef.current.position.y = -factor * 0.35;
    }

    // ----------------------------------------------------
    // LIGHTING EVOLUTION: Studio -> Engineering -> Golden Hour
    // ----------------------------------------------------
    if (mainLightRef.current) {
      if (p > 0.85) {
        // Golden Hour
        mainLightRef.current.intensity = 3.5;
        mainLightRef.current.color.setHex(0xffd1a4);
      } else if (p > 0.5) {
        // Engineering Spotlight
        mainLightRef.current.intensity = 2.8;
        mainLightRef.current.color.setHex(0xffffff);
      } else {
        // Warm Showroom Studio
        mainLightRef.current.intensity = 1.8;
        mainLightRef.current.color.setHex(0xfff5ea);
      }
    }

    if (accentLightRef.current) {
      accentLightRef.current.color.setHex(p > 0.85 ? 0xc19a6b : 0x8b5e3c);
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight
        ref={mainLightRef}
        position={[5, 8, 5]}
        intensity={1.8}
        castShadow
      />
      <directionalLight ref={accentLightRef} position={[-5, 3, -5]} intensity={1.0} color="#C19A6B" />

      {/* Floating Dust Particles Atmosphere */}
      <Sparkles count={40} scale={6} size={2} speed={0.4} opacity={0.6} color="#C19A6B" />

      <Center>
        <primitive object={sofaGltf} scale={1.4} position={[0, -0.3, 0]} />
      </Center>

      <Environment preset={scrollProgress > 0.85 ? "sunset" : "city"} />
      <ContactShadows opacity={0.65} scale={10} blur={2.5} far={4} resolution={512} />
    </>
  );
}

function SceneLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 bg-white/95 p-5 rounded-2xl border border-[#E5E7EB] text-[#111827] backdrop-blur-md shadow-lg">
        <Rotate3d className="w-8 h-8 animate-spin text-[#8B5E3C]" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#111827]">
          Hydrating Cinematic Product Film...
        </span>
      </div>
    </Html>
  );
}

export default function SofaExplodedView() {
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
        end: "+=400%",
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

  const getFilmChapterInfo = () => {
    if (progress < 0.15) {
      return {
        chapter: "Chapter 01",
        title: "Sovereign Burma Teak Sanctuary",
        badge: "Assembled Museum Exhibit",
        desc: "Handcrafted Grade-A Burma Teak timber engineered for multi-generational durability.",
      };
    } else if (progress < 0.3) {
      return {
        chapter: "Chapter 02",
        title: "Italian Velvet & Cashmere Upholstery",
        badge: "Macro Weave & Tailoring",
        desc: "Breathable cashmere weave hand-stitched over high-density latex cushioning.",
      };
    } else if (progress < 0.45) {
      return {
        chapter: "Chapter 03",
        title: "Layered Memory Foam Elevation",
        badge: "Cushion Cutaway Reveal",
        desc: "High-resilience foam layers gently float to reveal structural timber beneath.",
      };
    } else if (progress < 0.6) {
      return {
        chapter: "Chapter 04",
        title: "100% Solid Burma Teak Wood Grain",
        badge: "Mortise & Tenon Joinery",
        desc: "Interlocking solid wood joints sculpted without nails or synthetic glue.",
      };
    } else if (progress < 0.75) {
      return {
        chapter: "Chapter 05",
        title: "X-Ray Structural Integrity Mode",
        badge: "Wireframe Engineering Audit",
        desc: "Internal stress-tested timber framework rated for 100+ years of family living.",
      };
    } else if (progress < 0.9) {
      return {
        chapter: "Chapter 06",
        title: "Magnetic Reassembly Sequence",
        badge: "Self-Assembling Craftsmanship",
        desc: "Components magnetically glide into locked alignment with soft spring inertia.",
      };
    } else {
      return {
        chapter: "Chapter 07",
        title: "Crafted for Generations.",
        badge: "Golden Hour Living Suite",
        desc: "Experience timeless solid teak craftsmanship at Tirumala Furniture.",
      };
    }
  };

  const film = getFilmChapterInfo();

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#FAFAF8] text-[#111827] border-t border-b border-[#E5E7EB] overflow-hidden"
      id="exploded-craftsmanship"
    >
      {/* Top Floating Header & Film Scrub Progress */}
      <div className="absolute top-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-7xl mx-auto pointer-events-none">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-sm pointer-events-auto">
            <SparklesIcon className="w-3.5 h-3.5 text-[#8B5E3C]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B5E3C]">
              {film.chapter} • Cinematic Product Film
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827]">
            {film.title}
          </h2>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#8B5E3C] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5E7EB] shadow-sm">
            Film Scrub: {Math.round(progress * 100)}%
          </span>
        </div>
      </div>

      {/* R3F WebGL Canvas Film Stage */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          shadows={!tier.isLowEnd}
          dpr={tier.dpr}
          camera={{ position: [0, 1.8, 4.5], fov: 45 }}
          className="w-full h-full"
        >
          <Suspense fallback={<SceneLoader />}>
            <CinematicSofaFilmScene scrollProgress={progress} />
          </Suspense>
        </Canvas>
      </div>

      {/* Bottom Annotation & Final Emotional Ending Overlay */}
      <div className="absolute bottom-6 left-6 right-6 z-20 max-w-7xl mx-auto flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-[#E5E7EB] shadow-xl max-w-md space-y-2 pointer-events-auto transition-all duration-500">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B5E3C] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> {film.badge}
          </span>
          <p className="text-xs text-[#6B7280] leading-relaxed">{film.desc}</p>
          <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-[#111827]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 10-Year Anti-Termite & Structural Guarantee
          </div>
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
        productName="Burma Teak Sovereign Recliner (Cinematic Film)"
      />
    </section>
  );
}

useGLTF.preload("/models/sofa.glb");
