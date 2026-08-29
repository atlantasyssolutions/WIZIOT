import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | WizIOT by Atlanta Systems',
  description: 'User Agreement and Terms of Use for WizIOT and Atlanta Systems Private Limited telematics services and web platform.',
  alternates: {
    canonical: 'https://www.wiziot.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <div style={{ marginBottom: '32px' }}>
          <span className="badge-pill" style={{ margin: 0, marginBottom: '12px' }}>
            Legal & Terms
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: '800', marginBottom: '12px', color: 'var(--text-main)' }}>
            User Agreement & Terms of Use
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Effective Date: June 3, 2013 | Last Updated: August 2026
          </p>
        </div>

        <div className="glass-card" style={{ padding: '36px', lineHeight: '1.8', color: 'var(--text-main)', fontSize: '1.05rem', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
          <p style={{ fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '20px' }}>
            PLEASE READ THE FOLLOWING USER AGREEMENT CAREFULLY.
          </p>

          <p style={{ marginBottom: '24px' }}>
            The following demonstrates the User Agreement (hereinafter referred to as the "Agreement") between <strong>Atlanta Systems Private Limited</strong> (hereinafter referred to as "Atlanta Systems Private Limited", "we", "us") and the users of the Website and WizIOT telematics platform ("You", "Your", "User"/"Users").
          </p>

          <p style={{ marginBottom: '24px' }}>
            Before you subscribe to and/or begin participating in or using the website and platform, Atlanta Systems Private Limited believes that user(s) have fully read, understood, and accept the Agreement. If you do not agree to or wish to be bound by this Agreement, you may not access or otherwise use the website or services.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            1. User Agreement & Governing Term
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Your use of the Atlanta Systems Private Limited website (https://www.wiziot.com) and services available on the website is governed by the following terms and conditions. This User Agreement for the website came into effect on June 3, 2013, with continuous updates for WizIOT cloud services.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            2. Amendments to User Agreement
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Atlanta Systems Private Limited may change, modify, amend, or update this agreement from time to time without any prior notification to user(s), and the amended and restated terms and conditions of use shall be effective immediately on posting. You are advised to regularly check for any amendments or updates. Your continuous use of the service signifies your acceptance of the changed terms.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            3. User Eligibility
          </h2>
          <p style={{ marginBottom: '24px' }}>
            User(s) means any individual or business entity/organization that legally operates in India or in other countries, uses, and has the right to use the services provided by Atlanta Systems Private Limited. Our services are available only to those individuals or companies who can form legally binding contracts under applicable law (i.e. Indian Contract Act, 1872 or international equivalents). If you are registering as a business entity, you represent that you are duly authorized by the business entity to accept this User Agreement and have authority to bind that entity.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            4. Electronic Communications
          </h2>
          <p style={{ marginBottom: '24px' }}>
            When You use the Website or send emails or other data/communications to Atlanta Systems Private Limited, You agree and understand that You are communicating through electronic records and consent to receive communications via electronic records periodically.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            5. Platform Usage Guidelines & Restrictions
          </h2>
          <p style={{ marginBottom: '12px' }}>
            You understand and agree that You shall not host, display, upload, modify, publish, transmit, update, or share any information that:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li>Belongs to another person and to which You do not have any right to;</li>
            <li>Is grossly harmful, harassing, defamatory, obscene, invasive of another's privacy, hateful, or unlawful in any manner;</li>
            <li>Infringes any patent, trademark, copyright, or other proprietary rights;</li>
            <li>Violates any law for the time being in force (including Information Technology Act, 2000);</li>
            <li>Contains software viruses, Trojan horses, or code designed to interrupt or limit the functionality of any computer resource;</li>
            <li>Threatens the unity, integrity, defense, security or sovereignty of India or friendly relations with foreign states;</li>
            <li>Is false, inaccurate, or misleading in any operational telemetry report.</li>
          </ul>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            6. License & Data Rights
          </h2>
          <p style={{ marginBottom: '24px' }}>
            User(s) grant a worldwide, sub-licensable license to Atlanta Systems Private Limited to process operational vehicle telemetry data strictly to render fleet tracking, sensor diagnostics, and analytics services as authorized under your subscription.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '12px' }}>
            7. Contact Details
          </h2>
          <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', marginTop: '12px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: 'var(--text-main)' }}>Atlanta Systems Private Limited</p>
            <p style={{ margin: '0 0 4px 0', fontSize: '0.95rem' }}><strong>Corporate Office:</strong> M-135, 2nd Floor, M Block, CP, New Delhi, India</p>
            <p style={{ margin: '0 0 4px 0', fontSize: '0.95rem' }}><strong>Email:</strong> support@atlantasys.com | support@wiziot.com</p>
            <p style={{ margin: 0, fontSize: '0.95rem' }}><strong>Phone:</strong> +91 011-49039700 / +91 9990333720</p>
          </div>
        </div>
      </div>
    </div>
  );
}
