"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Rotate3d, Sparkles, MessageSquare, CheckCircle2, Maximize2 } from "lucide-react";
import QuickQuoteDrawer from "../layout/QuickQuoteDrawer";
import { createWhatsAppUrl, formatPrice } from "@/lib/utils";

const FABRIC_COLORS = [
  { id: "emerald", name: "Royal Emerald Velvet", hex: "#0F4C3A" },
  { id: "saddle", name: "Saddle Tan Italian Leather", hex: "#8B4513" },
  { id: "slate", name: "Slate Charcoal Fabric", hex: "#2F3E46" },
  { id: "gold", name: "Honey Gold Velvet", hex: "#C59D5F" },
  { id: "ivory", name: "Champagne Linen", hex: "#E8DCC4" },
];

const WOOD_FINISHES = [
  { id: "teak", name: "Burma Teak Natural", hex: "#C59D5F" },
  { id: "walnut", name: "Royal Walnut Polish", hex: "#3D2314" },
  { id: "ebony", name: "Dark Ebony Stain", hex: "#1A1A1A" },
  { id: "rosewood", name: "Heritage Rosewood", hex: "#4A1525" },
];

export default function SofaViewer3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeFabric, setActiveFabric] = useState(FABRIC_COLORS[0]);
  const [activeWood, setActiveWood] = useState(WOOD_FINISHES[0]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Three.js Scene refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cushionsMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const legsMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color("#0D0D0D");

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.5, 6);
    camera.lookAt(0, 0.5, 0);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 4. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfff5e6, 2.0);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xc59d5f, 0.8);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // 5. Procedural 3D Luxury Sofa Geometry
    const sofaGroup = new THREE.Group();

    // Fabric Material
    const cushionsMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activeFabric.hex),
      roughness: 0.6,
      metalness: 0.1,
    });
    cushionsMaterialRef.current = cushionsMaterial;

    // Wood Material
    const legsMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activeWood.hex),
      roughness: 0.3,
      metalness: 0.2,
    });
    legsMaterialRef.current = legsMaterial;

    // Main Seat Base Cushion
    const baseGeo = new THREE.BoxGeometry(3.6, 0.4, 1.6);
    const baseMesh = new THREE.Mesh(baseGeo, cushionsMaterial);
    baseMesh.position.set(0, 0.5, 0);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    sofaGroup.add(baseMesh);

    // Seat Cushions (3 Seater Pads)
    for (let i = -1; i <= 1; i++) {
      const padGeo = new THREE.BoxGeometry(1.15, 0.3, 1.5);
      const padMesh = new THREE.Mesh(padGeo, cushionsMaterial);
      padMesh.position.set(i * 1.18, 0.8, 0.05);
      padMesh.castShadow = true;
      sofaGroup.add(padMesh);

      // Backrest Pillows
      const backPillowGeo = new THREE.BoxGeometry(1.15, 1.0, 0.35);
      const backPillowMesh = new THREE.Mesh(backPillowGeo, cushionsMaterial);
      backPillowMesh.position.set(i * 1.18, 1.35, -0.6);
      backPillowMesh.castShadow = true;
      sofaGroup.add(backPillowMesh);
    }

    // Left Armrest
    const armGeo = new THREE.BoxGeometry(0.4, 0.9, 1.7);
    const leftArm = new THREE.Mesh(armGeo, cushionsMaterial);
    leftArm.position.set(-1.95, 0.9, 0);
    leftArm.castShadow = true;
    sofaGroup.add(leftArm);

    // Right Armrest
    const rightArm = new THREE.Mesh(armGeo, cushionsMaterial);
    rightArm.position.set(1.95, 0.9, 0);
    rightArm.castShadow = true;
    sofaGroup.add(rightArm);

    // Teak Wood Legs
    const legGeo = new THREE.CylinderGeometry(0.06, 0.04, 0.4, 16);
    const legPositions = [
      [-1.9, 0.2, -0.7],
      [1.9, 0.2, -0.7],
      [-1.9, 0.2, 0.7],
      [1.9, 0.2, 0.7],
      [0, 0.2, -0.7],
      [0, 0.2, 0.7],
    ];

    legPositions.forEach(([x, y, z]) => {
      const legMesh = new THREE.Mesh(legGeo, legsMaterial);
      legMesh.position.set(x, y, z);
      legMesh.castShadow = true;
      sofaGroup.add(legMesh);
    });

    scene.add(sofaGroup);

    // Ground Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(10, 10);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.4 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 6. Interactive Mouse Orbit Controls Logic
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      sofaGroup.rotation.y += deltaX * 0.008;
      sofaGroup.rotation.x += deltaY * 0.005;
      sofaGroup.rotation.x = Math.max(-0.2, Math.min(0.5, sofaGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z += e.deltaY * 0.003;
      camera.position.z = Math.max(4, Math.min(9, camera.position.z));
    };

    const container = mountRef.current;
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("wheel", handleWheel, { passive: false });

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      sofaGroup.rotation.y += deltaX * 0.008;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isDragging) {
        sofaGroup.rotation.y += 0.002; // Slow ambient rotation
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  // Update Materials when swatches change
  useEffect(() => {
    if (cushionsMaterialRef.current) {
      cushionsMaterialRef.current.color.set(activeFabric.hex);
    }
  }, [activeFabric]);

  useEffect(() => {
    if (legsMaterialRef.current) {
      legsMaterialRef.current.color.set(activeWood.hex);
    }
  }, [activeWood]);

  return (
    <section className="py-20 bg-[#0D0D0D] text-[#E8E6E1] relative overflow-hidden border-t border-b border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59D5F] inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59D5F]/10 border border-[#C59D5F]/30">
            <Rotate3d className="w-4 h-4 text-[#C59D5F] animate-spin" /> Lightweight 3D Sofa Customizer
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Royal Teak Sovereign 3-Seater 3D Inspector
          </h2>
          <p className="text-sm text-gray-400">
            Drag to rotate 360°, scroll to zoom, and switch live upholstery fabrics & Burma Teak wood polishes.
          </p>
        </div>

        {/* 3D Canvas Stage & Customization Control Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D WebGL Canvas (7 Cols) */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[520px] w-full rounded-3xl overflow-hidden bg-[#1C1C1C] border border-[#C59D5F]/30 shadow-2xl group">
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Instruction Overlay Pill */}
            <div className="absolute top-4 left-4 bg-[#0D0D0D]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C59D5F]/40 text-[11px] font-semibold text-[#DFB978] flex items-center gap-1.5">
              <Rotate3d className="w-3.5 h-3.5" /> Drag mouse to rotate • Scroll to zoom
            </div>

            {/* Dimension Overlay Badge */}
            <div className="absolute bottom-4 left-4 bg-[#0D0D0D]/90 backdrop-blur-md p-3 rounded-2xl border border-[#1C1C1C] text-xs text-gray-300 space-y-1">
              <span className="text-[10px] font-bold uppercase text-[#C59D5F] block">Sofa Dimensions</span>
              <span className="font-mono text-white block font-bold">88&quot; L × 38&quot; W × 36&quot; H (Seat H: 18&quot;)</span>
            </div>
          </div>

          {/* Controls & CTAs (5 Cols) */}
          <div className="lg:col-span-5 bg-[#1C1C1C] p-8 rounded-3xl border border-[#C59D5F]/20 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C59D5F]">
                100% Solid Burma Teak Structure
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">Sovereign 3-Seater Sofa</h3>
              <span className="text-2xl font-bold text-white block mt-2">{formatPrice(145000)}</span>
            </div>

            {/* Fabric Selector */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-gray-400 block">
                Upholstery Fabric: <span className="text-[#DFB978]">{activeFabric.name}</span>
              </span>
              <div className="flex items-center gap-2.5">
                {FABRIC_COLORS.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setActiveFabric(fabric)}
                    className={`w-9 h-9 rounded-full border-2 transition-transform ${
                      activeFabric.id === fabric.id
                        ? "border-[#C59D5F] scale-110 shadow-gold"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ backgroundColor: fabric.hex }}
                    title={fabric.name}
                  />
                ))}
              </div>
            </div>

            {/* Wood Finish Selector */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-gray-400 block">
                Teak Wood Polish: <span className="text-[#DFB978]">{activeWood.name}</span>
              </span>
              <div className="flex items-center gap-2.5">
                {WOOD_FINISHES.map((wood) => (
                  <button
                    key={wood.id}
                    onClick={() => setActiveWood(wood)}
                    className={`w-9 h-9 rounded-full border-2 transition-transform ${
                      activeWood.id === wood.id
                        ? "border-[#C59D5F] scale-110 shadow-gold"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ backgroundColor: wood.hex }}
                    title={wood.name}
                  />
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-1.5 text-xs text-gray-300 pt-3 border-t border-[#0D0D0D]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>10-Year Anti-Termite & Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom Dimensions Tailored on Request</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4" /> Request Quote
              </button>

              <a
                href={createWhatsAppUrl(`Hi Tirumala Furniture, I customized the 3D Sofa in ${activeFabric.name} with ${activeWood.name}. Please share official quotation.`)}
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
        productName={`Royal Teak Sofa (${activeFabric.name} / ${activeWood.name})`}
        productPrice={145000}
      />
    </section>
  );
}
