import { getAllBlogs } from '@/lib/blog';
import BlogClientIndex from '@/components/blog/BlogClientIndex';

export const metadata = {
  title: 'WizIOT B2B Telematics Knowledge Hub | 500+ Engineering & Compliance Guides',
  description: 'Explore 500+ enterprise telematics guides covering fuel theft prevention, signal jammer detection, WHO GDP cold chain, EU GSR 2024 compliance, and heavy mining telemetry.',
  keywords: [
    'telematics blog',
    'fuel theft prevention',
    'capacitive fuel probe',
    'GPS jammer detection',
    'pharmaceutical cold chain',
    'DMS ADAS safety',
    'mining telematics'
  ],
};

export default function BlogIndexPage() {
  const blogs = getAllBlogs();
  return <BlogClientIndex blogs={blogs} />;
}
