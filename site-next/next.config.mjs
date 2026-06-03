/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // gera site 100% estatico em out/ (deploy direto no Netlify)
  images: { unoptimized: true },
};

export default nextConfig;
