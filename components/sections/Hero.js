'use client';

import { ArrowRight, Play, Radio, ShieldCheck, Zap, Fuel, Activity, Navigation } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({ onOpenDemo }) {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Badge */}
          <div className="badge-pill">
            <span className="badge-dot"></span>
            AI-Driven Telematics & Fleet SaaS Platform
          </div>

          {/* Main Headline */}
          <h1 className={styles.title}>
            Powering Smarter Decisions in{' '}
            <span className="text-gradient">Fleet & Logistics</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Empowering modern fleets with sub-second GPS tracking, predictive maintenance,
            and complete visibility. One platform to optimize every asset, route, and driver.
          </p>

          {/* Action Buttons */}
          <div className={styles.heroBtns}>
            <button onClick={onOpenDemo} className="btn btn-primary">
              Schedule Live Platform Demo <ArrowRight size={18} />
            </button>
            <a href="#key-features" className="btn btn-secondary">
              <Play size={18} /> Explore Enterprise Features
            </a>
          </div>

          {/* Visual Product Showcase */}
          <div className={styles.heroImageWrapper}>
            <div className={styles.imageBackdrop}></div>
            <div className={styles.imageContainer}>
              <Image 
                src="/hero-fleet-dashboard.webp" 
                alt="WizIOT AI-Powered Unified Fleet Operations Command Center" 
                priority
                width={1200}
                height={675}
                className={styles.dashboardImg}
              />
            </div>
            {/* Overlay Notification Pill */}
            <div 
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '12px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#FFFFFF',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={20} style={{ color: '#38BDF8' }} />
                <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>
                  WizIOT Unified Fleet Operations Command Center
                </span>
              </div>
              <span style={{ fontSize: '0.8rem', background: '#10B981', color: '#FFFFFF', padding: '4px 12px', borderRadius: '99px', fontWeight: '700' }}>
                ● Live SaaS Telematics Stream
              </span>
            </div>
          </div>

          {/* Clean Metric Highlights */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Radio size={18} style={{ color: 'var(--primary-blue)' }} />
                <span className={styles.metricLbl}>Active Fleet Coverage</span>
              </div>
              <div className={styles.metricVal}>30+</div>
              <span className="text-emerald" style={{ fontSize: '0.78rem', fontWeight: '600' }}>● Global Deployments</span>
            </div>

            <div className={styles.metricCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Fuel size={18} style={{ color: '#D97706' }} />
                <span className={styles.metricLbl}>Avg Fuel Saved</span>
              </div>
              <div className={styles.metricVal}>14%</div>
              <span className="text-emerald" style={{ fontSize: '0.78rem', fontWeight: '600' }}>Proven Route Payback</span>
            </div>

            <div className={styles.metricCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Zap size={18} style={{ color: 'var(--primary-blue)' }} />
                <span className={styles.metricLbl}>EV & BMS Range</span>
              </div>
              <div className={styles.metricVal}>±3%</div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Real-time SoH & SoC</span>
            </div>

            <div className={styles.metricCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
                <span className={styles.metricLbl}>Safety Score</span>
              </div>
              <div className={styles.metricVal}>20%-30%</div>
              <span className="text-emerald" style={{ fontSize: '0.78rem', fontWeight: '600' }}>Reduction in Harsh Driving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
