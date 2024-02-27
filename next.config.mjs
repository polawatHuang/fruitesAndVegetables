/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/out',
  assetPrefix: '/out/',
  images: { unoptimized: true },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default nextConfig;
