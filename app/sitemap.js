import { getAllBlogs } from '@/lib/blog';

const baseUrl = 'https://www.wiziot.com';

const cities = [
  'mombasa', 'nairobi', 'lagos', 'dubai', 'abu-dhabi', 'santos', 'bogota', 'medellin',
  'mexico-city', 'warsaw', 'bucharest', 'budapest', 'singapore', 'johor-bahru', 'perth',
  'riyadh', 'jeddah', 'dammam', 'johannesburg', 'durban'
];

export async function generateSitemaps() {
  return [
    { id: 'core' },
    { id: 'blogs' },
    ...cities.map((city) => ({ id: city }))
  ];
}

export default async function sitemap(props) {
  // In Next.js 16+, `props.id` is a Promise that resolves to a string
  let id = 'core';
  if (props && props.id) {
    id = await props.id;
  }

  if (id === 'core') {
    const staticRoutes = [
      '',
      '/blog',
      '/solutions',
      '/platform',
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

    const solutionIds = ['telematics', 'ev-fleets', 'cold-chain', 'healthcare', 'industrial-iot', 'public-transport', 'school-transport'];
    const solutionRoutes = solutionIds.map((sid) => ({
      url: `${baseUrl}/solutions/${sid}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    return [...staticRoutes, ...solutionRoutes];
  }

  if (id === 'blogs') {
    const allBlogs = getAllBlogs();
    return allBlogs.map((b) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified: b.publishedAt || new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  }

  // If it's a city ID
  if (cities.includes(id)) {
    return [{
      url: `${baseUrl}/${id}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.7,
    }];
  }

  return [];
}
