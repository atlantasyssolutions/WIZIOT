import { LOCATIONS_DATA } from '@/data/locations';

export function getAllLocations() {
  return LOCATIONS_DATA;
}

export function getLocationBySlug(slug) {
  if (!slug || typeof slug !== 'string') return null;
  return LOCATIONS_DATA.find((loc) => loc.slug === slug.toLowerCase()) || null;
}

export function generateLocationSchema(location) {
  if (!location) return {};
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `https://www.wiziot.com/${location.slug}#localbusiness`,
        name: `WizIOT Fleet Telematics ${location.city}`,
        alternateName: `WizIOT GPS Tracking & Fuel Monitoring ${location.city}`,
        description: location.metaDescription,
        url: `https://www.wiziot.com/${location.slug}`,
        logo: 'https://www.wiziot.com/images/logo.svg',
        image: `https://www.wiziot.com/locations/${location.slug}.webp`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: location.city,
          addressCountry: location.country,
          streetAddress: location.corridor,
        },
        telephone: '+1-800-WIZIOT-GLOBAL',
        email: 'sales@wiziot.com',
        priceRange: '$$$',
        openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
      },
      {
        '@type': 'Service',
        serviceType: 'B2B Fleet Telematics & IoT Fuel Theft Monitoring',
        provider: {
          '@type': 'Organization',
          name: 'WizIOT Telematics',
          url: 'https://www.wiziot.com',
        },
        areaServed: {
          '@type': 'City',
          name: location.city,
          containedIn: location.country,
        },
        name: location.heroHeadline,
        description: location.metaDescription,
      }
    ]
  };
}
