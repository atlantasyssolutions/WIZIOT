const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.js')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk('./app');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Fix 1: <div style={{ height: '...', ... }}> \n <Image ... fill
  // Add position: 'relative' if missing.
  // We can look for <div style={{...}} containing height or width but missing position: 'relative' right before an <Image 
  
  // Actually, a simpler regex for the known patterns:
  // style={{ width: '100%', height: '380px' ... }} => style={{ position: 'relative', width... }}
  content = content.replace(/style=\{\{\s*width:\s*'100%',\s*height:\s*'380px'/g, "style={{ position: 'relative', width: '100%', height: '380px'");
  content = content.replace(/style=\{\{\s*width:\s*'100%',\s*height:\s*'420px'/g, "style={{ position: 'relative', width: '100%', height: '420px'");
  content = content.replace(/style=\{\{\s*width:\s*'100%',\s*height:\s*'320px'/g, "style={{ position: 'relative', width: '100%', height: '320px'");
  
  // Fix specifically for the detailImage in solutions/[id] which has no height
  content = content.replace(
    /<div style=\{\{\s*borderRadius:\s*'20px',\s*overflow:\s*'hidden',\s*boxShadow/g, 
    "<div style={{ position: 'relative', minHeight: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow"
  );
  
  // Fix for the otherSolutions grid image
  content = content.replace(
    /style=\{\{\s*height:\s*'140px',\s*background:\s*'#0F172A',\s*overflow:\s*'hidden'\s*\}\}/g,
    "style={{ position: 'relative', height: '140px', background: '#0F172A', overflow: 'hidden' }}"
  );
  
  // Fix the blog slug space issue globally
  content = content.replace(/src=\{\`\/blog\/\$\{blog\.slug\}\s+\.webp\`\}/g, "src={`/blog/${blog.slug}.webp`}");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
    console.log('Fixed', file);
  }
});

console.log(`Done. Modified ${modifiedCount} files.`);
