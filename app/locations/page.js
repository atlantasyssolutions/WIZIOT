import Link from 'next/link';
import { getAllLocations } from '@/lib/locations';
import { MapPin, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Global Fleet Telematics Directory | WizIOT',
  description: 'Explore WizIOT hyper-local B2B telematics solutions, fuel theft prevention, and GPS tracking across 20 global logistics hubs in Africa, Europe, GCC, and APAC.',
};

export default function LocationsIndexPage() {
  const locations = getAllLocations();

  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="badge-pill">
            <Globe size={14} /> Hyper-Local Telematics Deployment Hubs
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: '800' }}>WizIOT Global Fleet Telematics Directory</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            Tailored hardware, sensor configurations, and anti-theft protocols optimized for primary logistics corridors in Africa, Eastern Europe, GCC, and Asia.
          </p>
        </div>

        {/* 20 Cities Grid */}
        <div className="grid-3">
          {locations.map((loc) => (
            <div key={loc.slug} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '99px',
                    background: '#EBF8FF',
                    color: 'var(--primary-blue)',
                    border: '1px solid #BAE6FD'
                  }}
                >
                  {loc.region}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  {loc.country}
                </span>
              </div>

              <h2 style={{ fontSize: '1.4rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700' }}>
                <MapPin size={20} style={{ color: 'var(--primary-blue)' }} />
                <span>{loc.city}</span>
              </h2>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '600', marginBottom: '12px' }}>
                🛣️ {loc.corridor}
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                {loc.primaryChallenge}
              </p>

              <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px', marginBottom: '20px', fontSize: '0.8rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
                <span>Hardware: <strong>{loc.recommendedHardware}</strong></span>
              </div>

              <Link
                href={`/${loc.slug}`}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                View {loc.city} Telematics Solutions <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
