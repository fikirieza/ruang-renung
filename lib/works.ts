// Data case study untuk halaman Works.
// Gambar disimpan di public/works/<slug>/. Nama file harus sama persis dengan yang ditulis di sini.
// w dan h adalah ukuran asli gambar dalam piksel, dipakai next/image untuk mengecilkan otomatis.

export type WorkImage = {
  src: string;
  alt: string;
  w: number;
  h: number;
  /** gambar sangat tinggi: tampilkan potongan atas saja, plus tombol lihat penuh */
  tall?: boolean;
  /** layar HP: ditampilkan lebih sempit */
  phone?: boolean;
};

export type WorkSection = {
  heading: string;
  /** satu string = satu paragraf */
  body?: string[];
  /** daftar poin, ditampilkan sebagai list */
  points?: string[];
  images?: WorkImage[];
};

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  /** jenis karya, tampil sebagai badge */
  jenis: string[];
  peran: string;
  konteks: string;
  tahun?: string;
  stack?: string[];
  status: string;
  cover: WorkImage;
  ringkasan: string;
  /** angka singkat di bawah judul, misalnya jumlah layar */
  angka?: { nilai: string; label: string }[];
  sections: WorkSection[];
  /** Tulis sendiri dengan bahasamu. Bagian ini sengaja kosong sampai kamu isi. */
  pelajaran?: string[];
};

const ADL = "/works/add-logistics";
const LCA = "/works/lca-redesign";

export const works: Work[] = [
  {
    slug: "add-logistics",
    title: "ADD Logistics",
    subtitle: "Surat jalan digital dan pelacakan pengiriman",
    jenis: ["UI/UX", "Frontend", "Full-stack"],
    peran: "Desain dan pengembangan, dikerjakan sendiri",
    konteks: "Proyek kerja praktik di PT. Anugerah Dwijaya Logistics, tempat aku bekerja sebagai freelancer sejak 2019",
    stack: ["Figma", "Laravel 13", "Inertia", "React 19", "Tailwind CSS v4", "Leaflet", "PWA"],
    status: "Sudah diserahkan ke perusahaan. Keputusan pemakaiannya ada di direksi dan tim IT mereka.",
    cover: { src: `${ADL}/cover.png`, alt: "Dashboard admin di desktop serta aplikasi admin dan driver di HP", w: 3200, h: 2000 },
    ringkasan:
      "Aplikasi web mobile-first yang menggantikan surat jalan Excel cetak, dan memberi client halaman lacak sendiri supaya tidak perlu menelepon kantor.",
    angka: [
      { nilai: "3", label: "peran pengguna" },
      { nilai: "25", label: "layar di Figma" },
      { nilai: "38", label: "ikon custom" },
    ],
    sections: [
      {
        heading: "Masalah",
        body: [
          "Surat jalan dibuat di Excel lalu dicetak. Setelah barang berangkat, kantor tidak punya cara cepat untuk tahu posisi pengiriman.",
          "Akibatnya client sering menelepon untuk menanyakan sudah sampai mana barangnya, dan admin harus menghubungi driver satu per satu untuk menjawab.",
        ],
      },
      {
        heading: "Tiga pengguna, tiga kebutuhan",
        points: [
          "Admin: menerbitkan surat jalan, mengatur driver, dan memantau pengiriman yang sedang berjalan, baik di desktop maupun di HP.",
          "Driver: tahu tugas hari ini, mencatat checkpoint di jalan, dan mengirim bukti terima tanpa kertas. Aplikasinya khusus HP.",
          "Client: melihat posisi pengiriman sendiri, kapan saja, tanpa perlu login.",
        ],
        images: [{ src: `${ADL}/admin-dashboard.png`, alt: "Dashboard admin dengan sidebar terbuka", w: 2880, h: 1800 }],
      },
      {
        heading: "Alur pengiriman",
        body: [
          "Surat jalan dibuat sebagai draft, lalu diterbitkan. Driver menandai tiap tahap: barang diambil, mulai perjalanan, dan tiba. Lokasi dicatat dengan GPS di setiap checkpoint.",
          "Pengiriman ditutup dengan bukti terima berupa 1 sampai 4 foto, nama dan hubungan penerima, serta tanda tangan digital. Kalau ada kendala, driver bisa melaporkan gagal kirim dari aplikasi.",
        ],
        images: [
          { src: `${ADL}/driver-tugas.png`, alt: "Detail pengiriman di aplikasi driver dengan stepper status", w: 780, h: 1688, phone: true },
          { src: `${ADL}/driver-bukti.png`, alt: "Form bukti pengiriman dengan foto barang, penerima, dan tanda tangan", w: 780, h: 1688, phone: true },
        ],
      },
      {
        heading: "Keputusan desain",
        points: [
          "Nomor surat jalan urut per bulan untuk kebutuhan internal, tapi kode lacak client dibuat acak supaya tidak bisa ditebak orang lain.",
          "Halaman lacak publik sengaja tidak menampilkan nama dan nomor HP driver, plat nomor, maupun koordinat persis.",
          "Surat jalan yang sudah terbit tidak bisa diedit. Masih bisa ditarik ke draft selama barang belum diambil.",
          "Driver yang dihapus hanya dinonaktifkan, sehingga riwayat surat jalannya tetap utuh.",
          "Lokasi live dikirim tiap 60 detik hanya saat halaman tugas terbuka, karena PWA tidak bisa melacak di latar belakang.",
        ],
        images: [{ src: `${ADL}/lacak.png`, alt: "Halaman hasil lacak pengiriman untuk client", w: 2880, h: 1800 }],
      },
      {
        heading: "Design system",
        body: [
          "Semua layar dibangun dari satu design system di Figma: warna brand biru, hijau, dan oranye dengan pasangan warna status (sukses, info, peringatan, bahaya), spasi kelipatan 4, serta komponen tombol, badge status, input, kartu pengiriman, sidebar, dan bottom nav.",
          "Plus Jakarta Sans dipakai untuk seluruh antarmuka, sedangkan JetBrains Mono khusus untuk nomor surat jalan dan kode lacak supaya mudah dibaca dan dibandingkan.",
          "Token yang sama dipindahkan ke Tailwind CSS v4 di aplikasinya, jadi desain dan kode memakai nama warna yang sama.",
        ],
      },
      {
        heading: "Hasil",
        body: [
          "Aplikasi lengkap untuk tiga peran: dashboard admin di desktop dan HP, PDF surat jalan dengan QR lacak, aplikasi driver yang bisa dipasang di layar utama HP, dan halaman lacak publik.",
        ],
      },
    ],
    pelajaran: [],
  },
  {
    slug: "lca-redesign",
    title: "Lembaga Cerdas Al-Qur'an",
    subtitle: "Konsep redesign website company profile",
    jenis: ["UI/UX", "Redesign"],
    peran: "Riset dan desain, inisiatif pribadi",
    konteks: "Proyek mandiri untuk website gencarlca.id, tidak dipesan oleh lembaga",
    stack: ["Figma"],
    status: "Konsep desain. Belum diimplementasikan, dan website lamanya sudah tidak aktif.",
    cover: { src: `${LCA}/cover.png`, alt: "Hero beranda hasil redesign dengan bidang zamrud dan strip angka kuning", w: 2880, h: 1800 },
    ringkasan:
      "Merancang ulang website lembaga syiar yang mengajak masyarakat lebih dekat dengan Al-Qur'an, supaya tampilannya mengundang dan informasinya mudah ditemukan.",
    angka: [
      { nilai: "20", label: "layar desktop dan mobile" },
      { nilai: "15", label: "komponen" },
      { nilai: "3", label: "font: judul, isi, Arab" },
    ],
    sections: [
      {
        heading: "Konteks",
        body: [
          "Lembaga Cerdas Al-Qur'an bergerak di penyebaran syiar Islam dengan mengajak masyarakat memperhatikan Al-Qur'an, lewat sensus, pendidikan baca, dan wakaf Al-Qur'an. Website menjadi salah satu pintu pertama orang mengenal lembaga ini.",
        ],
      },
      {
        heading: "Masalah di website lama",
        points: [
          "Tampilannya kurang menarik, sehingga tidak mencerminkan semangat lembaga.",
          "Kuning khas LCA dipakai sebagai warna teks di atas putih. Kontrasnya hanya 1.2:1, jadi nyaris tidak terbaca.",
          "Beberapa bagian terasa janggal. Contohnya peta lokasi yang memenuhi satu layar penuh dan memotong alur membaca.",
        ],
      },
      {
        heading: "Identitas yang dipertahankan, cara pakai yang diperbaiki",
        body: [
          "Kuning #FEEF00 dan hitam #0E0E0E tetap jadi warna utama karena berasal dari logo dan web lama. Bedanya, kuning sekarang dipakai sebagai bidang (tombol, strip angka, badge) dengan teks hitam, kontrasnya 16:1.",
          "Hijau zamrud ditambahkan sebagai warna pendamping untuk menggantikan bidang hitam besar di hero, header halaman, dan menu mobile. Logo, lambang bulan sabit, dan ikon departemen digambar ulang sebagai vektor tanpa mengubah bentuknya.",
          "Oswald dipilih untuk judul karena meneruskan karakter huruf logo, Open Sans dipertahankan untuk teks isi, dan Amiri dipakai khusus untuk ayat dan doa berbahasa Arab.",
        ],
        images: [{ src: `${LCA}/home.png`, alt: "Halaman beranda redesign dari atas sampai bawah", w: 2880, h: 11312, tall: true }],
      },
      {
        heading: "Navigasi yang lebih ringkas",
        points: [
          "Navbar dipangkas jadi Beranda, Tentang Kami, dan Portal, ditambah tombol Gabung Relawan dan Donasi Sekarang. Tombol kuning hanya satu per layar.",
          "Profil, Wilayah, dan Galeri dikumpulkan di dropdown Tentang Kami, masing-masing dengan deskripsi singkat.",
          "Profil memakai switch tiga bagian (Legalitas, Visi dan Misi, Departemen) sehingga konten berganti tanpa pindah halaman.",
          "Portal web internal dibuka di tab baru, berisi tujuh kartu dengan keterangan siapa penggunanya.",
        ],
        images: [{ src: `${LCA}/profil.png`, alt: "Halaman profil bagian legalitas dengan switch tiga bagian", w: 2880, h: 2670, tall: true }],
      },
      {
        heading: "Peta yang muncul saat dibutuhkan",
        body: [
          "Ini jawaban untuk masalah peta satu layar penuh. Di halaman Wilayah, daftar cabang tampil di kiri dan bisa dicari, sementara peta di kanan awalnya kosong dengan petunjuk untuk memilih cabang.",
          "Setelah cabang dipilih, kartunya ditandai, peta zoom ke satu titik, lalu muncul info alamat beserta tombol Petunjuk arah dan WhatsApp. Di HP urutannya dibalik: peta di atas, daftar cabang di bawah.",
        ],
        images: [{ src: `${LCA}/wilayah.png`, alt: "Halaman wilayah dengan cabang terpilih dan peta yang zoom ke lokasi", w: 2880, h: 3030, tall: true }],
      },
      {
        heading: "Ajakan yang jelas",
        points: [
          "Beranda dibuka dengan satu kalimat misi dan dua tombol, lalu alur GENCAR tiga langkah, strip angka capaian, dan laporan bulanan.",
          "Halaman Donasi menjelaskan alur empat langkah, transparansi dana, dan cek riwayat donasi. Di HP ada tab QRIS dan Transfer serta bar konfirmasi yang menempel di bawah layar.",
          "Galeri dirapikan dengan tag kategori, judul, lokasi, dan tanggal di tiap foto.",
          "Gabung Relawan cukup satu layar: pilih peran, isi form, lalu lihat langkah setelah mendaftar.",
        ],
        images: [
          { src: `${LCA}/donasi.png`, alt: "Halaman donasi dengan alur empat langkah dan transparansi", w: 2880, h: 4106, tall: true },
          { src: `${LCA}/galeri.png`, alt: "Halaman galeri dengan filter tag kategori", w: 2880, h: 4340, tall: true },
        ],
      },
    ],
    pelajaran: [],
  },
];

export const workBySlug = Object.fromEntries(works.map((w) => [w.slug, w])) as Record<string, Work>;
