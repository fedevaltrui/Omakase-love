/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ⚠️ Sacamos output: 'export'
  // ⚠️ Sacamos basePath y assetPrefix (Vercel no los necesita)

  images: {
    unoptimized: true, // opcional, por si no querés usar el optimizador de imágenes
  },
};

module.exports = nextConfig;
