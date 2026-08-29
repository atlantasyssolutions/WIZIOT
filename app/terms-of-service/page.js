export const metadata = {
  title: 'Terms of Service | WizIOT Telematics',
  description: 'WizIOT Master Services Agreement, SLA terms, sensor hardware warranty, and software subscription terms.',
  alternates: {
    canonical: 'https://www.wiziot.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '800' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.95rem' }}>
          Last Updated: August 2026
        </p>

        <div style={{ lineHeight: '1.8', color: 'var(--text-main)', fontSize: '1.05rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: '20px' }}>
            By accessing WizIOT SaaS platform or utilizing WizIOT hardware sensors, you agree to be bound by this Master Services Agreement.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>2. Service Level Agreement (SLA)</h2>
          <p style={{ marginBottom: '20px' }}>
            WizIOT commits to a 99.9% platform availability SLA for enterprise subscription tiers. Planned maintenance windows are communicated 72 hours in advance.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>3. Hardware Warranty & Calibration</h2>
          <p style={{ marginBottom: '20px' }}>
            WizIOT telematics gateways, fuel probes, and BLE temperature sensors are backed by a 24-month manufacturer warranty. ISO/IEC 17025 calibration certificates remain valid for 12 months from installation.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', fontWeight: '700' }}>4. Limitation of Liability</h2>
          <p style={{ marginBottom: '20px' }}>
            WizIOT provides telemetry data and alerts to assist fleet management. Account holders remain responsible for vehicle operations and driver compliance.
          </p>
        </div>
      </div>
    </div>
  );
}
