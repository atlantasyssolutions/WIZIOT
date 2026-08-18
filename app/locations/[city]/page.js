import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocations, generateLocationSchema } from '@/lib/locations';
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Truck, Fuel, Zap, Globe, FileText, Search, PhoneCall } from 'lucide-react';

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
    title: `${location.heroHeadline} | WizIOT ${location.city}`,
    description: location.metaDescription,
    keywords: [
      `best tracker in ${location.city}`,
      `fleet management software ${location.city}`,
      `GPS tracking ${location.city} ${location.country}`,
      `fuel theft prevention ${location.city}`,
      `cold chain telematics ${location.city}`,
      `remote engine cut off ${location.city}`
    ],
    openGraph: {
      title: `${location.heroHeadline} | WizIOT Telematics`,
      description: location.metaDescription,
      type: 'website',
      images: [`/locations/${location.slug}.webp`],
    },
  };
}

export default async function CityLocationPage({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams?.city);
  if (!location) notFound();

  const locationSchema = generateLocationSchema(location);
  const allLocations = getAllLocations();
  const nearbyLocations = allLocations.filter((l) => l.slug !== location.slug).slice(0, 3);
  const cityImage = `/locations/${location.slug}.webp`;

  // Popular Search Tags for this City
  const popularSearches = [
    `Best GPS Tracker in ${location.city}`,
    `Fuel Theft Sensor ${location.city}`,
    `Cold Chain Telematics ${location.city}`,
    `Remote Engine Immobilizer ${location.city}`,
    `Heavy Equipment IoT ${location.city}`,
    `Trailer Asset Tracker ${location.city}`,
    `WHO GDP Vaccine Monitoring ${location.city}`,
    `Fleet Management Software ${location.city} ${location.country}`
  ];

  // Products/Services Grid Showcase in City
  const cityServices = [
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
      desc: `IP67 ruggedized telematics gateways built for excavators, dump trucks, and stationary generators operating on job sites in ${location.city}.`,
      badge: 'Rugged IP67'
    }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Back Link */}
        <Link href="/locations" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-blue)', marginBottom: '32px', fontSize: '0.9rem', fontWeight: '600' }}>
          <ArrowLeft size={16} /> Back to Global Locations Directory
        </Link>

        {/* Location Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span className="badge-pill" style={{ margin: 0 }}>
            <MapPin size={14} /> {location.city}, {location.country}
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            Region: {location.region}
          </span>
        </div>

        {/* Hero Title */}
        <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '24px', fontWeight: '800' }}>
          {location.heroHeadline}
        </h1>

        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '36px' }}>
          {location.metaDescription}
        </p>

        {/* City WebP Header Image */}
        <div style={{ width: '100%', height: '380px', borderRadius: '16px', overflow: 'hidden', marginBottom: '44px', background: '#0F172A', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <img
            src={cityImage}
            alt={`WizIOT Fleet Tracking in ${location.city}, ${location.country}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Enterprise Telematics Showcase: Solutions Available in City */}
        <div style={{ marginBottom: '50px' }}>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Regional Solutions Showcase
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

        {/* Corridor & Challenge Overview Card */}
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

        {/* Recommended Telematics Hardware Stack */}
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
              <h4 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: '700' }}>Proven Local Outcome</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
                {location.localCaseStudy}
              </p>
            </div>
          </div>
        </div>

        {/* Popular Searches Pill Tags Matrix in City */}
        <div style={{ padding: '28px', background: '#FFFFFF', borderRadius: '16px', marginBottom: '48px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
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

        {/* Localized Internal Links to Related Technical Blog Guides */}
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

        {/* Localized Internal Links to Core Platform Features */}
        <div className="glass-card" style={{ padding: '40px', marginBottom: '60px', textAlign: 'center', background: 'linear-gradient(135deg, #0F2D4E 0%, #0169A9 100%)', color: '#FFFFFF' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Deploy WizIOT Telematics in {location.city}</h3>
          <p style={{ color: '#E2E8F0', marginBottom: '28px', maxWidth: '640px', margin: '0 auto 28px' }}>
            Schedule a 1-on-1 strategy call with our regional fleet engineers in {location.country}. Get custom sensor pricing and trial hardware.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg" style={{ background: '#FFFFFF', color: '#0F2D4E', fontWeight: '800' }}>
              Book {location.city} Fleet Demo <ArrowRight size={18} />
            </Link>
            <Link href="/solutions" className="btn btn-secondary btn-lg" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>
              Explore Industry Solutions
            </Link>
          </div>
        </div>

        {/* Nearby Regional Hubs */}
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', fontWeight: '800' }}>Explore Other Regional Logistics Hubs</h3>
          <div className="grid-3">
            {nearbyLocations.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="glass-card" style={{ textDecoration: 'none' }}>
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
