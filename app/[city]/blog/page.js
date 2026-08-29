import BlogClientIndex from '@/components/blog/BlogClientIndex';
import { getAllBlogs } from '@/lib/blog';
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
  if (!location) return { title: 'Blog Not Found' };

  return {
    title: `Telematics & IoT Insights for ${location.city} Fleets | WizIOT`,
    description: `Explore enterprise telematics guides and compliance frameworks for fleet operations in ${location.city}.`,
    alternates: {
      canonical: `https://www.wiziot.com/${location.slug}/blog`,
    },
    openGraph: {
      title: `Telematics & IoT Insights for ${location.city} Fleets | WizIOT`,
      description: `Explore enterprise telematics guides and compliance frameworks for fleet operations in ${location.city}.`,
      url: `https://www.wiziot.com/${location.slug}/blog`,
      type: 'website',
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams?.city);
  if (!location) notFound();

  const blogs = getAllBlogs();
  
  return <BlogClientIndex blogs={blogs} location={location} />;
}
