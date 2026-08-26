import fs from 'fs';
import path from 'path';
import { BLOGS_DATA } from '@/data/blogs';

const blogsDirectory = path.join(process.cwd(), 'BLOGS');

function parseFrontmatter(fileContents) {
  const match = fileContents.match(/^---([\s\S]*?)---/);
  if (!match) return { attributes: {}, body: fileContents };

  const yamlBlock = match[1];
  const body = fileContents.replace(/^---[\s\S]*?---/, '').trim();
  const attributes = {};

  const lines = yamlBlock.split('\n');
  let currentKey = null;
  let isObject = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const keyValMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)/);
    if (keyValMatch) {
      const key = keyValMatch[1].trim();
      const val = keyValMatch[2].trim();

      if (val === '') {
        currentKey = key;
        attributes[key] = {};
        isObject = true;
      } else {
        currentKey = key;
        isObject = false;
        attributes[key] = val.replace(/^["']|["']$/g, '');
      }
    } else if (line.trim().startsWith('- ') && currentKey) {
      if (!Array.isArray(attributes[currentKey])) {
        attributes[currentKey] = [];
      }
      attributes[currentKey].push(line.trim().replace(/^-\s*/, '').replace(/^["']|["']$/g, ''));
    } else if (line.match(/^\s+([a-zA-Z0-9_]+):\s*(.*)/) && currentKey && isObject) {
      const subMatch = line.match(/^\s+([a-zA-Z0-9_]+):\s*(.*)/);
      const subKey = subMatch[1].trim();
      const subVal = subMatch[2].trim().replace(/^["']|["']$/g, '');
      if (typeof attributes[currentKey] !== 'object' || attributes[currentKey] === null) {
        attributes[currentKey] = {};
      }
      attributes[currentKey][subKey] = subVal;
    }
  }

  return { attributes, body };
}

export function getAllBlogs() {
  let mdBlogs = [];

  if (fs.existsSync(blogsDirectory)) {
    const files = fs.readdirSync(blogsDirectory).filter((file) => file.endsWith('.md'));
    mdBlogs = files.map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(blogsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { attributes, body } = parseFrontmatter(fileContents);

      const title = attributes.title || slug;
      const category = attributes.category || 'Telematics Solutions';
      const geoRegion = attributes.geoRegion || 'Global';
      const excerpt = attributes.excerpt || body.substring(0, 160).replace(/[#*`_]/g, '') + '...';
      const publishedAt = attributes.publishedAt || null;
      const indexable = attributes.indexable === true || attributes.indexable === 'true';
      const readTime = attributes.readTime || '12 min read';
      
      const author = {
        name: (attributes.author && typeof attributes.author === 'object' && attributes.author.name) 
          ? attributes.author.name 
          : 'Dr. Marcus Vance',
        role: (attributes.author && typeof attributes.author === 'object' && attributes.author.role)
          ? attributes.author.role
          : 'Principal Telematics Systems Engineer'
      };

      const seoKeywords = Array.isArray(attributes.seoKeywords) ? attributes.seoKeywords : [];

      return {
        id: slug,
        slug,
        title,
        category,
        geoRegion,
        excerpt,
        author,
        publishedAt,
        readTime,
        indexable,
        seoKeywords,
        content: body,
      };
    });
  }

  const mdSlugs = new Set(mdBlogs.map((b) => b.slug));
  const uniqueDataBlogs = BLOGS_DATA.filter((b) => !mdSlugs.has(b.slug));

  return [...mdBlogs, ...uniqueDataBlogs];
}

export function getBlogBySlug(slug) {
  if (!slug) return null;
  const all = getAllBlogs();
  return all.find((b) => b.slug.toLowerCase() === slug.toLowerCase()) || null;
}

export function getBlogsByGeoRegion(region) {
  const all = getAllBlogs();
  if (!region || region === 'All') return all;
  return all.filter((b) => b.geoRegion === region || b.geoRegion === 'Global');
}

export function generateArticleSchema(blog) {
  if (!blog) return {};
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.wiziot.com/blog/${blog.slug}`,
    },
    headline: blog.title,
    description: blog.excerpt,
    image: `https://www.wiziot.com/blog/${blog.slug}.webp`,
    ...(blog.publishedAt && {
      datePublished: blog.publishedAt,
      dateModified: blog.publishedAt,
    }),
    author: {
      '@type': 'Person',
      name: blog.author?.name || 'WizIOT Security Engineering',
      jobTitle: blog.author?.role || 'Senior Telematics Architect',
      worksFor: {
        '@type': 'Organization',
        name: 'WizIOT Telematics',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'WizIOT Telematics',
      url: 'https://www.wiziot.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.wiziot.com/logo.png',
      },
    },
  };
}

export function generateFaqSchema(blog) {
  if (!blog || !blog.content) return null;

  const faqMatch = blog.content.match(/##\s*Frequently Asked Questions[\s\S]*/i);
  if (!faqMatch) return null;

  const faqText = faqMatch[0];
  const qBlocks = faqText.split(/###\s*/).slice(1);

  const mainEntity = [];

  for (const block of qBlocks) {
    const lines = block.trim().split('\n');
    const questionLine = lines[0];
    const answerText = lines.slice(1).join(' ').trim();

    if (questionLine && answerText) {
      const cleanQuestion = questionLine.replace(/^Q\d*:\s*/i, '').trim();
      mainEntity.push({
        '@type': 'Question',
        name: cleanQuestion,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answerText,
        },
      });
    }
  }

  if (mainEntity.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
}

export function generateBreadcrumbSchema(blog) {
  if (!blog) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.wiziot.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Knowledge Hub',
        item: 'https://www.wiziot.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.category || 'Telematics',
        item: `https://www.wiziot.com/blog?category=${encodeURIComponent(blog.category || 'Telematics')}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: blog.title,
        item: `https://www.wiziot.com/blog/${blog.slug}`,
      },
    ],
  };
}

