import { SectionPage } from "@/components/ui/SectionPage";
import { sectionByKey } from "@/lib/sections";

export const metadata = { title: `${sectionByKey.about.label} · Ruang Renung` };

export default function Page() {
  return (
    <SectionPage section="about">
      <p className="mb-6 text-ink-2">Isi section ini dibangun di langkah berikutnya.</p>
    </SectionPage>
  );
}
