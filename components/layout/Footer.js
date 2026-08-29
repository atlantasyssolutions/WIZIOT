import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

import { LOCATIONS_DATA } from '@/data/locations';

export default function Footer() {
  const targetLocations = LOCATIONS_DATA;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <Image
                src="/images/logo.svg"
                alt="WizIOT Logo"
                className={styles.brandLogoImg}
                width={120}
                height={40}
              />
            </div>
            <p className={styles.brandDesc}>
              AI-Powered B2B Fleet Management & Telematics Platform. Real-time GPS tracking, EV battery management, route optimization, and ADAS driver behavior analytics.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <a href="https://www.linkedin.com/company/wiziot-technologies/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" aria-label="LinkedIn" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: 'none' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
              </a>
              {/* TODO(human): real profile URL */}
              {/* <a href="https://facebook.com" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" aria-label="Facebook" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: 'none' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a> */}
              {/* TODO(human): real profile URL */}
              {/* <a href="https://youtube.com" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" aria-label="YouTube" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: 'none' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M21.58 7.19a2.76 2.76 0 0 0-1.95-1.95C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.63.54A2.76 2.76 0 0 0 2.42 7.19 29.07 29.07 0 0 0 1.88 12a29.07 29.07 0 0 0 .54 4.81 2.76 2.76 0 0 0 1.95 1.95c1.73.54 7.63.54 7.63.54s5.9 0 7.63-.54a2.76 2.76 0 0 0 1.95-1.95 29.07 29.07 0 0 0 .54-4.81 29.07 29.07 0 0 0-.54-4.81zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"/></svg>
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linkList}>
              <li><Link href="/solutions#telematics" className={styles.linkItem}>Fleet Telematics</Link></li>
              <li><Link href="/solutions#ev-fleets" className={styles.linkItem}>EV & BMS Analytics</Link></li>
              <li><Link href="/solutions#cold-chain" className={styles.linkItem}>Cold Chain Logistics</Link></li>
              <li><Link href="/solutions#healthcare" className={styles.linkItem}>Healthcare Logistics</Link></li>
              <li><Link href="/solutions#industrial" className={styles.linkItem}>Heavy Equipment IoT</Link></li>
            </ul>
          </div>

          {/* Platform & Company */}
          <div>
            <h4 className={styles.colTitle}>Platform</h4>
            <ul className={styles.linkList}>
              <li><Link href="/platform" className={styles.linkItem}>AI Engine & ADAS</Link></li>
              <li><Link href="/sensors" className={styles.linkItem}>Sensors & Hardware Hub</Link></li>
              <li><Link href="/pricing" className={styles.linkItem}>SaaS Pricing Tiers</Link></li>
              <li><Link href="/blog" className={styles.linkItem}>Knowledge Hub & Blog</Link></li>
              <li><Link href="/partners" className={styles.linkItem}>Partner Network</Link></li>
              <li><a href="https://fleet.wiziot.com/" target="_blank" rel="noreferrer" className={styles.linkItem}>Fleet Login Portal</a></li>
            </ul>
          </div>

          {/* Contact & Global Presence */}
          <div>
            <h4 className={styles.colTitle}>Contact Sales</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactRow}>
                <Mail size={16} style={{ color: '#38BDF8' }} />
                <a href="mailto:sales@wiziot.com" className={styles.linkItem}>sales@wiziot.com</a>
              </div>
              <div className={styles.contactRow}>
                <Globe size={16} style={{ color: '#38BDF8' }} />
                <span>Global Deployments</span>
              </div>
              <div className={styles.contactRow}>
                <MapPin size={16} style={{ color: '#38BDF8' }} />
                <span>UAE | India | Malaysia | Singapore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global City Hubs & Telematics Services Matrix */}
        <div style={{ marginTop: '40px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.5px' }}>
            Popular City Hubs & Regional Telematics Services
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', fontSize: '0.8rem' }}>
            {targetLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className={styles.linkItem}
                style={{ color: '#CBD5E1', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <MapPin size={12} style={{ color: '#38BDF8' }} /> GPS Tracker in {loc.city} ({loc.country})
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            © {new Date().getFullYear()} WizIOT. All Rights Reserved. 
            <span style={{ margin: '0 8px', color: '#475569' }}>|</span> 
            SEO by <a href="https://rankursite.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', textDecoration: 'none' }}>RankurSite</a>
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.linkItem}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.linkItem}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
