import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Cpu, Globe, Award, CheckCircle2, ArrowRight, Building2, UserCheck, Briefcase } from 'lucide-react';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';

export const metadata = {
  title: 'About WizIOT & Leadership | Enterprise Fleet Telematics',
  description: 'Learn about WizIOT Technologies. Meet leadership including Nischal Narula, Head of Strategic Alliances.',
  alternates: {
    canonical: 'https://www.wiziot.com/about',
  },
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

        {/* Leadership Spotlight: Nischal Narula */}
        <div style={{ marginBottom: '70px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Executive Leadership
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '6px' }}>
              Driving Global Alliances & Innovation
            </h2>
          </div>

          <div className="glass-card" style={{ padding: '36px', background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'center' }}>
              
              {/* Profile Image Container */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', border: '4px solid var(--primary-blue)', boxShadow: '0 8px 24px rgba(1,105,169,0.2)' }}>
                  <Image 
                    src="/nischal-narula.jpeg" 
                    alt="Nischal Narula - Head of Strategic Alliances at WizIOT Technologies"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '4px', color: 'var(--text-main)' }}>
                  Nischal Narula
                </h3>
                <p style={{ color: 'var(--primary-blue)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '12px' }}>
                  Head - Strategic Alliances at WizIOT Technologies
                </p>
                <a 
                  href="https://www.linkedin.com/in/nischal-narula" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '2px' }}>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
                  </svg> Connect on LinkedIn
                </a>
              </div>

              {/* Bio & Experience Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '99px', background: '#E0F2FE', color: '#0369A1' }}>
                    ALUMNUS: BABSON COLLEGE
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '99px', background: '#ECFDF5', color: '#065F46' }}>
                    MS IN ENTREPRENEURSHIP
                  </span>
                </div>

                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '16px' }}>
                  Nischal Narula leads Strategic Alliances at WizIOT Technologies, orchestrating international business development, technology partnerships, and go-to-market strategies for WizIOT's IoT and telematics suite.
                </p>

                <p style={{ fontSize: '0.95rem', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Holding a Master of Science (MS) focused in Entrepreneurial Studies from <strong>Babson College - Franklin W. Olin Graduate School of Business</strong> (Boston, MA), Nischal combines strong strategic planning, team building, and market expansion expertise with deep technical understanding of GPS/GSM hardware and telematics ecosystems.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                    <Briefcase size={15} style={{ color: 'var(--primary-blue)' }} /> Strategic Partnerships & Growth
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                    <Cpu size={15} style={{ color: 'var(--primary-blue)' }} /> GPS/GSM Hardware Integration
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                    <Globe size={15} style={{ color: 'var(--primary-blue)' }} /> International Market Expansion
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                    <UserCheck size={15} style={{ color: 'var(--accent-emerald)' }} /> Enterprise Technology Advisory
                  </div>
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
