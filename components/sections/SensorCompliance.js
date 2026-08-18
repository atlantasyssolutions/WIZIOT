import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle2, Headphones, Wrench, FileCheck, Zap, Lock } from 'lucide-react';

export default function SensorCompliance({ onOpenDemo }) {
  const certifications = [
    { title: 'ISO/IEC 17025 Calibration', desc: 'Traceable volumetric calibration ensuring ±0.2% fuel probe measurement precision across dual-tank haulage trucks.', icon: Award },
    { title: 'IP67 / IP68 / IP69K Waterproof', desc: 'Hermetically sealed die-cast enclosures withstanding high-pressure steam washdowns, mud, and dust on mining and rough road corridors.', icon: ShieldCheck },
    { title: 'ATEX Zone 0 Explosive Safety', desc: 'Intrinsically safe fuel valve locks and sensors certified for volatile bulk petroleum tankers and fuel depots.', icon: Lock },
    { title: 'WHO GDP & US-FDA 21 CFR Part 11', desc: 'Immutable SHA-256 signed PDF temperature audit certificates for pharmaceutical, vaccine, and cold chain customs clearance.', icon: FileCheck },
    { title: 'UN ECE R116 Automotive Safety', desc: 'Speed-restricted Limp-Mode vehicle immobilization compliant with international automotive safety directives.', icon: Zap },
    { title: 'End-to-End Field Support SLA', desc: 'On-site depot installation, 10-point tank calibration, 24/7 SLA hardware replacement, and API webhook integration.', icon: Headphones },
  ];

  return (
    <section className="section-padding" style={{ background: '#0F172A', color: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <div className="badge-pill" style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.3)', margin: '0 auto 16px' }}>
            <Award size={14} /> Certified Sensor Compliance & Global Support
          </div>
          <h2 style={{ fontSize: '2.8rem', lineHeight: '1.25', marginBottom: '20px', color: '#FFFFFF', fontWeight: '800' }}>
            100% Certified Sensor Compliance & End-to-End Field Engineering
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.15rem', lineHeight: '1.65' }}>
            WizIOT provides fully compliant IoT hardware backed by end-to-end field support—from depot tank calibration to 24/7 SLA maintenance across Africa, Europe, GCC, and APAC.
          </p>
        </div>

        {/* 6 Grid Certification Cards */}
        <div className="grid-3">
          {certifications.map((cert, idx) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', marginBottom: '20px' }}>
                  <IconComponent size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#FFFFFF', fontWeight: '700' }}>
                  {cert.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.925rem', lineHeight: '1.65', flex: 1, margin: 0 }}>
                  {cert.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* End-to-End Support Banner */}
        <div
          style={{
            marginTop: '50px',
            padding: '36px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #0169A9 0%, #0F2D4E 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '10px', color: '#FFFFFF', fontWeight: '800' }}>
              Need Custom Sensor Integration or On-Site Depot Setup?
            </h3>
            <p style={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
              Our certified telematics engineers deliver end-to-end support: 10-point tank calibration, custom CAN-bus ECU profiling, and 24/7 SLA support in your country.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn btn-primary btn-lg" style={{ background: '#FFFFFF', color: '#0F2D4E', fontWeight: '800' }}>
              Schedule Technical Consultation
            </button>
            <Link href="/locations" className="btn btn-outline-white btn-lg">
              View Global Field Support Hubs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
