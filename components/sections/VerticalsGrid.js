'use client';

import Link from 'next/link';
import Image from 'next/image';
import { VERTICALS_DATA } from '@/data/verticals';
import { Truck, Zap, Thermometer, Activity, Cpu, Bus, School, ArrowRight, Check } from 'lucide-react';

const ICON_MAP = { Truck, Zap, Thermometer, Activity, Cpu, Bus, School };

export default function VerticalsGrid() {
  return (
    <section className="section-padding" id="verticals">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <div className="badge-pill">Industry Solutions</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Tailored IoT Telematics for Every Sector</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Built to scale across commercial logistics, electric vehicle operations, pharmaceutical cold chain, and heavy machinery.
          </p>
        </div>

        <div className="grid-3">
          {VERTICALS_DATA.map((vert) => {
            const IconComp = ICON_MAP[vert.icon] || Truck;
            return (
              <div key={vert.id} id={vert.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0, overflow: 'hidden' }}>
                {/* Vertical Card Banner Image */}
                <div style={{ position: 'relative', width: '100%', height: '160px', background: '#0F172A', overflow: 'hidden' }}>
                  <Image 
                     src={vert.image} 
                    alt={vert.title}
                    
                  fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38BDF8',
                        border: '1px solid rgba(56, 189, 248, 0.4)'
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        padding: '4px 10px',
                        borderRadius: '99px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(4px)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {vert.badge}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary-blue)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                    {vert.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--text-main)', fontWeight: '700' }}>
                    {vert.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                    {vert.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {vert.points.map((pt, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        <Check size={14} style={{ color: 'var(--accent-emerald)' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/solutions/${vert.id}`}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                  >
                    Explore Solution <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
