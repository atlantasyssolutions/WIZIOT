const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../data/locations.js');
const newLocationsPath = path.join(__dirname, 'new-locations.json');

// Read the new locations JSON
const newLocationsData = JSON.parse(fs.readFileSync(newLocationsPath, 'utf-8'));

// Create a map for quick lookup
const newLocationsMap = {};
newLocationsData.forEach(item => {
  newLocationsMap[item.citySlug] = item.localMarketContext;
});

// Read the original locations.js
let locationsContent = fs.readFileSync(locationsPath, 'utf-8');

// The original locations.js exports an array of objects.
// We can use a regex to match each object, but since it's a JS file, a safer way
// is to execute it, get the array, modify it, and write it back. 
// However, since it uses `export const`, we need to change it to CommonJS temporarily,
// or just parse it. Let's just use string replacement on the file content.

// We will find each `slug: '...',` or `slug: "...",` and inject `localMarketContext: '...',` right after it.
let updatedContent = locationsContent;

for (const [slug, context] of Object.entries(newLocationsMap)) {
  const regex = new RegExp(`slug:\\s*['"\`]${slug}['"\`]`, 'i');
  
  // Escape backticks and single quotes in the context
  const escapedContext = context.replace(/'/g, "\\'").replace(/\n/g, " ");
  
  updatedContent = updatedContent.replace(regex, (match) => {
    return `${match},\n    localMarketContext: '${escapedContext}'`;
  });
}

fs.writeFileSync(locationsPath, updatedContent, 'utf-8');
console.log('Successfully merged localMarketContext into locations.js');
