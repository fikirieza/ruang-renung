import type { MDXComponents } from "mdx/types";
import { Swatch, SwatchRow } from "@/components/writing/Swatch";

// Gaya bawaan untuk semua artikel MDX. Dipakai otomatis oleh @next/mdx.
const components: MDXComponents = {
  h2: (props) => <h2 className="font-pixel mt-14 mb-4 text-3xl font-semibold leading-9" {...props} />,
  h3: (props) => <h3 className="mt-10 mb-3 font-[family-name:var(--font-display)] text-2xl leading-8" {...props} />,
  p: (props) => <p className="my-5 text-lg leading-8" {...props} />,
  a: (props) => <a className="text-link underline underline-offset-4" target={props.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" {...props} />,
  ul: (props) => <ul className="my-5 list-none space-y-3 pl-0" {...props} />,
  ol: (props) => <ol className="my-5 list-decimal space-y-3 pl-6 text-lg leading-8" {...props} />,
  li: (props) => <li className="relative pl-6 text-lg leading-8 before:absolute before:top-3 before:left-0 before:h-2 before:w-2 before:bg-gugur-shade [ol_&]:pl-0 [ol_&]:before:hidden" {...props} />,
  blockquote: (props) => <blockquote className="kp-box is-writing my-8 font-[family-name:var(--font-display)] text-xl leading-9 [&_p]:my-0" {...props} />,
  code: (props) => <code className="bg-page px-1.5 py-0.5 font-mono text-base" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  hr: () => <div className="kp-dither my-12" role="separator" />,
  Swatch,
  SwatchRow,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
