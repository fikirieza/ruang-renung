// Salinan dari kamar_pixel_aset_3d/kamar_lengkap/susunan_kamar.json
// Posisi dalam meter, sumbu Y ke atas, depan barang menghadap +Z, rot dalam derajat.

export type Vec3 = [number, number, number];

export const kameraAwal = {
  eye: [0.8, 4.9, 6.4] as Vec3,
  target: [-0.1, 0.85, -0.4] as Vec3,
  fov: 36,
};

export const barang: { name: string; pos: Vec3; rot?: number }[] = [
  { name: "01_ruangan_lantai_dinding", pos: [0, 0, 0] },
  { name: "02_jendela_kaca_tinggi", pos: [-3.0, 0.6, -0.6] },
  { name: "03_gorden", pos: [-2.85, 0.3, -0.6] },
  { name: "10_papan_tulis_sticky_note", pos: [-1.95, 1.15, -1.39] },
  { name: "04_meja_kerja", pos: [-2.1, 0.15, -1.08] },
  { name: "05_laptop", pos: [-2.45, 0.83, -1.15] },
  { name: "06_lampu_belajar", pos: [-2.85, 0.83, -1.25] },
  { name: "07_buku_terbuka_dan_pulpen", pos: [-1.65, 0.83, -1.0] },
  { name: "08_kursi_kerja_lumbar", pos: [-1.75, 0.15, -0.55], rot: 180 },
  { name: "09_cermin_berdiri", pos: [-0.95, 0.15, -1.3] },
  { name: "11_rak_buku_isi_lengkap", pos: [0.35, 0.15, -1.23] },
  { name: "14_lemari_pakaian_2_pintu", pos: [2.1, 0.15, -1.08] },
  { name: "13_kasur_dipan_kayu", pos: [-1.85, 0.15, 0.75] },
];
