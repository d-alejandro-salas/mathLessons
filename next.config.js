const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/mathLessons' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                       
  basePath: basePath,                               
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, 
  images: { unoptimized: true },          
};

module.exports = nextConfig;