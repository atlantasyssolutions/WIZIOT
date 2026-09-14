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
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/:city/pricing',
        destination: '/:city/contact',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap/:city.xml',
        destination: '/city-sitemaps/:city.xml',
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
      },
    ];
  },
};

export default nextConfig;
