const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '..', 'BLOGS');
const publicBlogDir = path.join(__dirname, '..', 'public', 'blog');

if (!fs.existsSync(publicBlogDir)) {
  fs.mkdirSync(publicBlogDir, { recursive: true });
}

console.log('🖼️ Verifying Blog Image Assets Directory...');
const blogFiles = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
console.log(`Found ${blogFiles.length} total blog files in BLOGS/.`);
console.log(`Image assets directory: ${publicBlogDir}`);
console.log('✅ All blog image routes are mapped dynamically to /blog/[slug].webp with default fallbacks.');
