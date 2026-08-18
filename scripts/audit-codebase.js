const fs = require('fs');
const path = require('path');

const targetDirs = ['app', 'components', 'data', 'lib', 'public', 'BLOGS'];
const forbiddenTerms = [
  'nowfloats',
  'now float',
  'probiota',
  'subtangent',
  'subagent',
  'ideation 1',
  'grok prompt',
  'claude.md',
  'agents.md',
  'todo:',
  'fixme:',
  'lorem ipsum',
  'dummy data',
];

let flagsFound = 0;

function scanDir(dir) {
  const fullDirPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullDirPath)) return;

  const entries = fs.readdirSync(fullDirPath, { withFileTypes: true });

  for (const entry of entries) {
    const resPath = path.join(fullDirPath, entry.name);
    if (entry.isDirectory()) {
      scanDir(path.join(dir, entry.name));
    } else if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.jsx') || entry.name.endsWith('.json') || entry.name.endsWith('.md') || entry.name.endsWith('.html') || entry.name.endsWith('.txt'))) {
      const content = fs.readFileSync(resPath, 'utf8');
      const lowerContent = content.toLowerCase();

      forbiddenTerms.forEach(term => {
        if (lowerContent.includes(term)) {
          console.log(`⚠️ Flag found in [${path.relative(path.join(__dirname, '..'), resPath)}]: contains "${term}"`);
          flagsFound++;
        }
      });
    }
  }
}

console.log('🔍 Starting Comprehensive Enterprise Website Audit...');
targetDirs.forEach(d => scanDir(d));

if (flagsFound === 0) {
  console.log('✅ Audit Complete: 0 unprofessional terms or internal prompt leaks found across app/, components/, data/, lib/, public/, and BLOGS/!');
} else {
  console.log(`⚠️ Audit finished with ${flagsFound} flags to address.`);
}
