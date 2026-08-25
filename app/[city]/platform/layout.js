export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const cityStr = resolvedParams?.city || '';
  const city = cityStr.charAt(0).toUpperCase() + cityStr.slice(1).replace(/-/g, ' ');
  return {
    title: `Fleet Management Platform in {city} | WizIOT`.replace('{city}', city),
    description: `Our enterprise IoT telematics platform optimized for {city}.`.replace('{city}', city),
    alternates: {
      canonical: `https://www.wiziot.com/platform`
    }
  };
}
export default function Layout({ children }) {
  return children;
}