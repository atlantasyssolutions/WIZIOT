import PartnersClient from './PartnersClient';

export const metadata = {
  title: 'Partner Network | WizIOT Telematics',
  description: 'Join the WizIOT telematics partner network. White-label solutions, reseller programs, and hardware integrations.',
  alternates: {
    canonical: 'https://www.wiziot.com/partners',
  },
};

export default function Page(props) {
  return <PartnersClient {...props} />;
}
