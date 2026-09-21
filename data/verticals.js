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
    title: 'Industrial IoT Solutions & Enterprise Asset Monitoring',
    category: 'Industry 4.0 & Smart IoT',
    seoTitle: 'Industrial IoT Solutions & Smart Asset Monitoring | Modbus, PLC & Edge Gateways | WizIOT',
    seoDescription: 'Enterprise Industrial IoT solutions for manufacturing facilities, remote plant equipment, and heavy assets. Sub-second Modbus/PLC telemetry, edge predictive maintenance, vibration sensors, and cloud OEE dashboards.',
    description: 'Connect factory floor machinery, remote backup generators, solar microgrids, and heavy equipment into unified cloud dashboards with edge computing, vibration telemetry, and predictive maintenance.',
    image: '/vert-heavy.webp',
    heroImage: '/sol-heavy-hero.webp',
    detailImage: '/sol-heavy-detail.webp',
    badge: 'Industry 4.0 & Smart IoT',
    icon: 'Cpu',
    architectureTitle: 'Industrial IoT Edge Architecture & Machine Telemetry Pipeline',
    points: ['Edge PLC & Modbus Protocol Normalization', 'Predictive Machine Health & Vibration Telemetry', 'Remote Generator, Fuel & Facility Energy Oversight'],
    details: 'Comprehensive B2B Industrial IoT architecture bridging shop floor automation, legacy PLCs, remote power generators, solar microgrids, and heavy industrial machinery with real-time cloud intelligence. Ingests Modbus RTU/TCP, CAN-bus, Profinet, and OPC UA protocols through rugged edge gateways, converting raw field telemetry into actionable OEE scores, predictive maintenance alarms, and facility energy optimizations.',
    features: [
      'Multi-Protocol Industrial Edge Normalization (Modbus RTU/TCP, CAN J1939, OPC UA, MQTT Sparkplug B)',
      'High-Frequency Triaxial Vibration & Thermal Anomaly Detection (Predictive Machine Health)',
      'Automated Machine Run-Time Hours, Duty Cycles & OEE Productivity Scoring',
      'Remote Stationary Diesel Generator & Bulk Fuel Tank Monitoring (±0.2% Accuracy)',
      'Facility Energy Sub-Metering, Power Quality & Peak Demand Surcharge Elimination',
      '2.5kV Galvanically Isolated I/O Interfaces with Store-and-Forward Edge Buffering',
      'IP67 / IP69K Harsh Environment, Mud, Vibration, and Steam Washdown Enclosures',
      'Hybrid 4G LTE-M / NB-IoT with Satellite Failover for Zero-Coverage Dead Zones'
    ],
    compliance: ['ISO 9001:2015 Quality', 'IP67 / IP69K Waterproof & Dustproof', 'CE / FCC Certified', 'IEC 61000 EMC Industrial Immunity', 'ISO 16750-3 Vibration Rated'],
    hardware: 'WizIOT DIN-Rail Industrial Edge Gateway + Modbus RS-485 / Isolated I/O + Triaxial Vibration Probe + Capacitive Fuel Probe',
    specs: [
      { label: 'Industrial Protocols', value: 'Modbus RTU/TCP, CAN-bus J1939/CANopen, OPC UA, MQTT Sparkplug B' },
      { label: 'Edge Telemetry Processing', value: 'Local OEE metrics calculation, FFT vibration analysis, automated alarm trips' },
      { label: 'Electrical Isolation', value: '2.5kV optical galvanic isolation on RS-485, digital inputs, and ADC channels' },
      { label: 'Offline Data Buffer', value: 'Up to 500,000 telemetry frames stored in non-volatile flash memory' },
      { label: 'Environmental Ingress', value: 'IP67 / IP69K rated (withstands 100-bar high-pressure hot water steam jets)' },
      { label: 'Operating Temperature & Power', value: '-40°C to +85°C industrial range | 9V to 36V DC with surge suppression' }
    ],
    faqs: [
      {
        question: 'How do WizIOT industrial IoT solutions interface with legacy factory equipment?',
        answer: 'We deploy non-invasive external sensors including split-core CT current clamps, optical rotation counters, and magnetic vibration probes, alongside RS-485 Modbus converters that extract operational telemetry without modifying existing machine wiring or PLC logic.'
      },
      {
        question: 'Can the platform monitor remote power generators and bulk fuel tanks?',
        answer: 'Yes. The gateway interfaces with generator controllers (Deep Sea, ComAp) and high-precision ±0.2% capacitive fuel probes to stream real-time fuel volume, fuel burn rates per kWh, and instant theft siphoning alerts.'
      },
      {
        question: 'What protocols are supported for cloud telemetry transmission?',
        answer: 'WizIOT gateways support MQTT with Sparkplug B payloads, lightweight JSON over WebSockets, and secure REST webhooks with end-to-end TLS 1.3 encryption.'
      },
      {
        question: 'How does vibration monitoring enable predictive maintenance?',
        answer: 'High-frequency triaxial MEMS accelerometers sample bearing and gearbox vibration at up to 10kHz. Edge algorithms perform Fast Fourier Transform (FFT) spectral analysis to detect unbalance, misalignment, and bearing wear weeks before mechanical seizure.'
      },
      {
        question: 'Does the hardware survive remote mining sites and unconditioned plant environments?',
        answer: 'Yes. All gateways are certified to IP67/IP69K, withstand 20G continuous vibration (ISO 16750-3), and support dual-mode cellular (LTE-M/NB-IoT) with Iridium satellite fallback for off-grid operations.'
      }
    ],
    useCases: [
      { title: 'Manufacturing & Smart Factory', desc: 'Connect legacy PLCs and CNC machines via Modbus to track real-time OEE, motor vibration, and scrap rates.' },
      { title: 'Heavy Plant & Backup Generators', desc: 'Monitor stationary diesel generators and yellow iron for fuel consumption, true alternator runtime, and anti-theft.' },
      { title: 'Facility Energy & Renewable Microgrids', desc: 'Ingest power meters and solar inverter telemetry to eliminate utility peak demand penalties and optimize microgrid fuel savings.' }
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
  },
  {
    id: 'fuel-management',
    title: 'Fuel Management Software & IoT Fuel Monitoring Systems',
    category: 'Fuel Security & Telemetry',
    seoTitle: 'Fuel Management Software & Fuel Monitoring System | Fuel Theft Detection | WizIOT',
    seoDescription: 'Enterprise fuel management software and precision IoT fuel monitoring systems. Real-time ±0.2% capacitive fuel probes, ultrasonic sensors, automated fuel theft & siphoning alarms, and fuel card reconciliation.',
    description: 'High-precision capacitive fuel level monitoring, instant fuel theft and siphoning detection, automated fuel card reconciliation, and generator fuel auditing.',
    image: '/vert-fuel.webp',
    heroImage: '/sol-fuel-hero.webp',
    detailImage: '/sol-fuel-detail.webp',
    badge: 'Precision Fuel Security',
    icon: 'Fuel',
    architectureTitle: 'Fuel Telemetry Pipeline & Capacitive Sensor Architecture',
    points: ['±0.2% Capacitive Level Measurement', 'Instant Siphoning & Theft Detection', 'Automated Fuel Card Audit & Burn Reconciliation'],
    details: 'Mission-critical IoT fuel management software and hardware stack engineered for commercial haulage fleets, construction equipment, mining operations, and remote stationary power generators. Combines high-resolution immersion capacitive probes, ultrasonic tank sensors, and CAN-bus ECU telemetry to eliminate diesel siphoning, detect fuel theft within seconds, and reconcile corporate fuel card expenditures with actual tank refills.',
    features: [
      'High-Precision Immersion Capacitive Probes (±0.2% Full-Scale Accuracy, 1mm Resolution)',
      'Sub-60-Second Fuel Siphoning & Unauthorized Drain Alarms with Ignition OFF',
      'CAN-bus J1939 ECU Fuel Consumption vs. Odometer Distance Mileage Analytics',
      'Multi-Tank Differential Equalization Algorithm for Dual-Saddle Fuel Tanks',
      'Stationary Diesel Generator & Bulk Fuel Storage Tank Continuous Telemetry',
      'Automated Fuel Card Transaction Matching & Volume Discrepancy Audits',
      'Thermal Compensation Algorithms Mitigating Fuel Temperature Volume Expansion',
      'Secure Store-and-Forward Offline Logging for Remote Mining & Highway Dead Zones'
    ],
    compliance: ['ISO 9001:2015 Quality', 'IP67 / IP69K Waterproof', 'ATEX / IECEx Intrinsically Safe', 'CE / FCC Certified', 'UN ECE R116'],
    hardware: 'WizIOT G400 Heavy Gateway + ±0.2% Capacitive Fuel Level Probe + Ultrasonic Tank Sensor',
    specs: [
      { label: 'Measurement Accuracy', value: '±0.2% Full Scale (1mm resolution with digital filtering)' },
      { label: 'Sampling Frequency', value: '50Hz continuous fluid sampling with dynamic anti-slosh buffering' },
      { label: 'Ingress Protection', value: 'IP67 probe head | IP69K submersible immersion tube' },
      { label: 'Thermal Range & Compensation', value: '-40°C to +85°C with integrated digital thermal correction' },
      { label: 'CAN-bus Protocols', value: 'J1939, J1708, OBD-II (K-Line / CAN 2.0B) fuel burn rate' },
      { label: 'Tamper & Anti-Siphoning', value: 'Active battery-backed alarm triggers on cable cut or level drop' }
    ],
    faqs: [
      {
        question: 'How quickly does the system detect diesel siphoning or fuel theft?',
        answer: 'The capacitive fuel probe samples fluid levels at 50Hz. When the vehicle ignition is OFF and fuel volume drops unexpectedly by more than 3 liters within 60 seconds, an instant high-priority alert is dispatched via SMS, email, and webhooks to fleet supervisors and on-site security.'
      },
      {
        question: 'How does the software prevent false alerts caused by fuel sloshing during transit?',
        answer: 'Our proprietary digital signal processing (DSP) firmware applies dynamic Kalman filtering and anti-slosh damping algorithms, cross-referencing vehicle acceleration and GPS velocity to calculate steady, true fluid levels even on rough unpaved roads.'
      },
      {
        question: 'Can the system monitor dual saddle fuel tanks on heavy long-haul trucks?',
        answer: 'Yes. The system utilizes multi-tank differential equalization algorithms that model fuel transfer between twin tanks via connecting balance lines, ensuring accurate total fleet fuel volume without false theft alerts.'
      },
      {
        question: 'Can fuel consumption data be reconciled with corporate fuel card invoices?',
        answer: 'Yes. WizIOT automatically imports fuel card swipe records (date, time, station location, volume purchased) and matches them against the exact fuel volume detected entering the tank by the probe at that precise timestamp, flagging skimming or card misuse immediately.'
      },
      {
        question: 'Can this fuel monitoring system be installed on stationary power generators and bulk storage tanks?',
        answer: 'Yes. WizIOT provides dedicated industrial Modbus RS-485 interfaces and wireless cellular transmitters configured specifically for stationary diesel generators, agricultural storage tanks, and construction site fuel bowsers.'
      }
    ],
    useCases: [
      { title: 'Commercial Long-Haul Fleets', desc: 'Eliminate nocturnal fuel siphoning along highway stops and verify every liter pumped against supplier fuel cards.' },
      { title: 'Remote Mining & Construction Sites', desc: 'Monitor bulk fuel storage tanks and heavy yellow machinery to prevent untracked diesel shrinkage.' },
      { title: 'Stationary Backup Generators', desc: 'Audit diesel burn rates per kilowatt-hour across hospital, telecom tower, and data center backup generators.' }
    ]
  }
];

