import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be served from GitHub Pages.
  // The Pages workflow (actions/configure-pages) injects the repo basePath.
  output: "export",
};

export default nextConfig;
