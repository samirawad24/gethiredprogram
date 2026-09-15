import type { NextConfig } from "next";

// "/gethiredprogram" while hosted at samirawad24.github.io/gethiredprogram.
// Set NEXT_PUBLIC_BASE_PATH to "/" once the custom domain is connected.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  // Static HTML export so the site runs on GitHub Pages (or any static host).
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
