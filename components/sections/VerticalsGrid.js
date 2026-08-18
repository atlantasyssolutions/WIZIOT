'use client';

import { useState } from 'react';
import { VERTICALS_DATA } from '@/data/verticals';
import { Truck, Zap, Thermometer, Activity, Cpu, Bus, ArrowRight, Check, X, ShieldCheck, Award, Wrench, ChevronRight } from 'lucide-react';
import ScheduleDemoModal from '@/components/ui/ScheduleDemoModal';

const ICON_MAP = { Truck, Zap, Thermometer, Activity, Cpu, Bus };

export default function VerticalsGrid() {
  const [selectedVertical, setSelectedVertical] = useState(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenSolutionModal = (vert) => {
    setSelectedVertical(vert);
  };

  const handleCloseSolutionModal = () => {
    setSelectedVertical(null);
  };

  return (
    <section className="section-padding" id="verticals">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <div className="badge-pill">Industry Solutions</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Tailored IoT Telematics for Every Sector</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Built to scale across commercial logistics, electric vehicle operations, pharmaceutical cold chain, and heavy machinery.
          </p>
        </div>

        <div className="grid-3">
          {VERTICALS_DATA.map((vert) => {
            const IconComp = ICON_MAP[vert.icon] || Truck;
            return (
              <div key={vert.id} id={vert.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0, overflow: 'hidden' }}>
                {/* Vertical Card Banner Image */}
                <div style={{ position: 'relative', width: '100%', height: '160px', background: '#0F172A', overflow: 'hidden' }}>
                  <img
                    src={vert.image}
                    alt={vert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38BDF8',
                        border: '1px solid rgba(56, 189, 248, 0.4)'
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        padding: '4px 10px',
                        borderRadius: '99px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(4px)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {vert.badge}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary-blue)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                    {vert.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--text-main)', fontWeight: '700' }}>
                    {vert.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                    {vert.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {vert.points.map((pt, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        <Check size={14} style={{ color: 'var(--accent-emerald)' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleOpenSolutionModal(vert)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Explore Solution <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Solution Detail Modal */}
      {selectedVertical && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={handleCloseSolutionModal}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '780px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              padding: '0',
              border: '1px solid #E2E8F0'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div style={{ position: 'relative', width: '100%', height: '260px', background: '#0F172A' }}>
              <img
                src={selectedVertical.image}
                alt={selectedVertical.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Close Button */}
              <button
                onClick={handleCloseSolutionModal}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', background: 'var(--primary-blue)', color: '#FFFFFF', padding: '4px 12px', borderRadius: '99px', display: 'inline-block', marginBottom: '8px' }}>
                  {selectedVertical.category}
                </span>
                <h2 style={{ fontSize: '2rem', color: '#FFFFFF', fontWeight: '800', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  {selectedVertical.title}
                </h2>
              </div>
            </div>

            {/* Modal Content Body */}
            <div style={{ padding: '32px' }}>
              {/* Overview Details */}
              <p style={{ fontSize: '1.05rem', lineHeight: '1.65', color: 'var(--text-main)', marginBottom: '24px', fontWeight: '500' }}>
                {selectedVertical.details}
              </p>

              {/* Core Engineering Features */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '14px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--primary-blue)' }} /> Core Engineering Capabilities
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedVertical.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.925rem', color: 'var(--text-main)', background: '#F8FAFC', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <Check size={16} style={{ color: 'var(--accent-emerald)', marginTop: '2px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Hardware Stack Box */}
              <div style={{ padding: '20px 24px', background: '#F0F9FF', borderRadius: '14px', border: '1px solid #BAE6FD', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0369A1', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <Wrench size={16} /> Recommended Industrial Hardware Stack
                </div>
                <strong style={{ fontSize: '1rem', color: '#0C4A6E' }}>{selectedVertical.hardware}</strong>
              </div>

              {/* Compliance Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Award size={16} style={{ color: 'var(--accent-emerald)' }} /> Compliance Certifications:
                </span>
                {selectedVertical.compliance.map((c, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', padding: '4px 12px', background: '#ECFDF5', color: '#065F46', borderRadius: '99px', fontWeight: '700', border: '1px solid #A7F3D0' }}>
                    ✓ {c}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end', flexWrap: 'wrap', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
                <button onClick={handleCloseSolutionModal} className="btn btn-secondary">
                  Close
                </button>
                <button
                  onClick={() => {
                    handleCloseSolutionModal();
                    setDemoModalOpen(true);
                  }}
                  className="btn btn-primary"
                >
                  Schedule Solution Demo <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal Trigger */}
      <ScheduleDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </section>
  );
}
