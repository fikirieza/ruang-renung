// Isi halaman About. Ubah teks di sini tanpa menyentuh tampilan.

export const profil = {
  nama: "Fiki Rieza Muzhaffar",
  peran: "UI/UX Designer · Frontend Developer",
  inisial: "FR",
  email: "riezhaffar@gmail.com",
  cv: "/cv.pdf",
};

export const perkenalan: string[] = [
  "Awalnya aku cuma ingin memindahkan ide visual yang ada di kepala ke sesuatu yang bisa dilihat orang. Mulai dari coretan di buku, lalu pindah ke Figma.",
  "Dari situ aku belajar dasar desain: empati ke pengguna, hukum-hukum desain seperti Fitts's Law, sampai sisi teknisnya. Makin lama aku sadar yang bikin betah adalah prosesnya. Di desain dan frontend, setiap iterasi dan perbaikan langsung kelihatan hasilnya.",
  "Sekarang aku menggabungkan desain, kode, dan AI dalam satu alur kerja, supaya ide bisa sampai ke tangan pengguna lebih cepat tanpa mengorbankan keputusan desainnya.",
];

export type SkillGroup = { judul: string; catatan?: string; item: string[] };

export const skill: SkillGroup[] = [
  {
    judul: "Desain UI/UX",
    item: ["Design system di Figma", "Wireframe sampai hi-fi", "Prototyping", "User flow", "Information architecture", "Aksesibilitas dan kontras", "Redesign dan audit UI"],
  },
  {
    judul: "Frontend",
    item: ["HTML, CSS, JavaScript", "Tailwind CSS", "React", "Laravel dan PHP", "Next.js", "Three.js dan React Three Fiber"],
    catatan: "Next.js dan 3D di web sedang aktif aku pelajari lewat website ini.",
  },
  {
    judul: "Alur kerja dengan AI",
    item: ["Claude Code untuk membangun dan merapikan kode", "Figma MCP: dari desain ke kode dan sebaliknya", "Aset 3D voxel untuk web"],
  },
];

export const tools: string[] = ["Figma", "Claude Code", "React", "Tailwind CSS", "Laravel", "Lightroom", "Premiere Pro", "CapCut"];

export type Langkah = { waktu: string; judul: string; tempat: string; isi: string };

// Hanya yang sudah pasti. Tambahkan pengalaman lain di sini setelah dicek ulang dengan CV.
export const perjalanan: Langkah[] = [
  {
    waktu: "2018 – 2019",
    judul: "UI Designer & Web Developer",
    tempat: "PT. Gunung Amal Solution",
    isi: "Merancang ulang dan mengembangkan website internal perusahaan bersama tim.",
  },
  {
    waktu: "Pendidikan",
    judul: "Teknik Informatika",
    tempat: "Universitas Teknologi Bandung",
    isi: "Ditambah UI/UX Design Bootcamp dari BuildWithAngga dan sertifikasi Junior Web Developer dari BPPTIK.",
  },
];

export const luarLayar =
  "Di luar layar, aku suka memotret dan menyunting foto, juga mengedit video. Kebiasaan itu yang nanti mengisi review buku dan parfum di Writing, lengkap dengan videonya di Instagram.";

export const kontak = [
  { label: "Email", href: "mailto:riezhaffar@gmail.com", teks: "riezhaffar@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fikirieza", teks: "in/fikirieza" },
  { label: "GitHub", href: "https://github.com/fikirieza", teks: "fikirieza" },
  { label: "Dribbble", href: "https://dribbble.com/fikirieza", teks: "fikirieza" },
  { label: "Behance", href: "https://www.behance.net/fikirieza", teks: "fikirieza" },
  { label: "Instagram", href: "https://www.instagram.com/fikirieza", teks: "@fikirieza" },
];
