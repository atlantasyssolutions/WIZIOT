export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const cityStr = resolvedParams?.city || '';
  const city = cityStr.charAt(0).toUpperCase() + cityStr.slice(1).replace(/-/g, ' ');
  return {
    title: `Telematics & IoT Insights for {city} | WizIOT`.replace('{city}', city),
    description: `Read our latest insights, case studies, and compliance guides for {city}.`.replace('{city}', city),
    alternates: {
      canonical: `https://www.wiziot.com/${cityStr}/blog`
    }
  };
}
export default function Layout({ children }) {
  return children;
}