import HomeClient from './HomeClient';

export const metadata = {
  title: 'WizIOT | AI-Powered B2B Fleet Management & Telematics',
  description: 'Transform fleet performance, cut fuel waste, and protect EV battery health with WizIOT’s AI-powered SaaS platform.',
  alternates: { canonical: 'https://www.wiziot.com' }
};

export default function Page(props) {
  return <HomeClient {...props} />;
}
