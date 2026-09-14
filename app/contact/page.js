import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Sales & Support | Enterprise Fleet Telematics | WizIOT',
  description: 'Get in touch with WizIOT engineers for custom telematics hardware integration, API documentation, and enterprise fleet SLAs.',
  alternates: { canonical: 'https://www.wiziot.com/contact' }
};

export default function Page(props) {
  return <ContactClient {...props} />;
}
