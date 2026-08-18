const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '..', 'BLOGS');
const imagePromptsFile = path.join(__dirname, '..', 'IMAGE_PROMPTS_GOOGLE_LABS.md');

// Helper to generate a contextual photorealistic prompt based on blog attributes
function generatePromptForBlog(title, category, content) {
  const lowerTitle = title.toLowerCase();
  const lowerCat = (category || '').toLowerCase();
  const lowerContent = (content || '').toLowerCase();

  if (lowerTitle.includes('fuel') || lowerTitle.includes('siphoning') || lowerTitle.includes('probe') || lowerTitle.includes('tank')) {
    if (lowerTitle.includes('dual tank') || lowerTitle.includes('equalization')) {
      return `Dual aluminum commercial semi-truck fuel tanks connected by an equalization hose, 3D isometric view displaying digital telemetry lines streaming fuel level balance readings to an onboard IoT unit, dark modern industrial style, 8k resolution.`;
    }
    if (lowerTitle.includes('night') || lowerTitle.includes('depot') || lowerTitle.includes('theft')) {
      return `Nighttime scene at a remote African logistics depot: close-up on the fuel tank of a parked commercial truck, infrared thermal overlay highlighting an instant fuel-drop alert triggered by a capacitive probe sensor, dark cinematic atmosphere, 8k photorealism.`;
    }
    return `Close-up macro shot of a stainless steel capacitive fuel level probe rod inserted into an aluminum truck fuel tank, surrounded by glowing cyber-cyan volumetric telemetry data waves, dark workshop background, 8k resolution.`;
  }

  if (lowerTitle.includes('jamming') || lowerTitle.includes('jammer') || lowerTitle.includes('hijack') || lowerTitle.includes('covert') || lowerTitle.includes('immobiliz')) {
    if (lowerTitle.includes('covert') || lowerTitle.includes('secondary')) {
      return `X-ray style cutaway of a sealed freight container revealing high-value electronics cargo, showing a concealed secondary covert tracking unit broadcasting an encrypted signal through cellular signal loss, dark high-tech security render, 8k.`;
    }
    if (lowerTitle.includes('immobiliz')) {
      return `Side view of a commercial haulage truck on a highway at night, showing glowing visual indicators of ISO 26262 speed-restricted remote engine deceleration from 90 km/h down to safe crawl speed without wheel lockup, 8k.`;
    }
    return `A heavy freight truck driving along a dark mountain highway in Mexico at dusk, a glowing electromagnetic cyan anti-jamming shield surrounding the truck repelling red interference frequency waves, high contrast 8k.`;
  }

  if (lowerTitle.includes('temp') || lowerTitle.includes('pharma') || lowerTitle.includes('cold chain') || lowerTitle.includes('reefer') || lowerTitle.includes('gdp') || lowerTitle.includes('21 cfr')) {
    if (lowerTitle.includes('vaccine') || lowerTitle.includes('pharma')) {
      return `Interior view of a sterile refrigerated trailer: rows of pharmaceutical vaccine boxes equipped with wireless BLE temperature sensors emitting glowing ice-blue thermal mesh lines, -80°C ultra-low monitoring, 8k clinical photorealism.`;
    }
    return `Refrigerated reefer truck idling at a sunlit port terminal, displaying a holographic thermal digital twin overlay showing uniform interior airflow and real-time temperature logs, 8k resolution.`;
  }

  if (lowerTitle.includes('dms') || lowerTitle.includes('fatigue') || lowerTitle.includes('adas') || lowerTitle.includes('gsr') || lowerTitle.includes('speed') || lowerTitle.includes('camera')) {
    if (lowerTitle.includes('fatigue') || lowerTitle.includes('micro-sleep') || lowerTitle.includes('scorecard')) {
      return `Inside the cab of a commercial truck at night: a compact dual-AI DMS camera illuminating the driver with invisible 940nm IR LEDs, displaying a dynamic real-time facial mesh and PERCLOS fatigue risk scorecard overlay, 8k photorealism.`;
    }
    return `Driver's point of view through the windshield of a European long-haul truck, ADAS computer vision system highlighting forward vehicle distance and overhead EU GSR 2024 ISA speed signs with glowing cyan target indicators, 8k.`;
  }

  if (lowerTitle.includes('atex') || lowerTitle.includes('petroleum') || lowerTitle.includes('tanker') || lowerTitle.includes('hazard')) {
    return `Gold-anodized ATEX Zone 0 intrinsically safe fuel level sensor mounted inside a petroleum tanker dome, operating safely inside a high-contrast oil refinery environment at sunset, 8k industrial render.`;
  }

  if (lowerTitle.includes('mining') || lowerTitle.includes('ip69k') || lowerTitle.includes('dump truck') || lowerTitle.includes('excavator') || lowerTitle.includes('vibration')) {
    return `Massive 300-ton yellow open-pit mining dump truck operating in a dusty pit under extreme washdown, close-up on an IP69K sealed ruggedized telematics gateway mounted on the heavy chassis frame, 8k photorealism.`;
  }

  if (lowerTitle.includes('ev') || lowerTitle.includes('bms') || lowerTitle.includes('battery') || lowerTitle.includes('thermal runaway')) {
    return `Commercial electric semi-truck crossing a desert highway in 50°C heat, 3D transparent chassis cutaway showing liquid cooling channels and active battery management system (BMS) thermal monitoring metrics, 8k.`;
  }

  if (lowerTitle.includes('ble') || lowerTitle.includes('chassis') || lowerTitle.includes('port') || lowerTitle.includes('intermodal') || lowerTitle.includes('causeway')) {
    return `High-altitude aerial view of an intermodal port terminal packed with container chassis, glowing Bluetooth low energy (BLE) asset density signals connecting thousands of chassis to a central logistics dashboard, 8k aerial render.`;
  }

  return `Modern commercial transport vehicle operating in a high-tech logistics environment, glowing 3D telematics HUD overlay displaying real-time vehicle health, GPS location, and operational parameters, 8k cinematic photorealism.`;
}

async function run() {
  console.log('Reading existing IMAGE_PROMPTS_GOOGLE_LABS.md...');
  const existingContent = fs.readFileSync(imagePromptsFile, 'utf8');

  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} total blog files in BLOGS/.`);

  let newPromptsMarkdown = '\n';

  files.forEach((file, index) => {
    const articleNum = index + 1;

    // We only need to generate for Article 51 onwards
    if (articleNum <= 50) return;

    const fullPath = path.join(blogsDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');

    const titleMatch = content.match(/title:\s*(.*)/);
    const categoryMatch = content.match(/category:\s*(.*)/);

    const title = titleMatch ? titleMatch[1].replace(/['"]/g, '').trim() : file.replace(/\.md$/, '').replace(/-/g, ' ');
    const category = categoryMatch ? categoryMatch[1].replace(/['"]/g, '').trim() : '';

    const prompt = generatePromptForBlog(title, category, content);

    newPromptsMarkdown += `### Article ${articleNum}: ${title}\n> ${prompt}\n\n`;
  });

  const updatedContent = existingContent.trim() + '\n' + newPromptsMarkdown.trim() + '\n';
  fs.writeFileSync(imagePromptsFile, updatedContent, 'utf8');
  console.log(`✅ Successfully generated image prompts for all ${files.length} articles!`);
}

run();
