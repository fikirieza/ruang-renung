import Link from "next/link";
import type { Musim as MusimSection } from "@/lib/sections";

type Musim = MusimSection | "polos";

type Props = { musim?: Musim; className?: string; children: React.ReactNode } & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">)
  | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
);

/** Tombol piksel dengan ramp musim. Pakai href untuk link, tanpa href untuk tombol. */
export function PixelButton({ musim = "panas", className = "", children, ...rest }: Props) {
  const cls = `kp-btn kp-${musim} ${className}`;
  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return <Link href={href} className={cls} {...linkProps}>{children}</Link>;
  }
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return <button type="button" className={cls} {...buttonProps}>{children}</button>;
}
