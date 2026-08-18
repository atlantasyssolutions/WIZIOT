import { ArrowRight, ShieldCheck, Users } from 'lucide-react';

export default function CtaBanner({ onOpenDemo }) {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #0F2D4E 0%, #0169A9 100%)',
            color: '#FFFFFF',
            padding: '64px 48px',
            textAlign: 'center',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(15, 45, 78, 0.2)',
            position: 'relative'
          }}
        >
          <div className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
            Scale With WizIOT
          </div>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '16px', maxWidth: '800px', margin: '0 auto 16px', color: '#FFFFFF' }}>
            Ready to Transform Your Fleet Operations?
          </h2>
          <p style={{ color: '#E2E8F0', fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto 36px' }}>
            Join thousands of logistics managers, fleet operators, and system integrators using WizIOT's full-stack IoT platform.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn" style={{ background: '#FFFFFF', color: '#0F2D4E', fontWeight: '800' }}>
              Book Executive Demo <ArrowRight size={18} />
            </button>
            <a href="/partners" className="btn" style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <Users size={18} /> Become a Channel Partner
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '36px', fontSize: '0.875rem', color: '#CBD5E1' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} style={{ color: '#34D399' }} /> 14-Day Pilot Available
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} style={{ color: '#34D399' }} /> Hardware Agnostic CAN-bus SDK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
