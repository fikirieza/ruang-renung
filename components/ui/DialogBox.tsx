import type { SectionKey } from "@/lib/sections";

type Props = {
  section: SectionKey;
  tab: string;
  children: React.ReactNode;
  showNext?: boolean;
  className?: string;
};

/** Kartu ala kotak dialog RPG. Warna tab mengikuti section. */
export function DialogBox({ section, tab, children, showNext, className = "" }: Props) {
  return (
    <div className={`kp-box is-${section} ${className}`}>
      <span className="kp-tab">{tab}</span>
      {children}
      {showNext && <span className="kp-next" aria-hidden="true" />}
    </div>
  );
}
