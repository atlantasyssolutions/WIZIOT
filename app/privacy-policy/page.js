import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | WizIOT Telematics',
  description: 'WizIOT Privacy Policy regarding personal data, location tracking, camera permissions, and telemetry privacy.',
  alternates: {
    canonical: 'https://www.wiziot.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | WizIOT Telematics',
    description: 'WizIOT Privacy Policy regarding personal data, location tracking, camera permissions, and telemetry privacy.',
    url: 'https://www.wiziot.com/privacy-policy'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <div style={{ marginBottom: '32px' }}>
          <span className="badge-pill" style={{ margin: 0, marginBottom: '12px' }}>
            Legal & Compliance
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: '800', marginBottom: '12px', color: 'var(--text-main)' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Effective Date: June 3, 2013 | Last Updated: August 2026
          </p>
        </div>

        <div className="glass-card" style={{ padding: '36px', lineHeight: '1.8', color: 'var(--text-main)', fontSize: '1.05rem', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            1. Introduction
          </h2>
          <p style={{ marginBottom: '24px' }}>
            WizIOT Technologies ("we," "our," "us") has developed the WizIOT telematics app and SaaS platform ("Service"). This Privacy Policy is designed to inform users ("you," "your") about our policies regarding the collection, use, and disclosure of Personal Information when you decide to use our Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            2. Information Collection and Use
          </h2>
          <p style={{ marginBottom: '12px' }}>
            To provide and improve our Service, we may ask you to provide certain personally identifiable information, including but not limited to:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li><strong>Personal Information:</strong> Your name, email address, phone number, and enterprise contact details.</li>
            <li><strong>Usage Information:</strong> Operational metrics, feature interaction logs, and dashboard interactions.</li>
            <li><strong>Device Information:</strong> Device hardware model, operating system version, and unique device identifiers.</li>
            <li><strong>Camera Access:</strong> The app utilizes camera permissions to enable drivers and fleet managers to capture and upload POD (Proof of Delivery), bill of lading documents, and maintenance inspection files directly to the platform.</li>
          </ul>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            3. User Location Tracking
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Our WizIOT app incorporates location-based services to enhance user experience and core telematics functionality. Through the use of GPS, Wi-Fi, and/or cellular network information, we accurately determine and track the geographical location of registered fleet assets and mobile devices. This location data enables essential features such as real-time mapping, geofence security alerts, route optimization, fuel siphoning detection, and personalized content delivery. Rest assured, we prioritize user privacy and adhere to stringent data protection measures, ensuring that location information is securely processed and used solely for intended fleet management purposes.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            4. Third-Party Service Providers
          </h2>
          <p style={{ marginBottom: '12px' }}>
            We may employ third-party companies and individuals for the following reasons:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>
            These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            5. Log Data
          </h2>
          <p style={{ marginBottom: '24px' }}>
            In the event of an error in the app, we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when using our Service, the time and date of your use of the Service, and other operational statistics.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            6. Cookies
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Cookies are files with a small amount of data commonly used as anonymous unique identifiers. This Service does not explicitly use cookies. However, the app may use third-party code and libraries that use cookies to collect information and improve their services. You can accept or refuse these cookies and know when a cookie is being sent to your device.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            7. Security
          </h2>
          <p style={{ marginBottom: '24px' }}>
            We value your trust in providing us with your Personal Information and strive to use commercially acceptable means to protect it. All telematics streams in transit are protected using industry-standard encryption protocols. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            8. Children’s Privacy
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we delete it immediately.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            9. Changes to This Privacy Policy
          </h2>
          <p style={{ marginBottom: '24px' }}>
            We may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes. Changes are effective immediately after they are posted.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            10. Contact Us
          </h2>
          <p style={{ marginBottom: '8px' }}>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
          </p>
          <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', marginTop: '12px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: 'var(--text-main)' }}>WizIOT Technologies</p>
            <p style={{ margin: '0 0 4px 0', fontSize: '0.95rem' }}><strong>Email:</strong> support@wiziot.com</p>
            <p style={{ margin: 0, fontSize: '0.95rem' }}><strong>Sales & Support Phone:</strong> +91 9990333720</p>
          </div>
        </div>
      </div>
    </div>
  );
}
