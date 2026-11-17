// Daftar artikel. Isi artikelnya ada di content/writing/<slug>.mdx.
// Untuk menambah artikel: buat file .mdx baru, lalu tambahkan datanya di sini.

export type Kategori = "belajar" | "review-buku" | "review-parfum";

export const kategoriLabel: Record<Kategori, string> = {
  belajar: "Belajar",
  "review-buku": "Review buku",
  "review-parfum": "Review parfum",
};

export type Artikel = {
  slug: string;
  judul: string;
  ringkasan: string;
  kategori: Kategori;
  /** format YYYY-MM-DD */
  tanggal: string;
  menitBaca: number;
  /** link video Instagram untuk review, opsional */
  video?: string;
};

export const artikel: Artikel[] = [
  {
    slug: "membangun-ruang-renung",
    judul: "Membangun Ruang Renung: kamar pixel, warna yang salah, dan AI sebagai rekan kerja",
    ringkasan:
      "Catatan proses membuat website portofolio ini, dari ide kamar game PS1 sampai online di Vercel, termasuk kesalahan yang paling banyak mengajariku.",
    kategori: "belajar",
    tanggal: "2026-11-17",
    menitBaca: 6,
  },
];

export const artikelBySlug = Object.fromEntries(artikel.map((a) => [a.slug, a])) as Record<string, Artikel>;

export function formatTanggal(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}
