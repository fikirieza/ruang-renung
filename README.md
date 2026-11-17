# Ruang Renung

Website pribadi dengan kamar pixel 3D sebagai pintu masuk. Pengunjung memutar kamera, menyorot barang, lalu mengklik barang untuk meluncur ke section yang sesuai.

Stack: Next.js (App Router), React Three Fiber, drei, Tailwind CSS v4, TypeScript.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Peta barang

| Barang | Section | Warna |
|---|---|---|
| Meja kerja (meja, kursi, laptop, lampu, buku) | `/works` | Semi |
| Papan tulis | `/projects` | Panas |
| Rak buku | `/writing` (termasuk semua review) | Gugur |
| Lemari pakaian | `/about` | Dingin |
| Cermin berdiri | `/cermin` (generator pixel art, fase 2) | Daun, sengaja di luar musim |

Empat section utama mengikuti urutan musim. Latar halaman tiap section memakai warna musimnya, dan layar kamar memudar ke warna yang sama supaya perpindahannya mulus.

Semua pemetaan ada di `lib/sections.ts`. Mau ganti tujuan, label, atau pose kamera, cukup ubah file itu.

## Struktur

```
app/                  halaman (Home = kamar 3D, plus 5 section)
components/kamar/     Kamar (model + area klik), CameraRig (dolly in), KamarScene (kanvas + UI)
components/ui/        PixelButton, DialogBox, SeasonBadge, DitherDivider, SectionPage
lib/sections.ts       pemetaan barang ke section dan pose kamera
lib/susunan.ts        posisi barang (dari susunan_kamar.json)
lib/voxel.ts          mengubah data voxel jadi geometri three.js
lib/theme.tsx         tema Siang dan Malam
data/kamar_data.json  model voxel yang sudah dioptimasi (±30 KB)
scripts/              skrip pembuat kamar_data.json dari file GLB
```

## Mengganti model

Model di `data/kamar_data.json` dibuat dari folder GLB voxel dengan menggabungkan sisi yang sebidang dan sewarna. Kalau model di Blender atau generator voxel berubah:

```bash
pip install numpy
python scripts/glb_ke_data.py "D:/Dev/UIUX Design/Design Plan Portofolio Website/kamar_pixel_aset_3d/glb"
```

Kalau ada barang baru, tambahkan juga posisinya di `lib/susunan.ts`.

## Referensi desain

- Design system: artifact "Ruang Renung" di Claude
- Figma: file "Design Plan Portofolio Website", halaman Foundation dan Prototipe Kamar 3D
