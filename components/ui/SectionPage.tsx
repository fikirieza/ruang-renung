import { sectionByKey, type SectionKey } from "@/lib/sections";
import { DialogBox } from "./DialogBox";
import { PixelButton } from "./PixelButton";

/** Kerangka sementara untuk tiap section, sampai isinya dibangun. */
export function SectionPage({ section, children }: { section: SectionKey; children?: React.ReactNode }) {
  const s = sectionByKey[section];
  return (
    <main className={`kp-season-bg is-${section} min-h-dvh`}>
      <div className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-5 py-16">
      <DialogBox section={section} tab={s.tab} showNext>
        <h1 className="font-pixel mt-2 mb-3 text-4xl font-semibold leading-tight">{s.title}</h1>
        <p className="mb-6 text-lg leading-8">{s.intro}</p>
        {children}
        <PixelButton href="/" musim="polos">Kembali ke kamar</PixelButton>
      </DialogBox>
      </div>
    </main>
  );
}
