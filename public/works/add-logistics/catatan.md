# ADD Logistics — catatan dari file Figma

Sumber: Figma "Design Plan ADD Logistics" (z7tFCfymrz41OPttWE5oFo). Isi catatan ini diambil langsung dari file tersebut.

## Gambar di folder ini

| File | Frame sumber | Ukuran |
|---|---|---|
| cover.png | Dribbble 01 · Platform Overview (1600×1200), dipotong ke 1600×1000 (16:10) tanpa memotong isi | 3200×2000 |
| admin-dashboard.png | W02 · Dashboard — Sidebar Terbuka | 2880×1800 |
| driver-tugas.png | D03 · Detail Pengiriman (stepper "Status Pengiriman") | 780×1688 |
| lacak.png | CW02 · Hasil Lacak (Web) | 2880×1800 |
| driver-bukti.png | D04 · Bukti Pengiriman (foto barang, penerima, tanda tangan) | 780×1688 |

Semua di-export PNG skala 2x.

## Halaman dan frame

### Foundations
- Foundations — ADD Logistics DS (1440×3519)
- Section "Logo — ADD Logistics": Konsep 1 — Forward A, Konsep 2 — Route D, Konsep 3 — Swift Box
- Section "🎨 Showcase — Dribbble & Behance" (1600×1200 tiap frame):
  Dribbble 01 · Platform Overview, Dribbble 02 · Driver App, Dribbble 03 · Client Tracking,
  Dribbble 04 · Design System, Dribbble 05 · Brand Identity
- Section "📘 Behance — Case Study (upload berurutan)" (1920×1080 tiap frame):
  01 Cover, 02 Overview, 03 Brand Identity, 04 Design System, 05 Admin Dashboard Web,
  06 Admin Mobile PWA, 07 Driver App, 08 Client Tracking, 09 Prototype & Thanks

### Components
- Komponen — ADD Logistics DS: Button, Status Badge, Input, Shipment Card
- Ikon — ADD Logistics DS: 38 ikon (Icon/grid, users, file-text, truck, package, map-pin, camera, pen, check-circle, dan lain-lain)
- Sidebar, Bottom Nav, Driver Bottom Nav
- Logo — ADD Logistics: Logo/Mark, Logo/Mark Dark, Logo/Lockup, Logo/Lockup Dark

### Layar Aplikasi — Admin & Driver
- 📱 Mobile — PWA (390 × 844) · Bottom Nav:
  M01 Login, M02 Dashboard, M03 Driver, M04 Surat Jalan, M05 Tambah Driver, M06 Buat Surat Jalan
- 🖥️ Web — Desktop (1440 × 900) · Sidebar:
  W01 Login, W02 Dashboard — Sidebar Terbuka, W02b Dashboard — Sidebar Tertutup, W03 Driver,
  W04 Surat Jalan, W05 Tambah Driver (Drawer), W06 Buat Surat Jalan
- 🚚 Driver App — Mobile Only (390 × 844) · Bottom Nav:
  D01 Beranda, D02 Tugas Saya, D03 Detail Pengiriman, D04 Bukti Pengiriman, D05 Profil, D06 Pengiriman Selesai
- 🔎 Client — Lacak Pengiriman (Mobile & Web):
  CW01 Lacak — Halaman Awal (Web), CW01b Lacak — Tidak Ditemukan (Web),
  CM01 Lacak — Halaman Awal (Mobile), CM01b Lacak — Tidak Ditemukan (Mobile),
  CW02 Hasil Lacak (Web), CM02 Hasil Lacak (Mobile)

## Palet warna (variable collection "Primitives" dan "Semantic")

Warna brand (Semantic, mode Light):

| Peran | Variabel | Hex |
|---|---|---|
| brand/primary | color/blue/500 | #0582F0 |
| brand/secondary | color/green/500 | #05F063 |
| brand/accent | color/orange/500 | #F08205 |
| bg/canvas | color/neutral/50 | #F6F8FB |
| bg/surface | color/white | #FFFFFF |
| text/primary | color/neutral/900 | #141D2C |
| text/secondary | color/neutral/600 | #4E5A6E |
| text/link | color/blue/600 | #0671D0 |
| border/default | color/neutral/200 | #DDE3EC |
| status/danger/solid | color/red/500 | #E5383B |

Status memakai pasangan bg/fg/solid untuk success (hijau), info (biru), warning (oranye), danger (merah).

Skala primitif: green, blue, orange dan neutral masing-masing 50–950; red 50, 100, 300, 500, 600, 700, 950.
Collection "Dimensions": space 0–64 (kelipatan 4) dan radius none/sm 4/md 8/lg 12/xl 16/full.

## Font

- **Plus Jakarta Sans**: Regular, Medium, SemiBold, Bold, ExtraBold (font utama)
- **JetBrains Mono**: Medium, Bold (nomor resi / surat jalan)

Text style: Display 48/56 ExtraBold, Heading H1 36/44 · H2 28/36 Bold, H3 22/30 · H4 18/26 SemiBold,
Body Large 16/24 · Medium 14/20 · Small 12/16 Regular, Label Large/Medium/Small SemiBold,
Caption 11/14 Medium, Mono/Tracking Number 14/20 Medium, Mono/Tracking Number Large 20/28 Bold.

Effect style: Focus Ring, Shadow/sm, Shadow/md, Shadow/lg.
