import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/lib/works";
import { SeasonBadge } from "@/components/ui/SeasonBadge";

/** Kartu karya di daftar Works, bergaya kotak dialog. */
export function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={`/works/${work.slug}`} className="kp-box is-works group block p-0! focus-visible:outline-3 focus-visible:outline-dashed focus-visible:outline-offset-8">
      <span className="kp-tab">{work.jenis[0]}</span>
      <div className="aspect-[16/10] overflow-hidden border-b-[3px] border-line bg-page">
        <Image
          src={work.cover.src}
          alt={work.cover.alt}
          width={work.cover.w}
          height={work.cover.h}
          sizes="(min-width: 768px) 560px, 100vw"
          className="h-full w-full object-cover object-top transition-transform duration-300 ease-[steps(3)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-7 pt-5 pb-7">
        <h2 className="font-pixel text-2xl font-semibold leading-7">{work.title}</h2>
        <p className="mt-1 font-[family-name:var(--font-display)] text-lg leading-7">{work.subtitle}</p>
        <p className="mt-3 text-base leading-7 text-ink-2">{work.ringkasan}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.jenis.map((j) => (
            <SeasonBadge key={j} section="works">{j}</SeasonBadge>
          ))}
        </div>
      </div>
    </Link>
  );
}
