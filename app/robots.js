export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you'],
      },
    ],
    sitemap: [
      'https://www.wiziot.com/sitemap.xml',
      'https://www.wiziot.com/sitemap-southeast-asia.xml',
    ],
  };
}
