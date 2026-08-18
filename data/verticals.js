export const VERTICALS_DATA = [
  {
    id: 'telematics',
    title: 'Commercial Fleet & Telematics',
    category: 'Logistics & Transport',
    description: 'End-to-end fleet visibility, remote diagnostics, and automated maintenance scheduling for long-haul trucks and distribution fleets.',
    image: '/blog-fuel-theft-prevention.webp',
    badge: 'Popular',
    icon: 'Truck',
    points: ['Live GPS & Speed Tracking', 'Fuel & Idle Monitoring', 'Trip & Stoppage Reports'],
    details: 'Comprehensive B2B telematics architecture engineered for commercial transport hauliers. Connects heavy semi-trucks, trailers, and delivery vans with sub-second GPS tracking, ±0.2% capacitive fuel probes, and engine CAN-bus diagnostic monitoring.',
    features: [
      'Real-Time Fuel Siphoning & Refueling Volume Alerts',
      'UN ECE R116 Compliant Remote Engine Immobilization',
      'Automated Stoppage & Idle Waste Reports',
      'Multi-SIM Global Cellular Roaming with Satellite Fallback'
    ],
    compliance: ['ISO 9001', 'ISO/IEC 17025', 'IP67 Waterproof'],
    hardware: 'WizIOT G400 Heavy Gateway + ±0.2% Capacitive Fuel Probe'
  },
  {
    id: 'ev-fleets',
    title: 'E-Mobility & EV Fleets',
    category: 'Clean Energy',
    description: 'Specialized BMS analytics for electric buses, delivery vans, and 2W/3W fleets. Track range, charging cycles, and battery degradation.',
    image: '/blog/ev-fleet-battery-management-system-bms-uae-gcc.webp',
    badge: 'Trending',
    icon: 'Zap',
    points: ['Real-Time SoC & SoH Alerts', 'Smart Charger Scheduling', 'Battery Life Analytics'],
    details: 'Advanced Battery Management System (BMS) telemetry engine designed for commercial electric vehicles in high ambient temperatures (up to 50°C). Tracks real-time State of Charge (SoC), State of Health (SoH), cell voltage balancing, and thermal runaway prevention.',
    features: [
      'Cell Voltage Imbalance & Thermal Runaway Early Warning',
      'Smart Route Charging Station Locator & ETA Scheduling',
      'Predictive Capacity Retention & Degradation Analytics',
      'Payload-Adjusted Range Forecasting'
    ],
    compliance: ['ISO 26262 Functional Safety', 'IP68 Battery Enclosure'],
    hardware: 'WizIOT EV-BMS Telematics Controller + CAN-bus J1939 ECU Sniffer'
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain & Pharma Logistics',
    category: 'Temperature Controlled',
    description: 'Continuous temperature and humidity telemetry monitoring for perishable food, pharmaceuticals, and biological samples in transit.',
    image: '/blog-cold-chain-monitoring.webp',
    badge: 'Compliance Ready',
    icon: 'Thermometer',
    points: ['Multi-zone Temp Sensors', 'Door Open Alert Logs', 'Audit-Ready Compliance'],
    details: 'Strict WHO GDP and US-FDA 21 CFR Part 11 compliant cold chain telematics stack for refrigerated reefer trailers, vaccine transport, and fresh seafood export fleets. Delivers continuous wireless BLE temperature and humidity logging with automated PDF compliance certificates.',
    features: [
      'Wireless BLE 5.0 Temperature & Relative Humidity Probes (-80°C to +70°C)',
      'Immutable Cryptographically Signed SHA-256 PDF Audit Certificates',
      'Door Open & Thermal Vapor Leak Alarms via Instant SMS/Push',
      'Reefer Compressor Run-Time & Diesel Generator Fuel Monitoring'
    ],
    compliance: ['WHO GDP Certified', 'US-FDA 21 CFR Part 11', 'EN 12830'],
    hardware: 'WizIOT Reefer Master Gateway + Dual BLE Temperature Pods'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Ambulance Fleets',
    category: 'Emergency Services',
    description: 'Priority route optimization, patient transport tracking, and emergency equipment monitoring for hospitals and medical logistics.',
    image: '/blog/air-cargo-to-road-cold-chain-handover-monitoring.webp',
    badge: 'Critical Duty',
    icon: 'Activity',
    points: ['Priority Siren Dispatch', 'Oxygen Level Sensors', 'Emergency ETA Broadcast'],
    details: 'Mission-critical fleet dispatch and medical asset telemetry for ambulances and healthcare logistics. Combines siren-triggered priority routing, patient transport telemetry, and emergency medical equipment monitoring.',
    features: [
      'Sub-Second Priority Siren Dispatch Routing',
      'Medical Oxygen Tank Level & Equipment Battery Telemetry',
      'Real-Time Hospital Emergency Bay ETA Broadcast',
      'Driver Safety & Smooth Ride Acceleration Scorecards'
    ],
    compliance: ['ISO 13485 Medical Devices', 'EN 1789 Ambulance Standard'],
    hardware: 'WizIOT Emergency Dispatch Telematics Terminal + Medical BLE Mesh'
  },
  {
    id: 'industrial-iot',
    title: 'Heavy Equipment & Construction',
    category: 'Off-Road Assets',
    description: 'Track excavator operating hours, diesel consumption, hydraulic pressure, and prevent equipment theft at construction sites.',
    image: '/heavy-equipment-telematics.webp',
    badge: 'Heavy Industrial',
    icon: 'Cpu',
    points: ['Engine Hour Telemetry', 'Fuel Drain Alarms', 'Site Curfew Protection'],
    details: 'Ultra-ruggedized IP69K telematics gateways built for yellow metal excavators, bulldozers, mining dump trucks, and stationary power generators operating in heavy vibration and high dust environments.',
    features: [
      'Automated Engine Operating Hours & Maintenance Counter',
      'Hydraulic Line Pressure & Engine Load Percentage Telemetry',
      'Off-Road Virtual Geofence Site Curfew & Night Curfew Alarms',
      'High-Pressure Steam Washdown & Mud Resistance (100-Bar IP69K)'
    ],
    compliance: ['IP69K Waterproof', 'ISO 16750 Vibration Rated'],
    hardware: 'WizIOT Mining Hardened IP69K Gateway + Hydraulic Pressure Transducer'
  },
  {
    id: 'public-transport',
    title: 'Public Transit & Smart Cities',
    category: 'Urban Mobility',
    description: 'Passenger counting sensors, automated stop announcements, and route adherence tracking for municipal bus networks.',
    image: '/enterprise-logistics-fleet.webp',
    badge: 'Smart City',
    icon: 'Bus',
    points: ['Passenger Density Analytics', 'Schedule Adherence', 'Driver Performance Index'],
    details: 'Smart municipal public transit telematics platform providing AI optical passenger counting, automated audio-visual stop announcements, and real-time GTFS transit feed publishing for urban bus fleets.',
    features: [
      'AI Optical Overhead Passenger Counting (99% Accuracy)',
      'Automated Next-Stop Audio & LED Screen Announcements',
      'Real-Time GTFS & GTFS-RT Open Data Transit Feed Engine',
      'Driver Route Adherence & Schedule Deviation Analytics'
    ],
    compliance: ['UN ECE R10 EMC', 'GTFS / GTFS-RT Compliant'],
    hardware: 'WizIOT Transit Display Terminal + AI Passenger Counting Camera'
  }
];
