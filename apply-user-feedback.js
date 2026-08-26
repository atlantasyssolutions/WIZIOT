const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, searchRegex, replaceText) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(searchRegex, replaceText);
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  }
}

// 1. Scrub 99.99% and 25+
replaceInFile('data/features.js', /99\.99%/g, '24/7');
replaceInFile('data/stats.js', /99\.99%/g, '99.9%');
replaceInFile('app/pricing/PricingClient.js', /SLA 99\.99% Uptime Guarantee/g, 'High-Availability Uptime SLA');
replaceInFile('app/[city]/pricing/PricingClient.js', /SLA 99\.99% Uptime Guarantee/g, 'High-Availability Uptime SLA');
replaceInFile('app/platform/page.js', /99\.99% SLA/g, 'High-Availability SLA');
replaceInFile('app/[city]/platform/page.js', /99\.99% SLA/g, 'High-Availability SLA');
replaceInFile('components/sections/RoiCalculator.js', /99\.99% Guaranteed/g, 'Enterprise Guaranteed');
replaceInFile('components/layout/Footer.js', /25\+ Global Deployments/g, 'Global Deployments');

// 2. Fix Footer LinkedIn
replaceInFile('components/layout/Footer.js', /href="https:\/\/www\.linkedin\.com[^"]*"/g, 'href="https://www.linkedin.com/company/wiziot-technologies/"');
replaceInFile('app/layout.js', /'https:\/\/www\.linkedin\.com\/company\/wiziot'/g, "'https://www.linkedin.com/company/wiziot-technologies/'");

// 3. Update lib/blog.js to include indexable
replaceInFile('lib/blog.js', /const readTime = attributes\.readTime/g, "const indexable = attributes.indexable === true || attributes.indexable === 'true';\n      const readTime = attributes.readTime");
replaceInFile('lib/blog.js', /readTime,/g, "readTime,\n        indexable,");

// 4. Update app/blog/[slug]/page.js for indexable logic
replaceInFile('app/blog/[slug]/page.js', /const isTemplated = blog\.content[^;]+;/g, "const isIndexable = blog.indexable === true;");
replaceInFile('app/blog/[slug]/page.js', /index: !isTemplated/g, "index: isIndexable");

// 5. Update sitemap.js to use indexable and omit today's date if no publishedAt
replaceInFile('app/sitemap.js', /const validBlogs = blogs\.filter[^;]+;/g, "const validBlogs = blogs.filter(b => b.indexable === true);");
replaceInFile('app/sitemap.js', /lastModified: new Date\(blog\.publishedAt \|\| Date\.now\(\)\)\.toISOString\(\),/g, "lastModified: blog.publishedAt ? new Date(blog.publishedAt).toISOString() : undefined,");

// Also update core routes lastModified to not emit today's date on every build, just omit it so it relies on headers, or leave it. 
// Actually, Next.js sitemap can omit lastModified.
replaceInFile('app/sitemap.js', /lastModified: new Date\(\)\.toISOString\(\),/g, "");

// 6. Add indexable: true to the good blogs
const goodBlogs = [
  'BLOGS/anti-hijack-telematics-mexico-city-truck-highway.md',
  'BLOGS/air-cargo-to-road-cold-chain-handover-monitoring.md'
];

goodBlogs.forEach(fp => {
  if (fs.existsSync(fp)) {
    let md = fs.readFileSync(fp, 'utf8');
    if (!md.includes('indexable:')) {
      md = md.replace(/^---/, '---\nindexable: true');
      fs.writeFileSync(fp, md);
    }
  }
});
