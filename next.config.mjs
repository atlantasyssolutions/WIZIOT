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
      {
        source: '/sensors',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/:city/sensors',
        destination: '/:city/contact',
        permanent: true,
      },
      {
        source: '/partner-only',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/:city/partner-only',
        destination: '/:city/partners',
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
