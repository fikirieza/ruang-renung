import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // .mdx ikut dikenali sebagai file halaman dan modul
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["three"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
