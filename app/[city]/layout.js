import { getAllLocations } from '@/lib/locations';

export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export default function CityLayout({ children }) {
  return <>{children}</>;
}
