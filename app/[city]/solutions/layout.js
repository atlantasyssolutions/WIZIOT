export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const cityStr = resolvedParams?.city || '';
  const city = cityStr.charAt(0).toUpperCase() + cityStr.slice(1).replace(/-/g, ' ');
  return {
    title: `Enterprise Telematics Solutions in {city} | WizIOT`.replace('{city}', city),
    description: `Discover WizIOT industry-specific GPS and IoT solutions deployed in {city}.`.replace('{city}', city),
    alternates: {
      canonical: `https://www.wiziot.com/${cityStr}/solutions`
    }
  };
}
export default function Layout({ children }) {
  return children;
}