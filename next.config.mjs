const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/mathLessons' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                       // sitio 100% estático (GitHub Pages)
  basePath,                               // misma ruta base que el sitio actual
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // para armar rutas de /public (ver asset() en lib/site.js)
  images: { unoptimized: true },          // next/image sin servidor de optimización
};

export default nextConfig;
