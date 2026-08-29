export const metadata = {
  title: 'Privacy Policy | WizIOT Telematics',
  description: 'WizIOT Privacy Policy regarding telemetry data collection, vehicle location processing, GDPR compliance, and security.',
  alternates: {
    canonical: 'https://www.wiziot.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '800' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.95rem' }}>
          Last Updated: August 2026
        </p>

        <div style={{ lineHeight: '1.8', color: 'var(--text-main)', fontSize: '1.05rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '20px' }}>
            WizIOT collects telematics data transmitted by hardware devices installed in commercial vehicles, including GNSS location coordinates, CAN-bus diagnostic frames, speed, fuel probe levels, engine RPM, and driver behavior metrics. We also collect contact information submitted via demo request forms.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>2. Use of Data</h2>
          <p style={{ marginBottom: '20px' }}>
            Telemetry data is processed strictly to provide fleet management services, real-time geofencing alerts, fuel theft detection, and maintenance diagnostic reporting to authorized enterprise account administrators.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>3. Data Security & Storage</h2>
          <p style={{ marginBottom: '20px' }}>
            All telemetry streams in transit are encrypted using TLS 1.3 protocols. Data at rest is encrypted using AES-256 standards in high-availability ISO 27001 certified data centers.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>4. GDPR & Compliance</h2>
          <p style={{ marginBottom: '20px' }}>
            WizIOT adheres to EU GDPR, US CCPA, and international data privacy regulations. Enterprise customers maintain full ownership of their operational fleet data.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>5. Contact Information</h2>
          <p style={{ marginBottom: '20px' }}>
            For privacy inquiries or data subject access requests, contact our Data Protection Officer at <strong>support@wiziot.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
