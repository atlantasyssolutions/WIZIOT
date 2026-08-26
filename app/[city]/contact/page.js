import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Sales & Support | WizIOT Telematics',
  description: 'Get in touch with WizIOT for custom telematics hardware integration and enterprise SLAs.',
};

export default function Page(props) {
  return <ContactClient {...props} />;
}
