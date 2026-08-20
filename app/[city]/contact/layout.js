export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const cityStr = resolvedParams?.city || '';
  const city = cityStr.charAt(0).toUpperCase() + cityStr.slice(1).replace(/-/g, ' ');
  return {
    title: `Contact WizIOT in {city} | Telematics Support`.replace('{city}', city),
    description: `Contact our {city} team for custom enterprise telematics...`.replace('{city}', city),
    alternates: {
      canonical: `https://www.wiziot.com/${cityStr}/contact`
    }
  };
}
export default function Layout({ children }) {
  return children;
}