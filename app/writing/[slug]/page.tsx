import { notFound } from "next/navigation";
import { artikel, artikelBySlug, formatTanggal, kategoriLabel } from "@/lib/writing";
import { PixelButton } from "@/components/ui/PixelButton";

type Props = { params: Promise<{ slug: string }> };

// Hanya slug yang terdaftar di lib/writing.ts yang dibuat halamannya.
export const dynamicParams = false;

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = artikelBySlug[slug];
  return { title: a ? `${a.judul} · Ruang Renung` : "Writing · Ruang Renung", description: a?.ringkasan };
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const a = artikelBySlug[slug];
  if (!a) notFound();
  const { default: Isi } = await import(`@/content/writing/${slug}.mdx`);

  return (
    <main className="kp-season-bg is-writing min-h-dvh">
      <div className="mx-auto max-w-3xl px-5 py-14">
        <div className="mb-10 flex flex-wrap gap-3">
          <PixelButton href="/writing" musim="polos">Semua tulisan</PixelButton>
          <PixelButton href="/" musim="polos">Kembali ke kamar</PixelButton>
        </div>

        <article className="kp-box is-writing px-6! py-10! sm:px-12!">
          <span className="kp-tab">{kategoriLabel[a.kategori]}</span>
          <header>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl leading-[48px]">{a.judul}</h1>
            <p className="font-pixel mt-4 text-sm text-ink-2">{formatTanggal(a.tanggal)} · {a.menitBaca} menit baca</p>
          </header>
          {a.video && (
            <p className="mt-6">
              <PixelButton href={a.video} musim="gugur" target="_blank" rel="noreferrer">Tonton videonya di Instagram</PixelButton>
            </p>
          )}
          <div className="mt-8">
            <Isi />
          </div>
        </article>

        <div className="mt-12 flex flex-wrap gap-3">
          <PixelButton href="/writing" musim="gugur">Baca tulisan lain</PixelButton>
        </div>
      </div>
    </main>
  );
}
