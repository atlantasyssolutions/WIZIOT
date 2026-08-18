'use client';

import { useState } from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import ScheduleDemoModal from '@/components/ui/ScheduleDemoModal';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [demoOpen, setDemoOpen] = useState(false);

  const tiers = [
    {
      name: 'Fleet Starter',
      subtitle: 'Ideal for small commercial fleets (up to 20 vehicles)',
      monthlyPrice: 15,
      annualPrice: 12,
      badge: 'Starter',
      features: [
        'Real-Time GPS Tracking (10s refresh)',
        'Basic Trip & Stoppage Reports',
        'Speeding & Geofence Alerts',
        'Mobile App (iOS & Android)',
        'Email Support'
      ]
    },
    {
      name: 'Fleet Professional',
      subtitle: 'Advanced telematics, fuel & driver safety coaching',
      monthlyPrice: 29,
      annualPrice: 24,
      badge: 'Most Popular',
      featured: true,
      features: [
        'Sub-second Live GPS Tracking',
        'Fuel Fill & Theft Alarm Sensors',
        'AI Route Optimization Engine',
        'ADAS Driver Safety Scorecards',
        'EV & Battery (BMS) Analytics',
        'Rest API & Webhook Access',
        '24/7 Priority Support'
      ]
    },
    {
      name: 'Enterprise Custom',
      subtitle: 'Tailored for large fleets (200+ vehicles & custom hardware)',
      priceCustom: 'Custom Quote',
      badge: 'Enterprise',
      features: [
        'Unlimited Vehicles & Custom Sensors',
        'Dedicated On-Premise / Private Cloud',
        'Custom CAN-bus Decoder Engineering',
        'SLA 99.99% Uptime Guarantee',
        'Dedicated Account Manager & Training'
      ]
    }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
          <div className="badge-pill">Transparent SaaS Pricing</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Predictable Pricing for Growing Fleets</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            Choose the telematics plan that fits your operational scale. No hidden hardware lock-in fees.
          </p>

          {/* Billing Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(15, 23, 42, 0.8)', padding: '6px 16px', borderRadius: '99px', marginTop: '24px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.9rem', color: isAnnual ? 'var(--text-muted)' : '#fff', fontWeight: '600' }}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                width: '48px',
                height: '26px',
                borderRadius: '99px',
                background: 'var(--primary-blue)',
                border: 'none',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#fff',
                  position: 'absolute',
                  top: '3px',
                  left: isAnnual ? '25px' : '3px',
                  transition: 'all 0.3s ease'
                }}
              />
            </button>
            <span style={{ fontSize: '0.9rem', color: isAnnual ? '#fff' : 'var(--text-muted)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Annual <span style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)', padding: '2px 8px', borderRadius: '99px' }}>Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid-3" style={{ marginBottom: '60px' }}>
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderColor: tier.featured ? 'var(--accent-cyan)' : 'var(--border-color)',
                boxShadow: tier.featured ? 'var(--shadow-glow)' : 'none',
                position: 'relative'
              }}
            >
              {tier.featured && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gradient-brand)', color: '#070B15', fontWeight: '800', fontSize: '0.75rem', padding: '4px 16px', borderRadius: '99px' }}>
                  {tier.badge}
                </div>
              )}

              <h3 style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{tier.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', height: '40px' }}>{tier.subtitle}</p>

              <div style={{ marginBottom: '24px' }}>
                {tier.priceCustom ? (
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>
                    {tier.priceCustom}
                  </span>
                ) : (
                  <div>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>
                      ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}> / vehicle / month</span>
                  </div>
                )}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flex: 1 }}>
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <Check size={16} style={{ color: 'var(--accent-emerald)' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => setDemoOpen(true)} className={tier.featured ? 'btn btn-primary' : 'btn btn-secondary'} style={{ width: '100%' }}>
                {tier.priceCustom ? 'Contact Enterprise Team' : 'Start 14-Day Free Pilot'} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <ScheduleDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </div>
  );
}
