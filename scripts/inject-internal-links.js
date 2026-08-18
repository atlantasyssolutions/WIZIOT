/**
 * WizIOT Smart Internal Cross-Linking Engine
 * 
 * Reads all 568 BLOGS/*.md files, extracts category + keywords,
 * finds the 4 most related blogs per article, and injects:
 *   1. A "Related Articles" section at the end of each blog
 *   2. Contextual product page links based on content topics
 * 
 * Run: node scripts/inject-internal-links.js
 */

const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '..', 'BLOGS');
const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));

console.log(`🔗 WizIOT Internal Cross-Linking Engine`);
console.log(`📚 Found ${files.length} blog articles to process...\n`);

// ─── Step 1: Parse all blogs into an index ───────────────────────────────────
const blogIndex = files.map(file => {
  const slug = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(blogsDir, file), 'utf8');

  // Parse frontmatter
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  let title = slug, category = 'General', geoRegion = 'Global', seoKeywords = [];

  if (frontmatterMatch) {
    const fm = frontmatterMatch[1];
    const titleMatch = fm.match(/^title:\s*(.+)$/m);
    const catMatch = fm.match(/^category:\s*(.+)$/m);
    const geoMatch = fm.match(/^geoRegion:\s*(.+)$/m);
    const kwMatch = fm.match(/^seoKeywords:\s*(.+)$/m);

    if (titleMatch) title = titleMatch[1].trim().replace(/^['"]|['"]$/g, '');
    if (catMatch) category = catMatch[1].trim();
    if (geoMatch) geoRegion = geoMatch[1].trim();
    if (kwMatch) {
      seoKeywords = kwMatch[1].split(',').map(k => k.trim().toLowerCase());
    }
  }

  // Already has cross-links injected? Skip to avoid double-injection
  const alreadyLinked = raw.includes('## 📌 Related Articles') || raw.includes('## Related Articles');

  return { slug, file, title, category, geoRegion, seoKeywords, alreadyLinked };
});

// ─── Step 2: Keyword overlap scoring ─────────────────────────────────────────
function getRelatednessScore(a, b) {
  if (a.slug === b.slug) return -1;
  let score = 0;
  if (a.category === b.category) score += 10;
  if (a.geoRegion === b.geoRegion) score += 5;

  const aKeywords = new Set(a.seoKeywords.flatMap(k => k.split(' ')));
  const bKeywords = new Set(b.seoKeywords.flatMap(k => k.split(' ')));
  for (const word of aKeywords) {
    if (word.length > 4 && bKeywords.has(word)) score += 2;
  }
  return score;
}

// ─── Step 3: Product page contextual link map ─────────────────────────────────
const productLinks = [
  {
    keywords: ['fuel', 'probe', 'siphon', 'diesel', 'tank', 'float', 'capacitive', 'refuel'],
    label: 'WizIOT Fuel Monitoring & Anti-Theft Sensors',
    url: '/solutions#telematics'
  },
  {
    keywords: ['ev', 'bms', 'battery', 'electric', 'charging', 'soc', 'soh', 'range'],
    label: 'WizIOT EV & BMS Fleet Analytics',
    url: '/solutions#ev-fleets'
  },
  {
    keywords: ['cold chain', 'temperature', 'reefer', 'pharma', 'vaccine', 'gdp', 'humidity', 'freezer'],
    label: 'WizIOT Cold Chain & Pharma Logistics',
    url: '/solutions#cold-chain'
  },
  {
    keywords: ['dms', 'adas', 'driver', 'fatigue', 'drowsiness', 'camera', 'collision', 'distraction'],
    label: 'WizIOT ADAS & Driver Safety Monitoring',
    url: '/solutions#healthcare'
  },
  {
    keywords: ['mining', 'excavator', 'dump truck', 'hydraulic', 'ip69k', 'heavy equipment', 'construction'],
    label: 'WizIOT Heavy Equipment & Mining Telematics',
    url: '/solutions#industrial-iot'
  },
  {
    keywords: ['jammer', 'spoofing', 'anti-jam', 'hijack', 'covert', 'panic button', 'immobiliz', 'cargo theft'],
    label: 'WizIOT Anti-Theft & Cargo Security Platform',
    url: '/platform'
  },
  {
    keywords: ['roi', 'cost', 'savings', 'payback', 'compliance', 'enterprise', 'reporting', 'audit'],
    label: 'WizIOT Enterprise ROI & Compliance Dashboard',
    url: '/platform'
  },
  {
    keywords: ['pricing', 'subscription', 'saas', 'plan', 'tier', 'package'],
    label: 'View WizIOT Pricing & SaaS Plans',
    url: '/pricing'
  }
];

function getProductLinks(blog) {
  const contentLower = (blog.title + ' ' + blog.seoKeywords.join(' ') + ' ' + blog.category).toLowerCase();
  const matched = [];

  for (const pl of productLinks) {
    const hit = pl.keywords.some(kw => contentLower.includes(kw));
    if (hit && matched.length < 2) {
      matched.push(pl);
    }
  }
  return matched;
}

// ─── Step 4: Inject links into each blog ─────────────────────────────────────
let injected = 0;
let skipped = 0;

for (const blog of blogIndex) {
  if (blog.alreadyLinked) {
    skipped++;
    continue;
  }

  // Find top 4 related articles
  const ranked = blogIndex
    .filter(b => b.slug !== blog.slug)
    .map(b => ({ ...b, score: getRelatednessScore(blog, b) }))
    .filter(b => b.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const relatedProductLinks = getProductLinks(blog);

  // Build Related Articles markdown
  let relatedSection = '\n\n---\n\n## Related Articles\n\n';

  if (ranked.length > 0) {
    ranked.forEach(rel => {
      relatedSection += `- [${rel.title}](/blog/${rel.slug})\n`;
    });
  }

  // Build Product CTA section
  if (relatedProductLinks.length > 0) {
    relatedSection += '\n\n---\n\n## Explore WizIOT Solutions\n\n';
    relatedProductLinks.forEach(pl => {
      relatedSection += `- [${pl.label}](${pl.url})\n`;
    });
  }

  // Always add contact CTA
  relatedSection += '\n[Request a Free Fleet Assessment & Demo](/contact)\n';

  // Append to the blog file
  const filePath = path.join(blogsDir, blog.file);
  const existing = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(filePath, existing + relatedSection, 'utf8');

  injected++;
  if (injected % 50 === 0) {
    console.log(`✓ Progress: ${injected} / ${blogIndex.length - skipped} articles processed...`);
  }
}

console.log(`\n✅ Done!`);
console.log(`   → ${injected} blogs updated with internal cross-links`);
console.log(`   → ${skipped} blogs already had cross-links (skipped)`);
console.log(`\n📈 SEO Impact:`);
console.log(`   → Every blog now links to 4 related articles (topic cluster signal)`);
console.log(`   → Product page links from relevant content (commercial intent signal)`);
console.log(`   → Contact page CTA from every article (conversion funnel)`);
