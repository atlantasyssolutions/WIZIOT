const fs = require('fs');
const path = require('path');

const targets = [
  { dir: 'app/pricing', clientName: 'PricingClient', title: 'Pricing Plans | WizIOT Telematics', desc: 'Predictable pricing for growing fleets. Starter, Professional, and Enterprise telematics plans.', canonical: 'https://www.wiziot.com/pricing' },
  { dir: 'app/[city]/pricing', clientName: 'PricingClient', title: 'Pricing Plans | WizIOT Telematics', desc: 'Predictable pricing for growing fleets. Starter, Professional, and Enterprise telematics plans.', canonical: null },
  { dir: 'app/contact', clientName: 'ContactClient', title: 'Contact Sales & Support | WizIOT Telematics', desc: 'Get in touch with WizIOT for custom telematics hardware integration and enterprise SLAs.', canonical: 'https://www.wiziot.com/contact' },
  { dir: 'app/[city]/contact', clientName: 'ContactClient', title: 'Contact Sales & Support | WizIOT Telematics', desc: 'Get in touch with WizIOT for custom telematics hardware integration and enterprise SLAs.', canonical: null },
  { dir: 'app/partners', clientName: 'PartnersClient', title: 'Partner Network | WizIOT Telematics', desc: 'Join the WizIOT telematics partner network. White-label solutions, reseller programs, and hardware integrations.', canonical: 'https://www.wiziot.com/partners' },
  { dir: 'app/[city]/partners', clientName: 'PartnersClient', title: 'Partner Network | WizIOT Telematics', desc: 'Join the WizIOT telematics partner network. White-label solutions, reseller programs, and hardware integrations.', canonical: null },
  { dir: 'app', clientName: 'HomeClient', title: 'WizIOT | AI-Powered B2B Fleet Management & Telematics', desc: 'Transform fleet performance, cut fuel waste, and protect EV battery health with WizIOT’s AI-powered SaaS platform.', canonical: 'https://www.wiziot.com' }
];

targets.forEach(t => {
  const pagePath = path.join(__dirname, t.dir, 'page.js');
  const clientPath = path.join(__dirname, t.dir, `${t.clientName}.js`);
  
  if (fs.existsSync(pagePath)) {
    // 1. Rename page.js to [Name]Client.js
    let content = fs.readFileSync(pagePath, 'utf8');
    fs.writeFileSync(clientPath, content);
    
    // 2. Create new page.js
    let newPageContent = `import ${t.clientName} from './${t.clientName}';\n\n`;
    
    // For [city] routes we don't hardcode canonical/title entirely here, but they already have dynamic metadata in app/[city]/layout? No, app/[city]/page.js has it. 
    // Wait! The [city] routes for pricing/contact/partners don't have dynamic metadata currently, they just bleed.
    // If canonical is null, it means it's a dynamic route, let's just omit canonical or let Next.js handle it.
    
    newPageContent += `export const metadata = {\n`;
    newPageContent += `  title: '${t.title}',\n`;
    newPageContent += `  description: '${t.desc}',\n`;
    if (t.canonical) {
      newPageContent += `  alternates: { canonical: '${t.canonical}' }\n`;
    }
    newPageContent += `};\n\n`;
    
    // The default export for the new page
    // If it's a dynamic route it takes props
    newPageContent += `export default function Page(props) {\n`;
    newPageContent += `  return <${t.clientName} {...props} />;\n`;
    newPageContent += `}\n`;
    
    fs.writeFileSync(pagePath, newPageContent);
    console.log(`Refactored ${t.dir}`);
  }
});
