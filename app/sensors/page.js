import Link from 'next/link';
import { SENSOR_CATEGORIES, SENSORS_DATA } from '@/data/sensors';
import { Fuel, Thermometer, Camera, Cpu, ShieldCheck, Wrench, CheckCircle2, ArrowRight, Award, Zap, Layers } from 'lucide-react';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';

export const metadata = {
  title: 'IoT Sensors & Hardware Compatibility Hub | WizIOT Telematics Platform',
  description: 'Explore certified IoT sensors integrated into WizIOT SaaS Telematics Platform: Capacitive Fuel Probes, BLE Temperature Sensors, ADAS Dashcams, TPMS, and Smart Container Locks.',
  keywords: [
    'IoT sensors fleet management',
    'capacitive fuel level probe',
    'BLE temperature sensor cold chain',
    'ADAS DMS dashcam video telematics',
    'tire pressure monitoring TPMS',
    'axle load weight sensor',
    'electronic container seal lock'
  ],
  alternates: {
    canonical: 'https://www.wiziot.com/sensors',
  },
  openGraph: {
    title: 'IoT Sensors & Hardware Compatibility Hub | WizIOT Telematics',
    description: 'Hardware-agnostic SaaS telematics platform supporting 1,000+ certified IoT sensors, CAN-bus ECUs, and AI camera hardware.',
    url: 'https://www.wiziot.com/sensors',
    type: 'website',
    images: ['/hardware-telematics-stack.webp'],
  },
};

const CATEGORY_ICON_MAP = { Fuel, Thermometer, Camera, Cpu, ShieldCheck };

export default function SensorsPage() {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Header Banner */}
      <div className="section-padding" style={{ background: '#0F172A', color: '#FFFFFF', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge-pill" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
              <Wrench size={14} /> Hardware & Sensor Ecosystem
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '18px', color: '#FFFFFF' }}>
              Enterprise IoT Sensors & Hardware Compatibility Hub
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.15rem', lineHeight: '1.65', marginBottom: '28px' }}>
              WizIOT is a <strong>hardware-agnostic SaaS telematics platform</strong> that seamlessly ingests data from capacitive fuel probes, wireless BLE cold chain pods, AI ADAS cameras, CAN-bus ECUs, and container locks into unified real-time dashboards.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', padding: '6px 16px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', color: '#CBD5E1', border: '1px solid rgba(255,255,255,0.15)' }}>
                ✓ 1,000+ Telematics Devices Supported
              </span>
              <span style={{ fontSize: '0.85rem', padding: '6px 16px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', color: '#CBD5E1', border: '1px solid rgba(255,255,255,0.15)' }}>
                ✓ Zero Latency Data Pipeline
              </span>
              <span style={{ fontSize: '0.85rem', padding: '6px 16px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', color: '#CBD5E1', border: '1px solid rgba(255,255,255,0.15)' }}>
                ✓ Modbus / RS-485 / BLE / CAN-bus / MQTT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sensor Showcase */}
      <div className="section-padding">
        <div className="container">
          {/* Categories Grid */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '12px' }}>
              Supported IoT Sensor Categories
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Explore our certified sensor integrations engineered for commercial logistics, heavy machinery, EV fleets, and pharmaceutical transport.
            </p>
          </div>

          {/* Sensors Listing by Category */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {SENSOR_CATEGORIES.map((cat) => {
              const IconComp = CATEGORY_ICON_MAP[cat.icon] || Layers;
              const categorySensors = SENSORS_DATA.filter((s) => s.categoryId === cat.id);

              return (
                <div key={cat.id} id={cat.id} style={{ scrollMarginTop: '140px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '2px solid #E2E8F0', paddingBottom: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>{cat.name}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{cat.description}</p>
                    </div>
                  </div>

                  <div className="grid-2">
                    {categorySensors.map((sensor) => (
                      <div key={sensor.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        {/* Image Header */}
                        <div style={{ position: 'relative', width: '100%', height: '200px', background: '#0F172A', overflow: 'hidden' }}>
                          <img
                            src={sensor.image}
                            alt={sensor.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '8px' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '99px', background: 'var(--primary-blue)', color: '#FFFFFF' }}>
                              {sensor.model}
                            </span>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '99px', background: 'rgba(16, 185, 129, 0.9)', color: '#FFFFFF' }}>
                              Accuracy: {sensor.accuracy}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                          <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-main)' }}>
                            {sensor.name}
                          </h4>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
                            {sensor.description}
                          </p>

                          {/* Technical Specs Bar */}
                          <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.825rem' }}>
                            <div><strong>Interface Protocol:</strong> {sensor.protocol}</div>
                            <div><strong>Certifications:</strong> {sensor.certification}</div>
                          </div>

                          {/* Features */}
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', flex: 1 }}>
                            {sensor.features.map((feat, idx) => (
                              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                                <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>

                          <Link href="/contact" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                            Request Sensor Integration Demo <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* SaaS Telematics Integration Callout */}
          <div style={{ marginTop: '80px', padding: '40px 48px', borderRadius: '24px', background: 'linear-gradient(135deg, #0F2D4E 0%, #0169A9 100%)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '28px' }}>
            <div style={{ maxWidth: '600px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', background: 'rgba(255,255,255,0.15)', padding: '4px 12px', borderRadius: '99px', display: 'inline-block', marginBottom: '12px' }}>
                Single Command Dashboard
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>
                Already Have Existing Telematics Devices Installed?
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: '1.6' }}>
                WizIOT connects to existing hardware from Teltonika, Concox, Queclink, Ruptela, and 100+ manufacturers. Migrate your fleet to WizIOT’s SaaS platform with zero hardware replacement costs.
              </p>
            </div>
            <Link href="/contact" className="btn" style={{ background: '#FFFFFF', color: '#0F2D4E', fontWeight: '800', padding: '14px 28px', fontSize: '0.95rem' }}>
              Connect Your Existing Devices <ArrowRight size={16} />
            </Link>
          </div>

          {/* Footer CTA */}
          <div style={{ marginTop: '80px' }}>
            <CtaBannerWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
