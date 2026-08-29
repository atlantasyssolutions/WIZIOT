import VerticalsGrid from '@/components/sections/VerticalsGrid';
import Image from 'next/image';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';
import { getLocationBySlug, getAllLocations } from '@/lib/locations';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams?.city);
  if (!location) return { title: 'Solutions Not Found' };

  return {
    title: `Vertical B2B Telematics Solutions in ${location.city} | WizIOT`,
    description: `Purpose-built telematics for commercial logistics and fleet operations in ${location.city}.`,
    alternates: {
      canonical: `https://www.wiziot.com/${location.slug}/solutions`,
    },
    openGraph: {
      title: `Vertical B2B Telematics Solutions in ${location.city} | WizIOT`,
      description: `Purpose-built telematics for commercial logistics and fleet operations in ${location.city}.`,
      url: `https://www.wiziot.com/${location.slug}/solutions`,
      type: 'website',
      images: ['/heavy-equipment-telematics.webp'],
    },
  };
}

export default async function SolutionsPage({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams?.city);
  if (!location) notFound();

  return (
    <div className="section-padding" style={{ paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="badge-pill">Vertical Enterprise Solutions in {location.city}</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: '800' }}>Purpose-Built Telematics for {location.city} Sectors</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            From commercial logistics and EV battery management systems to temperature-sensitive cold chain monitoring and off-road heavy equipment in {location.city}, {location.country}.
          </p>
        </div>

        {/* Hero Photo Banner for Solutions Page */}
        <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '20px', overflow: 'hidden', marginBottom: '60px', border: '1px solid #E2E8F0', boxShadow: '0 12px 36px rgba(15,45,78,0.1)', background: '#0F172A' }}>
          <Image 
            src="/heavy-equipment-telematics.webp" 
            alt={`WizIOT Vertical Industry Solutions in ${location.city}`}
            fill style={{ objectFit: 'cover' }} 
          />
        </div>

        <VerticalsGrid />
        
        <div style={{ marginTop: '80px' }}>
          <CtaBannerWrapper />
        </div>
      </div>
    </div>
  );
}
