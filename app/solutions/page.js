import VerticalsGrid from '@/components/sections/VerticalsGrid';
import Image from 'next/image';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';

export const metadata = {
  title: 'Vertical B2B Telematics Solutions & Fleet IoT | WizIOT',
  description: 'Purpose-built telematics for commercial logistics, EV fleets, pharmaceutical cold chain, heavy machinery, and emergency vehicles with certified sensor compliance.',
  alternates: {
    canonical: 'https://www.wiziot.com/solutions',
  },
  openGraph: {
    title: 'Vertical B2B Telematics Solutions & Fleet IoT | WizIOT',
    description: 'Purpose-built telematics for commercial logistics, EV fleets, pharmaceutical cold chain, heavy machinery, and emergency vehicles.',
    url: 'https://www.wiziot.com/solutions',
    type: 'website',
    images: ['/heavy-equipment-telematics.webp'],
  },
};

export default function SolutionsPage() {
  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="badge-pill">Vertical Enterprise Solutions</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: '800' }}>Purpose-Built Telematics for Every Fleet Sector</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            From commercial logistics and EV battery management systems to temperature-sensitive cold chain monitoring and off-road heavy equipment.
          </p>
        </div>

        {/* Hero Photo Banner for Solutions Page */}
        <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '20px', overflow: 'hidden', marginBottom: '60px', border: '1px solid #E2E8F0', boxShadow: '0 12px 36px rgba(15,45,78,0.1)', background: '#0F172A' }}>
          <Image 
             src="/heavy-equipment-telematics.webp" 
            alt="WizIOT Vertical Industry Solutions & Heavy Equipment Telematics"
            
          fill style={{ objectFit: 'cover' }} />
        </div>

        <VerticalsGrid />
        
        <div style={{ marginTop: '80px' }}>
          <CtaBannerWrapper />
        </div>
      </div>
    </div>
  );
}
