import Link from "next/link";
import { sectionByKey } from "@/lib/sections";
import { artikel, formatTanggal, kategoriLabel, type Kategori } from "@/lib/writing";
import { PixelButton } from "@/components/ui/PixelButton";

export const metadata = { title: `${sectionByKey.writing.label} · Ruang Renung` };

type Props = { searchParams: Promise<{ kategori?: string }> };

export default async function WritingPage({ searchParams }: Props) {
  const { kategori } = await searchParams;
  const aktif = kategori && kategori in kategoriLabel ? (kategori as Kategori) : null;
  const daftar = [...artikel]
    .filter((a) => !aktif || a.kategori === aktif)
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
  const s = sectionByKey.writing;

  return (
    <main className="kp-season-bg is-writing min-h-dvh">
      <div className="mx-auto max-w-4xl px-5 py-14">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-pixel text-base">{s.tab}</p>
            <h1 className="font-pixel mt-1 text-5xl font-semibold leading-[56px]">{s.title}</h1>
            <p className="mt-3 max-w-xl text-lg leading-8">{s.intro}</p>
          </div>
          <PixelButton href="/" musim="polos">Kembali ke kamar</PixelButton>
        </div>

        <nav aria-label="Kategori" className="mb-10 flex flex-wrap gap-3">
          <PixelButton href="/writing" musim={aktif ? "polos" : "gugur"} aria-current={!aktif ? "page" : undefined}>Semua</PixelButton>
          {(Object.keys(kategoriLabel) as Kategori[]).map((k) => (
            <PixelButton key={k} href={`/writing?kategori=${k}`} musim={aktif === k ? "gugur" : "polos"} aria-current={aktif === k ? "page" : undefined}>
              {kategoriLabel[k]}
            </PixelButton>
          ))}
        </nav>

        {daftar.length === 0 ? (
          <div className="kp-box is-writing">
            <span className="kp-tab">Rak masih kosong</span>
            <p className="mt-2 text-lg leading-8">Belum ada tulisan di kategori ini. Tulisan pertamanya sedang disiapkan.</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-12">
            {daftar.map((a) => (
              <li key={a.slug}>
                <Link href={`/writing/${a.slug}`} className="kp-box is-writing group block">
                  <span className="kp-tab">{kategoriLabel[a.kategori]}</span>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl leading-9 group-hover:underline group-hover:underline-offset-4">{a.judul}</h2>
                  <p className="mt-3 text-base leading-7">{a.ringkasan}</p>
                  <p className="font-pixel mt-4 text-sm text-ink-2">{formatTanggal(a.tanggal)} · {a.menitBaca} menit baca</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
