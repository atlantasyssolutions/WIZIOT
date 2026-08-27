import Link from 'next/link';
import { getAllLocations } from '@/lib/locations';
import { MapPin, Globe2 } from 'lucide-react';

export const metadata = {
  title: 'Global Fleet Telematics Locations & City Hubs | WizIOT',
  description: 'Explore WizIOT\'s global telematics network. Find enterprise fleet tracking, fuel monitoring, and ADAS solutions in over 600 cities worldwide.',
};

export default function LocationsDirectoryPage() {
  const locations = getAllLocations();
  
  // Group locations by region
  const groupedLocations = locations.reduce((acc, loc) => {
    if (!acc[loc.region]) {
      acc[loc.region] = [];
    }
    acc[loc.region].push(loc);
    return acc;
  }, {});

  // Sort regions alphabetically
  const sortedRegions = Object.keys(groupedLocations).sort();

  // Sort cities within each region alphabetically
  sortedRegions.forEach(region => {
    groupedLocations[region].sort((a, b) => a.city.localeCompare(b.city));
  });

  return (
    <div className="section-padding" style={{ paddingTop: '140px', minHeight: '100vh', background: '#F8FAFC' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary-blue-transparent)', color: 'var(--primary-blue)', marginBottom: '20px' }}>
            <Globe2 size={32} />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '16px' }}>
            Global Operations Directory
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            WizIOT provides enterprise-grade fleet telematics, fuel theft prevention, and IoT asset tracking in over 600 major logistics hubs worldwide.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {sortedRegions.map((region) => (
            <div key={region} className="glass-card" style={{ padding: '40px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-blue)', borderBottom: '2px solid #F1F5F9', paddingBottom: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={24} /> {region}
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {groupedLocations[region].map((loc) => (
                  <Link 
                    key={loc.slug} 
                    href={`/${loc.slug}`}
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      background: '#F8FAFC',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      border: '1px solid transparent',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--primary-blue-transparent)';
                      e.currentTarget.style.color = 'var(--primary-blue)';
                      e.currentTarget.style.border = '1px solid rgba(15, 45, 78, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#F8FAFC';
                      e.currentTarget.style.color = 'var(--text-main)';
                      e.currentTarget.style.border = '1px solid transparent';
                    }}
                  >
                    {loc.city}, <span style={{ color: 'var(--text-muted)', fontWeight: '400', fontSize: '0.85rem' }}>{loc.country}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
