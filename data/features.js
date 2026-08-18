export const FEATURES_DATA = [
  {
    id: 'tracking',
    title: 'Real-Time Fleet Tracking',
    subtitle: 'High-Precision GPS & Asset Visibility',
    description: 'Track vehicle locations, status, speed, and routes with millisecond latency across global 4G/5G cellular and satellite networks.',
    image: '/feat-tracking.webp',
    highlights: [
      'Live sub-second map updates & trail history',
      'Engine diagnostic trouble code (DTC) alerts',
      'Multi-map view (Satellite, Traffic, Custom Boundaries)',
      'Asset theft prevention & remote immobilizer'
    ],
    metric: '99.99%',
    metricLabel: 'GPS Accuracy Rate',
    icon: 'Radio'
  },
  {
    id: 'dashboard',
    title: 'Executive Fleet Dashboard',
    subtitle: 'Central Command & Actionable Intelligence',
    description: 'Unified command center consolidating total fleet mileage, idle time, active jobs, fuel efficiency, and emergency dispatch alerts.',
    image: '/feat-dashboard.webp',
    highlights: [
      'Customizable KPI widgets for operations managers',
      'Instant fleet health score & maintenance alerts',
      'Multi-tenant enterprise access controls',
      'Exportable reports in PDF, CSV, Excel'
    ],
    metric: '< 2 sec',
    metricLabel: 'Data Refresh Rate',
    icon: 'LayoutDashboard'
  },
  {
    id: 'reports',
    title: 'Advanced Telematics Reports',
    subtitle: 'Data Analytics & Audit Compliance',
    description: 'Generate automated audit-ready reports on trip logs, stoppage duration, fuel fill/drain events, and driver timesheet compliance.',
    image: '/feat-reports.webp',
    highlights: [
      'Automated daily/weekly email dispatch',
      'Fuel theft detection & refueling log verification',
      'Custom trip milestone & stoppage alerts',
      'Regulatory IFTA & duty status compliance'
    ],
    metric: '100+',
    metricLabel: 'Pre-built Report Templates',
    icon: 'BarChart3'
  },
  {
    id: 'ev',
    title: 'EV & BMS Telematics',
    subtitle: 'Battery Management System Analytics',
    description: 'Deep Integration with Electric Vehicle Battery Management Systems (BMS) to optimize range, charging cycles, and battery health.',
    image: '/feat-ev.webp',
    highlights: [
      'Real-time State of Charge (SoC) & State of Health (SoH)',
      'Smart charging station locator & route charging integration',
      'Thermal runaway & cell imbalance warning system',
      'Energy consumption profiling by payload weight'
    ],
    metric: '+25%',
    metricLabel: 'Extended Battery Lifespan',
    icon: 'Zap'
  },
  {
    id: 'route',
    title: 'AI Route Optimization',
    subtitle: 'Smart Dispatch & Delivery Efficiency',
    description: 'Leverage machine learning algorithms to calculate optimal delivery paths, avoiding traffic bottlenecks and cutting fuel waste.',
    image: '/feat-route.webp',
    highlights: [
      'Dynamic multi-stop route sequencing',
      'Real-time traffic & weather rerouting',
      'Geofence-triggered customer ETA notifications',
      'CO2 emissions tracking & carbon offset logging'
    ],
    metric: '18%',
    metricLabel: 'Fuel Consumption Reduction',
    icon: 'Navigation'
  },
  {
    id: 'geofence',
    title: 'Geofence Control & Rules',
    subtitle: 'Automated Zone Perimeter Management',
    description: 'Draw unlimited custom polygonal or circular zones on the map to trigger automated alerts upon entry, exit, or unauthorized delay.',
    image: '/feat-geofence.webp',
    highlights: [
      'Virtual perimeter boundary creation in seconds',
      'Speed limit enforcement per industrial site',
      'Automatic trip start/stop registration',
      'Out-of-bounds night curfew alerts'
    ],
    metric: '< 50ms',
    metricLabel: 'Geofence Alert Latency',
    icon: 'ShieldCheck'
  },
  {
    id: 'driver',
    title: 'Driver Behavior & ADAS',
    subtitle: 'Safety Telematics & Video Monitoring',
    description: 'AI-assisted Advanced Driver Assistance Systems (ADAS) and In-Cabin Monitoring (DMS) to prevent collisions and coach safer driving habits.',
    image: '/feat-driver.webp',
    highlights: [
      'Harsh acceleration, braking & cornering detection',
      'Drowsiness & distraction AI camera detection',
      'Driver safety scorecard & leaderboard',
      'Reduced fleet insurance premiums up to 30%'
    ],
    metric: '-42%',
    metricLabel: 'Accident Rate Reduction',
    icon: 'ShieldAlert'
  }
];
