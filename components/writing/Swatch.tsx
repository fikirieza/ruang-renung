/** Contoh warna di dalam artikel. Pakai di MDX: <Swatch hex="#FCD000" label="Jerami" /> */
export function Swatch({ hex, label, catatan }: { hex: string; label: string; catatan?: string }) {
  return (
    <figure className="m-0 flex flex-col gap-2">
      <div className="h-20 w-full shadow-[0_0_0_3px_var(--border-panel)]" style={{ background: hex }} />
      <figcaption>
        <span className="font-pixel block text-base">{label}</span>
        <span className="block font-mono text-sm text-ink-2">{hex}</span>
        {catatan && <span className="mt-1 block text-sm leading-5 text-ink-2">{catatan}</span>}
      </figcaption>
    </figure>
  );
}

export function SwatchRow({ children }: { children: React.ReactNode }) {
  return <div className="my-8 grid grid-cols-2 gap-6 sm:grid-cols-4">{children}</div>;
}
