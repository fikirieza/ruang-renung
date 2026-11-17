import * as THREE from "three";
import data from "@/data/kamar_data.json";

type KamarData = { unit: number; palette: number[][]; objects: Record<string, string> };
const D = data as KamarData;

// Warna tiap sisi dikali angka ini supaya bentuk voxel terbaca tanpa lampu.
// Urutan: -X, +X, -Y (bawah), +Y (atas), -Z (belakang), +Z (depan)
const SHADE = [0.78, 0.66, 0.6, 1.0, 0.72, 0.9];

function decode(b64: string): Int16Array {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Int16Array(bytes.buffer);
}

/**
 * Tiap persegi disimpan sebagai 7 angka:
 * [sumbu*2 + arah, bidang, u0, v0, u1, v1, indeks warna], satuan 3.75 cm.
 */
export function buildVoxelGeometry(name: string): THREE.BufferGeometry {
  const q = decode(D.objects[name]);
  const n = q.length / 7;
  const U = D.unit;
  const pos = new Float32Array(n * 12);
  const col = new Float32Array(n * 12);
  const idx = new Uint32Array(n * 6);
  for (let i = 0; i < n; i++) {
    const o = i * 7;
    const axs = q[o], plane = q[o + 1], u0 = q[o + 2], v0 = q[o + 3], u1 = q[o + 4], v1 = q[o + 5], ci = q[o + 6];
    const ax = axs >> 1;
    const other = [0, 1, 2].filter((a) => a !== ax);
    const c = D.palette[ci];
    const s = SHADE[axs];
    const corners = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
    corners.forEach(([u, v], k) => {
      const p = [0, 0, 0];
      p[ax] = plane * U;
      p[other[0]] = u * U;
      p[other[1]] = v * U;
      pos.set(p, i * 12 + k * 3);
      col.set([c[0] * s, c[1] * s, c[2] * s], i * 12 + k * 3);
    });
    idx.set([i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3], i * 6);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeBoundingBox();
  return g;
}
