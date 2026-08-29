/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 2,
  },
  staticPageGenerationTimeout: 1000,
  async rewrites() {
    return [
      {
        source: '/sitemap/:city.xml',
        destination: '/city-sitemaps/:city.xml',
      },
    ];
  },
};

export default nextConfig;
