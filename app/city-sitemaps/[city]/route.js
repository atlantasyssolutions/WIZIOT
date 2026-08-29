import { getAllBlogs } from '@/lib/blog';
import { getLocationBySlug, getAllLocations } from '@/lib/locations';

export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((loc) => ({
    city: `${loc.slug}.xml`,
  }));
}

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.replace('.xml', '');
  const location = getLocationBySlug(citySlug);
  
  if (!location) {
    return new Response('Sitemap Not Found', { status: 404 });
  }

  const blogs = getAllBlogs().filter(b => b.indexable);
  const baseUrl = 'https://www.wiziot.com';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/${location.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ${blogs.map(blog => `
  <url>
    <loc>${baseUrl}/blog/${location.slug}/${blog.slug}</loc>
    <lastmod>${blog.publishedAt ? new Date(blog.publishedAt).toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate'
    },
  });
}
