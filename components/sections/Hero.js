'use client';

import { ArrowRight, Play, Radio, ShieldCheck, Zap, Fuel, Activity } from 'lucide-react';
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
            Eliminate fleet downtime, optimize fuel efficiency, monitor driver safety with ADAS vision, and track battery health across electric vehicles in real time.
          </p>

          {/* CTA Buttons */}
          <div className={styles.heroBtns}>
            <button onClick={onOpenDemo} className="btn btn-primary btn-lg">
              Schedule Enterprise Demo <ArrowRight size={18} />
            </button>
            <a
              href="https://fleet.wiziot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <Play size={16} style={{ color: 'var(--primary-blue)' }} /> Live SaaS Preview
            </a>
          </div>

          {/* Hero High-Resolution Platform Mockup Image Banner */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxHeight: '460px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              boxShadow: '0 20px 50px rgba(15, 45, 78, 0.15)',
              margin: '0 auto 50px',
              background: '#0F172A'
            }}
          >
            <img
              src="/hero-telematics-dashboard.webp"
              alt="WizIOT Enterprise Telematics Control Center Dashboard"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(10px)',
                padding: '16px 24px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#FFFFFF',
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
                ● 1,000,000+ Active Vehicles Live
              </span>
            </div>
          </div>

          {/* Clean Metric Highlights */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Radio size={18} style={{ color: 'var(--primary-blue)' }} />
                <span className={styles.metricLbl}>Active Vehicles</span>
              </div>
              <div className={styles.metricVal}>1M+</div>
              <span className="text-emerald" style={{ fontSize: '0.8rem', fontWeight: '600' }}>● Sub-Second Latency</span>
            </div>

            <div className={styles.metricCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Fuel size={18} style={{ color: '#D97706' }} />
                <span className={styles.metricLbl}>Avg Fuel Saved</span>
              </div>
              <div className={styles.metricVal}>18.4%</div>
              <span className="text-emerald" style={{ fontSize: '0.8rem', fontWeight: '600' }}>Proven Route Payback</span>
            </div>

            <div className={styles.metricCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Zap size={18} style={{ color: 'var(--primary-blue)' }} />
                <span className={styles.metricLbl}>EV & BMS Range</span>
              </div>
              <div className={styles.metricVal}>+25%</div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Extended Battery Life</span>
            </div>

            <div className={styles.metricCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
                <span className={styles.metricLbl}>Safety SLA Score</span>
              </div>
              <div className={styles.metricVal}>99.99%</div>
              <span className="text-emerald" style={{ fontSize: '0.8rem', fontWeight: '600' }}>Platform Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
