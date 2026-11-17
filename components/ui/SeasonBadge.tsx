import type { SectionKey } from "@/lib/sections";

export function SeasonBadge({ section, children }: { section: SectionKey; children: React.ReactNode }) {
  return <span className={`kp-badge is-${section}`}>{children}</span>;
}
