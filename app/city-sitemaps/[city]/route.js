import { getAllBlogs } from '@/lib/blog';
import { getLocationBySlug, getAllLocations } from '@/lib/locations';

export async function generateStaticParams() {
  const locations = getAllLocations();
  const params = locations.map((loc) => ({
    city: `${loc.slug}.xml`,
  }));
  params.push({ city: 'blogs.xml' });
  return params;
}

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.replace('.xml', '');
  const baseUrl = 'https://www.wiziot.com';
  const blogs = getAllBlogs().filter(b => b.indexable !== false);

  // Dedicated sitemap for all global blog posts (https://www.wiziot.com/sitemap/blogs.xml)
  if (citySlug === 'blogs') {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ${blogs.map(blog => `
  <url>
    <loc>${baseUrl}/blog/${blog.slug}</loc>
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

  const location = getLocationBySlug(citySlug);
  
  if (!location) {
    return new Response('Sitemap Not Found', { status: 404 });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/${location.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/${location.slug}/solutions</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/${location.slug}/platform</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/${location.slug}/pricing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/${location.slug}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate'
    },
  });
}
