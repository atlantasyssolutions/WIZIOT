export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const cityStr = resolvedParams?.city || '';
  const city = cityStr.charAt(0).toUpperCase() + cityStr.slice(1).replace(/-/g, ' ');
  return {
    title: `Telematics Installation Partners in {city}`.replace('{city}', city),
    description: `Find certified GPS and IoT installation partners in {city}.`.replace('{city}', city),
    alternates: {
      canonical: `https://www.wiziot.com/partners`
    }
  };
}
export default function Layout({ children }) {
  return children;
}