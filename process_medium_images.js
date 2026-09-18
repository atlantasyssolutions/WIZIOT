const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const mediumPostsDir = path.join(__dirname, 'medium posts');
const rawBackupDir = path.join(mediumPostsDir, 'raw_backup');

if (!fs.existsSync(rawBackupDir)) {
  fs.mkdirSync(rawBackupDir, { recursive: true });
}

// 1. Read WizIOT Medium Posts to get accurate metadata
const wizRaw = fs.readFileSync(path.join(__dirname, 'WIZIOT_MEDIUM_POSTS.md'), 'utf8');
const wizArticles = wizRaw.split(/^## Article /m).slice(1).map((b, idx) => {
  const firstLineEnd = b.indexOf('\n');
  const header = b.slice(0, firstLineEnd).trim();
  const rest = b.slice(firstLineEnd);
  const titleMatch = rest.match(/\*\*Medium Title:\*\*\s*(.+)/);
  const tagsMatch = rest.match(/\*\*Tags:\*\*\s*(.+)/);
  const canonicalMatch = rest.match(/\*\*Canonical URL:\*\*\s*(.+)/);
  
  let content = '';
  const contentIdx = rest.indexOf('**Content:**');
  if (contentIdx !== -1) {
    content = rest.slice(contentIdx + '**Content:**'.length, contentIdx + 300).trim();
  }

  return {
    id: idx + 1,
    header,
    title: titleMatch ? titleMatch[1].trim() : header,
    tags: tagsMatch ? tagsMatch[1].trim() : 'Telematics, IoT, Fleet Management, Logistics',
    canonical: canonicalMatch ? canonicalMatch[1].trim() : 'https://www.wiziot.com/solutions',
    excerpt: content.slice(0, 180)
  };
});

// Mapping filename cues -> Article ID & clean slug
const mappings = [
  { match: 'Temperature_probe_on_cargo_wall', articleId: 1, slug: 'article-01-21-cfr-part-11-cold-chain-dubai' },
  { match: 'Driving_electric_truck_on_highway', articleId: 2, slug: 'article-02-eu-gsr-2024-adas-collision-warnings' },
  { match: 'Truck_driver_viewing_speed_notif', articleId: 3, slug: 'article-03-eu-gsr-intelligent-speed-assistance' },
  { match: 'Semi-truck_driving_on_highway', articleId: 4, slug: 'article-04-adas-forward-collision-warning-highway-freight' },
  { match: 'ADAS_camera_mounted_behind_winds', articleId: 5, slug: 'article-05-adas-optical-camera-gateway-integration' },
  { match: 'AI_driver_monitoring_camera_mounted', articleId: 6, slug: 'article-06-ai-driver-fatigue-scoring-dms' },
  { match: 'Cargo_aircraft_loading_pharmaceu', articleId: 7, slug: 'article-07-air-cargo-to-reefer-tarmac-handover' },
  { match: 'Truck_driver_presses_emergency_s', articleId: 8, slug: 'article-08-silent-in-cabin-panic-buttons-emergency-dispatch' },
  { match: 'Freight_truck_traversing_arid_hi', articleId: 9, slug: 'article-09-anti-hijack-telematics-mexico-freight' },
  { match: 'GPS_beacon_mounted_on_trailer', articleId: 10, slug: 'article-10-covert-secondary-gps-asset-trackers' },
  { match: 'Freight_semi-trailers_at_border', articleId: 11, slug: 'article-11-anti-jamming-hardware-eastern-europe-hauls' },
  { match: 'Truck_driving_on_red_road', articleId: 12, slug: 'article-12-ruggedized-hardware-african-unpaved-roads' },
  { match: 'Truck_crossing_mountain_viaduct', articleId: 13, slug: 'article-13-poland-to-spain-trans-european-freight-haul' },
  { match: 'Freight_truck_hauling_shipping_c', articleId: 14, slug: 'article-14-mombasa-logistics-corridor-visibility' },
  { match: 'article_15_freight_yard', articleId: 15, slug: 'article-15-anti-jamming-systems-nigerian-bandit-hotspots' },
  { match: 'article_16_winter_truck', articleId: 16, slug: 'article-16-anti-jamming-systems-eastern-european-winter' },
  { match: 'article_17_africa_convoy', articleId: 17, slug: 'article-17-anti-jamming-systems-nigerian-kenyan-routes' },
  { match: 'Fuel_valve_manifold_on_tanker', articleId: 18, slug: 'article-18-atex-emergency-fuel-immobilization' },
  { match: 'Fuel_tanker_parked_at_facility', articleId: 19, slug: 'article-19-atex-fuel-probes-gcc-petroleum' },
  { match: 'article_20_atex_driver', articleId: 20, slug: 'article-20-atex-driver-panic-emergency-response' },
  { match: 'Fuel_tanker_truck_moving_toward', articleId: 21, slug: 'article-21-atex-zone-0-saudi-refinery-telemetry' },
  { match: 'Engineer_inspecting_fuel_tanker', articleId: 22, slug: 'article-22-atex-zone-0-field-inspection-checklists' },
  { match: 'Fuel_level_probe_rod_on', articleId: 23, slug: 'article-23-atex-zone-0-fuel-level-probes' },
  { match: 'article_24_flange_sensor', articleId: 24, slug: 'article-24-atex-flange-mounted-ultrasonic-sensors' },
  { match: 'Fuel_tanker_trucks_parked_at', articleId: 25, slug: 'article-25-petroleum-tanker-safety-oil-majors' },
  { match: 'article_26_chemical_sensor', articleId: 26, slug: 'article-26-hydrocarbon-vapor-resistant-sensors' },
  { match: 'Inspector_reviewing_tablet_by_truck', articleId: 27, slug: 'article-27-audit-proof-eu-digital-telematics-records' },
  { match: 'article_28_tachograph', articleId: 28, slug: 'article-28-gen2-smart-digital-tachograph-reports' },
  { match: 'article_29_border_gantry', articleId: 29, slug: 'article-29-singapore-johor-automated-border-gantry' },
  { match: 'Dispatchers_monitoring_logistics', articleId: 30, slug: 'article-30-fleet-control-tower-working-time-dashboard' }
];

async function run() {
  console.log('--- Starting Medium Post Image Crop & SEO Metadata Processing ---');

  // Step 1: Move any raw files from mediumPostsDir into rawBackupDir first
  const existingFiles = fs.readdirSync(mediumPostsDir).filter(f => {
    return (f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')) && 
           !f.startsWith('article-') && 
           !f.startsWith('test_');
  });

  for (const f of existingFiles) {
    const src = path.join(mediumPostsDir, f);
    const dest = path.join(rawBackupDir, f);
    if (!fs.existsSync(dest)) {
      fs.renameSync(src, dest);
      console.log(`Moved raw file to backup: ${f}`);
    } else {
      fs.unlinkSync(src);
    }
  }

  // Step 2: Read from rawBackupDir
  const backupFiles = fs.readdirSync(rawBackupDir).filter(f => {
    return f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png');
  });

  console.log(`Found ${backupFiles.length} raw backup images to process.`);
  const processedResults = [];

  for (const file of backupFiles) {
    const rawFilePath = path.join(rawBackupDir, file);
    const m = mappings.find(map => file.includes(map.match));

    if (!m) {
      console.warn(`[WARN] No explicit article mapping for: ${file}`);
      continue;
    }

    const art = wizArticles.find(a => a.id === m.articleId);
    if (!art) {
      console.warn(`[WARN] Article #${m.articleId} not found in database!`);
      continue;
    }

    // Inspect dimensions
    const meta = await sharp(rawFilePath).metadata();
    const origWidth = meta.width;
    const origHeight = meta.height;

    // Crop calculation to completely eliminate bottom-right Gemini watermark:
    // Original: 2752 x 1536. Watermark resides at x: ~2610..2670, y: ~1395..1475.
    // 16:9 crop cutting off the bottom 150px:
    // width: 2464, height: 1386 (exact 16:9, left: 144, top: 0)
    let cropWidth, cropHeight, cropLeft, cropTop;
    if (origWidth >= 2700 && origHeight >= 1500) {
      cropWidth = 2464;
      cropHeight = 1386;
      cropLeft = Math.round((origWidth - cropWidth) / 2);
      cropTop = 0;
    } else {
      cropHeight = Math.round(origHeight * 0.90);
      cropWidth = Math.round(cropHeight * (16 / 9));
      if (cropWidth > origWidth) {
        cropWidth = origWidth;
        cropHeight = Math.round(cropWidth * (9 / 16));
      }
      cropLeft = Math.round((origWidth - cropWidth) / 2);
      cropTop = 0;
    }

    console.log(`Processing [Article #${art.id}] ${m.slug}... (Cropping ${cropWidth}x${cropHeight} at ${cropLeft},${cropTop})`);

    // Prepare rich B2B SEO Metadata
    const imageDesc = `${art.title} | Technical Fleet Telematics Architecture by WizIOT Engineering. ${art.excerpt}`;
    const cleanKeywords = `${art.tags}, Fleet Telematics, Commercial Vehicle IoT, WizIOT Solutions, Logistics Engineering, Supply Chain Security`;
    const copyrightNotice = 'Copyright © 2026 WizIOT Technologies. All Rights Reserved. https://www.wiziot.com';

    const exifMetadata = {
      IFD0: {
        ImageDescription: imageDesc,
        Artist: 'WizIOT Fleet Engineering',
        Make: 'WizIOT Telematics',
        Model: 'WizIOT Industrial IoT Platform',
        Copyright: copyrightNotice,
        Software: 'WizIOT Media Processing Engine v2.4',
        XPTitle: art.title,
        XPComment: art.canonical,
        XPKeywords: cleanKeywords,
        XPSubject: 'Fleet Telematics & Commercial Vehicle IoT'
      }
    };

    // Output paths in mediumPostsDir
    const outJpegName = `${m.slug}.jpeg`;
    const outWebpName = `${m.slug}.webp`;
    const outJpegPath = path.join(mediumPostsDir, outJpegName);
    const outWebpPath = path.join(mediumPostsDir, outWebpName);

    // Generate clean 1080p JPEG (Quality 92) with EXIF
    await sharp(rawFilePath)
      .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
      .resize(1920, 1080)
      .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
      .withMetadata({ exif: exifMetadata })
      .toFile(outJpegPath);

    // Generate clean WebP (Quality 88) with EXIF
    await sharp(rawFilePath)
      .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
      .resize(1920, 1080)
      .webp({ quality: 88 })
      .withMetadata({ exif: exifMetadata })
      .toFile(outWebpPath);

    processedResults.push({
      articleId: art.id,
      title: art.title,
      slug: m.slug,
      jpegName: outJpegName,
      webpName: outWebpName,
      canonical: art.canonical,
      keywords: cleanKeywords
    });

    console.log(` -> Created: ${outJpegName} & ${outWebpName}`);
  }

  // Step 3: Write IMAGE_CATALOG.md for reference
  let catalogMd = `# 📸 WizIOT Medium Articles — Cleaned & SEO-Tagged Header Images\n\n`;
  catalogMd += `> **All images have been cropped to remove the Gemini watermark, resized to 1920×1080 (16:9), and injected with rich B2B SEO metadata (Title, Keywords, Canonical URLs, Copyright).**\n\n`;
  catalogMd += `| Article # | Title | Formats Available | Target Canonical URL |\n`;
  catalogMd += `| :--- | :--- | :--- | :--- |\n`;

  for (const r of processedResults.sort((a, b) => a.articleId - b.articleId)) {
    catalogMd += `| **Article ${r.articleId}** | ${r.title} | [\`.jpeg\`](${r.jpegName}) • [\`.webp\`](${r.webpName}) | [${r.canonical.replace('https://www.wiziot.com/blog/', '')}](${r.canonical}) |\n`;
  }

  catalogMd += `\n---\n\n## 📝 How to Use These Images on Medium:\n`;
  catalogMd += `1. In Medium editor, press \`Enter\` directly under your article title.\n`;
  catalogMd += `2. Click the \`+\` icon -> Click the Camera/Upload icon.\n`;
  catalogMd += `3. Select either the \`.jpeg\` or \`.webp\` for that article from this folder (\`D:\\WizzIot\\wiziot-website\\medium posts\`).\n`;
  catalogMd += `4. The image has 0 watermarks, perfect 16:9 framing, and full embedded SEO metadata!\n`;

  fs.writeFileSync(path.join(mediumPostsDir, 'IMAGE_CATALOG.md'), catalogMd, 'utf8');
  console.log(`\nCatalog written to: ${path.join(mediumPostsDir, 'IMAGE_CATALOG.md')}`);
  console.log(`Successfully processed all ${processedResults.length} images!`);
}

run().catch(err => console.error('Processing error:', err));
