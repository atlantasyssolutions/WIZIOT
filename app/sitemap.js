import { getAllLocations } from '@/lib/locations';
import { getAllBlogs } from '@/lib/blog';

export default function sitemap() {
  const baseUrl = 'https://www.wiziot.com';

  // Core Pages
  const routes = [
    '',
    '/pricing',
    '/contact',
    '/platform',
    '/solutions',
    '/partners',
    '/locations',
    '/blog',
    '/about',
    '/privacy-policy',
    '/terms-of-service'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // City Pages
  const locations = getAllLocations();
  const locationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/${loc.slug}`,
    
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Blog Pages (Global)
  const blogs = getAllBlogs();
  const validBlogs = blogs.filter(b => b.indexable !== false);
  
  const blogRoutes = validBlogs.map((blog) => {
    let lastMod;
    try {
      lastMod = blog.publishedAt ? new Date(blog.publishedAt).toISOString() : new Date().toISOString();
    } catch {
      lastMod = new Date().toISOString();
    }
    return {
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  return [...routes, ...locationRoutes, ...blogRoutes];
}
