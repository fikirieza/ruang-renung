import type { Vec3 } from "./susunan";

export type Musim = "semi" | "daun" | "panas" | "gugur" | "dingin";

export type SectionKey = "works" | "projects" | "writing" | "about" | "cermin";

export type Section = {
  key: SectionKey;
  label: string;
  tab: string;
  href: string;
  /** ramp warna tombol, lihat .kp-<musim> di globals.css */
  musim: Musim;
  /** kelas aksen untuk tab dan badge */
  accent: string;
  /** warna label hover di kanvas */
  hex: string;
  /** barang di kamar yang membuka section ini */
  items: string[];
  /** pose kamera relatif ke barang fokus */
  focus: { obj: string; eye: Vec3; look: Vec3 };
  title: string;
  intro: string;
};

export const sections: Section[] = [
  {
    key: "works", label: "Works", tab: "Works · Semi", href: "/works", musim: "semi", accent: "is-works", hex: "#ff8ee1",
    items: ["04_meja_kerja", "05_laptop", "06_lampu_belajar", "07_buku_terbuka_dan_pulpen", "08_kursi_kerja_lumbar"],
    focus: { obj: "05_laptop", eye: [0, 0.38, 0.62], look: [0, 0.3, -0.05] },
    title: "Karya", intro: "Etalase karya desain dan aplikasi, tiap karya dengan cerita prosesnya.",
  },
  {
    key: "projects", label: "Projects", tab: "Projects · Panas", href: "/projects", musim: "panas", accent: "is-projects", hex: "#fcd000",
    items: ["10_papan_tulis_sticky_note"],
    focus: { obj: "10_papan_tulis_sticky_note", eye: [0, 0.5, 1.45], look: [0, 0.5, 0] },
    title: "Lagi dikerjakan", intro: "Rencana dan project yang sedang berjalan, seperti papan tugas di game.",
  },
  {
    key: "writing", label: "Writing", tab: "Writing · Gugur", href: "/writing", musim: "gugur", accent: "is-writing", hex: "#ff820c",
    items: ["11_rak_buku_isi_lengkap"],
    focus: { obj: "11_rak_buku_isi_lengkap", eye: [0, 1.3, 2.25], look: [0, 1.25, 0] },
    title: "Tulisan", intro: "Artikel belajar, review buku, review parfum, dan hal-hal yang aku suka.",
  },
  {
    key: "about", label: "About", tab: "About · Dingin", href: "/about", musim: "dingin", accent: "is-about", hex: "#a9f0ff",
    items: ["14_lemari_pakaian_2_pintu"],
    focus: { obj: "14_lemari_pakaian_2_pintu", eye: [0, 1.0, 2.0], look: [0, 0.95, 0] },
    title: "Tentang aku", intro: "Kenalan sama pemilik kamar ini: cerita, skill, dan cara menghubungi.",
  },
  {
    key: "cermin", label: "Cermin", tab: "Cermin · Fase 2", href: "/cermin", musim: "daun", accent: "is-cermin", hex: "#57a114",
    items: ["09_cermin_berdiri"],
    focus: { obj: "09_cermin_berdiri", eye: [0, 1.0, 1.55], look: [0, 0.95, 0] },
    title: "Cermin piksel", intro: "Unggah foto, lalu cermin mengubahnya jadi pixel art dengan palet Ruang Renung.",
  },
];

export const sectionByKey = Object.fromEntries(sections.map((s) => [s.key, s])) as Record<SectionKey, Section>;

export const ownerOf: Record<string, SectionKey> = Object.fromEntries(
  sections.flatMap((s) => s.items.map((i) => [i, s.key]))
);
