export const VERTICALS_DATA = [
  {
    id: 'telematics',
    title: 'Commercial Fleet & Telematics',
    category: 'Logistics & Transport',
    description: 'End-to-end fleet visibility, remote engine diagnostics, fuel siphoning protection, and automated maintenance scheduling for long-haul trucks.',
    image: '/vert-telematics.webp',
    heroImage: '/sol-telematics-hero.webp',
    detailImage: '/sol-telematics-detail.webp',
    badge: 'Popular',
    icon: 'Truck',
    points: ['Real-Time Fuel Drain Alerts', 'Prevent Night-time Fuel Theft', 'Safe Remote Truck Immobilization'],
    details: 'Comprehensive B2B telematics architecture engineered for commercial transport hauliers. Connects heavy semi-trucks, trailers, and delivery vans with live GPS tracking via advanced Vehicle Telematics trackers, OBD Telematics dongles, ±0.2% capacitive fuel probes, ECU CAN-bus diagnostic monitoring, and automated fuel card reconciliation.',
    features: [
      'Real-Time Capacitive Fuel Siphoning & Drain Alerts (±0.2% Precision)',
      'UN ECE R116 Compliant Remote Engine Immobilization & Anti-Theft',
      'Automated Engine Idle Waste & Stoppage Duration Reports',
      'ECU CAN-Bus J1939 Fuel Consumption vs. Refueling Card Reconciliation',
      'Multi-Tank Differential Volume Equalization Algorithm',
      'Multi-SIM Global Cellular Roaming with Satellite Fallback'
    ],
    compliance: ['AIS 140 Compliant', 'ISO 9001:2015 Quality', 'ISO/IEC 17025 Calibration', 'IP67 Waterproof', 'UN ECE R116'],
    hardware: 'WizIOT G400 Heavy Gateway + ±0.2% Capacitive Fuel Level Probe',
    useCases: [
      { title: 'Long-Haul Freight', desc: 'Track articulated trucks across 5,000+ km trans-continental corridors with zero blind spots and siphoning protection.' },
      { title: 'Fuel Theft Elimination', desc: 'Catch siphoning within 12 seconds using ignition-off capacitive probe monitoring and SMS alerts.' },
      { title: 'Fleet Maintenance', desc: 'Decode ECU J1939 fault codes in real time to schedule preventive servicing before engine failures.' }
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
    points: ['Live Battery Health Monitoring', 'Automated Charging Route Planner', 'Fire Safety & Overheating Alerts'],
    details: 'Advanced Battery Management System (BMS) telemetry engine designed for commercial electric vehicles in high ambient temperatures (up to 50°C). Tracks real-time State of Charge (SoC), State of Health (SoH), cell voltage balancing, and thermal runaway safety alerts.',
    features: [
      'Real-Time State of Charge (SoC) & State of Health (SoH) Telemetry',
      'Cell Voltage Imbalance & Thermal Runaway Early Warning Alarms',
      'Payload-Adjusted EV Range Forecasting & Station Locator',
      'Regenerative Braking Energy Recovery Efficiency Scorecards',
      'Smart DC Fast-Charging Session Logging & Battery Health Optimization',
      'Battery Enclosure IP68 Waterproof & Thermal Safety Audits'
    ],
    compliance: ['ISO 26262 Functional Safety', 'IP68 Battery Enclosure', 'IEC 61851 EV Charging', 'CE / FCC Certified'],
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
    points: ['Continuous Temperature Tracking', 'Door Open Spoilage Alerts', 'Automated Cargo Safety Reports'],
    details: 'Strict WHO GDP and US-FDA 21 CFR Part 11 compliant cold chain telematics stack for refrigerated reefer trailers, vaccine transport, and fresh seafood export fleets. Delivers continuous wireless BLE temperature and humidity logging with automated PDF compliance certificates. Features advanced Indoor Telematics and precise IoT Sensors to guarantee cargo safety.',
    features: [
      'Wireless BLE 5.0 Temperature & Humidity Sensors (-80°C to +70°C)',
      'Cryptographically Signed WHO GDP & 21 CFR Part 11 Audit Certificates',
      'Instant Reefer Door Open & Thermal Vapor Leak Alarms',
      'Multi-Zone Independent Compartment Climate Control (Frozen/Chilled)',
      'Reefer Compressor Engine Fuel & Generator Runtime Telemetry',
      'Air Cargo to Road Handover Chain-of-Custody Logging'
    ],
    compliance: ['WHO GDP Certified', 'US-FDA 21 CFR Part 11', 'EN 12830', 'HACCP Compliant'],
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
    description: 'Priority siren dispatch, patient transport tracking, and emergency equipment telemetry for hospital ambulance networks.',
    image: '/vert-healthcare.webp',
    heroImage: '/sol-healthcare-hero.webp',
    detailImage: '/sol-healthcare-detail.webp',
    badge: 'Critical Duty',
    icon: 'Activity',
    points: ['Fast Emergency Routing', 'Live Oxygen Supply Tracking', 'Arrival Time Sharing for Hospitals'],
    details: 'Mission-critical fleet dispatch and medical asset telemetry for ambulances and healthcare logistics. Combines siren-triggered priority routing, patient transport telemetry, and emergency medical equipment monitoring.',
    features: [
      'Sub-Second Priority Siren Dispatch & Traffic Signal Preemption',
      'Medical Oxygen Tank Pressure & Equipment Battery Telemetry',
      'Real-Time Hospital Emergency Room Arrival ETA Broadcast',
      'Smooth Ride Acceleration & Cornering Scorecards for Patient Safety',
      'Biological Sample & Blood Bank Temperature Telemetry',
      'AIS 140 Emergency Response Vehicle Location Tracking (VLT)'
    ],
    compliance: ['AIS 140 Compliant', 'ISO 13485 Medical Devices', 'EN 1789 Ambulance Standard', 'CE Certified'],
    hardware: 'WizIOT Emergency Dispatch Telematics Terminal + Medical BLE Mesh',
    useCases: [
      { title: 'Ambulance Dispatch', desc: 'Reduce emergency response times by 35% with AI-powered priority routing and hospital bay ETA alerts.' },
      { title: 'Blood & Organ Transport', desc: 'Continuous temperature and vibration monitoring for time-critical biological specimen deliveries.' },
      { title: 'Hospital Fleet Control', desc: 'Track patient transport schedules and oxygen equipment inventory across emergency vehicles.' }
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
    points: ['Automated Usage Tracking', 'Heavy Machinery Health Monitoring', 'Job Site Equipment Protection'],
    details: 'Ultra-ruggedized IP69K telematics gateways built for yellow metal excavators, bulldozers, mining dump trucks, and stationary power generators operating in heavy vibration and high dust environments. Integrated with versatile IoT Sensors and robust Assets & Personal Telematics for comprehensive site coverage.',
    features: [
      'Automated Engine Operating Hours & Maintenance Counter',
      'Hydraulic Line Pressure & Engine Load Percentage Telemetry',
      'IP69K Steam Washdown & Mud Resistance (100-Bar Pressure)',
      'Off-Road Virtual Geofence Site Curfew & Night Curfew Alarms',
      'Heavy Diesel Tank Siphoning Protection for Construction Machines',
      'ISO 16750 Heavy Vibration Hardened Chassis Telemetry'
    ],
    compliance: ['IP69K Waterproof', 'ISO 16750 Vibration Rated', 'ISO 9001:2015', 'CE / FCC'],
    hardware: 'WizIOT Mining Hardened IP69K Gateway + Hydraulic Pressure Transducer',
    useCases: [
      { title: 'Mining Operations', desc: 'Track 200-ton haul trucks across open-pit mines with dust-proof IP69K gateways and fuel reconciliation.' },
      { title: 'Construction Sites', desc: 'Prevent overnight equipment theft with geofence curfews and engine immobilization on excavators.' },
      { title: 'Power Generators', desc: 'Monitor stationary diesel generator fuel levels and run-time hours for remote site billing.' }
    ]
  },
  {
    id: 'public-transit',
    title: 'Public Transit & Smart Cities',
    category: 'Urban Mobility',
    description: 'Passenger counting sensors, automated stop announcements, and route adherence tracking for municipal bus networks using Video Telematics.',
    image: '/vert-transit.webp',
    heroImage: '/sol-transit-hero.webp',
    detailImage: '/sol-transit-detail.webp',
    badge: 'Smart City',
    icon: 'Bus',
    points: ['Accurate Passenger Counting', 'Integrated Transit Tracking', 'Automated Next-Stop Announcements'],
    details: 'Smart municipal public transit telematics platform providing AI optical passenger counting, automated audio-visual stop announcements, and real-time GTFS transit feed publishing for urban bus fleets and integrating seamlessly with Taxi GPS Meter systems and Video Telematics for complete city transport visibility.',
    features: [
      'AI Optical Overhead Passenger Density & Counting (99% Accuracy)',
      'Automated Next-Stop Audio & LED Screen Announcements',
      'Real-Time GTFS & GTFS-RT Open Data Transit Feed Publishing',
      'Driver Route Schedule Adherence & Dwell Time Analytics',
      'UN ECE R10 EMC Electromagnetic Interference Compliance',
      'Municipal Bus Fleet Carbon Emission Tracking & Reporting'
    ],
    compliance: ['UN ECE R10 EMC', 'GTFS / GTFS-RT Compliant', 'AIS 140 VLT Standard', 'ADA Compliant'],
    hardware: 'WizIOT Transit Display Terminal + AI Passenger Counting Camera',
    useCases: [
      { title: 'City Bus Networks', desc: 'Real-time passenger load balancing and schedule adherence for 500+ bus municipal networks.' },
      { title: 'BRT Corridors', desc: 'Automated station dwell time optimization and platform crowd density monitoring.' },
      { title: 'Municipal Fleet Analytics', desc: 'Track carbon emissions and fuel efficiency across public transport fleets.' }
    ]
  },
  {
    id: 'school-transport',
    title: 'School Transport & Student Safety',
    category: 'Education & Transit',
    description: 'Student RFID check-in/out tracking, live parent mobile app location broadcasts, panic buttons, and AIS 140 school bus safety.',
    image: '/vert-school.webp',
    heroImage: '/sol-school-hero.webp',
    detailImage: '/sol-school-detail.webp',
    badge: 'Student Buddy',
    icon: 'School',
    points: ['Instant Student Boarding Alerts', 'Live Location Tracking for Parents', 'Emergency Driver Panic Button'],
    details: 'Purpose-built school transport safety telematics platform ("School Buddy Solution"). Combines student RFID card attendance logging, live parent mobile app tracking, automated school zone speed limit enforcement, and emergency panic buttons.',
    features: [
      'Student RFID Card Tap Check-In / Check-Out SMS Notifications',
      'Live Parent Mobile App Bus Location & Arrival ETA Tracking',
      'Emergency Driver Panic Button & Control Room SOS Dispatch',
      'Driver Overspeeding, Harsh Braking & Safety Scorecard Analytics',
      'AIS 140 Compliant Vehicle Location Tracking (VLT) Unit',
      'Automated School Zone Speed Limit & Curfew Enforcement'
    ],
    compliance: ['AIS 140 Compliant VLT', 'ISO 9001:2015', 'CE Certified', 'School Safety Standard'],
    hardware: 'WizIOT AIS 140 VLT Terminal + Student RFID Reader + Panic Button',
    useCases: [
      { title: 'School Bus Fleets', desc: 'Give parents peace of mind with live bus location tracking, estimated arrival times, and instant RFID tap alerts.' },
      { title: 'Student Safety Audits', desc: 'Ensure zero left-behind students with automated end-of-route seat check verification alarms.' },
      { title: 'Driver Behavior Coaching', desc: 'Monitor driver speed in school zones and eliminate aggressive driving habits around children.' }
    ]
  }
];
