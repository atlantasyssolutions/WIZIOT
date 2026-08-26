'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ExternalLink, MapPin, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

export default function Header({ onOpenDemo }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  const links = [
    { href: '/', label: 'Why WizIOT' },
    { href: '/solutions', label: 'Verticals' },
    { href: '/platform', label: 'Platform' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  const featuredCities = [
    { slug: 'nairobi', name: 'Nairobi, Kenya' },
    { slug: 'mombasa', name: 'Mombasa, Kenya' },
    { slug: 'lagos', name: 'Lagos, Nigeria' },
    { slug: 'johannesburg', name: 'Johannesburg, SA' },
    { slug: 'warsaw', name: 'Warsaw, Poland' },
    { slug: 'bucharest', name: 'Bucharest, Romania' },
    { slug: 'dubai', name: 'Dubai, UAE' },
    { slug: 'barcelona', name: 'Barcelona, Spain' },
    { slug: 'singapore', name: 'Singapore' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Official Logo */}
        <Link href="/" className={styles.logoLink} aria-label="WizIOT Home">
          <Image 
            src="/images/logo.svg" 
            alt="WizIOT - Unified IoT. Unmatched Wisdom."
            width={160}
            height={40}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ height: '100%' }}>
          <ul className={styles.navLinks}>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className={styles.navItem}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* City Hub Selector Dropdown */}
            <li
              className={styles.navItem}
              style={{ position: 'relative' }}
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <Link
                href="/locations"
                className={`${styles.navLink} ${pathname.startsWith('/locations') ? styles.activeLink : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <MapPin size={14} style={{ color: '#38BDF8' }} /> City Hubs <ChevronDown size={12} />
              </Link>

              {locationsDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '240px',
                    background: '#0F172A',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    padding: '12px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    zIndex: 1000
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', padding: '4px 8px' }}>
                    Select Regional Logistics Hub
                  </div>
                  {featuredCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}`}
                      style={{
                        padding: '6px 10px',
                        borderRadius: '6px',
                        color: '#E2E8F0',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        fontWeight: '500'
                      }}
                      className="dropdown-city-item"
                    >
                      {city.name}
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '6px', paddingTop: '8px' }}>
                    <Link
                      href="/locations"
                      style={{
                        fontSize: '0.85rem',
                        color: '#38BDF8',
                        fontWeight: '700',
                        textDecoration: 'none',
                        display: 'block',
                        padding: '4px 8px'
                      }}
                    >
                      View All 20 City Hubs →
                    </Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.navActions}>
          <a
            href="https://fleet.wiziot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            Login <ExternalLink size={14} />
          </a>

          <button
            onClick={onOpenDemo}
            className="btn btn-primary btn-sm"
          >
            Schedule Demo <ArrowRight size={14} />
          </button>

          {/* Mobile Toggle Button */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/locations"
            className={styles.navLink}
            onClick={() => setMobileOpen(false)}
            style={{ color: '#38BDF8', fontWeight: '700' }}
          >
            📍 Explore 20 City Hubs
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <a
              href="https://fleet.wiziot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-100"
            >
              Login to Fleet Platform
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenDemo();
              }}
              className="btn btn-primary w-100"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
