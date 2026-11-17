# LCA (Lembaga Cerdas Al-Qur'an) — catatan redesign dari file Figma

Sumber: Figma "Design Plan LCA Company Profile" (2oQSLnku43BXqrFlm3G9zs). Isi catatan ini diambil langsung dari file tersebut: nama frame, frame "Catatan — …" di samping tiap layar, dan halaman Foundations.

## Gambar di folder ini

| File | Frame sumber | Ukuran |
|---|---|---|
| cover.png | Bagian atas "Beranda — Desktop" (navbar, hero, strip angka), dipotong 1440×900 (16:10) | 2880×1800 |
| home.png | Beranda — Desktop (satu halaman penuh) | 2880×11312 |
| donasi.png | Donasi — Desktop | 2880×4106 |
| galeri.png | Galeri — Desktop | 2880×4340 |
| profil.png | Profil (Legalitas) — Desktop | 2880×2670 |
| wilayah.png | Wilayah (cabang dipilih) — Desktop | 2880×3030 |

Semua di-export PNG skala 2x.

**Tidak ada website-lama.png.** Di file ini tidak ada screenshot website lama: tidak ada satu pun layer dengan fill gambar. Website lama hanya disebut di teks catatan (lihat bagian perubahan di bawah).

Di hero, area foto masih placeholder bertuliskan "📷 Foto santri belajar mengaji (dari galeri LCA)".

## Halaman dan frame

### 📘 Cover & Redesign
- Cover (1920×1080): "Lembaga Cerdas Al-Qur'an", design system v1.0, Nov 2026, untuk redesign website gencarlca.id
- Label baris "REDESIGN — DESKTOP" dan "REDESIGN — MOBILE"
- Desktop (1440 lebar), 11 layar:
  Beranda, Navbar — dropdown Tentang Kami, Profil (Legalitas), Profil (Visi Misi), Profil (Departemen),
  Wilayah (awal), Wilayah (cabang dipilih), Galeri, Portal (tab baru), Donasi, Gabung Relawan
- Mobile (375 lebar), 9 layar:
  Beranda, Menu terbuka, Profil (Legalitas), Wilayah (awal), Wilayah (cabang dipilih), Galeri,
  Portal (tab baru), Donasi, Gabung Relawan
- Frame "Catatan — …" untuk tiap layar di atas

### 🎨 Foundations
- Foundations: Brand, Warna, Tipografi, Spacing & Radius

### 🧩 Components
- Components: Button, Tag & Input, Ikon & Kartu, Konten, Navigasi
  (Cover menyebut "15 komponen + 3 lambang")

## Palet warna (variable collection "Primitives" dan "Semantic")

Menurut file, kuning #FEEF00 dan hitam #0E0E0E adalah warna asli LCA, diambil dari logo dan skin web lama. Kuning dipakai sebagai **bidang** (tombol, strip, badge) dengan teks hitam, bukan sebagai warna teks di atas putih.

| Warna | Hex | Peran |
|---|---|---|
| Kuning LCA 400 ★ | #FEEF00 | bg/brand, action/primary |
| Kuning 600 | #E0CC00 | action/primary-hover |
| Kuning 50 | #FFFCE0 | bg/brand-subtle |
| Hitam LCA 950 ★ | #0E0E0E | text/primary, bg/inverse (footer), action/secondary |
| Hitam 700 | #4A4740 | text/secondary |
| Hitam 50 | #FAF9F5 | bg/page |
| Zamrud 800 ★ | #0B5D4B | bg/hero, text/link, text/accent |
| Zamrud 50 | #E7F3EF | bg/tint |
| Putih | #FFFFFF | bg/surface |
| Sukses | #1F7A4D (bg #E8F5EE) | hanya untuk feedback form |
| Error | #B3261E (bg #FCEDEC) | hanya untuk feedback form |

- Skala lengkap tersedia: kuning 50–800, hitam (netral hangat) 50–950, zamrud 50–900.
- Zamrud adalah warna pendamping baru. Ia menggantikan bidang hitam besar (hero, header halaman, menu mobile). Kuning tetap aksen, hitam tetap untuk teks dan footer.
- Aturan kontras yang tertulis di file:
  - ✓ Hitam di atas kuning 16:1
  - ✓ Kuning di atas hitam 16:1
  - ✓ Kuning di atas zamrud 6.7:1 (putih 8:1)
  - ✓ Link zamrud 800 di atas putih 8:1
  - ✗ Kuning 400 di atas putih 1.2:1, ditandai sebagai "kesalahan web lama"
- Dimensi: space 4–96, radius sm 4, md 8, lg 16, xl 24, full (pill).

## Font

- **Oswald** (Medium, SemiBold, Bold): judul dan angka. Menurut file, dipilih untuk meneruskan karakter huruf logo LCA.
- **Open Sans** (Regular, SemiBold, Bold): teks isi. Menurut file, dipertahankan dari web lama.
- **Amiri** (Regular, Bold): ayat dan doa berbahasa Arab.

Text style:
- Display/XL 64 dan Display/L 48 (Oswald Bold)
- H1 40 dan H2 32 (Oswald SemiBold), H3 24 (Oswald Medium), H4 20 (Open Sans Bold)
- Body L 18, M 16, S 14 (Open Sans Regular), Label M dan S (Open Sans SemiBold)
- Overline (Oswald Medium 14), Caption (Open Sans 12), Stat/Number (Oswald Bold 48)
- Arabic/Ayat 32 dan Arabic/Inline 20 (Amiri)

## Perubahan utama dibanding website lama

Hanya yang tertulis di file. File ini tidak menampilkan website lama secara visual, jadi untuk struktur menu dan peta yang tercatat hanya versi barunya.

**Identitas visual**
- Logo, lambang bulan sabit, dan ikon departemen digambar ulang sebagai vektor dari aset lama. Bentuk, warna, dan susunannya dipertahankan, hanya dibuat tajam dan konsisten.
- Ikon departemen: nama departemen dipindah ke judul kartu supaya ikon tetap terbaca di ukuran kecil. Koperasi tetap memakai sub-brand Mitra Berkah.
- Kuning tidak lagi dipakai sebagai teks di atas putih (kesalahan web lama, kontras 1.2:1).
- Bidang hitam besar diganti zamrud.
- Tombol berbentuk pill meneruskan tombol DONASI lama yang membulat. Tombol primary kuning hanya satu per layar.

**Struktur menu**
- Navbar baru: Beranda · Tentang Kami ▾ · Portal ↗, ditambah tombol Gabung Relawan dan Donasi Sekarang.
- Dropdown Tentang Kami berisi Profil, Wilayah, Galeri, masing-masing dengan deskripsi singkat. Muncul saat hover (desktop) atau tap (mobile); item aktif berwarna kuning lembut.
- Menu mobile: Beranda · Tentang Kami (Profil, Wilayah, Galeri) · Portal ↗, dengan Donasi Sekarang dan Gabung Relawan di bawah.
- Portal dibuka di tab baru. Isinya 7 kartu web internal (Pusat, Cipatat, Katapang, Operasional, Koperasi, Relawan, Pemberitaan), tiap kartu menyebut penggunanya dan punya tombol Masuk. Di mobile jadi daftar baris dengan tombol Tutup.

**Hierarki konten**
- Beranda:
  - Hero berisi satu kalimat misi dan 2 CTA, lalu alur GENCAR 3 langkah.
  - Capaian digabung ke Beranda: strip angka dan laporan bulanan A/B/C.
  - Ringkasan departemen, donasi, galeri ber-tag, dan ajakan relawan.
- Beranda mobile: laporan bulan ini jadi 3 kartu yang bisa digeser (tinggi sama, ada "Selengkapnya"), galeri ringkas ber-tag, dan link "Cek riwayat donasi".
- Profil memakai switch 3 bagian (Legalitas · Visi & Misi · Departemen). Konten berganti tanpa pindah halaman.
  - Legalitas: dokumen bisa dibuka (PDF).
  - Visi & Misi: motto besar di pita kuning.
  - Departemen: 8 departemen dengan ikon vektor.
- Galeri: foto dirapikan dengan tag kategori (filter dan label di tiap kartu). Tiap foto punya tag, judul, lokasi, dan tanggal. Di mobile tag bisa digeser dan foto tampil 1 kolom.
- Donasi: tujuan tombol "Donasi Sekarang". Isinya alur 4 langkah, transparansi, dan cek riwayat. Di mobile ada ringkasan laporan di atas, tab QRIS/Transfer, dan bar konfirmasi sticky.
- Gabung Relawan: pilih peran, form 1 layar, dan alur setelah daftar. Di mobile peran dipilih lewat kartu ikon 2×2 (boleh lebih dari satu), dengan tombol Kirim sticky.

**Cara menampilkan peta (halaman Wilayah)**
- Awal: daftar cabang di kiri (bisa dicari), peta kosong tanpa titik di kanan, dengan petunjuk "Pilih cabang".
- Cabang dipilih: menurut teks catatan, kartu cabang jadi hitam. Di layar desktop yang di-export (wilayah.png), kartu terpilih tampil zamrud dengan label "Ditampilkan". Peta zoom ke lokasi dengan 1 pin, lalu muncul popup info berisi alamat, Petunjuk arah, dan WhatsApp.
- Mobile: peta di atas, daftar cabang di bawah. Kartu yang dipilih menampilkan tombol Petunjuk arah dan WhatsApp.
