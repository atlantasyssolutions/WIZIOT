const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '..', 'BLOGS');
const publicBlogDir = path.join(__dirname, '..', 'public', 'blog');
const publicDir = path.join(__dirname, '..', 'public');

// Category Fallback Templates in public/
const categoryFallbacks = {
  fuel: path.join(publicDir, 'blog-fuel-theft-prevention.webp'),
  security: path.join(publicDir, 'blog-anti-jamming-security.webp'),
  coldChain: path.join(publicDir, 'blog-cold-chain-monitoring.webp'),
  heavy: path.join(publicDir, 'blog-heavy-equipment-telematics.webp'),
  default: path.join(publicDir, 'blog-cross-border-telematics.webp'),
};

function getFallbackForCategory(title, category) {
  const t = (title || '').toLowerCase();
  const c = (category || '').toLowerCase();

  if (t.includes('fuel') || t.includes('siphoning') || t.includes('probe') || c.includes('fuel')) {
    return categoryFallbacks.fuel;
  }
  if (t.includes('jam') || t.includes('hijack') || t.includes('covert') || t.includes('security') || t.includes('dms') || t.includes('adas') || c.includes('safety') || c.includes('video')) {
    return categoryFallbacks.security;
  }
  if (t.includes('temp') || t.includes('cold') || t.includes('reefer') || t.includes('pharma') || t.includes('gdp') || c.includes('cold')) {
    return categoryFallbacks.coldChain;
  }
  if (t.includes('mining') || t.includes('ip69k') || t.includes('dump') || t.includes('heavy') || t.includes('atex') || c.includes('mining') || c.includes('hazardous')) {
    return categoryFallbacks.heavy;
  }

  return categoryFallbacks.default;
}

function run() {
  if (!fs.existsSync(publicBlogDir)) {
    fs.mkdirSync(publicBlogDir, { recursive: true });
  }

  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} blogs in BLOGS/. Checking image files...`);

  let createdCount = 0;
  let existingCount = 0;

  files.forEach(file => {
    const slug = file.replace(/\.md$/, '');
    const destImage = path.join(publicBlogDir, `${slug}.webp`);

    if (!fs.existsSync(destImage)) {
      const content = fs.readFileSync(path.join(blogsDir, file), 'utf8');
      const titleMatch = content.match(/title:\s*(.*)/);
      const categoryMatch = content.match(/category:\s*(.*)/);

      const title = titleMatch ? titleMatch[1] : '';
      const category = categoryMatch ? categoryMatch[1] : '';

      const fallbackSrc = getFallbackForCategory(title, category);

      if (fs.existsSync(fallbackSrc)) {
        fs.copyFileSync(fallbackSrc, destImage);
        createdCount++;
      } else {
        // Backup copy from any existing webp
        fs.copyFileSync(categoryFallbacks.default, destImage);
        createdCount++;
      }
    } else {
      existingCount++;
    }
  });

  console.log(`✅ Image processing complete! ${existingCount} already existed, ${createdCount} fallback images generated in public/blog/!`);
}

run();
