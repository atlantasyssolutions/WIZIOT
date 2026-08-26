import { Cpu, Radio, ShieldAlert, Code, Server, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';

export const metadata = {
  title: 'Cloud Telematics Architecture & API Engine | WizIOT Platform',
  description: 'Hardware-agnostic sub-second streaming telematics cloud. Connect OBD-II, CAN-bus, BLE sensors, ADAS cameras, and ERP Webhooks with 99.99% SLA.',
  alternates: {
    canonical: 'https://www.wiziot.com/platform',
  },
  openGraph: {
    title: 'Cloud Telematics Architecture & API Engine | WizIOT Platform',
    description: 'Hardware-agnostic sub-second streaming telematics cloud. Connect OBD-II, CAN-bus, BLE sensors, ADAS cameras, and ERP Webhooks.',
    url: 'https://www.wiziot.com/platform',
    type: 'website',
    images: ['/platform-telematics-analytics.webp'],
  },
};

export default function PlatformPage() {
  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div className="badge-pill">
            <Cpu size={14} /> Full-Stack Telematics SaaS Architecture
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: '800' }}>Hardware-Agnostic, High-Availability Cloud</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            WizIOT connects hardware sensors, vehicle CAN-bus diagnostic lines, and third-party ERP systems into a unified sub-second telematics cloud.
          </p>
        </div>

        {/* Platform Architecture Showcase Banner Photo */}
        <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '20px', overflow: 'hidden', marginBottom: '60px', border: '1px solid #E2E8F0', boxShadow: '0 12px 36px rgba(15,45,78,0.1)', background: '#0F172A' }}>
          <Image 
             src="/platform-telematics-analytics.webp" 
            alt="WizIOT Platform Analytics & Command Dashboard"
            
          fill style={{ objectFit: 'cover' }} />
        </div>

        <div className="grid-3" style={{ marginBottom: '80px' }}>
          <div className="glass-card">
            <Radio size={32} style={{ color: 'var(--primary-blue)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700' }}>Hardware & Sensor Agnostic</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Compatible with OBD-II dongles, hardwired GPS trackers, BLE wireless sensors, ADAS cameras, and battery BMS controllers.
            </p>
          </div>

          <div className="glass-card">
            <Server size={32} style={{ color: 'var(--accent-emerald)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700' }}>Zero Latency Streaming Pipeline</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Built on distributed WebSocket & MQTT event streams processing real-time telemetry data packets with 99.99% SLA.
            </p>
          </div>

          <div className="glass-card">
            <Code size={32} style={{ color: 'var(--primary-blue)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700' }}>Open REST & Webhook APIs</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Seamless integration with SAP, Oracle, 3rd party CRM software, custom dispatch platforms, and third-party TMS software.
            </p>
          </div>
        </div>

        {/* Hardware Stack Showcase Section */}
        <div className="glass-card" style={{ padding: '40px', marginBottom: '80px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Unified SaaS IoT Integration
              </span>
              <h2 style={{ fontSize: '2rem', marginTop: '6px', marginBottom: '16px', fontWeight: '800' }}>
                Hardware & Sensor Ecosystem Unified into One Command Dashboard
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '20px' }}>
                WizIOT is a complete SaaS telematics platform that consolidates data from any certified sensor, gateway, CAN-bus ECU, or camera feed into single-pane operational dashboards and instant alert workflows.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> IP67 / IP68 / IP69K Waterproof & Dustproof Enclosures
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> Dual 4G/5G Cellular + Satellite Roaming Auto-Switching
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> ISO 17025 Traceable ±0.2% Capacitive Fuel Sensor Probes
                </li>
              </ul>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', background: '#0F172A' }}>
              <Image 
                 src="/hardware-telematics-stack.webp" 
                alt="WizIOT Industrial Telematics Hardware Stack"
                
              fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <CtaBannerWrapper />
        </div>
      </div>
    </div>
  );
}
