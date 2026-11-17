"use client";

import { useEffect, useMemo } from "react";
import * as THREE from "three";
import type { ThreeEvent } from "@react-three/fiber";
import { barang } from "@/lib/susunan";
import { ownerOf, sections, type SectionKey } from "@/lib/sections";
import { buildVoxelGeometry } from "@/lib/voxel";

const DAY = new THREE.Color(1, 1, 1);
const NIGHT = new THREE.Color(0.42, 0.48, 0.78);
const HOVER_BOOST = 1.28;

type Props = {
  night: boolean;
  hovered: SectionKey | null;
  interactive: boolean;
  onHover: (key: SectionKey | null, e?: ThreeEvent<PointerEvent>) => void;
  onSelect: (key: SectionKey) => void;
};

/** Matriks dunia tiap barang, dipakai juga untuk pose kamera. */
export function matrixOf(name: string) {
  const item = barang.find((b) => b.name === name);
  const m = new THREE.Matrix4();
  if (!item) return m;
  return m.compose(
    new THREE.Vector3(...item.pos),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0, THREE.MathUtils.degToRad(item.rot ?? 0), 0)),
    new THREE.Vector3(1, 1, 1)
  );
}

export function Kamar({ night, hovered, interactive, onHover, onSelect }: Props) {
  const geometries = useMemo(() => Object.fromEntries(barang.map((b) => [b.name, buildVoxelGeometry(b.name)])), []);

  // Satu material bersama untuk barang biasa, satu per section supaya bisa disorot terpisah.
  const materials = useMemo(() => {
    const base = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    const perSection = Object.fromEntries(sections.map((s) => [s.key, base.clone()])) as Record<SectionKey, THREE.MeshBasicMaterial>;
    return { base, perSection };
  }, []);

  useEffect(() => {
    const tint = night ? NIGHT : DAY;
    materials.base.color.copy(tint);
    for (const [key, mat] of Object.entries(materials.perSection)) {
      mat.color.copy(tint);
      if (key === hovered && interactive) mat.color.multiplyScalar(HOVER_BOOST);
    }
  }, [night, hovered, interactive, materials]);

  // Kotak deteksi tak terlihat, 6 cm lebih besar dari barangnya.
  const hitboxes = useMemo(() => {
    return sections.map((s) => {
      const box = new THREE.Box3();
      for (const name of s.items) {
        const g = geometries[name];
        if (g?.boundingBox) box.union(g.boundingBox.clone().applyMatrix4(matrixOf(name)));
      }
      box.expandByScalar(0.06);
      return { key: s.key, size: box.getSize(new THREE.Vector3()), center: box.getCenter(new THREE.Vector3()) };
    });
  }, [geometries]);

  return (
    <group>
      {barang.map((b) => {
        const owner = ownerOf[b.name];
        return (
          <mesh
            key={b.name}
            geometry={geometries[b.name]}
            material={owner ? materials.perSection[owner] : materials.base}
            position={b.pos}
            rotation={[0, THREE.MathUtils.degToRad(b.rot ?? 0), 0]}
          />
        );
      })}

      {interactive &&
        hitboxes.map((h) => (
          <mesh
            key={h.key}
            position={h.center}
            onPointerOver={(e) => { e.stopPropagation(); onHover(h.key, e); }}
            onPointerMove={(e) => { e.stopPropagation(); onHover(h.key, e); }}
            onPointerOut={() => onHover(null)}
            onClick={(e) => {
              // Geser lebih dari 6 px berarti sedang memutar kamera, bukan klik.
              if (e.delta > 6) return;
              e.stopPropagation();
              onSelect(h.key);
            }}
          >
            <boxGeometry args={[h.size.x, h.size.y, h.size.z]} />
            <meshBasicMaterial transparent opacity={0} depthWrite={false} />
          </mesh>
        ))}
    </group>
  );
}
