const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, 'images');
const publicDir = path.join(__dirname, 'public');
const blogImgDir = path.join(publicDir, 'blog');
const locationsImgDir = path.join(publicDir, 'locations');

// Ensure directories exist
if (!fs.existsSync(blogImgDir)) fs.mkdirSync(blogImgDir, { recursive: true });
if (!fs.existsSync(locationsImgDir)) fs.mkdirSync(locationsImgDir, { recursive: true });

// Mapping table: Source filename fragment -> Destination path relative to public/
const imageMapping = [
  // Core UI Assets
  { match: 'Fleet_operations_control_room', dest: 'hero-telematics-dashboard.webp', alt: 'WizIOT Fleet Operations Control Room Dashboard' },
  { match: 'Tablet_displaying_fleet_manageme', dest: 'platform-telematics-analytics.webp', alt: 'WizIOT Enterprise Fleet Management Analytics Tablet' },
  { match: 'Industrial_IoT_hardware_componen', dest: 'hardware-telematics-stack.webp', alt: 'WizIOT Hardware Telematics Stack' },
  { match: 'Mining_trucks_and_excavators_ope', dest: 'heavy-equipment-telematics.webp', alt: 'WizIOT Heavy Asset Equipment Telematics' },
  { match: 'Semi-trucks_parked_at_logistics_hub', dest: 'enterprise-logistics-fleet.webp', alt: 'WizIOT Enterprise Freight Fleet' },

  // Pillar Images
  { match: 'Fuel_sensor_on_truck_tank', dest: 'blog-fuel-theft-prevention.webp', alt: 'Fuel Theft & Siphoning Prevention' },
  { match: 'Security_vehicle_arriving_at_truck', dest: 'blog-anti-jamming-security.webp', alt: 'Anti-Theft, Jamming & Hijacking Security' },
  { match: 'Temperature_sensor_inside_refrig', dest: 'blog-cold-chain-monitoring.webp', alt: 'Cold Chain & Temperature Monitoring' },
  { match: 'Excavator_digging_on_constructio', dest: 'blog-heavy-equipment-telematics.webp', alt: 'Heavy Equipment & Construction Telematics' },
  { match: 'Commercial_trucks_queueing_at_bo', dest: 'blog-cross-border-telematics.webp', alt: 'Cross-Border Multi-SIM Telematics' },

  // Blog Article Thumbnails (in public/blog/[slug].webp)
  { match: 'Installing_fuel_probe_into_tank', dest: 'blog/stop-driver-diesel-siphoning-night-kenya-trucks.webp', alt: 'Stop Driver Diesel Siphoning at Night in Kenya' },
  { match: 'Dispatcher_reviewing_fuel_card_s', dest: 'blog/fake-fuel-receipts-fleet-management-nigeria-solution.webp', alt: 'Fake Fuel Receipts Solution Nigeria' },
  { match: 'Truck_driving_under_bridge', dest: 'blog/gps-signal-lost-suddenly-trucks-poland-cargo-theft.webp', alt: 'GPS Signal Lost Suddenly Poland' },
  { match: 'Manager_confirming_smartphone_ve', dest: 'blog/remote-engine-kill-switch-truck-hijacking-south-africa.webp', alt: 'Remote Engine Kill Switch South Africa' },
  { match: 'Vaccine_container_temperature_ex', dest: 'blog/reefer-temperature-alarm-failed-vaccines-spoiled-kenya.webp', alt: 'Reefer Alarm Failed Kenya Vaccines' },
  { match: 'Trucks_crossing_border_network_s', dest: 'blog/truck-gps-no-signal-at-border-zambia-tanzania-roaming.webp', alt: 'Truck GPS No Signal Zambia Tanzania' },
  { match: 'Telematics_gateway_displaying_RF', dest: 'blog/how-to-detect-gps-jammer-trucks-romania-hungary.webp', alt: 'How to Detect GPS Jammer Romania Hungary' },
  { match: 'Technician_calibrating_fuel_tank', dest: 'blog/driver-fuel-theft-monitoring-system-south-africa-fleet.webp', alt: 'Driver Fuel Theft Monitoring South Africa' },
  { match: 'Truck_driving_on_dirt_highway', dest: 'blog/rough-road-damage-truck-suspension-monitoring-africa.webp', alt: 'Rough Road Damage Telematics Africa' },
  { match: 'Electric_delivery_van_charging_a', dest: 'blog/ev-fleet-battery-management-system-bms-uae-gcc.webp', alt: 'EV Fleet Battery Management BMS UAE GCC' },
  { match: 'Trucks_queued_at_border_crossing', dest: 'blog/gps-jamming-detection-system-fleet-poland.webp', alt: 'GPS Jamming Detection Fleet Poland' },
  { match: 'Workers_loading_vaccine_boxes_in', dest: 'blog/cold-chain-monitoring-reefer-trailer-nigeria-vaccines.webp', alt: 'Cold Chain Monitoring Reefer Nigeria Vaccines' },
  { match: 'Circuit_board_displaying_SIM_slots', dest: 'blog/multi-sim-gps-tracker-truck-africa-europe-border.webp', alt: '4-SIM Multi-Network GPS Tracker' },
  { match: 'Fleet_director_monitoring_fuel_v', dest: 'blog/how-to-stop-fuel-theft-trucks-nigeria-fleet-owner.webp', alt: '12-Step Fuel Theft Prevention Nigeria' },
  { match: 'Smartphone_vehicle_immobilizatio', dest: 'blog/remote-immobilize-stolen-truck-kenya-app.webp', alt: 'Mobile App Engine Kill Kenya' },
  { match: 'Smartphone_displaying_cold_chain', dest: 'blog/reefer-alarm-not-working-food-spoiled-south-africa.webp', alt: 'Reefer Alarm Silent Failure South Africa' },
  { match: 'Operator_viewing_freight_securit', dest: 'blog/cargo-theft-gps-jammer-how-to-protect-fleet-europe.webp', alt: 'EU Cargo Theft Rings GPS Jammers' },
  { match: 'Truck_navigating_muddy_rainfores', dest: 'blog/best-telematics-for-rough-roads-africa-trucks.webp', alt: 'Rugged Telematics African Rough Roads' },
  { match: 'Technician_logging_truck_tank_vo', dest: 'blog/capacitive-fuel-probe-calibration-guide-heavy-trucks.webp', alt: 'Capacitive Fuel Probe Calibration Guide' },
  { match: 'Valve_lock_mounted_on_tanker', dest: 'blog/prevent-diesel-theft-fuel-tankers-south-africa.webp', alt: 'Prevent Fuel Theft Tankers South Africa' },
  { match: 'Corporate_fuel_card_volume_graph', dest: 'blog/fuel-card-fraud-vs-iot-sensor-reconciliation.webp', alt: 'Fuel Card Fraud vs IoT Sensors' },
  { match: 'Truck_on_freight_corridor_highway', dest: 'blog/fuel-siphoning-detection-tanzania-uganda-transit.webp', alt: 'Fuel Siphoning Detection Central Corridor' },
  { match: 'Excavator_parked_on_construction', dest: 'blog/prevent-diesel-theft-construction-machinery-uae-egypt.webp', alt: 'Prevent Construction Diesel Theft UAE Egypt' },
  { match: 'Split-screen_infographic_showing', dest: 'blog/can-bus-fuel-consumption-vs-fuel-sensor-accuracy.webp', alt: 'CAN-Bus vs Fuel Sensor Accuracy' },
  { match: 'Dump_truck_operating_with_fuel', dest: 'blog/stop-fuel-theft-mining-fleets-ghana-west-africa.webp', alt: 'Mining Fleet Fuel Theft Ghana' },
  { match: 'Spreadsheet_showing_fleet_fuel_ROI', dest: 'blog/fuel-theft-reduction-roi-calculator-commercial-fleets.webp', alt: 'Fuel Theft ROI Calculator' },
  { match: 'Conduit_protecting_sensor_cabling', dest: 'blog/how-drivers-try-to-bypass-fuel-sensors-and-how-to-stop-them.webp', alt: 'How Drivers Bypass Fuel Sensors' },
  { match: 'Tracker_attached_to_trailer_chassis', dest: 'blog/covert-secondary-gps-trackers-high-value-cargo-security.webp', alt: 'Covert Secondary GPS Trackers' },
  { match: 'Truck_slowing_down_on_highway', dest: 'blog/safe-remote-engine-cut-off-protocols-commercial-trucks.webp', alt: 'Safe Remote Engine Cut-Off Protocols' },
  { match: 'Driver_activating_foot_pedal_switch', dest: 'blog/anti-hijack-panic-buttons-high-risk-transit-routes.webp', alt: 'Silent Footwell Panic Buttons' },
  { match: 'Truck_parked_at_highway_rest', dest: 'blog/rf-interference-detection-cellular-fallback-telematics.webp', alt: 'RF Jamming Detection & Satellite Fallback' },
  { match: 'Steel_cable_seal_lock_mounted', dest: 'blog/electronic-seal-locks-container-cargo-theft-prevention.webp', alt: 'Smart Electronic Container Seal Locks' },
  { match: 'Dashboard_triggering_emergency_G', dest: 'blog/truck-theft-recovery-armed-response-api-integration.webp', alt: 'Armed Response Telematics API' },
  { match: 'Truck_rejecting_fake_GPS_signals', dest: 'blog/gps-spoofing-protection-commercial-haulage-fleets.webp', alt: 'GPS Location Spoofing Protection' },
  { match: 'Convoy_trucks_on_mountain_highway', dest: 'blog/high-value-cargo-escort-telematics-monitoring.webp', alt: 'High Value Convoy Escort Telematics' },
  { match: 'Geofence_alert_for_delivery_van', dest: 'blog/night-curfew-geofencing-stolen-vehicle-prevention.webp', alt: 'Night Curfew Geofencing' },
  { match: 'Mounting_wireless_temperature_se', dest: 'blog/ble-wireless-temperature-sensors-vs-wired-probes-reefer.webp', alt: 'BLE Wireless Temperature Sensors Reefer' },
  { match: 'Tablet_displaying_GDP_audit_cert', dest: 'blog/pharma-gdp-temperature-audit-log-export-compliance.webp', alt: 'WHO GDP Temperature Audit Certificate' },
  { match: 'Refrigerated_trailer_with_temper', dest: 'blog/multi-zone-reefer-temperature-telematics-frozen-chilled.webp', alt: 'Multi-Zone Reefer Telematics' },
  { match: 'Fuel_tank_low_fuel_warning', dest: 'blog/reefer-fuel-level-monitoring-generator-failure.webp', alt: 'Reefer Unit Fuel Monitoring' },
  { match: 'Sensor_measuring_rose_container_', dest: 'blog/relative-humidity-monitoring-fresh-produce-logistics.webp', alt: 'Relative Humidity Produce Logistics' },
  { match: 'Cold_vapor_pouring_from_van', dest: 'blog/door-open-sensor-cold-chain-leak-prevention.webp', alt: 'Reefer Door Magnetic Sensor' },
  { match: 'Biomedical_dry-ice_shipper_with_', dest: 'blog/ultra-low-temp-dry-ice-pharma-telematics-80c.webp', alt: 'Ultra Low Temp -80C Dry Ice Telematics' },
  { match: 'Adjuster_reviewing_temperature_log', dest: 'blog/cold-chain-insurance-claim-telematics-data-evidence.webp', alt: 'Cold Chain Insurance Claim Telematics Evidence' },
  { match: 'Solar_telematics_gateway_chargin', dest: 'blog/reefer-solar-powered-telematics-unpowered-trailers.webp', alt: 'Solar Powered Reefer Telematics' },
  { match: 'Cargo_pallet_transferred_on_tarmac', dest: 'blog/air-cargo-to-road-cold-chain-handover-monitoring.webp', alt: 'Air Cargo to Road Cold Chain Handover' },
  { match: 'Tuna_core_temperature_monitoring', dest: 'blog/fish-seafood-transport-temperature-telematics.webp', alt: 'Seafood Export Cold Chain Telematics' },
  { match: 'Service_technician_diagnosing_co', dest: 'blog/reefer-maintenance-predictive-compressor-failure.webp', alt: 'Predictive Reefer Maintenance Compressor' },

  // Location / City Landing Page Headers
  { match: 'Trucks_driving_on_commercial_cor', dest: 'locations/africa-hub.webp', alt: 'African Freight Transit Corridors' },
  { match: 'Trucks_driving_on_commercial_exp', dest: 'locations/europe-hub.webp', alt: 'European Freight Transit Highways' },
  { match: 'Trucks_driving_toward_port_termi', dest: 'locations/gcc-hub.webp', alt: 'GCC & Middle East Freight Ports' }
];

async function processImages() {
  const files = fs.readdirSync(srcDir);
  console.log(`Found ${files.length} images in ${srcDir}`);

  let processedCount = 0;

  for (const mapping of imageMapping) {
    const matchedFile = files.find(f => f.includes(mapping.match));
    if (matchedFile) {
      const srcPath = path.join(srcDir, matchedFile);
      const destPath = path.join(publicDir, mapping.dest);

      try {
        await sharp(srcPath)
          .resize(1200, 675, { fit: 'cover', position: 'center' })
          .webp({ quality: 82, effort: 6 })
          .withMetadata({
            exif: {
              IFD0: {
                ImageDescription: mapping.alt,
                Software: 'WizIOT WebP Optimizer Engine',
                Copyright: 'WizIOT Telematics 2026'
              }
            }
          })
          .toFile(destPath);

        processedCount++;
        console.log(`✓ Processed [${processedCount}/${imageMapping.length}]: ${matchedFile} -> public/${mapping.dest}`);
      } catch (err) {
        console.error(`Error processing ${matchedFile}:`, err.message);
      }
    } else {
      console.warn(`⚠️ Warning: No file matched for fragment "${mapping.match}"`);
    }
  }

  // Also create location specific copies for 20 cities using the regional hubs
  const cityMappings = {
    mombasa: 'locations/africa-hub.webp',
    nairobi: 'locations/africa-hub.webp',
    lagos: 'locations/africa-hub.webp',
    kano: 'locations/africa-hub.webp',
    johannesburg: 'locations/africa-hub.webp',
    durban: 'locations/africa-hub.webp',
    warsaw: 'locations/europe-hub.webp',
    krakow: 'locations/europe-hub.webp',
    bucharest: 'locations/europe-hub.webp',
    constanta: 'locations/europe-hub.webp',
    budapest: 'locations/europe-hub.webp',
    barcelona: 'locations/europe-hub.webp',
    hamburg: 'locations/europe-hub.webp',
    rotterdam: 'locations/europe-hub.webp',
    dubai: 'locations/gcc-hub.webp',
    'abu-dhabi': 'locations/gcc-hub.webp',
    cairo: 'locations/gcc-hub.webp',
    casablanca: 'locations/gcc-hub.webp',
    singapore: 'locations/gcc-hub.webp',
    'kuala-lumpur': 'locations/gcc-hub.webp'
  };

  for (const [city, srcHub] of Object.entries(cityMappings)) {
    const hubPath = path.join(publicDir, srcHub);
    const cityDestPath = path.join(locationsImgDir, `${city}.webp`);
    if (fs.existsSync(hubPath)) {
      fs.copyFileSync(hubPath, cityDestPath);
      console.log(`✓ City Header: copied ${srcHub} -> public/locations/${city}.webp`);
    }
  }

  console.log(`\n 🎉 COMPLETED: ${processedCount} images successfully converted to WebP, metadata stripped/cleaned, and meta tags attached!`);
}

processImages();
