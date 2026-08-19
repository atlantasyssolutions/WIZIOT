export const SENSOR_CATEGORIES = [
  {
    id: 'fuel',
    name: 'Fuel & Fluid Telemetry',
    icon: 'Fuel',
    description: 'High-precision fuel height, consumption, and siphoning detection sensors for heavy commercial trucks and mining fleets.'
  },
  {
    id: 'coldchain',
    name: 'Cold Chain & Environment',
    icon: 'Thermometer',
    description: 'WHO GDP compliant wireless BLE temperature, relative humidity, and thermal breach sensors for reefer logistics.'
  },
  {
    id: 'video-safety',
    name: 'Video & Driver Safety (ADAS/DMS)',
    icon: 'Camera',
    description: 'AI dual-channel dashcams and 4-channel MDVR systems with real-time drowsiness and collision warning engines.'
  },
  {
    id: 'vehicle-diagnostics',
    name: 'Vehicle Diagnostics & Weight',
    icon: 'Cpu',
    description: 'CAN-bus J1939/OBD-II adapters, tire pressure monitoring systems (TPMS), and axle load weight transducers.'
  },
  {
    id: 'security-cargo',
    name: 'Security & Cargo Protection',
    icon: 'ShieldCheck',
    description: 'Electronic RFID container seal locks, covert secondary trackers, and RF anti-jamming detectors.'
  }
];

export const SENSORS_DATA = [
  {
    id: 'capacitive-fuel-probe',
    categoryId: 'fuel',
    name: 'Capacitive Fuel Level Probe',
    model: 'WizIOT Probe-X5',
    accuracy: '±0.2%',
    image: '/processed_pool/img_28_fuel_level_probe_in_tank_202608181650_jpeg.webp',
    protocol: 'RS-485 / Modbus / Analog 0-5V',
    certification: 'ISO 17025 / IP69K / CE',
    description: 'Precision aluminum capacitive probe rod inserted into diesel tanks for real-time volume logging, siphoning alerts, and fuel fill reconciliation.',
    features: [
      'Sub-liter liquid height measurement precision',
      'Built-in thermal expansion compensation algorithm',
      'Flexible cuttable rod length (300mm to 3000mm)',
      'Ignition-off low-power wake-up sampling'
    ]
  },
  {
    id: 'ultrasonic-fuel-sensor',
    categoryId: 'fuel',
    name: 'Non-Invasive Ultrasonic Fuel Sensor',
    model: 'WizIOT UltraFuel-3000',
    accuracy: '±0.5%',
    image: '/processed_pool/img_31_fuel_level_sensor_in_tanker_202608181649_jpeg.webp',
    protocol: 'RS-232 / RS-485 / BLE 5.0',
    certification: 'ATEX Zone 0 / IP68',
    description: 'External bottom-mounted sonar transducer that measures fuel level without drilling holes in hazardous chemical or fuel tankers.',
    features: [
      'Zero tank drilling or structural modification required',
      'Explosive atmosphere ATEX Zone 0 certified',
      'Ideal for LPG, gasoline, diesel, and chemical tankers',
      'Real-time sonar wave propagation filtering'
    ]
  },
  {
    id: 'ble-temperature-humidity',
    categoryId: 'coldchain',
    name: 'Wireless BLE 5.0 Temperature & Humidity Sensor',
    model: 'WizIOT TempPod-BLE',
    accuracy: '±0.2°C / ±2% RH',
    image: '/processed_pool/img_55_mounting_wireless_temperature_se__2k_202608171228_jpeg.webp',
    protocol: 'Bluetooth Low Energy 5.0 Mesh',
    certification: 'WHO GDP / US-FDA 21 CFR Part 11 / EN 12830',
    description: 'Battery-powered wireless sensor pod placed inside refrigerated cargo trailers, vaccine shippers, and fresh produce containers.',
    features: [
      'Ultra-wide temperature measurement range (-80°C to +70°C)',
      '5-year internal replaceable lithium battery life',
      'Cryptographically signed audit log storage',
      'Instant door-open thermal fluctuation alerts'
    ]
  },
  {
    id: 'door-magnetic-sensor',
    categoryId: 'coldchain',
    name: 'Wireless Reefer Door Contact Sensor',
    model: 'WizIOT DoorGuard-BLE',
    accuracy: '< 50ms Response',
    image: '/processed_pool/img_8_cold_vapor_pouring_from_van_202608171227_jpeg.webp',
    protocol: 'BLE 5.0 / Magnetic Contact',
    certification: 'IP67 Waterproof',
    description: 'Monitors reefer trailer door openings to prevent temperature loss, cold air leaks, and cargo tampering during transport.',
    features: [
      'Instant SMS/Push notification upon unauthorized door open',
      'Corresponds door open events with reefer compressor load',
      'Wireless magnetic mount for quick trailer installation',
      'Dustproof and high-pressure washdown resistant'
    ]
  },
  {
    id: 'ai-dashcam-adas-dms',
    categoryId: 'video-safety',
    name: 'AI Dual-Channel ADAS & DMS Dashcam',
    model: 'WizIOT VisionCam-AI',
    accuracy: '99.2% Detection',
    image: '/processed_pool/img_107_truck_adas_displaying_speed_signs_202608181651_jpeg.webp',
    protocol: '4G LTE / Wi-Fi / RS-232',
    certification: 'EU GSR 2024 / CE / FCC',
    description: 'Road-facing Forward Collision Warning (FCW) and cabin-facing Driver Monitoring System (DMS) detecting drowsiness, phone use, and seatbelt neglect.',
    features: [
      'Edge NPU processing in-cabin alerts in under 200ms',
      'Forward collision, lane departure & pedestrian warnings',
      'Event-triggered HD video clip cloud upload',
      'Infrared night vision camera for dark cabin monitoring'
    ]
  },
  {
    id: 'mobile-dvr-mdvr',
    categoryId: 'video-safety',
    name: '4-Channel Mobile DVR (MDVR) System',
    model: 'WizIOT MDVR-400',
    accuracy: '1080p 60fps',
    image: '/processed_pool/img_56_operator_viewing_freight_securit__2k_202608171229_jpeg.webp',
    protocol: 'CAN-bus / 4G / GPS / AHD Video',
    certification: 'ISO 16750 Vibration / IP66',
    description: 'Rugged vehicle video recorder supporting 4 surround cameras for side blind-spot monitoring, rear reversing, and cargo area surveillance.',
    features: [
      'Surround 360-degree fleet blind-spot coverage',
      'Dual SD card / SSD shockproof video recording',
      'Live control room video streaming via 4G/5G',
      'Panic button triggered emergency video push'
    ]
  },
  {
    id: 'tpms-wireless-sensor',
    categoryId: 'vehicle-diagnostics',
    name: 'Wireless Tire Pressure & Temperature Sensor (TPMS)',
    model: 'WizIOT TPMS-Heavy',
    accuracy: '±0.1 Bar / ±1°C',
    image: '/processed_pool/img_85_transport_vehicle_displaying_ope__2k_202608181649_jpeg.webp',
    protocol: '433MHz RF / BLE 5.0',
    certification: 'IP67 / SAE J2657',
    description: 'External or internal tire sensors for 18-wheeler semi-trucks and heavy trailers preventing roadside blowouts and fuel waste.',
    features: [
      'Real-time tire pressure and temperature telemetry',
      'Slow leak and sudden puncture blowout alarms',
      'Supports up to 36 tires per truck-trailer combination',
      'Cuts fleet fuel consumption by maintaining optimal PSI'
    ]
  },
  {
    id: 'axle-load-weight-sensor',
    categoryId: 'vehicle-diagnostics',
    name: 'Air Suspension Axle Load Pressure Sensor',
    model: 'WizIOT LoadTrans-100',
    accuracy: '±1.5% Payload',
    image: '/processed_pool/img_17_dump_truck_operating_with_fuel_202608171228_jpeg.webp',
    protocol: 'Analog 0-5V / CAN-bus',
    certification: 'IP69K Heavy Duty',
    description: 'Measures pneumatic air bag or hydraulic suspension pressure to calculate gross vehicle weight and detect overload compliance violations.',
    features: [
      'Prevents expensive highway axle overload fines',
      'Real-time payload weight logging on dashboard',
      'Detects unauthorized partial unloading along transit routes',
      'High-vibration stainless steel transducer housing'
    ]
  },
  {
    id: 'smart-container-seal-lock',
    categoryId: 'security-cargo',
    name: 'Electronic RFID Smart Container Seal Lock',
    model: 'WizIOT SealLock-GPS',
    accuracy: '< 100ms Alarm',
    image: '/processed_pool/img_77_steel_cable_seal_lock_mounted_202608171228_jpeg.webp',
    protocol: '4G LTE / BLE / RFID',
    certification: 'ISO 17712 High Security / IP68',
    description: 'Heavy steel cable electronic lock seal for shipping containers and box trailers, alerting control rooms if cut or unlocked without authorization.',
    features: [
      'Steel cable bolt cut & tamper alarm',
      'Authorized RFID tag or cloud app unsealing',
      'Built-in secondary GPS/GSM tracking engine',
      'Rechargeable battery operating up to 60 days on single charge'
    ]
  }
];
