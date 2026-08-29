import PricingClient from './PricingClient';

export const metadata = {
  title: 'Pricing Plans & Telematics Subscriptions | WizIOT Telematics',
  description: 'Predictable pricing for growing fleets. Starter, Professional, and Enterprise telematics plans.',
  alternates: { canonical: 'https://www.wiziot.com/pricing' },
  openGraph: {
    title: 'Pricing Plans & Telematics Subscriptions | WizIOT Telematics',
    description: 'Predictable pricing for growing fleets. Starter, Professional, and Enterprise telematics plans.',
    url: 'https://www.wiziot.com/pricing'
  }
};

export default function Page(props) {
  return <PricingClient {...props} />;
}
