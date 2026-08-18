export const VERTICALS_DATA = [
  {
    id: 'telematics',
    title: 'Commercial Fleet & Telematics',
    category: 'Logistics & Transport',
    description: 'End-to-end fleet visibility, remote diagnostics, and automated maintenance scheduling for long-haul trucks and distribution fleets.',
    image: '/vert-telematics.webp',
    heroImage: '/sol-telematics-hero.webp',
    detailImage: '/sol-telematics-detail.webp',
    badge: 'Popular',
    icon: 'Truck',
    points: ['Live GPS & Speed Tracking', 'Fuel & Idle Monitoring', 'Trip & Stoppage Reports'],
    details: 'Comprehensive B2B telematics architecture engineered for commercial transport hauliers. Connects heavy semi-trucks, trailers, and delivery vans with sub-second GPS tracking, ±0.2% capacitive fuel probes, and engine CAN-bus diagnostic monitoring.',
    features: [
      'Real-Time Fuel Siphoning & Refueling Volume Alerts',
      'UN ECE R116 Compliant Remote Engine Immobilization',
      'Automated Stoppage & Idle Waste Reports',
      'Multi-SIM Global Cellular Roaming with Satellite Fallback',
      'CAN-Bus J1939/J1708 Engine Diagnostic Trouble Code Decoding',
      'Dual-Tank Equalization Fraud Detection Algorithm'
    ],
    compliance: ['ISO 9001', 'ISO/IEC 17025', 'IP67 Waterproof', 'UN ECE R116'],
    hardware: 'WizIOT G400 Heavy Gateway + ±0.2% Capacitive Fuel Probe',
    useCases: [
      { title: 'Long-Haul Freight', desc: 'Track articulated trucks across 5,000+ km trans-continental corridors with zero blind spots.' },
      { title: 'Last-Mile Delivery', desc: 'Optimize delivery van routing with live ETA updates and proof-of-delivery geofence triggers.' },
      { title: 'Fuel Theft Prevention', desc: 'Catch siphoning within 12 seconds using ignition-off capacitive probe monitoring.' }
    ]
  },
  {
    id: 'ev-fleets',
    title: 'E-Mobility & EV Fleets',
    category: 'Clean Energy',
    description: 'Specialized BMS analytics for electric buses, delivery vans, and 2W/3W fleets. Track range, charging cycles, and battery degradation.',
    image: '/vert-ev.webp',
    heroImage: '/sol-ev-hero.webp',
    detailImage: '/sol-ev-detail.webp',
    badge: 'Trending',
    icon: 'Zap',
    points: ['Real-Time SoC & SoH Alerts', 'Smart Charger Scheduling', 'Battery Life Analytics'],
    details: 'Advanced Battery Management System (BMS) telemetry engine designed for commercial electric vehicles in high ambient temperatures (up to 50°C). Tracks real-time State of Charge (SoC), State of Health (SoH), cell voltage balancing, and thermal runaway prevention.',
    features: [
      'Cell Voltage Imbalance & Thermal Runaway Early Warning',
      'Smart Route Charging Station Locator & ETA Scheduling',
      'Predictive Capacity Retention & Degradation Analytics',
      'Payload-Adjusted Range Forecasting',
      'Regenerative Braking Energy Recovery Monitoring',
      'DC Fast Charging Session Logging & Cost Tracking'
    ],
    compliance: ['ISO 26262 Functional Safety', 'IP68 Battery Enclosure', 'IEC 61851 EV Charging'],
    hardware: 'WizIOT EV-BMS Telematics Controller + CAN-bus J1939 ECU Sniffer',
    useCases: [
      { title: 'Electric Bus Fleets', desc: 'Monitor 200+ electric transit buses with per-cell voltage telemetry and depot charging optimization.' },
      { title: 'EV Delivery Vans', desc: 'Guarantee last-mile range with payload-adjusted battery forecasting and smart route charging.' },
      { title: 'Electric 2W/3W Fleets', desc: 'Track battery swap station usage and rider behavior across thousands of electric scooters and rickshaws.' }
    ]
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain & Pharma Logistics',
    category: 'Temperature Controlled',
    description: 'Continuous temperature and humidity telemetry monitoring for perishable food, pharmaceuticals, and biological samples in transit.',
    image: '/vert-coldchain.webp',
    heroImage: '/sol-coldchain-hero.webp',
    detailImage: '/sol-coldchain-detail.webp',
    badge: 'Compliance Ready',
    icon: 'Thermometer',
    points: ['Multi-zone Temp Sensors', 'Door Open Alert Logs', 'Audit-Ready Compliance'],
    details: 'Strict WHO GDP and US-FDA 21 CFR Part 11 compliant cold chain telematics stack for refrigerated reefer trailers, vaccine transport, and fresh seafood export fleets. Delivers continuous wireless BLE temperature and humidity logging with automated PDF compliance certificates.',
    features: [
      'Wireless BLE 5.0 Temperature & Relative Humidity Probes (-80°C to +70°C)',
      'Immutable Cryptographically Signed SHA-256 PDF Audit Certificates',
      'Door Open & Thermal Vapor Leak Alarms via Instant SMS/Push',
      'Reefer Compressor Run-Time & Diesel Generator Fuel Monitoring',
      'Multi-Zone Independent Temperature Control (Frozen/Chilled/Ambient)',
      'Air Cargo to Road Handover Chain-of-Custody Tracking'
    ],
    compliance: ['WHO GDP Certified', 'US-FDA 21 CFR Part 11', 'EN 12830', 'HACCP'],
    hardware: 'WizIOT Reefer Master Gateway + Dual BLE Temperature Pods',
    useCases: [
      { title: 'Vaccine Distribution', desc: 'WHO GDP-compliant temperature logging for mRNA vaccine transport at -70°C with tamper-proof audit trails.' },
      { title: 'Fresh Produce Export', desc: 'Monitor humidity and ethylene levels in perishable fruit containers from farm to port.' },
      { title: 'Pharmaceutical Logistics', desc: 'Automated 21 CFR Part 11 compliance certificates for clinical trial drug shipments.' }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Ambulance Fleets',
    category: 'Emergency Services',
    description: 'Priority route optimization, patient transport tracking, and emergency equipment monitoring for hospitals and medical logistics.',
    image: '/vert-healthcare.webp',
    heroImage: '/sol-healthcare-hero.webp',
    detailImage: '/sol-healthcare-detail.webp',
    badge: 'Critical Duty',
    icon: 'Activity',
    points: ['Priority Siren Dispatch', 'Oxygen Level Sensors', 'Emergency ETA Broadcast'],
    details: 'Mission-critical fleet dispatch and medical asset telemetry for ambulances and healthcare logistics. Combines siren-triggered priority routing, patient transport telemetry, and emergency medical equipment monitoring.',
    features: [
      'Sub-Second Priority Siren Dispatch Routing',
      'Medical Oxygen Tank Level & Equipment Battery Telemetry',
      'Real-Time Hospital Emergency Bay ETA Broadcast',
      'Driver Safety & Smooth Ride Acceleration Scorecards',
      'Patient Transfer Chain-of-Custody GPS Logging',
      'Blood Bank & Organ Transport Temperature Monitoring'
    ],
    compliance: ['ISO 13485 Medical Devices', 'EN 1789 Ambulance Standard', 'HIPAA Transport Audit'],
    hardware: 'WizIOT Emergency Dispatch Telematics Terminal + Medical BLE Mesh',
    useCases: [
      { title: 'Ambulance Dispatch', desc: 'Reduce emergency response times by 35% with AI-powered priority routing and hospital bay ETA alerts.' },
      { title: 'Blood & Organ Transport', desc: 'Continuous temperature and vibration monitoring for time-critical biological specimen deliveries.' },
      { title: 'Home Care Fleet', desc: 'Track nurse visit schedules and equipment inventory across distributed home healthcare vehicles.' }
    ]
  },
  {
    id: 'industrial-iot',
    title: 'Heavy Equipment & Construction',
    category: 'Off-Road Assets',
    description: 'Track excavator operating hours, diesel consumption, hydraulic pressure, and prevent equipment theft at construction sites.',
    image: '/vert-heavy.webp',
    heroImage: '/sol-heavy-hero.webp',
    detailImage: '/sol-heavy-detail.webp',
    badge: 'Heavy Industrial',
    icon: 'Cpu',
    points: ['Engine Hour Telemetry', 'Fuel Drain Alarms', 'Site Curfew Protection'],
    details: 'Ultra-ruggedized IP69K telematics gateways built for yellow metal excavators, bulldozers, mining dump trucks, and stationary power generators operating in heavy vibration and high dust environments.',
    features: [
      'Automated Engine Operating Hours & Maintenance Counter',
      'Hydraulic Line Pressure & Engine Load Percentage Telemetry',
      'Off-Road Virtual Geofence Site Curfew & Night Curfew Alarms',
      'High-Pressure Steam Washdown & Mud Resistance (100-Bar IP69K)',
      'Diesel Generator Fuel Consumption & Runtime Monitoring',
      'Equipment Utilization Reports for Rental Fleet Billing'
    ],
    compliance: ['IP69K Waterproof', 'ISO 16750 Vibration Rated', 'ATEX Zone 2 Optional'],
    hardware: 'WizIOT Mining Hardened IP69K Gateway + Hydraulic Pressure Transducer',
    useCases: [
      { title: 'Mining Operations', desc: 'Track 200-ton haul trucks across open-pit mines with dust-proof IP69K gateways and fuel reconciliation.' },
      { title: 'Construction Sites', desc: 'Prevent overnight equipment theft with geofence curfews and engine immobilization on excavators.' },
      { title: 'Power Generators', desc: 'Monitor stationary diesel generator fuel levels and run-time hours for remote site billing.' }
    ]
  },
  {
    id: 'public-transport',
    title: 'Public Transit & Smart Cities',
    category: 'Urban Mobility',
    description: 'Passenger counting sensors, automated stop announcements, and route adherence tracking for municipal bus networks.',
    image: '/vert-transit.webp',
    heroImage: '/sol-transit-hero.webp',
    detailImage: '/sol-transit-detail.webp',
    badge: 'Smart City',
    icon: 'Bus',
    points: ['Passenger Density Analytics', 'Schedule Adherence', 'Driver Performance Index'],
    details: 'Smart municipal public transit telematics platform providing AI optical passenger counting, automated audio-visual stop announcements, and real-time GTFS transit feed publishing for urban bus fleets.',
    features: [
      'AI Optical Overhead Passenger Counting (99% Accuracy)',
      'Automated Next-Stop Audio & LED Screen Announcements',
      'Real-Time GTFS & GTFS-RT Open Data Transit Feed Engine',
      'Driver Route Adherence & Schedule Deviation Analytics',
      'Contactless Fare Collection Integration via NFC/QR',
      'Municipal Fleet Carbon Emission Tracking & Reporting'
    ],
    compliance: ['UN ECE R10 EMC', 'GTFS / GTFS-RT Compliant', 'ADA Accessibility Standards'],
    hardware: 'WizIOT Transit Display Terminal + AI Passenger Counting Camera',
    useCases: [
      { title: 'City Bus Networks', desc: 'Real-time passenger load balancing and schedule adherence for 500+ bus municipal networks.' },
      { title: 'BRT Corridors', desc: 'Automated station dwell time optimization and platform crowd density monitoring.' },
      { title: 'School Transport', desc: 'Student RFID check-in/out tracking with parent SMS notifications and safe route compliance.' }
    ]
  }
];
