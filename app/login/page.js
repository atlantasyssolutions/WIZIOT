import Link from 'next/link';
import { Truck, Bus, ArrowUpRight, ShieldCheck, LifeBuoy } from 'lucide-react';

export const metadata = {
  title: 'Sign In | WizIOT Platform Access',
  description: 'Choose your platform to sign in: WizIOT Fleet or SchoolBuddy.',
  alternates: {
    canonical: 'https://www.wiziot.com/login',
  },
  openGraph: {
    title: 'Sign In | WizIOT Platform Access',
    description: 'Choose your platform to sign in: WizIOT Fleet or SchoolBuddy.',
    url: 'https://www.wiziot.com/login'
  }
};

export default function LoginPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'radial-gradient(ellipse at top, #F0F7FF 0%, #FFFFFF 60%, #F8FAFC 100%)',
      padding: '120px 24px 60px'
    }}>
      <div style={{ width: '100%', maxWidth: '880px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '999px',
            background: '#EBF5FF',
            color: '#0169A9',
            fontSize: '0.825rem',
            fontWeight: '700',
            letterSpacing: '0.3px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            <ShieldCheck size={14} /> Enterprise Access
          </span>
          <h1 style={{ 
            fontSize: '2.4rem', 
            fontWeight: '800', 
            color: '#0F2D4E', 
            letterSpacing: '-0.5px',
            marginBottom: '10px'
          }}>
            Select Your Application
          </h1>
          <p style={{ color: '#64748B', fontSize: '1.05rem' }}>
            Choose a platform below to sign in to your workspace.
          </p>
        </div>

        {/* 2 Clean Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}>
          
          {/* Card 1: WizIOT Fleet */}
          <a
            href="https://fleet.wiziot.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#FFFFFF',
              borderRadius: '18px',
              border: '1.5px solid #E2E8F0',
              padding: '32px 28px',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 20px rgba(15, 45, 78, 0.05)',
              cursor: 'pointer'
            }}
            className="login-portal-card"
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: '#F0F7FF',
                  border: '1px solid #BAE6FD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0169A9'
                }}>
                  <Truck size={26} strokeWidth={2.2} />
                </div>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#0169A9',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  Open <ArrowUpRight size={16} />
                </span>
              </div>

              <h2 style={{
                fontSize: '1.45rem',
                fontWeight: '700',
                color: '#0F2D4E',
                marginBottom: '8px'
              }}>
                WizIOT Fleet
              </h2>
              <p style={{
                color: '#64748B',
                fontSize: '0.95rem',
                lineHeight: '1.55',
                margin: 0
              }}>
                Commercial vehicle tracking, live telemetry, fuel monitoring, and fleet management.
              </p>
            </div>

            <div style={{ marginTop: '28px' }}>
              <div style={{
                width: '100%',
                padding: '13px 20px',
                borderRadius: '10px',
                background: '#0169A9',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: '600',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(1, 105, 169, 0.2)'
              }}>
                Sign In to Fleet
              </div>
            </div>
          </a>

          {/* Card 2: SchoolBuddy */}
          <a
            href="https://smartbus.trackofy.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#FFFFFF',
              borderRadius: '18px',
              border: '1.5px solid #E2E8F0',
              padding: '32px 28px',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 20px rgba(15, 45, 78, 0.05)',
              cursor: 'pointer'
            }}
            className="login-portal-card"
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#16A34A'
                }}>
                  <Bus size={26} strokeWidth={2.2} />
                </div>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#16A34A',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  Open <ArrowUpRight size={16} />
                </span>
              </div>

              <h2 style={{
                fontSize: '1.45rem',
                fontWeight: '700',
                color: '#0F2D4E',
                marginBottom: '8px'
              }}>
                SchoolBuddy
              </h2>
              <p style={{
                color: '#64748B',
                fontSize: '0.95rem',
                lineHeight: '1.55',
                margin: 0
              }}>
                Smart school bus transport, student RFID attendance, and route tracking portal.
              </p>
            </div>

            <div style={{ marginTop: '28px' }}>
              <div style={{
                width: '100%',
                padding: '13px 20px',
                borderRadius: '10px',
                background: '#16A34A',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: '600',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.2)'
              }}>
                Sign In to SchoolBuddy
              </div>
            </div>
          </a>

        </div>

        {/* Minimal Footer */}
        <div style={{
          textAlign: 'center',
          paddingTop: '16px',
          color: '#94A3B8',
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
          <LifeBuoy size={16} />
          <span>Having trouble logging in?</span>
          <Link 
            href="/contact" 
            style={{ 
              color: '#0169A9', 
              fontWeight: '600', 
              textDecoration: 'underline', 
              textUnderlineOffset: '3px' 
            }}
          >
            Contact Support
          </Link>
        </div>

      </div>
    </main>
  );
}
