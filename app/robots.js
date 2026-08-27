export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'Anthropic-ai',
          'CCBot',
          'Bytespider',
          'Amazonbot',
          'Barkrowler',
          'AhrefsBot',
          'AhrefsSiteAudit',
          'SemrushBot',
          'DotBot',
          'MJ12bot',
          'PetalBot',
          'KimiBot'
        ],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://www.wiziot.com/sitemap.xml',
  };
}
