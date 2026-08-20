export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const cityStr = resolvedParams?.city || '';
  const city = cityStr.charAt(0).toUpperCase() + cityStr.slice(1).replace(/-/g, ' ');
  return {
    title: `GPS Hardware & Telematics Pricing in {city} | WizIOT`.replace('{city}', city),
    description: `View enterprise fleet tracking and GPS hardware pricing for {city}.`.replace('{city}', city),
    alternates: {
      canonical: `https://www.wiziot.com/${cityStr}/pricing`
    }
  };
}
export default function Layout({ children }) {
  return children;
}