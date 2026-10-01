import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This repository is published at https://dinith-rusiru.github.io/portfolio/
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: {
    // GitHub Pages is static and does not run Next.js's image optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
