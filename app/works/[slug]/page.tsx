import { notFound } from "next/navigation";
import { workBySlug, works } from "@/lib/works";
import { DialogBox } from "@/components/ui/DialogBox";
import { PixelButton } from "@/components/ui/PixelButton";
import { DitherDivider } from "@/components/ui/DitherDivider";
import { WorkFigure } from "@/components/works/WorkFigure";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const w = workBySlug[slug];
  return { title: w ? `${w.title} · Works · Ruang Renung` : "Works · Ruang Renung" };
}

export default async function WorkDetail({ params }: Props) {
  const { slug } = await params;
  const w = workBySlug[slug];
  if (!w) notFound();

  const meta: [string, string][] = [
    ["Peran", w.peran],
    ["Konteks", w.konteks],
    ...(w.tahun ? ([["Tahun", w.tahun]] as [string, string][]) : []),
    ...(w.stack?.length ? ([["Alat dan stack", w.stack.join(", ")]] as [string, string][]) : []),
    ["Status", w.status],
  ];

  return (
    <main className="kp-season-bg is-works min-h-dvh">
      <article className="mx-auto max-w-4xl px-5 py-14">
        <div className="mb-10 flex flex-wrap gap-3">
          <PixelButton href="/works" musim="polos">Semua karya</PixelButton>
          <PixelButton href="/" musim="polos">Kembali ke kamar</PixelButton>
        </div>

        <DialogBox section="works" tab={`Works · ${w.jenis.join(" · ")}`}>
          <h1 className="font-pixel mt-2 text-5xl font-semibold leading-[56px]">{w.title}</h1>
          <p className="mt-2 font-[family-name:var(--font-display)] text-2xl leading-9">{w.subtitle}</p>
          <p className="mt-4 text-lg leading-8">{w.ringkasan}</p>
          <dl className="mt-6 grid gap-x-8 gap-y-3 border-t-2 border-line pt-5 sm:grid-cols-[160px_1fr]">
            {meta.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-pixel text-base text-ink-2">{k}</dt>
                <dd className="text-base leading-7">{v}</dd>
              </div>
            ))}
          </dl>
        </DialogBox>

        {w.angka && (
          <div className="mt-10 grid grid-cols-3 gap-6">
            {w.angka.map((a) => (
              <div key={a.label} className="kp-box is-works px-4! py-5! text-center">
                <p className="font-pixel text-4xl font-semibold leading-10">{a.nilai}</p>
                <p className="mt-1 text-sm leading-5 text-ink-2">{a.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12">
          <WorkFigure img={w.cover} priority />
        </div>

        {w.sections.map((sec) => (
          <section key={sec.heading} className="mt-14">
            <DitherDivider className="mb-10" />
            <DialogBox section="works" tab={sec.heading}>
              {sec.body?.map((p, i) => (
                <p key={i} className="mt-2 mb-3 text-lg leading-8">{p}</p>
              ))}
              {sec.points && (
                <ul className="mt-2 space-y-3">
                  {sec.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-lg leading-8">
                      <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 bg-semi-shade" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </DialogBox>
            {sec.images && sec.images.length > 0 && (
              <div className={`mt-8 grid gap-8 ${sec.images.length > 1 ? "md:grid-cols-2" : ""}`}>
                {sec.images.map((img) => (
                  <WorkFigure key={img.src} img={img} />
                ))}
              </div>
            )}
          </section>
        ))}

        {w.pelajaran && w.pelajaran.length > 0 && (
          <section className="mt-14">
            <DitherDivider className="mb-10" />
            <DialogBox section="works" tab="Yang aku pelajari" showNext>
              <ul className="mt-2 space-y-3">
                {w.pelajaran.map((p, i) => (
                  <li key={i} className="text-lg leading-8">{p}</li>
                ))}
              </ul>
            </DialogBox>
          </section>
        )}

        <div className="mt-14 flex flex-wrap gap-3">
          <PixelButton href="/works" musim="semi">Lihat karya lain</PixelButton>
        </div>
      </article>
    </main>
  );
}
