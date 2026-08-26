'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, access_key: 'c827b8eb-46d4-4e0a-b2a1-bf756a5c0685' })
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <div className="badge-pill">Contact Sales & Support</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Let’s Talk Telematics</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            Have questions about custom hardware integration, enterprise SLAs, or regional deployments? Our engineers are ready to assist.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px' }}>
          {/* Info Side */}
          <div className="glass-card" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Global Headquarters & Sales</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Mail size={24} style={{ color: 'var(--accent-cyan)' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block' }}>Sales & Partnerships</strong>
                  <a href="mailto:sales@wiziot.com" style={{ color: 'var(--accent-cyan)', display: 'block' }}>sales@wiziot.com</a>
                  <a href="tel:7827176924" style={{ color: 'var(--accent-cyan)' }}>7827176924</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Phone size={24} style={{ color: 'var(--accent-emerald)' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block' }}>Customer Support Desk</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <MapPin size={24} style={{ color: 'var(--accent-cyan)' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block' }}>Regional Offices</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Dubai (UAE) | Bengaluru & Mysuru (India) | Kuala Lumpur (Malaysia) | Singapore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card" style={{ padding: '40px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle2 size={56} style={{ color: 'var(--accent-emerald)', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Message Received!</h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  Our enterprise telematics consultant will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label">Work Email *</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label">WhatsApp or Mobile No. (with Country Code) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label">Country *</label>
                  <select
                    required
                    className="form-input"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  >
                    <option value="">Select your country...</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="India">India</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Company Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label">Message / Requirement</label>
                  <textarea
                    rows={4}
                    className="form-textarea"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: '8px' }}>
                  {loading ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
