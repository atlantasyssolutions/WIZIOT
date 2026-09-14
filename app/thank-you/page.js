'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Clock, Mail, Phone, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function WizIotThankYouPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Strict Guard: ONLY opens if form was filled and token exists in sessionStorage
    const submitted = sessionStorage.getItem('formSubmitted');

    if (!submitted) {
      // Unauthorized direct visit — immediately bounce back to contact
      router.replace('/contact');
    } else {
      setIsAuthorized(true);
      // Consume the single-use token to prevent re-opening on manual reload
      sessionStorage.removeItem('formSubmitted');
    }
  }, [router]);

  if (!isAuthorized) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--text-dim)' }}>
          <div className="spinner" style={{ width: '40px', height: '40px', border: '3px solid #E2E8F0', borderTopColor: 'var(--primary-blue)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px auto' }}></div>
          <p>Verifying submission authorization...</p>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <>
      <head>
        <title>Thank You | WizIOT Telematics</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <div className="section-padding" style={{ paddingTop: '150px', minHeight: '85vh', background: 'var(--gradient-hero)' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
        <div className="glass-card" style={{ padding: 'clamp(32px, 5vw, 64px)', textAlign: 'center', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
          
          {/* Animated Success Icon */}
          <div 
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '50%',
              backgroundColor: '#ECFDF5',
              color: 'var(--accent-emerald)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              border: '2px solid #A7F3D0',
              boxShadow: '0 8px 24px -4px rgba(16, 185, 129, 0.25)'
            }}
          >
            <CheckCircle2 size={48} strokeWidth={2.2} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} /> Telematics Inquiry Successfully Received
            </div>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3rem)', marginBottom: '16px', lineHeight: '1.2' }}>
            Thank You! Your Request Has Been Logged.
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto 36px auto', lineHeight: '1.6' }}>
            Our enterprise telematics consultants and solution architects have received your fleet requirements. Here is exactly what will happen next:
          </p>

          {/* Timeline / Next Steps */}
          <div 
            style={{
              backgroundColor: 'var(--bg-section-alt)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              padding: '28px',
              textAlign: 'left',
              marginBottom: '36px'
            }}
          >
            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={18} color="var(--primary-blue)" /> Next Steps &amp; Engagement Roadmap
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>
                  1
                </div>
                <div>
                  <strong style={{ color: 'var(--text-main)', fontSize: '0.98rem', display: 'block' }}>
                    Fleet Profile &amp; Protocol Assessment (Within 30 Mins)
                  </strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Our team assesses your vehicle mix, sensor specs (CAN J1939, OBD-II, BLE temperature/fuel, dashcams), and regional regulatory mandates.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>
                  2
                </div>
                <div>
                  <strong style={{ color: 'var(--text-main)', fontSize: '0.98rem', display: 'block' }}>
                    Senior Solutions Engineer Follow-up (Within 2 Business Hours)
                  </strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    A dedicated enterprise account executive will reach out via WhatsApp, phone, or email with customized pricing tiers and an architecture blueprint.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>
                  3
                </div>
                <div>
                  <strong style={{ color: 'var(--text-main)', fontSize: '0.98rem', display: 'block' }}>
                    Interactive Sandbox &amp; Hardware Pilot Dispatch
                  </strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    We provision sandbox API credentials to test WizIOT's analytics dashboards and can dispatch sample pre-configured GPS/OBD telemetry hardware for live trial.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgent Contact Strip */}
          <div 
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: '#EFF6FF',
              border: '1px solid #BFDBFE',
              marginBottom: '36px'
            }}
          >
            <span style={{ color: '#1E40AF', fontSize: '0.95rem', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
              Need urgent enterprise assistance or an immediate RFQ response?
            </span>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.95rem' }}>
              <a href="tel:9990333720" style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={16} /> Direct Fleet Sales: +91 9990333720
              </a>
              <span style={{ color: '#94A3B8' }}>&bull;</span>
              <a href="mailto:sales@wiziot.com" style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={16} /> sales@wiziot.com
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem', textDecoration: 'none' }}>
              Return to Homepage
            </Link>
            <Link href="/solutions" className="btn" style={{ padding: '14px 28px', fontSize: '1rem', border: '1px solid var(--border-color)', background: '#FFF', color: 'var(--text-main)', textDecoration: 'none' }}>
              Explore Fleet Solutions <ArrowRight size={16} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
            </Link>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
