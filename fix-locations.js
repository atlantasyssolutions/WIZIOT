const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'locations.js');
let content = fs.readFileSync(filePath, 'utf8');

// The regex will match the corridor property and the localCaseStudy property.
// Since they are in the same object, it's a bit tricky with pure regex, but we can match the whole object.
// Actually, let's just replace all localCaseStudy lines with a string that says:
// "Engineered for compliance and operational efficiency across local transit corridors and regulatory frameworks."
// Wait, the user said: "the actual corridor... genuine local specificity beats invented local proof".

// A better way: parse the file by splitting on '{' and '}'.
let newContent = content.replace(/corridor:\s*'([^']*)'([\s\S]*?)localCaseStudy:\s*'([^']*)'/g, (match, corridor, middle, oldCaseStudy) => {
    let newText = `Engineered for telematics deployments and compliance tracking along the ${corridor}.`;
    return `corridor: '${corridor}'${middle}localCaseStudy: '${newText}'`;
});

// Also fix the case where corridor is below localCaseStudy (if any)
newContent = newContent.replace(/localCaseStudy:\s*'([^']*)'([\s\S]*?)corridor:\s*'([^']*)'/g, (match, oldCaseStudy, middle, corridor) => {
    let newText = `Engineered for telematics deployments and compliance tracking along the ${corridor}.`;
    return `localCaseStudy: '${newText}'${middle}corridor: '${corridor}'`;
});

fs.writeFileSync(filePath, newContent);
console.log('Fixed localCaseStudy in locations.js');
