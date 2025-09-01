/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // for static export
    basePath: "/anky-portfolio",
    assetPrefix: "/anky-portfolio/",
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;  