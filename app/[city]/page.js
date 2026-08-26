import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocations, generateLocationSchema } from '@/lib/locations';
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Truck, Fuel, Zap, Globe, FileText, Search, PhoneCall, Award, Headphones } from 'lucide-react';

export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams?.city);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: { absolute: location.heroHeadline.includes('WizIOT') ? location.heroHeadline : (location.heroHeadline.length <= 51 ? `${location.heroHeadline} | WizIOT` : location.heroHeadline) },
    description: location.metaDescription,
    alternates: {
      canonical: `https://www.wiziot.com/${location.slug}`,
    },
    openGraph: {
      title: `${location.heroHeadline} | WizIOT Telematics`,
      description: location.metaDescription,
      url: `https://www.wiziot.com/${location.slug}`,
      type: 'website',
      images: [`/locations/${location.slug}.webp`],
    },
  };
}

// Simple seeded PRNG to ensure the page renders identically for the same city, but different across cities.
function getSeed(str) {
  let h = 0xdeadbeef;
  for(let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 2654435761);
  return (h ^ h >>> 16) >>> 0;
}
function mulberry32(a) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}
function shuffle(array, randFunc) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(randFunc() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default async function RootCityLocationPage({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams?.city);
  if (!location) notFound(); // Strictly triggers 404 for non-city URLs that fall into this catch-all

  const locationSchema = generateLocationSchema(location);
  const allLocations = getAllLocations();
  
  // Seeded Randomizer for this specific city
  const seed = getSeed(location.slug);
  const rand = mulberry32(seed);

  // Randomize Nearby Locations
  const otherLocations = allLocations.filter((l) => l.slug !== location.slug);
  const nearbyLocations = shuffle([...otherLocations], rand).slice(0, 3);
  
  const cityImage = `/locations/${location.slug}.webp`;

  // Base Data Arrays
  const basePopularSearches = [
    `Best GPS Tracker in ${location.city}`,
    `Fuel Theft Sensor ${location.city}`,
    `Cold Chain Telematics ${location.city}`,
    `Remote Engine Immobilizer ${location.city}`,
    `Heavy Equipment IoT ${location.city}`,
    `Trailer Asset Tracker ${location.city}`,
    `WHO GDP Vaccine Monitoring ${location.city}`,
    `ISO Certified Sensor Compliance ${location.city}`,
    `Fleet Management Software ${location.city} ${location.country}`
  ];

  const baseServices = [
    {
      title: `Fuel Theft & Siphoning Prevention in ${location.city}`,
      icon: Fuel,
      desc: `High-precision ±0.2% capacitive fuel probes and real-time siphoning SMS alerts engineered for commercial trucks operating in ${location.city}.`,
      badge: 'Fuel Fraud Defense'
    },
    {
      title: `Anti-Jamming & Remote Immobilization in ${location.city}`,
      icon: ShieldCheck,
      desc: `Multi-constellation GNSS anti-jamming protection paired with biometric mobile app engine cut-off for high-risk transit corridors around ${location.city}.`,
      badge: 'Anti-Theft Security'
    },
    {
      title: `Cold Chain & Temperature Monitoring in ${location.city}`,
      icon: Zap,
      desc: `WHO GDP compliant wireless BLE temperature sensors and 24/7 reefer monitoring protecting perishable food and pharma shipments in ${location.city}.`,
      badge: 'WHO GDP Certified'
    },
    {
      title: `Heavy Asset & Construction Telemetry in ${location.city}`,
      icon: Truck,
      desc: `IP67/IP69K ruggedized telematics gateways built for excavators, dump trucks, and stationary generators operating on job sites in ${location.city}.`,
      badge: 'Rugged IP67/IP69K'
    }
  ];

  // Randomize Orders (Spinning)
  const popularSearches = shuffle([...basePopularSearches], rand);
  const cityServices = shuffle([...baseServices], rand);

  // Spin Text Sentences
  const subtitleVariations = [
    `Our enterprise telematics hardware and software solutions are fully optimized for fleets operating in ${location.city}, delivering unmatched accuracy and SLA support.`,
    `Providing industry-leading fleet management and asset tracking across ${location.region}. Protect your assets in ${location.city} with ISO-certified IoT sensors.`,
    `Discover why top logistics and transport companies in ${location.country} trust WizIOT's advanced telematics platform to reduce costs and secure their vehicles.`
  ];
  const spunSubtitle = subtitleVariations[Math.floor(rand() * subtitleVariations.length)];

  // Randomize Section Order to prevent HTML structure duplication
  const sectionOrder = shuffle([1, 2, 3], rand);

  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <div className="container" style={{ maxWidth: '960px' }}>
        <Link href="/locations" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-blue)', marginBottom: '32px', fontSize: '0.9rem', fontWeight: '600' }}>
          <ArrowLeft size={16} /> Back to Global Locations Directory
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span className="badge-pill" style={{ margin: 0 }}>
            <MapPin size={14} /> {location.city}, {location.country}
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            Region: {location.region}
          </span>
        </div>

        <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '24px', fontWeight: '800' }}>
          {location.heroHeadline}
        </h1>

        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '16px' }}>
          {location.metaDescription}
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.65', marginBottom: '36px', fontWeight: '500' }}>
          {spunSubtitle}
        </p>

        <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '16px', overflow: 'hidden', marginBottom: '44px', background: '#0F172A', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <Image
            src={cityImage}
            alt={`WizIOT Fleet Tracking in ${location.city}, ${location.country}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Dynamic Layout Blocks based on seed */}
        {sectionOrder.map((sectionNum) => {
          if (sectionNum === 1) {
            return (
              <div key="services" style={{ marginBottom: '50px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Regional Telematics Solutions
                  </span>
                  <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', fontWeight: '800', marginTop: '4px' }}>
                    Telematics Solutions & Products Available in {location.city}
                  </h2>
                </div>
                <div className="grid-2">
                  {cityServices.map((service, idx) => {
                    const IconComp = service.icon;
                    return (
                      <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                          <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--primary-blue-transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)' }}>
                            <IconComp size={22} />
                          </div>
                          <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '99px', background: '#F1F5F9', color: 'var(--text-main)' }}>
                            {service.badge}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--text-main)', fontWeight: '700' }}>
                          {service.title}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                          {service.desc}
                        </p>
                        <Link href="/contact" className="btn btn-secondary btn-sm" style={{ textAlign: 'center', justifyContent: 'center' }}>
                          Enquire Now for {location.city} →
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
          if (sectionNum === 2) {
            return (
              <div key="searches" style={{ padding: '28px', background: '#FFFFFF', borderRadius: '16px', marginBottom: '48px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '14px', color: 'var(--text-main)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Search size={18} style={{ color: 'var(--primary-blue)' }} /> Popular Telematics Searches in {location.city}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {popularSearches.map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.825rem', padding: '6px 14px', background: '#F1F5F9', borderRadius: '99px', color: 'var(--text-main)', fontWeight: '500', border: '1px solid #CBD5E1' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          }
          if (sectionNum === 3) {
            return (
              <div key="compliance" style={{ padding: '28px 32px', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '16px', color: '#FFFFFF', marginBottom: '48px', border: '1px solid rgba(56,189,248,0.3)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Award size={16} /> Certified Sensor Compliance & End-to-End Support
                    </span>
                    <h3 style={{ fontSize: '1.4rem', marginTop: '6px', marginBottom: '10px', color: '#FFFFFF' }}>
                      Full SLA & Certified Field Engineering in {location.city}
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: '#94A3B8', lineHeight: '1.6', margin: 0 }}>
                      Our local field engineers in {location.country} handle depot 10-point tank calibration, sensor mounting, and 24/7 SLA maintenance. All sensors carry ISO 9001, ISO/IEC 17025, WHO GDP, and IP68/IP69K certifications.
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0' }}>
                      <CheckCircle2 size={16} style={{ color: '#10B981' }} /> Certified ISO/IEC 17025 Sensor Calibration
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0' }}>
                      <CheckCircle2 size={16} style={{ color: '#10B981' }} /> ATEX Zone 0 Explosive Tank Safety
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0' }}>
                      <CheckCircle2 size={16} style={{ color: '#10B981' }} /> End-to-End On-Site Installation & 24/7 Support
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}

        <div className="glass-card" style={{ padding: '36px', marginBottom: '48px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', color: 'var(--text-main)', fontWeight: '700' }}>
            🛣️ Transit Corridor & Local Operational Profile
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px' }}>
            <strong>Primary Corridor:</strong> {location.corridor}
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            <strong>Local Fleet Challenge:</strong> {location.primaryChallenge}
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: '800' }}>
            Recommended Telematics Stack for {location.city} Fleets
          </h2>
          <div className="grid-2">
            <div className="glass-card">
              <ShieldCheck size={28} style={{ color: 'var(--primary-blue)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: '700' }}>Hardware Specification</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
                {location.recommendedHardware}
              </p>
            </div>
            <div className="glass-card">
              <CheckCircle2 size={28} style={{ color: 'var(--accent-emerald)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: '700' }}>Operational Deployment</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
                {location.localCaseStudy}
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: '32px', background: '#F1F5F9', borderRadius: '16px', marginBottom: '50px', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--text-main)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={20} style={{ color: 'var(--primary-blue)' }} /> Recommended Technical Guides for {location.country} Fleets
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', fontSize: '0.925rem' }}>
            <Link href="/blog/stop-driver-diesel-siphoning-night-kenya-trucks" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Fuel Theft Prevention Guide
            </Link>
            <Link href="/blog/gps-jamming-detection-system-fleet-poland" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Anti-Jamming Security Framework
            </Link>
            <Link href="/blog/cold-chain-monitoring-reefer-trailer-nigeria-vaccines" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → WHO GDP Cold Chain Compliance
            </Link>
            <Link href="/blog/multi-sim-gps-tracker-truck-africa-europe-border" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Cross-Border Multi-SIM Telematics
            </Link>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '40px', marginBottom: '60px', textAlign: 'center', background: 'linear-gradient(135deg, #0F2D4E 0%, #0169A9 100%)', color: '#FFFFFF' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', color: '#FFFFFF' }}>Deploy WizIOT Telematics in {location.city}</h3>
          <p style={{ color: '#E2E8F0', marginBottom: '28px', maxWidth: '640px', margin: '0 auto 28px' }}>
            Schedule a 1-on-1 strategy call with our regional fleet engineers in {location.country}. Get custom sensor pricing, certified compliance documents, and trial hardware.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg" style={{ background: '#FFFFFF', color: '#0F2D4E', fontWeight: '800' }}>
              Book {location.city} Fleet Demo <ArrowRight size={18} />
            </Link>
            <Link href="/solutions" className="btn btn-secondary btn-lg" style={{ background: 'transparent', border: '2px solid #FFFFFF', color: '#FFFFFF', fontWeight: '700' }}>
              Explore Industry Solutions
            </Link>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', fontWeight: '800' }}>Explore Other Regional Logistics Hubs</h3>
          <div className="grid-3">
            {nearbyLocations.map((loc) => (
              <Link key={loc.slug} href={`/${loc.slug}`} className="glass-card" style={{ textDecoration: 'none' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary-blue)', fontWeight: '700', marginBottom: '4px' }}>
                  {loc.country}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '6px', fontWeight: '700' }}>{loc.city}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{loc.region}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
