import { works } from "@/lib/works";
import { sectionByKey } from "@/lib/sections";
import { WorkCard } from "@/components/works/WorkCard";
import { PixelButton } from "@/components/ui/PixelButton";

export const metadata = { title: `${sectionByKey.works.label} · Ruang Renung` };

export default function WorksPage() {
  const s = sectionByKey.works;
  return (
    <main className="kp-season-bg is-works min-h-dvh">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-pixel text-base">{s.tab}</p>
            <h1 className="font-pixel mt-1 text-5xl font-semibold leading-[56px]">{s.title}</h1>
            <p className="mt-3 max-w-xl text-lg leading-8">{s.intro}</p>
          </div>
          <PixelButton href="/" musim="polos">Kembali ke kamar</PixelButton>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {works.map((w) => (
            <WorkCard key={w.slug} work={w} />
          ))}
        </div>
      </div>
    </main>
  );
}
