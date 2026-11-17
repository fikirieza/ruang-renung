import type { Metadata } from "next";
import { Fraunces, Nunito, Pixelify_Sans } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const pixelify = Pixelify_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-pixelify" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Ruang Renung",
  description: "Kamar tempat aku merancang, menulis, dan bermain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="siang" suppressHydrationWarning className={`${pixelify.variable} ${fraunces.variable} ${nunito.variable}`}>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
