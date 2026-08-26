import { STATS_DATA, REGIONS_DATA } from '@/data/stats';
import { Globe2, MapPin } from 'lucide-react';

export default function GlobalPresence() {
  return (
    <section className="section-padding" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <div className="badge-pill">Global Infrastructure</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>Powering Fleet Operations Worldwide</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            High-availability telemetry platform serving enterprise fleets with robust uptime monitoring.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid-4" style={{ marginBottom: '60px' }}>
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '8px' }}>
                {stat.value}
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)' }}>
                {stat.label}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Regional Hubs Banner */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Globe2 size={28} style={{ color: 'var(--primary-blue)' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Global Telematics Hubs</h3>
          </div>

          <div className="grid-4">
            {REGIONS_DATA.map((reg) => (
              <div
                key={reg.code}
                style={{
                  padding: '20px',
                  background: '#F8FAFC',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MapPin size={18} style={{ color: 'var(--primary-blue)' }} />
                  <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>{reg.name}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-emerald)', fontWeight: '700' }}>
                  {reg.count}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                  {reg.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
