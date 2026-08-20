export async function GET() {
  const baseUrl = 'https://www.wiziot.com';
  const cities = [
    'mombasa', 'nairobi', 'lagos', 'dubai', 'abu-dhabi', 'santos', 'bogota', 'medellin',
    'mexico-city', 'warsaw', 'bucharest', 'budapest', 'singapore', 'johor-bahru', 'perth',
    'riyadh', 'jeddah', 'dammam', 'johannesburg', 'durban'
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  const sitemaps = ['core', 'blogs', ...cities];

  for (const id of sitemaps) {
    xml += `  <sitemap>\n    <loc>${baseUrl}/sitemap/${id}.xml</loc>\n  </sitemap>\n`;
  }

  xml += `</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate'
    }
  });
}
