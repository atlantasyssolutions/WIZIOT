import PricingClient from './PricingClient';

export const metadata = {
  title: 'Pricing Plans | WizIOT Telematics',
  description: 'Predictable pricing for growing fleets. Starter, Professional, and Enterprise telematics plans.',
};

export default function Page(props) {
  return <PricingClient {...props} />;
}
