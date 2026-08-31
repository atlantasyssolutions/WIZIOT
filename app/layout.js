import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';


export const metadata = {
  metadataBase: new URL('https://www.wiziot.com'),
  title: {
    default: 'WizIOT | AI-Powered B2B Fleet Management & Telematics Platform',
    template: '%s | WizIOT Telematics',
  },
  description:
    'Smarter decisions in fleet & logistics. Real-time GPS tracking, EV & BMS analytics, route optimization, ADAS driver safety, and cold chain telemetry.',
  alternates: {
    canonical: 'https://www.wiziot.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.wiziot.com',
    siteName: 'WizIOT Telematics',
    locale: 'en_US',
    title: 'WizIOT | AI-Powered B2B Fleet Management & Telematics Platform',
    description: 'Transform fleet performance, cut fuel waste, and protect EV battery health with WizIOT’s AI-powered SaaS platform.',
    images: [
      {
        url: 'https://www.wiziot.com/hero-telematics-dashboard.webp',
        width: 1200,
        height: 630,
        alt: 'WizIOT AI Fleet Telematics Dashboard Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WizIOT | AI-Powered B2B Fleet Management & Telematics Platform',
    description: 'Real-time GPS tracking, EV & BMS analytics, route optimization, ADAS driver safety, and cold chain telemetry.',
    images: ['https://www.wiziot.com/hero-telematics-dashboard.webp'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WizIOT Telematics Inc.',
  alternateName: 'WizIOT',
  url: 'https://www.wiziot.com',
  logo: 'https://www.wiziot.com/images/logo.svg',
  description: 'Enterprise B2B IoT & Telematics platform powering fleet management, EV analytics, and asset tracking globally.',
  sameAs: [
    'https://www.linkedin.com/company/wiziot-technologies/'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'sales@wiziot.com',
    contactType: 'sales',
    availableLanguage: ['English', 'Arabic']
  }
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WizIOT Fleet Telematics SaaS',
  operatingSystem: 'Web, iOS, Android',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '128',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RFB2CHN07E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RFB2CHN07E');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </body>
    </html>
  );
}
