"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { sectionByKey, type SectionKey } from "@/lib/sections";
import { kameraAwal } from "@/lib/susunan";
import { matrixOf } from "./Kamar";

const DURATION_MS = 1300;
const FOV_DROP = 8; // dolly in: FOV menyempit 36 ke 28 derajat

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

type Tween = {
  p0: THREE.Vector3; t0: THREE.Vector3; f0: number;
  p1: THREE.Vector3; t1: THREE.Vector3; f1: number;
  start: number; ms: number;
};

/** Meluncurkan kamera ke barang yang dipilih, lalu memanggil onArrive sekali. */
export function CameraRig({ focused, onArrive }: { focused: SectionKey | null; onArrive: () => void }) {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const controls = useThree((s) => s.controls) as unknown as { target: THREE.Vector3 } | null;
  const tween = useRef<Tween | null>(null);
  const arrived = useRef(false);

  useEffect(() => {
    if (!focused) return;
    const f = sectionByKey[focused].focus;
    const m = matrixOf(f.obj);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    tween.current = {
      p0: camera.position.clone(),
      t0: controls ? controls.target.clone() : new THREE.Vector3(...kameraAwal.target),
      f0: camera.fov,
      p1: new THREE.Vector3(...f.eye).applyMatrix4(m),
      t1: new THREE.Vector3(...f.look).applyMatrix4(m),
      f1: camera.fov - FOV_DROP,
      start: performance.now(),
      ms: reduce ? 1 : DURATION_MS,
    };
    arrived.current = false;
  }, [focused, camera, controls]);

  useFrame(() => {
    const tw = tween.current;
    if (!tw) return;
    const t = Math.min(1, (performance.now() - tw.start) / tw.ms);
    const k = easeInOutCubic(t);
    camera.position.lerpVectors(tw.p0, tw.p1, k);
    const look = new THREE.Vector3().lerpVectors(tw.t0, tw.t1, k);
    if (controls) controls.target.copy(look);
    camera.fov = THREE.MathUtils.lerp(tw.f0, tw.f1, k);
    camera.updateProjectionMatrix();
    camera.lookAt(look);
    if (t >= 1 && !arrived.current) {
      arrived.current = true;
      tween.current = null;
      onArrive();
    }
  });

  return null;
}
