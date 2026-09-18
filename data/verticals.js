export const VERTICALS_DATA = [
  {
    id: 'telematics',
    title: 'Commercial Fleet & Heavy Truck Telematics',
    category: 'Logistics & Commercial Haulage',
    seoTitle: 'Heavy Truck & Commercial Fleet Telematics | Fuel Theft & Anti-Jamming | WizIOT',
    seoDescription: 'Enterprise commercial fleet telematics engineered for long-haul trucks and articulated haulage. Sub-second GPS tracking, ±0.2% capacitive fuel probes, CAN-bus J1939 telemetry, and UN ECE R116 immobilization.',
    description: 'End-to-end commercial fleet visibility, remote engine diagnostics, fuel siphoning protection, and automated maintenance scheduling for long-haul heavy haulage trucks.',
    image: '/vert-telematics.webp',
    heroImage: '/sol-telematics-hero.webp',
    detailImage: '/sol-telematics-detail.webp',
    badge: 'Enterprise Haulage',
    icon: 'Truck',
    points: ['Real-Time Fuel Drain Alerts', 'Prevent Night-time Fuel Theft', 'Safe Remote Truck Immobilization'],
    details: 'Comprehensive B2B telematics architecture engineered for commercial transport hauliers. Connects heavy semi-trucks, trailers, and delivery vans with live GPS tracking via advanced Vehicle Telematics trackers, OBD Telematics dongles, ±0.2% capacitive fuel probes, ECU CAN-bus diagnostic monitoring, and automated fuel card reconciliation.',
    features: [
      'Real-Time Capacitive Fuel Siphoning & Drain Alerts (±0.2% Precision)',
      'UN ECE R116 Compliant Remote Engine Immobilization & Anti-Theft',
      'Automated Engine Idle Waste & Stoppage Duration Reports',
      'ECU CAN-Bus J1939 Fuel Consumption vs. Refueling Card Reconciliation',
      'Multi-Tank Differential Volume Equalization Algorithm',
      'Multi-SIM Global Cellular Roaming with Satellite Fallback',
      'Dual-Frequency GNSS Anti-Jamming & Jammer Interference Detection',
      'Heavy Haulage TPMS Wireless Valve Pressure & Thermal Telemetry'
    ],
    compliance: ['AIS 140 Compliant', 'ISO 9001:2015 Quality', 'ISO/IEC 17025 Calibration', 'IP67 Waterproof', 'UN ECE R116', 'CE / FCC Certified'],
    hardware: 'WizIOT G400 Heavy Gateway + ±0.2% Capacitive Fuel Level Probe + BLE TPMS Pods',
    specs: [
      { label: 'Fuel Measurement Accuracy', value: '±0.2% Full Scale (1mm resolution)' },
      { label: 'CAN-Bus Support', value: 'J1939, J1708, OBD-II (K-Line / CAN 2.0B)' },
      { label: 'Cellular Connectivity', value: '4G LTE Cat-1 / Cat-M1 / NB-IoT with 2G fallback' },
      { label: 'Anti-Tamper & Jamming', value: 'Automated Jamming Detection & Engine Lock Logic' },
      { label: 'Environmental Ingress', value: 'IP67 Ingress Waterproof / Shock-proof Enclosure' },
      { label: 'Internal Battery Backup', value: '1,000 mAh Li-Polymer (up to 48 hours alert beacon)' }
    ],
    faqs: [
      {
        question: 'How quickly does the system detect diesel siphoning or fuel theft?',
        answer: 'The WizIOT capacitive fuel probe samples fluid levels at 50Hz. When ignition is OFF and fuel volume drops unexpectedly by more than 3 liters within 60 seconds, an instant high-priority alert is triggered via SMS, push notification, and webhook.'
      },
      {
        question: 'How does the system prevent illegal engine shutdowns while the truck is at high speed?',
        answer: 'Our remote immobilization protocol adheres strictly to UN ECE R116 automotive safety directives. The gateway cross-checks CAN-bus road speed; if velocity exceeds 5 km/h, the immobilizer decelerates the vehicle safely or awaits the next complete stop before locking the starter circuit.'
      },
      {
        question: 'Can the telematics gateway integrate dual fuel tanks on articulated trucks?',
        answer: 'Yes. Our firmware features a multi-tank differential equalization algorithm that calculates inter-tank siphoning versus actual engine burn across twin saddle tanks, preventing false theft alerts.'
      },
      {
        question: 'How does the hardware handle GPS jamming attempts by organized cargo thieves?',
        answer: 'The G400 gateway features active GNSS signal-to-noise ratio (SNR) monitoring. When jamming RF frequency interference is detected on L1/L5 bands, the unit logs an instant offline jammer exception, sounds an in-cab buzzer, and initiates tamper safety mode.'
      },
      {
        question: 'Does the system integrate with existing third-party TMS and ERP platforms?',
        answer: 'Yes, WizIOT streams raw telemetry via open MQTT, TCP/UDP sockets, and RESTful webhooks into SAP, Oracle Transportation Management, Descartes, and custom customer backends.'
      }
    ],
    useCases: [
      { title: 'Long-Haul Freight', desc: 'Track articulated trucks across 5,000+ km trans-continental corridors with zero blind spots and siphoning protection.' },
      { title: 'Fuel Theft Elimination', desc: 'Catch siphoning within 12 seconds using ignition-off capacitive probe monitoring and SMS alerts.' },
      { title: 'Fleet Maintenance', desc: 'Decode ECU J1939 fault codes in real time to schedule preventive servicing before engine failures.' }
    ]
  },
  {
    id: 'ev-fleets',
    title: 'E-Mobility & EV Fleets Telematics',
    category: 'Clean Energy & E-Mobility',
    seoTitle: 'EV Fleet Telematics & BMS Monitoring | Real-Time SoH, Range & Thermal Alerts | WizIOT',
    seoDescription: 'Enterprise EV fleet telematics and Battery Management System (BMS) analytics. Real-time State of Charge (SoC), State of Health (SoH), cell thermal runaway warnings, and charging depot optimization.',
    description: 'Specialized BMS analytics for commercial electric buses, delivery vans, and 2W/3W fleets. Track range, charging cycles, cell temperatures, and battery degradation.',
    image: '/vert-ev.webp',
    heroImage: '/sol-ev-hero.webp',
    detailImage: '/sol-ev-detail.webp',
    badge: 'Clean Energy Leader',
    icon: 'Zap',
    points: ['Live Battery Health Monitoring', 'Automated Charging Route Planner', 'Fire Safety & Overheating Alerts'],
    details: 'Advanced Battery Management System (BMS) telemetry engine designed for commercial electric vehicles in high ambient temperatures (up to 50°C). Tracks real-time State of Charge (SoC), State of Health (SoH), cell voltage balancing, and thermal runaway safety alerts across bus, truck, and van fleets.',
    features: [
      'Real-Time State of Charge (SoC) & State of Health (SoH) Telemetry',
      'Cell Voltage Imbalance & Thermal Runaway Early Warning Alarms',
      'Payload-Adjusted EV Range Forecasting & Station Locator',
      'Regenerative Braking Energy Recovery Efficiency Scorecards',
      'Smart DC Fast-Charging Session Logging & Battery Health Optimization',
      'Battery Enclosure IP68 Waterproof & Thermal Safety Audits',
      'Automated Kilowatt-Hour (kWh) Consumption per Kilometer Analytics',
      'CAN-bus Sniffing for BYD, CATL, Tesla, Tata, and Custom Lithium BMS'
    ],
    compliance: ['ISO 26262 Functional Safety', 'IP68 Battery Enclosure Standard', 'IEC 61851 EV Charging', 'UN ECE R100 Battery Safety', 'CE / FCC Certified'],
    hardware: 'WizIOT EV-BMS Telematics Controller + CAN-bus J1939 / CANopen Sniffer',
    specs: [
      { label: 'BMS Protocols Supported', value: 'CAN 2.0B, CAN-FD, J1939, CANopen, RS-485 Modbus' },
      { label: 'Battery Chemistry Telemetry', value: 'LFP (Lithium Iron Phosphate), NMC, LTO, Solid-State' },
      { label: 'Thermal Sensor Range', value: '-40°C to +125°C per individual module probe' },
      { label: 'Sampling Rate', value: '100ms real-time high-speed CAN telemetry packet broadcast' },
      { label: 'Ingress & Vibration', value: 'IP68 Submersible / ISO 16750-3 Automotive Vibration' },
      { label: 'Telemetry Stream Latency', value: '< 800ms end-to-end to cloud fleet dispatch' }
    ],
    faqs: [
      {
        question: 'How does WizIOT predict thermal runaway before battery fires occur?',
        answer: 'Our EV telematics unit monitors individual module thermal gradients and cell voltage variance at 100ms intervals. If any single cell exhibits an abnormal temperature spike exceeding 1.5°C/second relative to neighboring cells, an immediate emergency thermal warning is broadcast.'
      },
      {
        question: 'Does the system calculate true payload-adjusted EV range?',
        answer: 'Yes. Generic vehicle dashboards estimate range based on past flat-road driving. WizIOT calculates dynamic range by factoring in real-time axle weight, topographical elevation changes, HVAC power draw, and ambient battery temperature.'
      },
      {
        question: 'Can the platform optimize depot charging schedules for electric buses?',
        answer: 'Our smart charging dispatcher integrates with depot chargers via OCPP 1.6/2.0.1 protocols. It staggers fast charging sessions during off-peak electrical tariff hours to prevent grid peak-demand surcharges while ensuring all buses hit 100% SoC before morning shifts.'
      },
      {
        question: 'Will installing this telematics device void the manufacturer battery warranty?',
        answer: 'No. The WizIOT EV gateway utilizes contactless inductive magnetic CAN sniffers that read data from the vehicle bus without cutting or splicing factory high-voltage harness wires.'
      },
      {
        question: 'Can we track battery State of Health (SoH) and degradation for leasing audits?',
        answer: 'Yes. The system automatically tracks full equivalent cycle counts, deep discharge events (DoD), and Coulombic efficiency over time, generating certified third-party battery valuation and warranty reports.'
      }
    ],
    useCases: [
      { title: 'Electric Bus Fleets', desc: 'Monitor 200+ electric transit buses with per-cell voltage telemetry and depot charging optimization.' },
      { title: 'EV Delivery Vans', desc: 'Guarantee last-mile range with payload-adjusted battery forecasting and smart route charging.' },
      { title: 'Electric 2W/3W Fleets', desc: 'Track battery swap station usage and rider behavior across thousands of electric scooters and rickshaws.' }
    ]
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain & Pharma Logistics Telematics',
    category: 'Temperature-Controlled Transport',
    seoTitle: 'Cold Chain & Reefer Telematics | WHO GDP & FDA 21 CFR Part 11 Certified | WizIOT',
    seoDescription: 'Certified cold-chain telematics for refrigerated reefer trailers, vaccine logistics, and perishable food transit. Wireless BLE temperature probes (-80°C to +70°C), door-opening alarms, and automated compliance reports.',
    description: 'Continuous temperature and humidity telemetry monitoring for perishable food, pharmaceuticals, and biological samples in transit.',
    image: '/vert-coldchain.webp',
    heroImage: '/sol-coldchain-hero.webp',
    detailImage: '/sol-coldchain-detail.webp',
    badge: 'GDP / FDA Certified',
    icon: 'Thermometer',
    points: ['Continuous Temperature Tracking', 'Door Open Spoilage Alerts', 'Automated Cargo Safety Reports'],
    details: 'Strict WHO GDP and US-FDA 21 CFR Part 11 compliant cold chain telematics stack for refrigerated reefer trailers, vaccine transport, and fresh seafood export fleets. Delivers continuous wireless BLE temperature and humidity logging with automated PDF compliance certificates.',
    features: [
      'Wireless BLE 5.0 Temperature & Humidity Sensors (-80°C to +70°C)',
      'Cryptographically Signed WHO GDP & 21 CFR Part 11 Audit Certificates',
      'Instant Reefer Door Open & Thermal Vapor Leak Alarms',
      'Multi-Zone Independent Compartment Climate Control (Frozen/Chilled)',
      'Reefer Compressor Engine Fuel & Generator Runtime Telemetry',
      'Air Cargo to Road Handover Chain-of-Custody Logging',
      'EN 12830 Certified In-Cab Temperature Display for Drivers',
      'Direct Controller Integration with Thermo King & Carrier Transicold'
    ],
    compliance: ['WHO GDP Certified', 'US-FDA 21 CFR Part 11', 'EN 12830 Standard', 'HACCP Compliant', 'ISO 9001:2015 Quality'],
    hardware: 'WizIOT Reefer Master Gateway + Dual BLE 5.2 NIST-Traceable Temp Pods',
    specs: [
      { label: 'Sensor Temperature Range', value: '-80°C to +70°C (Ultra-Cold mRNA to Ambient)' },
      { label: 'Calibration Tolerance', value: '±0.2°C NIST-Traceable Certificate Included' },
      { label: 'Door Sensor Technology', value: 'Magnetic Hall-Effect + Passive Infrared (PIR)' },
      { label: 'Offline Data Buffer', value: 'Up to 30,000 temperature logs stored during zero cellular signal' },
      { label: 'Battery Lifespan of Pods', value: '5-year internal lithium battery (replaceable)' },
      { label: 'Audit Trail Export', value: 'Automated tamper-evident cryptographic PDF & CSV' }
    ],
    faqs: [
      {
        question: 'Does the system satisfy strict WHO Good Distribution Practice (GDP) audits?',
        answer: 'Yes. All data logs are recorded with cryptographic timestamps and stored in immutable cloud storage complying with WHO GDP Technical Report Series 961 and Annex 9 standards.'
      },
      {
        question: 'How does the driver know if a temperature excursion occurs while on the highway?',
        answer: 'The system triggers an audible in-cab buzzer, flashes warning LEDs on the dashboard display terminal, and sends SMS and WhatsApp alerts to both driver and logistics control room simultaneously.'
      },
      {
        question: 'Can the telematics unit read engine fault codes from Thermo King and Carrier reefers?',
        answer: 'Yes. Our gateway interfaces directly with Thermo King (TG-VI, SR-2, SR-3, SR-4) and Carrier (DataCOLD, Vector, APX) microprocessors via RS-232/RS-485 serial ports to monitor setpoint, return air temp, compressor discharge pressure, and alarm codes.'
      },
      {
        question: 'What happens when a refrigerated truck loses cellular signal in remote valleys?',
        answer: 'The onboard sensor pods continue sampling temperature every 60 seconds into non-volatile flash memory. As soon as cellular connection is restored, all backlogged data packets are synchronized without any data gaps.'
      },
      {
        question: 'Can we divide a trailer into frozen and chilled compartments with separate alerts?',
        answer: 'Yes. The system supports multi-zone tracking with up to 16 wireless BLE sensors assigned to separate thermal compartments (e.g., -20°C for frozen meats and +4°C for fresh dairy) with distinct escalation thresholds.'
      }
    ],
    useCases: [
      { title: 'Vaccine Distribution', desc: 'WHO GDP-compliant temperature logging for mRNA vaccine transport at -70°C with tamper-proof audit trails.' },
      { title: 'Fresh Produce Export', desc: 'Monitor humidity and ethylene levels in perishable fruit containers from farm to port.' },
      { title: 'Pharmaceutical Logistics', desc: 'Automated 21 CFR Part 11 compliance certificates for clinical trial drug shipments.' }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare Fleet Tracking & Emergency Services Telematics',
    category: 'Healthcare & Emergency Services',
    seoTitle: 'Healthcare Fleet Tracking & Ambulance Telematics | Hospital Dispatch & Cold Chain | WizIOT',
    seoDescription: 'Enterprise healthcare fleet tracking and ambulance telematics. Sub-second priority siren routing, live medical oxygen cylinder telemetry, blood specimen temperature logging, and hospital arrival ETA broadcasts.',
    description: 'Priority siren dispatch, patient transport tracking, medical cold chain, and emergency life-support telemetry for hospital networks and ambulance fleets.',
    image: '/vert-healthcare.webp',
    heroImage: '/sol-healthcare-hero.webp',
    detailImage: '/sol-healthcare-detail.webp',
    badge: 'Mission-Critical Duty',
    icon: 'Activity',
    points: ['Fast Emergency Routing', 'Live Oxygen Supply Tracking', 'Arrival Time Sharing for Hospitals'],
    details: 'Mission-critical healthcare fleet dispatch, emergency ambulance telematics, and medical specimen transport tracking. Combines siren-triggered priority traffic routing, live medical oxygen cylinder pressure telemetry, sensitive patient ride smoothness scoring, and sub-second hospital emergency bay arrival ETA broadcasts.',
    features: [
      'Sub-Second Priority Siren Dispatch & Traffic Signal Preemption',
      'Medical Oxygen Tank Pressure & Life Support Battery Telemetry',
      'Real-Time Hospital Emergency Room Arrival ETA Broadcast',
      'Smooth Ride Acceleration & Cornering Scorecards for Critical Patient Safety',
      'Biological Sample, Organ & Blood Bank Continuous Temperature Telemetry',
      'AIS 140 Emergency Response Vehicle Location Tracking (VLT)',
      'Automated Patient Transport Booking & Driver Dispatch Optimization',
      'Two-Way Hands-Free Voicemail & Driver Emergency Duress Panic System'
    ],
    compliance: ['AIS 140 Compliant', 'ISO 13485 Medical Devices Quality', 'EN 1789 Ambulance Standard', 'HIPAA Data Encryption Compliant', 'CE / FCC Certified'],
    hardware: 'WizIOT Emergency Dispatch Telematics Terminal + Medical BLE Mesh + Pressure Transducer',
    specs: [
      { label: 'Location Broadcast Frequency', value: '1-second sub-second high-frequency GPS pinging' },
      { label: 'Oxygen Tank Monitoring', value: '0-300 Bar Industrial Medical Pressure Transducer' },
      { label: 'Ride Quality Telemetry', value: '3-Axis Gyroscope & Accelerometer (G-force smooth ride scoring)' },
      { label: 'Specimen Cold Chain', value: 'Wireless BLE probes (-40°C to +60°C) with continuous logging' },
      { label: 'Emergency Duress Trigger', value: 'Concealed tactile panic switch with silent control room alarm' },
      { label: 'Data Security Standard', value: 'End-to-end AES-256 encrypted telemetry stream (HIPAA compliant)' }
    ],
    faqs: [
      {
        question: 'How does the system calculate hospital emergency room arrival times (ETA)?',
        answer: 'WizIOT calculates ETAs using live siren activation telemetry combined with real-time traffic signal preemption APIs, updating hospital triage ward screens every second so emergency doctors are prepped before the ambulance pulls into the bay.'
      },
      {
        question: 'Can the telematics hardware monitor medical oxygen cylinder levels in real time?',
        answer: 'Yes. Our high-precision 0-300 bar medical gas pressure transducer connects directly to main ambulance manifolds, generating automated alerts when tank capacity falls below 20%, ensuring vehicles never run dry during transfers.'
      },
      {
        question: 'How does the ride smoothness scorecard improve patient safety?',
        answer: 'The unit measures micro G-forces on spinal trauma and cardiac patient transports, scoring the driver on gentle cornering, progressive deceleration, and bump mitigation to protect critical patients from jolting.'
      },
      {
        question: 'Does this platform secure sensitive patient and trip data according to healthcare regulations?',
        answer: 'Yes. All data transmissions are encrypted using military-grade TLS 1.3 and AES-256, complying strictly with HIPAA and international patient data privacy standards.'
      },
      {
        question: 'Can the platform manage specimen transfer couriers and blood bank vans?',
        answer: 'Yes. Couriers carry BLE-monitored isothermal coolboxes that beam live temperature and tamper-detection data to the vehicle gateway, validating continuous custody compliance.'
      }
    ],
    useCases: [
      { title: 'Ambulance Dispatch', desc: 'Reduce emergency response times by 35% with AI-powered priority routing and hospital bay ETA alerts.' },
      { title: 'Blood & Organ Transport', desc: 'Continuous temperature and vibration monitoring for time-critical biological specimen deliveries.' },
      { title: 'Hospital Fleet Control', desc: 'Track patient transport schedules and oxygen equipment inventory across emergency vehicles.' }
    ]
  },
  {
    id: 'industrial-iot',
    title: 'Heavy Equipment & Construction Telematics',
    category: 'Off-Road Heavy Machinery',
    seoTitle: 'Heavy Equipment Tracking & Mining Telematics | Excavator Hours & Diesel Security | WizIOT',
    seoDescription: 'Ruggedized IP69K heavy equipment tracking and mining telematics. Automated excavator operating hours, hydraulic line pressure, diesel siphoning protection, and off-road site curfew geofencing.',
    description: 'Track excavator operating hours, diesel consumption, hydraulic pressure, and prevent heavy machinery theft at construction and mining sites.',
    image: '/vert-heavy.webp',
    heroImage: '/sol-heavy-hero.webp',
    detailImage: '/sol-heavy-detail.webp',
    badge: 'Heavy Industrial',
    icon: 'Cpu',
    points: ['Automated Usage Tracking', 'Heavy Machinery Health Monitoring', 'Job Site Equipment Protection'],
    details: 'Ultra-ruggedized IP69K telematics gateways built for yellow metal excavators, bulldozers, mining dump trucks, and stationary power generators operating in heavy vibration and high dust environments. Integrated with versatile IoT Sensors and robust Assets & Personal Telematics for comprehensive site coverage.',
    features: [
      'Automated Engine Operating Hours & Maintenance Service Counter',
      'Hydraulic Line Pressure & Engine Load Percentage Telemetry',
      'IP69K Steam Washdown & Mud Resistance (100-Bar Pressure Proof)',
      'Off-Road Virtual Geofence Site Curfew & Night Unauthorized Movement Alarms',
      'Heavy Diesel Tank Siphoning Protection for Construction Machines',
      'ISO 16750 Heavy Vibration Hardened Chassis Telemetry',
      'Operator RFID Immobility & Certified Driver Authorization',
      'Satellite Telemetry Fallback for Remote Desert & Open-Pit Mining Sites'
    ],
    compliance: ['IP69K High-Pressure Waterproof', 'ISO 16750-3 Vibration Rated', 'ISO 9001:2015 Quality', 'CE / FCC Certified'],
    hardware: 'WizIOT Mining Hardened IP69K Gateway + Hydraulic Pressure Transducer + Diesel Probe',
    specs: [
      { label: 'Ingress Protection', value: 'IP69K ( withstands 100-bar high-pressure hot water steam jets)' },
      { label: 'Vibration & Shock Tolerance', value: 'ISO 16750-3 compliant up to 20G vibration' },
      { label: 'Hour Meter Accuracy', value: 'True engine alternator run-time sensing (±1 minute per month)' },
      { label: 'Operating Voltage Range', value: '9V to 90V DC with 600V surge load dump suppression' },
      { label: 'Satellite Communication', value: 'Optional Iridium SBD satellite module for zero-cell dead zones' },
      { label: 'Anti-Theft Immobilization', value: 'Hydraulic pilot valve lock / starter motor lockout relay' }
    ],
    faqs: [
      {
        question: 'Can the telematics gateway withstand pressure washing on construction equipment?',
        answer: 'Yes. The hardware is certified to IP69K, the highest ingress protection standard available, guaranteeing complete sealing against mud, fine silica dust, and high-pressure 100-bar steam cleaning.'
      },
      {
        question: 'How do you prevent diesel theft on excavators parked overnight at remote job sites?',
        answer: 'Our immersion capacitive probe remains energized by internal backup battery when the machine is switched off. Any drop in diesel volume triggers an instant loud external siren, flashes work lights, and sends SMS alarms to site security.'
      },
      {
        question: 'How does true engine hour metering differ from simple ignition tracking?',
        answer: 'Ignition-only trackers log hours even when an operator leaves the key in the ON position without running the engine. WizIOT monitors actual alternator ripple and CAN-bus engine RPM to count true working hours, ensuring accurate maintenance schedules and rental billing.'
      },
      {
        question: 'Can we stop unauthorized personnel from operating dangerous heavy machinery?',
        answer: 'Yes. The gateway integrates with operator RFID badges or iButton keys. If an unauthorized operator attempts to start the equipment, the hydraulic pilot valve remains disabled.'
      },
      {
        question: 'Does the system work in deep open-pit mines where cellular coverage does not exist?',
        answer: 'Yes. The unit stores up to 60 days of telemetry in offline memory and automatically uploads via dual-mode satellite (Iridium) or when the machine passes within range of Wi-Fi / private LTE dump station hubs.'
      }
    ],
    useCases: [
      { title: 'Mining Operations', desc: 'Track 200-ton haul trucks across open-pit mines with dust-proof IP69K gateways and fuel reconciliation.' },
      { title: 'Construction Sites', desc: 'Prevent overnight equipment theft with geofence curfews and engine immobilization on excavators.' },
      { title: 'Power Generators', desc: 'Monitor stationary diesel generator fuel levels and run-time hours for remote site billing.' }
    ]
  },
  {
    id: 'public-transit',
    title: 'Public Transit & Smart City Mobility Telematics',
    category: 'Municipal & Urban Transit',
    seoTitle: 'Public Transit & Bus Telematics | Automated Passenger Counting & GTFS-RT | WizIOT',
    seoDescription: 'Smart public transit telematics platform providing AI optical passenger counting (99% accuracy), automated next-stop audio-visual announcements, and real-time GTFS/GTFS-RT transit feed publishing.',
    description: 'Passenger counting sensors, automated stop announcements, and route schedule adherence tracking for municipal bus networks.',
    image: '/vert-transit.webp',
    heroImage: '/sol-transit-hero.webp',
    detailImage: '/sol-transit-detail.webp',
    badge: 'Smart City Urban Mobility',
    icon: 'Bus',
    points: ['Accurate Passenger Counting', 'Integrated Transit Tracking', 'Automated Next-Stop Announcements'],
    details: 'Smart municipal public transit telematics platform providing AI optical passenger counting, automated audio-visual stop announcements, and real-time GTFS transit feed publishing for urban bus fleets and integrating seamlessly with Taxi GPS Meter systems and Video Telematics for complete city transport visibility.',
    features: [
      'AI Optical Overhead Passenger Density & Counting (99% Accuracy)',
      'Automated Next-Stop Audio & LED Screen Announcements',
      'Real-Time GTFS & GTFS-RT Open Data Transit Feed Publishing',
      'Driver Route Schedule Adherence & Dwell Time Analytics',
      'UN ECE R10 EMC Electromagnetic Interference Compliance',
      'Municipal Bus Fleet Carbon Emission Tracking & Reporting',
      'Driver Behavioral Safety Video Telematics with ADAS & DMS Integration',
      'Automated Fare Collection (AFC) & Smart Card Validator Integration'
    ],
    compliance: ['UN ECE R10 EMC Certified', 'GTFS / GTFS-RT Compliant', 'AIS 140 VLT Standard', 'ADA / Disability Accessibility Compliant', 'CE / FCC'],
    hardware: 'WizIOT Transit Display Terminal + AI 3D Time-of-Flight Passenger Counter',
    specs: [
      { label: 'Passenger Counter Accuracy', value: '99% bi-directional boarding / alighting precision' },
      { label: 'Transit Feed Compatibility', value: 'GTFS Static & GTFS-RT (Vehicle Position, Trip Update, Alerts)' },
      { label: 'Display & Audio Integration', value: 'HDMI / RS-485 to LED destination signs & PA audio amplifiers' },
      { label: 'Driver Communication', value: 'Rugged 7-inch Android in-cab dispatch console' },
      { label: 'EMC Protection', value: 'UN ECE R10 approved against electromagnetic interference' },
      { label: 'Fleet Scaling', value: 'Supports 10,000+ simultaneous transit vehicles per city authority' }
    ],
    faqs: [
      {
        question: 'How accurate is the overhead passenger counting camera system?',
        answer: 'Our 3D optical Time-of-Flight (ToF) sensors achieve greater than 99% accuracy by filtering out shadows, strollers, and luggage to count distinct adult and child boardings.'
      },
      {
        question: 'Does the platform generate public-facing real-time transit data for Google Maps and transit apps?',
        answer: 'Yes. WizIOT automatically compiles and publishes open standard GTFS-Realtime (GTFS-RT) feeds that integrate out-of-the-box with Google Maps, Citymapper, Moovit, and custom commuter mobile apps.'
      },
      {
        question: 'Can the system trigger automated next-stop audio announcements for visually impaired passengers?',
        answer: 'Yes. When the vehicle enters a geofenced stop zone, the terminal triggers bilingual audio announcements over internal speakers and displays corresponding text on LED passenger screens, fully compliant with accessibility standards.'
      },
      {
        question: 'How does schedule adherence tracking prevent bus bunching?',
        answer: 'The system computes headway spacing between successive buses along the corridor. If a bus falls behind schedule or catches up to the forward vehicle, the driver console issues pacing recommendations.'
      },
      {
        question: 'Can the terminal connect to electronic fare ticketing machines (ETMs)?',
        answer: 'Yes. Our transit gateway interfaces with ticketing machines via Ethernet and RS-232 to correlate revenue collection with passenger load data per stop.'
      }
    ],
    useCases: [
      { title: 'City Bus Networks', desc: 'Real-time passenger load balancing and schedule adherence for 500+ bus municipal networks.' },
      { title: 'BRT Corridors', desc: 'Automated station dwell time optimization and platform crowd density monitoring.' },
      { title: 'Municipal Fleet Analytics', desc: 'Track carbon emissions and fuel efficiency across public transport fleets.' }
    ]
  },
  {
    id: 'school-transport',
    title: 'School Transport & Student Safety Telematics',
    category: 'Education & Student Transit',
    seoTitle: 'School Bus Telematics & Student RFID Safety | Parent Mobile App & Live ETA | WizIOT',
    seoDescription: 'Dedicated school bus telematics and student tracking solution. RFID attendance check-in/out, live parent mobile app tracking, automated school zone speed governance, and panic emergency response.',
    description: 'Student RFID check-in/out tracking, live parent mobile app location broadcasts, panic buttons, and AIS 140 school bus safety.',
    image: '/vert-school.webp',
    heroImage: '/sol-school-hero.webp',
    detailImage: '/sol-school-detail.webp',
    badge: 'Student Safety Solution',
    icon: 'School',
    points: ['Instant Student Boarding Alerts', 'Live Location Tracking for Parents', 'Emergency Driver Panic Button'],
    details: 'Purpose-built school transport safety telematics platform ("School Buddy Solution"). Combines student RFID card attendance logging, live parent mobile app tracking, automated school zone speed limit enforcement, and emergency panic buttons.',
    features: [
      'Student RFID Card Tap Check-In / Check-Out SMS Notifications',
      'Live Parent Mobile App Bus Location & Arrival ETA Tracking',
      'Emergency Driver Panic Button & Control Room SOS Dispatch',
      'Driver Overspeeding, Harsh Braking & Safety Scorecard Analytics',
      'AIS 140 Compliant Vehicle Location Tracking (VLT) Unit',
      'Automated School Zone Speed Limit & Curfew Enforcement',
      'Child Left Behind Rear-Seat Check Automated Buzzer System',
      'Integrated In-Cabin AI Dashcam with Real-Time Video Telematics'
    ],
    compliance: ['AIS 140 Compliant VLT', 'ISO 9001:2015 Quality', 'CE / FCC Certified', 'International Child Safety Transportation Standard'],
    hardware: 'WizIOT AIS 140 VLT Terminal + Student RFID Tap Reader + SOS Panic Button + Rear Seat Check Unit',
    specs: [
      { label: 'RFID Reader Frequency', value: '13.56 MHz Mifare / 125 kHz Proximity RFID cards' },
      { label: 'Parent Notification Speed', value: '< 3 seconds for boarding/deboarding push notifications' },
      { label: 'Child Check System', value: 'Mandatory driver rear-seat button confirmation before ignition locks' },
      { label: 'Speed Governor Support', value: 'Hardware electronic throttle speed limiter integration' },
      { label: 'Emergency Panic Protocol', value: 'Dual SOS buttons (driver console + passenger compartment)' },
      { label: 'Mobile App Support', value: 'Native iOS & Android apps for parents, drivers, and transport admin' }
    ],
    faqs: [
      {
        question: 'How do parents receive notifications when their child boards or exits the school bus?',
        answer: 'When the student taps their RFID student ID card on the in-vehicle reader, an instant push notification and SMS is dispatched to parents with the exact timestamp, street location, and remaining bus stops.'
      },
      {
        question: 'How does the "Child Left Behind" prevention system work?',
        answer: 'When the driver turns off the bus ignition at the end of the shift, an alarm sounds inside the bus. The driver must walk to the very rear of the bus to press a physical confirmation button, guaranteeing a physical visual inspection of every seat.'
      },
      {
        question: 'Can the system enforce school zone speed limits automatically?',
        answer: 'Yes. The gateway stores pre-programmed geofenced school zones. If the driver exceeds 30 km/h within school grounds or designated pick-up corridors, an audible cabin alarm triggers and transport supervisors are immediately notified.'
      },
      {
        question: 'Is the platform compliant with national school bus safety mandates like AIS 140?',
        answer: 'Yes. The hardware meets all AIS 140 regulatory standards, including dual-SIM connectivity, emergency panic buttons, embedded cryptographic firmware, and direct integration with government emergency response servers.'
      },
      {
        question: 'Can school transport managers track multiple routes and driver behavior simultaneously?',
        answer: 'Yes. The web dispatch dashboard provides real-time route replay, harsh driving scorecards, unauthorized route deviations, and automated fuel efficiency metrics across hundreds of buses.'
      }
    ],
    useCases: [
      { title: 'School Bus Fleets', desc: 'Give parents peace of mind with live bus location tracking, estimated arrival times, and instant RFID tap alerts.' },
      { title: 'Student Safety Audits', desc: 'Ensure zero left-behind students with automated end-of-route seat check verification alarms.' },
      { title: 'Driver Behavior Coaching', desc: 'Monitor driver speed in school zones and eliminate aggressive driving habits around children.' }
    ]
  }
];
