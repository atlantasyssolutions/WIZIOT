const fs = require('fs');

const filesToFix = [
  'components/blog/BlogCard.js',
  'app/[city]/blog/[slug]/page.js',
  'app/[city]/partners/page.js',
  'app/[city]/platform/page.js',
  'app/[city]/solutions/[id]/page.js',
  'app/[city]/solutions/page.js',
  'app/blog/[slug]/page.js',
  'app/partners/page.js',
  'app/platform/page.js',
  'app/solutions/[id]/page.js',
  'app/solutions/page.js',
  'components/layout/Header.js',
  'components/sections/FeaturesTab.js',
  'components/sections/VerticalsGrid.js'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix BlogCard specifically
    if (file.includes('BlogCard')) {
       content = content.replace(/onError=\{\(\) = fill style=\{\{ objectFit: 'cover' \}\} \/> setImgSrc\(fallbackImageSrc\)\}/g, "onError={() => setImgSrc(fallbackImageSrc)} fill");
    } else {
       // Fix the extra slash issue
       content = content.replace(/\/\s*fill style=\{\{\s*objectFit:\s*'cover'\s*\}\}\s*\/>/g, "fill style={{ objectFit: 'cover' }} />");
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
});
