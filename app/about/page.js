import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Cpu, Globe, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';

export const metadata = {
  title: 'About WizIOT | Enterprise Telematics & IoT Engineering',
  description: 'WizIOT delivers hardware-agnostic, sub-second telemetry platforms, ISO 17025 certified fuel sensors, and AI fleet security worldwide.',
  alternates: {
    canonical: 'https://www.wiziot.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="badge-pill">
            <Globe size={14} /> Global Telematics Engineering
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: '800' }}>
            Pioneering Mission-Critical Fleet Intelligence
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.65' }}>
            WizIOT builds hardware-agnostic telematics infrastructure, ISO-certified fuel telemetry sensors, and sub-second IoT streaming gateways for commercial fleets across 600+ logistics hubs worldwide.
          </p>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', marginBottom: '60px', border: '1px solid #E2E8F0', boxShadow: '0 12px 36px rgba(15,45,78,0.1)', background: '#0F172A' }}>
          <Image 
            src="/heavy-equipment-telematics.webp" 
            alt="WizIOT Enterprise Fleet Operations Center"
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>

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

        <div style={{ marginTop: '60px' }}>
          <CtaBannerWrapper />
        </div>
      </div>
    </div>
  );
}
