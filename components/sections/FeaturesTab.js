'use client';

import { useState } from 'react';
import { FEATURES_DATA } from '@/data/features';
import { Radio, LayoutDashboard, BarChart3, Zap, Navigation, ShieldCheck, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import styles from './FeaturesTab.module.css';

const ICON_MAP = {
  Radio,
  LayoutDashboard,
  BarChart3,
  Zap,
  Navigation,
  ShieldCheck,
  ShieldAlert,
};

export default function FeaturesTab({ onOpenDemo }) {
  const [activeId, setActiveId] = useState(FEATURES_DATA[0].id);
  const activeFeature = FEATURES_DATA.find((f) => f.id === activeId) || FEATURES_DATA[0];

  return (
    <section className={`section-padding ${styles.featuresSection}`} id="key-features">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className="badge-pill">Enterprise Capabilities</div>
          <h2 className={styles.sectionTitle}>Powerful Tools to Manage Your Entire Fleet</h2>
          <p className={styles.sectionSub}>
            Modular SaaS telematics designed for high-density logistics, electric vehicles, and heavy asset management.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className={styles.tabsNav}>
          {FEATURES_DATA.map((feature) => {
            const IconComp = ICON_MAP[feature.icon] || Radio;
            const isActive = feature.id === activeId;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={`${styles.tabBtn} ${isActive ? styles.activeTabBtn : ''}`}
              >
                <IconComp size={16} />
                <span>{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Detail Showcase Card */}
        <div className={styles.featureCard}>
          <div>
            <span className={styles.cardSub}>{activeFeature.subtitle}</span>
            <h3 className={styles.cardTitle}>{activeFeature.title}</h3>
            <p className={styles.cardDesc}>{activeFeature.description}</p>

            <ul className={styles.highlightsList}>
              {activeFeature.highlights.map((item, idx) => (
                <li key={idx} className={styles.highlightItem}>
                  <CheckCircle2 size={18} style={{ color: 'var(--primary-blue)' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={onOpenDemo} className="btn btn-primary btn-sm">
              Schedule Live Demo for {activeFeature.title} <ArrowRight size={14} />
            </button>
          </div>

          {/* High-Resolution Feature Photo Showcase Container */}
          <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 12px 32px rgba(15,45,78,0.12)', background: '#0F172A' }}>
            <img
              src={activeFeature.image}
              alt={activeFeature.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Overlaid Floating Metric Pill */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '12px',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#FFFFFF'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#94A3B8', display: 'block', fontWeight: '700' }}>
                  {activeFeature.metricLabel}
                </span>
                <span style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38BDF8', lineHeight: '1' }}>
                  {activeFeature.metric}
                </span>
              </div>
              <span style={{ fontSize: '0.8rem', background: '#0284C7', color: '#FFFFFF', padding: '6px 12px', borderRadius: '99px', fontWeight: '700' }}>
                LIVE TELEMETRY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
