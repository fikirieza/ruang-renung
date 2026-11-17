"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { kameraAwal } from "@/lib/susunan";

// Lebar pandang yang dianggap "pas" adalah lebar di layar desktop rasio 16:10.
const REF_ASPECT = 1.6;
const PORTRAIT_FOV = 50;
const MAX_ZOOM_OUT = 1.15;

const halfTan = (deg: number) => Math.tan(THREE.MathUtils.degToRad(deg) / 2);

/**
 * Di layar sempit (HP berdiri), kamera dimundurkan dan FOV sedikit dilebarkan
 * supaya seluruh kamar tetap kelihatan seperti di desktop.
 * Hanya berjalan saat rasio layar berubah, jadi tidak melawan zoom pengunjung.
 */
export function ResponsiveCamera({ active }: { active: boolean }) {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const controls = useThree((s) => s.controls) as unknown as { target: THREE.Vector3; maxDistance: number; update: () => void } | null;
  const width = useThree((s) => s.size.width);
  const height = useThree((s) => s.size.height);
  const lastAspect = useRef<number | null>(null);

  useEffect(() => {
    if (!active || !controls || height === 0) return;
    const aspect = width / height;
    if (lastAspect.current !== null && Math.abs(aspect - lastAspect.current) < 0.05) return;
    lastAspect.current = aspect;

    const fov = aspect < 1 ? PORTRAIT_FOV : kameraAwal.fov;
    // Lebar horizontal yang dibutuhkan, dibanding lebar yang tersedia sekarang.
    const needed = halfTan(kameraAwal.fov) * REF_ASPECT;
    const available = halfTan(fov) * aspect;
    const factor = Math.max(1, needed / available);

    const target = new THREE.Vector3(...kameraAwal.target);
    const offset = new THREE.Vector3(...kameraAwal.eye).sub(target).multiplyScalar(factor);
    camera.fov = fov;
    camera.position.copy(target).add(offset);
    camera.updateProjectionMatrix();
    controls.target.copy(target);
    controls.maxDistance = offset.length() * MAX_ZOOM_OUT;
    controls.update();
  }, [active, camera, controls, width, height]);

  return null;
}
