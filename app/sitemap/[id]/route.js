import { getAllBlogs } from '@/lib/blog';

import { LOCATIONS_DATA } from '@/data/locations';

const baseUrl = 'https://www.wiziot.com';

const cities = LOCATIONS_DATA.map(loc => loc.slug);

const staticCoreRoutes = [
  '',
  '/blog',
  '/solutions',
  '/platform',
  '/pricing',
  '/partners',
  '/contact',
];

const solutionIds = ['telematics', 'ev-fleets', 'cold-chain', 'healthcare', 'industrial-iot', 'public-transport', 'school-transport'];

function generateXml(urls) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const item of urls) {
    xml += `  <url>\n    <loc>${item.url}</loc>\n`;
    if (item.lastModified) {
      xml += `    <lastmod>${item.lastModified}</lastmod>\n`;
    }
    if (item.changeFrequency) {
      xml += `    <changefreq>${item.changeFrequency}</changefreq>\n`;
    }
    if (item.priority) {
      xml += `    <priority>${item.priority}</priority>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += `</urlset>`;
  return xml;
}

export async function GET(request, { params }) {
  const resolvedParams = await params;
  let rawId = resolvedParams.id;
  
  if (rawId.endsWith('.xml')) {
    rawId = rawId.replace('.xml', '');
  }

  const id = rawId;
  let urls = [];

  if (id === 'core') {
    const staticRoutes = staticCoreRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : 0.8,
    }));

    const solutionRoutes = solutionIds.map((sid) => ({
      url: `${baseUrl}/solutions/${sid}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    urls = [...staticRoutes, ...solutionRoutes];
  } else if (id === 'blogs') {
    const allBlogs = getAllBlogs();
    urls = allBlogs.map((b) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified: b.publishedAt || new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } else if (cities.includes(id)) {
    const staticRoutes = staticCoreRoutes.map((route) => ({
      url: `${baseUrl}/${id}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    const solutionRoutes = solutionIds.map((sid) => ({
      url: `${baseUrl}/${id}/solutions/${sid}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    const allBlogs = getAllBlogs();
    const blogRoutes = allBlogs.map((b) => ({
      url: `${baseUrl}/${id}/blog/${b.slug}`,
      lastModified: b.publishedAt || new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    }));

    urls = [...staticRoutes, ...solutionRoutes, ...blogRoutes];
  } else {
    return new Response('Not Found', { status: 404 });
  }

  return new Response(generateXml(urls), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate'
    }
  });
}
