import PricingClient from './PricingClient';
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
  if (!location) return { title: 'Pricing Not Found' };

  return {
    title: `Pricing Plans for Fleets in ${location.city} | WizIOT Telematics`,
    description: `Predictable telematics pricing for fleets in ${location.city}. Starter, Professional, and Enterprise plans.`,
    alternates: {
      canonical: `https://www.wiziot.com/${location.slug}/pricing`,
    },
    openGraph: {
      title: `Pricing Plans for Fleets in ${location.city} | WizIOT Telematics`,
      description: `Predictable telematics pricing for fleets in ${location.city}. Starter, Professional, and Enterprise plans.`,
      url: `https://www.wiziot.com/${location.slug}/pricing`,
      type: 'website',
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams?.city);
  if (!location) notFound();

  return <PricingClient location={location} />;
}
