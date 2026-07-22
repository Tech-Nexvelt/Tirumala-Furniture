"use client";

export interface PerformanceTier {
  isLowEnd: boolean;
  dpr: number;
  shadowMapSize: number;
  enableParticles: boolean;
  enableBloom: boolean;
  maxPolarAngle: number;
}

export function getAdaptivePerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") {
    return {
      isLowEnd: false,
      dpr: 1.5,
      shadowMapSize: 1024,
      enableParticles: true,
      enableBloom: true,
      maxPolarAngle: Math.PI / 2 - 0.05,
    };
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const memory = (navigator as any).deviceMemory || 4;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;

  const isLowEnd = isMobile || memory < 4 || hardwareConcurrency < 4 || prefersReducedMotion;

  return {
    isLowEnd,
    dpr: isLowEnd ? 1 : 1.5,
    shadowMapSize: isLowEnd ? 512 : 1024,
    enableParticles: !isLowEnd,
    enableBloom: !isLowEnd,
    maxPolarAngle: Math.PI / 2 - 0.05,
  };
}
