"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import { Canvas, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { kameraAwal } from "@/lib/susunan";
import { sectionByKey, sections, type SectionKey } from "@/lib/sections";
import { useTheme } from "@/lib/theme";
import { PixelButton } from "@/components/ui/PixelButton";
import { Kamar } from "./Kamar";
import { CameraRig } from "./CameraRig";

const FADE_MS = 380;
const PIXEL_LONG_SIDE = 420; // resolusi internal sisi terpanjang saat mode PS1

/** Batas orbit dihitung dari sudut kamera awal. */
function useOrbitLimits() {
  return useMemo(() => {
    const off = new THREE.Vector3(...kameraAwal.eye).sub(new THREE.Vector3(...kameraAwal.target));
    const s = new THREE.Spherical().setFromVector3(off);
    return {
      minAzimuthAngle: s.theta - 0.7,
      maxAzimuthAngle: s.theta + 0.6,
      minPolarAngle: 0.55,
      maxPolarAngle: Math.min(1.35, s.phi + 0.3),
      minDistance: 4.2,
      maxDistance: s.radius * 1.15,
    };
  }, []);
}

/** DPR kecil supaya kanvas dirender sekitar 420 px lalu diperbesar tajam. */
function usePixelDpr(enabled: boolean) {
  const [dpr, setDpr] = useState<number | [number, number]>([1, 2]);
  useEffect(() => {
    const update = () => setDpr(enabled ? Math.max(0.2, PIXEL_LONG_SIDE / Math.max(window.innerWidth, window.innerHeight)) : [1, 2]);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [enabled]);
  return dpr;
}

export function KamarScene() {
  const router = useRouter();
  const { theme, toggle } = useTheme();
  const [hovered, setHovered] = useState<SectionKey | null>(null);
  const [focused, setFocused] = useState<SectionKey | null>(null);
  const [fading, setFading] = useState(false);
  const [pixel, setPixel] = useState(true);
  const tipRef = useRef<HTMLDivElement>(null);
  const limits = useOrbitLimits();
  const dpr = usePixelDpr(pixel);

  useEffect(() => {
    sections.forEach((s) => router.prefetch(s.href));
  }, [router]);

  const handleHover = useCallback((key: SectionKey | null, e?: ThreeEvent<PointerEvent>) => {
    setHovered(key);
    const tip = tipRef.current;
    if (tip && key && e) {
      tip.style.left = `${e.nativeEvent.clientX + 14}px`;
      tip.style.top = `${e.nativeEvent.clientY + 14}px`;
    }
  }, []);

  const select = useCallback((key: SectionKey) => {
    if (focused) return;
    setHovered(null);
    setFocused(key);
  }, [focused]);

  const onArrive = useCallback(() => {
    if (!focused) return;
    setFading(true);
    window.setTimeout(() => router.push(sectionByKey[focused].href), FADE_MS);
  }, [focused, router]);

  const hoveredSection = hovered ? sectionByKey[hovered] : null;

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Canvas
        flat
        dpr={dpr}
        gl={{ antialias: false, alpha: true }}
        camera={{ position: kameraAwal.eye, fov: kameraAwal.fov, near: 0.05, far: 60 }}
        style={{ imageRendering: pixel ? "pixelated" : "auto", cursor: hovered ? "pointer" : "grab", touchAction: "none" }}
        aria-label="Kamar 3D yang bisa diputar. Klik barang untuk membuka section, atau pakai menu."
      >
        <OrbitControls makeDefault target={kameraAwal.target} enabled={!focused} enablePan={false} enableDamping dampingFactor={0.08} rotateSpeed={0.6} {...limits} />
        <Kamar night={theme === "malam"} hovered={hovered} interactive={!focused} onHover={handleHover} onSelect={select} />
        <CameraRig focused={focused} onArrive={onArrive} />
      </Canvas>

      <header className="pointer-events-none absolute inset-x-5 top-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="pointer-events-auto">
          <h1 className="font-pixel text-3xl font-semibold leading-8">Ruang Renung</h1>
          <p className="font-pixel mt-1 text-sm text-ink-2">Kamar tempat aku merancang, menulis, dan bermain</p>
        </div>
        <nav aria-label="Navigasi section" className="pointer-events-auto flex max-w-xl flex-wrap gap-3 md:justify-end">
          {sections.map((s) => (
            <PixelButton key={s.key} musim={s.musim} onClick={() => select(s.key)}>
              {s.label}
            </PixelButton>
          ))}
        </nav>
      </header>

      <div className="absolute bottom-5 left-5 flex flex-wrap gap-3">
        <PixelButton musim="polos" onClick={toggle}>{theme === "malam" ? "Mode siang" : "Mode malam"}</PixelButton>
        <PixelButton musim="polos" onClick={() => setPixel((p) => !p)} aria-pressed={pixel}>
          Piksel PS1: {pixel ? "nyala" : "mati"}
        </PixelButton>
      </div>
      <p className="font-pixel absolute right-6 bottom-7 hidden text-right text-sm text-ink-2 md:block">
        Geser untuk memutar · scroll untuk zoom · klik barang
      </p>

      <div
        ref={tipRef}
        className={`kp-badge pointer-events-none fixed z-10 ${hoveredSection ? `is-${hoveredSection.key}` : "hidden"}`}
        aria-hidden="true"
      >
        {hoveredSection?.label}
      </div>

      <div
        className={`kp-season-bg pointer-events-none absolute inset-0 z-20 transition-opacity duration-[360ms] ease-[steps(4)] ${focused ? `is-${focused}` : ""}`}
        style={{ opacity: fading ? 1 : 0 }}
      />
    </div>
  );
}
