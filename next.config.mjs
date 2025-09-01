/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/anky-portfolio",
    assetPrefix: "/anky-portfolio/",
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;  