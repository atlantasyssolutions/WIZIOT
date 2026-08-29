import { getAllBlogs } from '@/lib/blog';
import BlogClientIndex from '@/components/blog/BlogClientIndex';

export const metadata = {
  title: 'WizIOT B2B Telematics Knowledge Hub | Fleet Engineering & Compliance Guides',
  description: 'Explore 500+ enterprise telematics guides covering fuel theft prevention, signal jammer detection, WHO GDP cold chain, EU GSR 2024 compliance, and heavy mining telemetry.',
  alternates: { canonical: 'https://www.wiziot.com/blog' },
  openGraph: {
    title: 'WizIOT B2B Telematics Knowledge Hub | Fleet Engineering & Compliance Guides',
    description: 'Explore 500+ enterprise telematics guides covering fuel theft prevention, signal jammer detection, WHO GDP cold chain, EU GSR 2024 compliance, and heavy mining telemetry.',
    url: 'https://www.wiziot.com/blog'
  }
};

export default function BlogIndexPage() {
  const blogs = getAllBlogs();
  return <BlogClientIndex blogs={blogs} />;
}
