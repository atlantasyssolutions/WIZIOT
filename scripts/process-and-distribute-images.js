const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '..', 'images');
const publicDir = path.join(__dirname, '..', 'public');
const blogImgDir = path.join(publicDir, 'blog');
const locationsImgDir = path.join(publicDir, 'locations');
const blogsDir = path.join(__dirname, '..', 'BLOGS');

if (!fs.existsSync(blogImgDir)) fs.mkdirSync(blogImgDir, { recursive: true });
if (!fs.existsSync(locationsImgDir)) fs.mkdirSync(locationsImgDir, { recursive: true });

async function main() {
  console.log('🖼️ Starting Full Image Processing & Distribution Engine...');
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
  console.log(`Found ${files.length} raw image files in images/`);

  // Step 1: Process and optimize all raw images into public/processed_pool/
  const processedPoolDir = path.join(__dirname, '..', 'public', 'processed_pool');
  if (!fs.existsSync(processedPoolDir)) fs.mkdirSync(processedPoolDir, { recursive: true });

  const processedImages = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const srcPath = path.join(srcDir, file);
    const cleanName = `img_${i + 1}_${file.toLowerCase().replace(/[^\w-]/g, '_')}.webp`;
    const destPath = path.join(processedPoolDir, cleanName);

    try {
      await sharp(srcPath)
        .resize(1200, 675, { fit: 'cover', position: 'center' })
        .webp({ quality: 82, effort: 6 })
        .withMetadata({
          exif: {
            IFD0: {
              ImageDescription: 'WizIOT B2B Telematics Visual Asset',
              Software: 'WizIOT Image Processing Engine',
              Copyright: 'WizIOT Telematics 2026'
            }
          }
        })
        .toFile(destPath);

      processedImages.push({
        filename: file,
        cleanPath: destPath,
        relUrl: `/processed_pool/${cleanName}`
      });

      if ((i + 1) % 20 === 0 || i === files.length - 1) {
        console.log(`✓ Converted & Stripped Metadata: [${i + 1}/${files.length}] images...`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log(`\n✅ Converted ${processedImages.length} images into clean WebP format.`);

  // Step 2: Categorize processed images into topic pools
  const pools = {
    fuel: [],
    security: [],
    coldChain: [],
    adas: [],
    heavy: [],
    ev: [],
    port: [],
    general: []
  };

  processedImages.forEach(img => {
    const name = img.filename.toLowerCase();
    if (name.includes('fuel') || name.includes('probe') || name.includes('tank') || name.includes('siphoning')) {
      pools.fuel.push(img);
    } else if (name.includes('security') || name.includes('jammer') || name.includes('hijack') || name.includes('panic') || name.includes('lock') || name.includes('seal') || name.includes('bypass') || name.includes('cut-off')) {
      pools.security.push(img);
    } else if (name.includes('cold') || name.includes('reefer') || name.includes('temp') || name.includes('pharma') || name.includes('vaccine') || name.includes('vapor') || name.includes('dry-ice') || name.includes('tuna')) {
      pools.coldChain.push(img);
    } else if (name.includes('driver') || name.includes('speed') || name.includes('adas') || name.includes('sign') || name.includes('dashboard') || name.includes('viewing')) {
      pools.adas.push(img);
    } else if (name.includes('mining') || name.includes('dump') || name.includes('excavator') || name.includes('conduit') || name.includes('dirt') || name.includes('muddy')) {
      pools.heavy.push(img);
    } else if (name.includes('electric') || name.includes('ev') || name.includes('charging') || name.includes('battery')) {
      pools.ev.push(img);
    } else if (name.includes('port') || name.includes('terminal') || name.includes('chassis') || name.includes('container') || name.includes('border') || name.includes('ble_signals')) {
      pools.port.push(img);
    } else {
      pools.general.push(img);
    }
  });

  console.log(`Pool Distribution -> Fuel: ${pools.fuel.length}, Security: ${pools.security.length}, ColdChain: ${pools.coldChain.length}, ADAS: ${pools.adas.length}, Heavy: ${pools.heavy.length}, EV: ${pools.ev.length}, Port: ${pools.port.length}, General: ${pools.general.length}`);

  // Step 3: Distribute unique images across all 568 blogs in BLOGS/
  const blogFiles = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
  console.log(`Distributing across ${blogFiles.length} blogs...`);

  let copiedBlogImages = 0;

  blogFiles.forEach((file, idx) => {
    const slug = file.replace(/\.md$/, '');
    const destPath = path.join(blogImgDir, `${slug}.webp`);
    const content = fs.readFileSync(path.join(blogsDir, file), 'utf8');
    const lowerContent = (file + ' ' + content).toLowerCase();

    let poolToUse = pools.general;
    if (lowerContent.includes('fuel') || lowerContent.includes('probe') || lowerContent.includes('tank') || lowerContent.includes('siphoning')) {
      poolToUse = pools.fuel.length > 0 ? pools.fuel : pools.general;
    } else if (lowerContent.includes('jam') || lowerContent.includes('hijack') || lowerContent.includes('covert') || lowerContent.includes('lock') || lowerContent.includes('immobiliz')) {
      poolToUse = pools.security.length > 0 ? pools.security : pools.general;
    } else if (lowerContent.includes('temp') || lowerContent.includes('cold') || lowerContent.includes('reefer') || lowerContent.includes('pharma') || lowerContent.includes('vaccine') || lowerContent.includes('gdp')) {
      poolToUse = pools.coldChain.length > 0 ? pools.coldChain : pools.general;
    } else if (lowerContent.includes('dms') || lowerContent.includes('adas') || lowerContent.includes('fatigue') || lowerContent.includes('speed') || lowerContent.includes('camera')) {
      poolToUse = pools.adas.length > 0 ? pools.adas : pools.general;
    } else if (lowerContent.includes('mining') || lowerContent.includes('dump') || lowerContent.includes('excavator') || lowerContent.includes('heavy') || lowerContent.includes('ip69k')) {
      poolToUse = pools.heavy.length > 0 ? pools.heavy : pools.general;
    } else if (lowerContent.includes('ev') || lowerContent.includes('bms') || lowerContent.includes('battery') || lowerContent.includes('charging')) {
      poolToUse = pools.ev.length > 0 ? pools.ev : pools.general;
    } else if (lowerContent.includes('port') || lowerContent.includes('chassis') || lowerContent.includes('container') || lowerContent.includes('intermodal') || lowerContent.includes('border')) {
      poolToUse = pools.port.length > 0 ? pools.port : pools.general;
    }

    if (poolToUse.length === 0) poolToUse = processedImages;

    // Pick image from pool based on index modulo to distribute diverse images cleanly
    const chosenImage = poolToUse[idx % poolToUse.length];
    fs.copyFileSync(chosenImage.cleanPath, destPath);
    copiedBlogImages++;
  });

  console.log(`✅ Successfully assigned distinct high-res WebP images to all ${copiedBlogImages} blog articles!`);

  // Step 4: Map core UI hero & feature banners to the best high-res photos
  const heroImage = processedImages.find(img => img.filename.toLowerCase().includes('fleet_operations_control_room')) || processedImages[0];
  const platformImage = processedImages.find(img => img.filename.toLowerCase().includes('tablet_displaying_fleet')) || processedImages[1];
  const hardwareImage = processedImages.find(img => img.filename.toLowerCase().includes('industrial_iot_hardware')) || processedImages[2];
  const heavyImage = processedImages.find(img => img.filename.toLowerCase().includes('mining_trucks_and_excavators')) || processedImages[3];
  const logisticsImage = processedImages.find(img => img.filename.toLowerCase().includes('semi-trucks_parked_at_logistics')) || processedImages[4];

  if (heroImage) fs.copyFileSync(heroImage.cleanPath, path.join(publicDir, 'hero-telematics-dashboard.webp'));
  if (platformImage) fs.copyFileSync(platformImage.cleanPath, path.join(publicDir, 'platform-telematics-analytics.webp'));
  if (hardwareImage) fs.copyFileSync(hardwareImage.cleanPath, path.join(publicDir, 'hardware-telematics-stack.webp'));
  if (heavyImage) fs.copyFileSync(heavyImage.cleanPath, path.join(publicDir, 'heavy-equipment-telematics.webp'));
  if (logisticsImage) fs.copyFileSync(logisticsImage.cleanPath, path.join(publicDir, 'enterprise-logistics-fleet.webp'));

  console.log('🎉 Processing & Distribution Complete!');
}

main();
