import { getAllBlogs } from '@/lib/blog';

export default async function sitemap() {
  const baseUrl = 'https://www.wiziot.com';

  // Core Pages
  const staticRoutes = [
    '',
    '/blog',
    '/solutions',
    '/platform',
    '/sensors',
    '/pricing',
    '/partners',
    '/contact',
    '/locations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // City Hub Locations
  const cities = [
    'mombasa', 'nairobi', 'lagos', 'dubai', 'abu-dhabi', 'santos', 'bogota', 'medellin',
    'mexico-city', 'warsaw', 'bucharest', 'budapest', 'singapore', 'johor-bahru', 'perth',
    'riyadh', 'jeddah', 'dammam', 'johannesburg', 'durban'
  ];

  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Solution Detail Pages
  const solutionIds = ['telematics', 'ev-fleets', 'cold-chain', 'healthcare', 'industrial-iot', 'public-transport'];
  const solutionRoutes = solutionIds.map((id) => ({
    url: `${baseUrl}/solutions/${id}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 500+ Blog Posts
  const allBlogs = getAllBlogs();
  const blogRoutes = allBlogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: b.publishedAt || new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...solutionRoutes, ...cityRoutes, ...blogRoutes];
}
