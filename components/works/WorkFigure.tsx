import Image from "next/image";
import type { WorkImage } from "@/lib/works";

/**
 * Gambar karya dengan bingkai piksel.
 * next/image mengecilkan file besar otomatis sesuai lebar layar.
 * Gambar yang sangat tinggi dipotong di bagian atas, dengan tombol untuk membuka versi penuh.
 */
export function WorkFigure({ img, priority }: { img: WorkImage; priority?: boolean }) {
  const sizes = img.phone ? "(min-width: 768px) 360px, 80vw" : "(min-width: 1024px) 896px, 100vw";
  return (
    <figure className={img.phone ? "mx-auto w-full max-w-[360px]" : "w-full"}>
      <div className={`kp-box p-0! overflow-hidden ${img.tall ? "max-h-[640px]" : ""}`}>
        <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes={sizes} priority={priority} className="block h-auto w-full" />
      </div>
      {img.tall && (
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-ink">
          <span>Potongan bagian atas. Halaman aslinya lebih panjang.</span>
          <a href={img.src} target="_blank" rel="noreferrer" className="kp-btn kp-polos">Lihat halaman penuh</a>
        </figcaption>
      )}
    </figure>
  );
}
