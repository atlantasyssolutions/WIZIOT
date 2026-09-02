import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Cpu, Globe, Award, Building2 } from 'lucide-react';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';

export const metadata = {
  title: 'About Us | WizIOT Telematics',
  description: 'Learn about WizIOT Technologies, our mission, hardware-agnostic IoT infrastructure, and enterprise telematics engineering.',
  alternates: {
    canonical: 'https://www.wiziot.com/about',
  },
  openGraph: {
    title: 'About Us | WizIOT Telematics',
    description: 'Learn about WizIOT Technologies, our mission, hardware-agnostic IoT infrastructure, and enterprise telematics engineering.',
    url: 'https://www.wiziot.com/about'
  }
};

export default function AboutPage() {
  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <span className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Building2 size={14} /> Enterprise Telematics Technology
          </span>
          <h1 style={{ fontSize: '3rem', marginBottom: '18px', fontWeight: '800', lineHeight: '1.2' }}>
            Pioneering Next-Gen Telematics & IoT Engineering
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.65' }}>
            WizIOT Technologies builds hardware-agnostic IoT infrastructure, ISO-certified fuel sensors, and AI fleet security solutions serving commercial logistics operators across 600+ hubs globally.
          </p>
        </div>

        {/* Hero Banner Photo */}
        <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '20px', overflow: 'hidden', marginBottom: '60px', border: '1px solid #E2E8F0', boxShadow: '0 12px 36px rgba(15,45,78,0.1)', background: '#0F172A' }}>
          <Image 
            src="/heavy-equipment-telematics.webp" 
            alt="WizIOT Enterprise Telematics Operations Center"
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>

        {/* Company Overview Card */}
        <div className="glass-card" style={{ padding: '40px', marginBottom: '60px', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Corporate Mission
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: '800', marginTop: '6px', marginBottom: '16px', color: 'var(--text-main)' }}>
                Building the Future of Autonomous Fleet Intelligence
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px' }}>
                WizIOT Technologies is a pioneer in GPS/GSM hardware integration, precision sensor calibration, and cloud-native telematics software built for enterprise fleet operations.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
                Our high-throughput, sub-second telemetry cloud gives fleet managers absolute transparency into fuel siphoning, engine diagnostics, temperature cold chain compliance, and driver safety.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-main)' }}>
                Platform Snapshot
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.925rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Building2 size={16} style={{ color: 'var(--primary-blue)' }} />
                  <span><strong>Entity:</strong> WizIOT Technologies</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Globe size={16} style={{ color: 'var(--primary-blue)' }} />
                  <span><strong>Global Footprint:</strong> UAE | India | Singapore | SA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
                  <span><strong>Standards:</strong> ISO 9001 & ISO/IEC 17025 Certified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Cpu size={16} style={{ color: 'var(--primary-blue)' }} />
                  <span><strong>Core Tech:</strong> GPS/GSM IoT, CAN-bus, AI Video Telematics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies Grid */}
        <div className="grid-3" style={{ marginBottom: '60px' }}>
          <div className="glass-card">
            <Cpu size={32} style={{ color: 'var(--primary-blue)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', fontWeight: '700' }}>Hardware Agnostic</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Sub-second MQTT & WebSocket event streams supporting OBD-II, J1939 CAN-bus, BLE probes, and ADAS cameras.
            </p>
          </div>
          <div className="glass-card">
            <ShieldCheck size={32} style={{ color: 'var(--accent-emerald)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', fontWeight: '700' }}>Certified Compliance</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              ISO 9001, ISO/IEC 17025, WHO GDP, FDA 21 CFR Part 11, and ATEX Zone 0 safety compliant telemetry.
            </p>
          </div>
          <div className="glass-card">
            <Award size={32} style={{ color: 'var(--primary-blue)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', fontWeight: '700' }}>99.9% Uptime SLA</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              High-availability distributed cloud infrastructure with 24/7 dedicated field engineering support teams.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ marginTop: '60px' }}>
          <CtaBannerWrapper />
        </div>

      </div>
    </div>
  );
}
