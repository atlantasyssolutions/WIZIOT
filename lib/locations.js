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
        '@type': 'Service',
        '@id': `https://www.wiziot.com/${location.slug}#service`,
        name: `WizIOT Fleet Telematics ${location.city}`,
        alternateName: `WizIOT GPS Tracking & Fuel Monitoring ${location.city}`,
        description: location.metaDescription,
        url: `https://www.wiziot.com/${location.slug}`,
        logo: 'https://www.wiziot.com/images/logo.svg',
        image: `https://www.wiziot.com/locations/${location.slug}.webp`,
        email: 'sales@wiziot.com',
        openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
        serviceType: 'B2B Fleet Telematics & IoT Fuel Theft Monitoring',
        provider: {
          '@type': 'Organization',
          name: 'WizIOT Telematics Inc.',
          url: 'https://www.wiziot.com',
        },
        areaServed: {
          '@type': 'City',
          name: location.city,
          containedInPlace: {
            '@type': 'Country',
            name: location.country
          }
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.wiziot.com/${location.slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.wiziot.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://www.wiziot.com/locations'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: location.city,
            item: `https://www.wiziot.com/${location.slug}`
          }
        ]
      }
    ]
  };
}
