const fs = require('fs');
const path = require('path');

const poolDir = path.join(__dirname, '..', 'public', 'processed_pool');
const publicDir = path.join(__dirname, '..', 'public');

// Map specific unique images to features and verticals - no repeats
const mappings = [
  // Feature Tab images - 7 unique
  { src: 'img_24_fleet_operations_control_room_mo__202608171235_jpeg.webp', dest: 'feat-tracking.webp' },
  { src: 'img_78_tablet_displaying_fleet_manageme__2k_202608171235_jpeg.webp', dest: 'feat-dashboard.webp' },
  { src: 'img_75_split-screen_infographic_showing__2k_202608171229_jpeg.webp', dest: 'feat-reports.webp' },
  { src: 'img_19_electric_truck_crossing_desert_h__202608181648_jpeg.webp', dest: 'feat-ev.webp' },
  { src: 'img_26_freight_truck_driving_on_highway_202608181650_jpeg.webp', dest: 'feat-route.webp' },
  { src: 'img_44_geofence_alert_for_delivery_van_202608171228_jpeg.webp', dest: 'feat-geofence.webp' },
  { src: 'img_107_truck_adas_displaying_speed_signs_202608181651_jpeg.webp', dest: 'feat-driver.webp' },

  // Vertical card images - 6 unique (different from features)
  { src: 'img_92_transport_vehicle_operating_with__2k_202608181651_jpeg.webp', dest: 'vert-telematics.webp' },
  { src: 'img_18_electric_delivery_van_charging_a__202608171233_jpeg.webp', dest: 'vert-ev.webp' },
  { src: 'img_66_refrigerated_truck_showing_therm__2k_202608181649_jpeg.webp', dest: 'vert-coldchain.webp' },
  { src: 'img_119_vaccine_boxes_in_refrigerated_tr__202608181649_jpeg.webp', dest: 'vert-healthcare.webp' },
  { src: 'img_54_mining_truck_operating_in_pit_202608181651_jpeg.webp', dest: 'vert-heavy.webp' },
  { src: 'img_9_commercial_trucks_queueing_at_bo__202608171234_jpeg.webp', dest: 'vert-transit.webp' },

  // Solution detail page hero banners - 6 unique (different from cards)
  { src: 'img_90_transport_vehicle_operating_with__2k_202608181650_jpeg.webp', dest: 'sol-telematics-hero.webp' },
  { src: 'img_20_electric_truck_crossing_desert_h__202608181649_jpeg.webp', dest: 'sol-ev-hero.webp' },
  { src: 'img_61_refrigerated_trailer_with_temper__2k_202608171227_jpeg.webp', dest: 'sol-coldchain-hero.webp' },
  { src: 'img_6_cargo_pallet_transferred_on_tarmac_202608171227_jpeg.webp', dest: 'sol-healthcare-hero.webp' },
  { src: 'img_21_excavator_digging_on_constructio__2k_202608171234_jpeg.webp', dest: 'sol-heavy-hero.webp' },
  { src: 'img_60_port_terminal_with_connected_cha__202608181650_jpeg.webp', dest: 'sol-transit-hero.webp' },

  // Solution detail secondary images - 6 unique
  { src: 'img_23_fleet_director_monitoring_fuel_v__202608171233_jpeg.webp', dest: 'sol-telematics-detail.webp' },
  { src: 'img_51_ipad_displaying_financial_roi_ca__202608171231_jpeg.webp', dest: 'sol-ev-detail.webp' },
  { src: 'img_79_tablet_displaying_gdp_audit_cert__202608171228_jpeg.webp', dest: 'sol-coldchain-detail.webp' },
  { src: 'img_72_smartphone_displaying_cold_chain__2k_202608171231_jpeg.webp', dest: 'sol-healthcare-detail.webp' },
  { src: 'img_22_excavator_parked_on_construction__2k_202608171228_jpeg.webp', dest: 'sol-heavy-detail.webp' },
  { src: 'img_48_intermodal_port_terminal_asset_t__202608181650__1__jpeg.webp', dest: 'sol-transit-detail.webp' },

  // Hero banner
  { src: 'img_56_operator_viewing_freight_securit__2k_202608171229_jpeg.webp', dest: 'hero-telematics-dashboard.webp' },
  // Hardware stack
  { src: 'img_46_industrial_iot_hardware_componen__2k_202608171235_jpeg.webp', dest: 'hardware-telematics-stack.webp' },
  // Platform analytics
  { src: 'img_82_telematics_gateway_displaying_rf__2k_202608171233_jpeg.webp', dest: 'platform-telematics-analytics.webp' },
  // Enterprise fleet
  { src: 'img_69_semi-trucks_parked_at_logistics_hub_202608171235_jpeg.webp', dest: 'enterprise-logistics-fleet.webp' },
  // Heavy equipment
  { src: 'img_53_mining_trucks_and_excavators_ope__202608171235_jpeg.webp', dest: 'heavy-equipment-telematics.webp' },
];

let ok = 0;
for (const m of mappings) {
  const srcPath = path.join(poolDir, m.src);
  const destPath = path.join(publicDir, m.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    ok++;
    console.log(`✓ ${m.src} -> ${m.dest}`);
  } else {
    console.warn(`⚠ Missing: ${m.src}`);
  }
}
console.log(`\n✅ Mapped ${ok} unique images with zero repeats.`);
