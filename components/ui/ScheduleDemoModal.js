'use client';

import { useState } from 'react';
import { X, Calendar, CheckCircle2, Send, Loader2 } from 'lucide-react';
import styles from './ScheduleDemoModal.module.css';

export default function ScheduleDemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('custom'); // 'custom' | 'calendly'
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '10-50 vehicles',
    industry: 'Commercial Fleet & Telematics',
    demoType: 'Live Video Product Walkthrough',
    notes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Demo request error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Schedule a Personalized Demo</h3>
          <p className={styles.modalSub}>
            Discover how WizIOT can optimize your fleet operations, cut fuel waste, and enhance driver safety.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'custom' ? styles.activeTabBtn : ''}`}
            onClick={() => setActiveTab('custom')}
          >
            Direct Inquiry Form
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'calendly' ? styles.activeTabBtn : ''}`}
            onClick={() => setActiveTab('calendly')}
          >
            Instant Calendly Booking
          </button>
        </div>

        {submitted ? (
          <div className={styles.successBox}>
            <CheckCircle2 size={56} style={{ color: 'var(--accent-emerald)', margin: '0 auto 16px' }} />
            <h4 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Demo Request Received!</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
              Thank you, <strong style={{ color: '#fff' }}>{formData.name}</strong>. Our enterprise fleet engineer will contact you within 4 hours to confirm your session.
            </p>
            <button className="btn btn-primary" onClick={() => { setSubmitted(false); onClose(); }}>
              Close Window
            </button>
          </div>
        ) : activeTab === 'calendly' ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <Calendar size={48} style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Select an Open Time Slot</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
              Pick a date and time directly on our executive calendar widget.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Open Calendly Scheduler
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.formGrid}>
            <div>
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Sarah Jenkins"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="form-label">Work Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="sarah@company.com"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="form-label">Phone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                placeholder="+971 50 123 4567"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                name="company"
                required
                placeholder="Logistics Corp"
                className="form-input"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="form-label">Fleet Size</label>
              <select name="fleetSize" className="form-select" value={formData.fleetSize} onChange={handleChange}>
                <option value="1-10 vehicles">1 - 10 vehicles</option>
                <option value="10-50 vehicles">10 - 50 vehicles</option>
                <option value="50-200 vehicles">50 - 200 vehicles</option>
                <option value="200+ enterprise">200+ Enterprise Fleets</option>
              </select>
            </div>

            <div>
              <label className="form-label">Primary Vertical</label>
              <select name="industry" className="form-select" value={formData.industry} onChange={handleChange}>
                <option value="Commercial Fleet & Telematics">Commercial Fleet & Freight</option>
                <option value="E-Mobility & EV Fleets">EV / E-Mobility Fleet</option>
                <option value="Cold Chain & Pharma">Cold Chain & Pharma</option>
                <option value="Construction & Mining">Construction & Heavy Assets</option>
                <option value="Healthcare & Ambulance">Healthcare & Emergency Services</option>
              </select>
            </div>

            <div className={styles.fullRow}>
              <label className="form-label">Requirements / Specific Questions</label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Tell us about your fleet goals, regional requirements, or integration needs..."
                className="form-textarea"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fullRow} style={{ marginTop: '12px' }}>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-100"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    Request Executive Demo <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
