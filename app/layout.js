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
  openGraph: {
    type: 'website',
    siteName: 'WizIOT Telematics',
    locale: 'en_US',
    url: 'https://www.wiziot.com',
    title: 'WizIOT | AI-Powered B2B Fleet & Logistics Telematics',
    description: 'Transform fleet performance, cut fuel waste, and protect EV battery health with WizIOT’s AI-powered SaaS platform.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WizIOT Telematics Inc.',
  alternateName: 'WizIOT',
  url: 'https://www.wiziot.com',
  logo: 'https://www.wiziot.com/img/logo.svg',
  description: 'Enterprise B2B IoT & Telematics platform powering fleet management, EV analytics, and asset tracking globally.',
  sameAs: [
    'https://www.linkedin.com/company/wiziot',
    'https://www.facebook.com/wiziot'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'sales@wiziot.com',
    contactType: 'sales',
    availableLanguage: ['English', 'Arabic']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
