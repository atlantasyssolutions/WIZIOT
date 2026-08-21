'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, Handshake, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import ScheduleDemoModal from '@/components/ui/ScheduleDemoModal';

export default function PartnersPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div className="badge-pill">
            <Handshake size={14} /> WizIOT Global Partner Network
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: '800' }}>Grow Your Business with WizIOT Ecosystem</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            From hardware manufacturers and cellular SIM providers to telematics resellers and enterprise system integrators.
          </p>
        </div>

        {/* Global Partner Fleet Network Photo Banner */}
        <div style={{ width: '100%', height: '380px', borderRadius: '20px', overflow: 'hidden', marginBottom: '60px', border: '1px solid #E2E8F0', boxShadow: '0 12px 36px rgba(15,45,78,0.1)', background: '#0F172A' }}>
          <Image 
             src="/enterprise-logistics-fleet.webp" 
            alt="WizIOT Global Commercial Logistics Fleet Network"
            
          / fill style={{ objectFit: 'cover' }} />
        </div>

        <div className="grid-3" style={{ marginBottom: '80px' }}>
          <div className="glass-card">
            <Users size={32} style={{ color: 'var(--primary-blue)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700' }}>Resellers & Distributors</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              White-label telematics software with custom domain branding, regional pricing control, and dedicated partner margins.
            </p>
          </div>

          <div className="glass-card">
            <Handshake size={32} style={{ color: 'var(--accent-emerald)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700' }}>System Integrators</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Integrate WizIOT telemetry stream into municipal smart city platforms, government transport systems, and ERP workflows.
            </p>
          </div>

          <div className="glass-card">
            <Globe size={32} style={{ color: 'var(--primary-blue)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700' }}>Hardware & OEM Partners</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Pre-certify your GPS devices, BLE temperature probes, or CAN-bus hardware on the WizIOT device management cloud.
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '48px', textAlign: 'center', background: 'linear-gradient(135deg, #0F2D4E 0%, #0169A9 100%)', color: '#FFFFFF' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', fontWeight: '800' }}>Apply to Become a Certified WizIOT Partner</h2>
          <p style={{ color: '#E2E8F0', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
            Submit your business profile to connect with our regional alliance managers in UAE, India, or Singapore.
          </p>
          <button onClick={() => setDemoOpen(true)} className="btn btn-primary btn-lg" style={{ background: '#FFFFFF', color: '#0F2D4E', fontWeight: '800' }}>
            Submit Partner Application <ArrowRight size={18} />
          </button>
        </div>

        <ScheduleDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </div>
  );
}
