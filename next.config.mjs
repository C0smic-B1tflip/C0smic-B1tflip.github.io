/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Needed for static export
  },
};

module.exports = nextConfig;
