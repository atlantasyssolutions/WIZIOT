import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { VERTICALS_DATA } from '@/data/verticals';
import { getAllBlogs } from '@/lib/blog';
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Wrench,
  Award,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Cpu,
  CheckCircle2,
  FileCheck2,
  Layers,
  Sparkles,
  BookOpen
} from 'lucide-react';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';
import BlogCard from '@/components/blog/BlogCard';

export async function generateStaticParams() {
  return VERTICALS_DATA.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const vertical = VERTICALS_DATA.find((v) => v.id === resolvedParams?.id);
  if (!vertical) return { title: 'Solution Not Found | WizIOT' };

  const canonicalUrl = `https://www.wiziot.com/solutions/${vertical.id}`;
  const title = vertical.seoTitle || `${vertical.title} | WizIOT Telematics Solutions`;
  const description = vertical.seoDescription || vertical.description;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'WizIOT Telematics',
      images: [
        {
          url: vertical.heroImage || vertical.image,
          width: 1200,
          height: 630,
          alt: vertical.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [vertical.heroImage || vertical.image],
    },
  };
}

export default async function SolutionDetailPage({ params }) {
  const resolvedParams = await params;
  const vertical = VERTICALS_DATA.find((v) => v.id === resolvedParams?.id);
  if (!vertical) notFound();

  const otherSolutions = VERTICALS_DATA.filter((v) => v.id !== vertical.id);

  // Find relevant blogs for topic cluster interlinking
  const allBlogs = getAllBlogs();
  const relatedBlogs = allBlogs.filter((b) => {
    const combined = `${b.title} ${b.category} ${b.content}`.toLowerCase();
    if (vertical.id === 'healthcare' && (combined.includes('health') || combined.includes('ambulance') || combined.includes('hospital') || combined.includes('cold'))) return true;
    if (vertical.id === 'ev-fleets' && (combined.includes('ev') || combined.includes('battery') || combined.includes('bms'))) return true;
    if (vertical.id === 'cold-chain' && (combined.includes('cold') || combined.includes('reefer') || combined.includes('pharma') || combined.includes('temperature'))) return true;
    if (vertical.id === 'industrial-iot' && (combined.includes('mining') || combined.includes('excavator') || combined.includes('heavy') || combined.includes('construction'))) return true;
    if (vertical.id === 'telematics' && (combined.includes('fuel') || combined.includes('theft') || combined.includes('truck') || combined.includes('jammer'))) return true;
    if (vertical.id === 'public-transit' && (combined.includes('transit') || combined.includes('bus') || combined.includes('passenger'))) return true;
    if (vertical.id === 'school-transport' && (combined.includes('school') || combined.includes('rfid') || combined.includes('student'))) return true;
    return false;
  }).slice(0, 3);

  // Fallback blogs if relatedBlogs is less than 3
  if (relatedBlogs.length < 3) {
    const fillers = allBlogs.filter((b) => !relatedBlogs.includes(b)).slice(0, 3 - relatedBlogs.length);
    relatedBlogs.push(...fillers);
  }

  // Generate FAQ Schema JSON-LD
  const faqSchema = vertical.faqs && vertical.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vertical.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // Breadcrumb Schema JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.wiziot.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Solutions',
        item: 'https://www.wiziot.com/solutions',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: vertical.title,
        item: `https://www.wiziot.com/solutions/${vertical.id}`,
      },
    ],
  };

  // Product / Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: vertical.title,
    description: vertical.seoDescription || vertical.description,
    brand: {
      '@type': 'Brand',
      name: 'WizIOT',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '99',
      highPrice: '499',
      offerCount: '10',
    },
    category: vertical.category,
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Structured Data Schemas */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <div style={{ position: 'relative', width: '100%', minHeight: '460px', background: '#0F172A', overflow: 'hidden' }}>
        <Image
          src={vertical.heroImage}
          alt={vertical.title}
          fill
          priority
          style={{ objectFit: 'cover', opacity: 0.35 }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.4) 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '60px 5%'
        }}>
          <div style={{ maxWidth: '980px', margin: '0 auto', width: '100%' }}>
            {/* Breadcrumb nav */}
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '20px' }}>
              <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={12} />
              <Link href="/solutions" style={{ color: '#94A3B8', textDecoration: 'none' }}>Solutions</Link>
              <ChevronRight size={12} />
              <span style={{ color: '#38BDF8', fontWeight: '600' }}>{vertical.title}</span>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span style={{ background: 'var(--primary-blue)', color: '#FFFFFF', padding: '4px 14px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: '700' }}>
                {vertical.category}
              </span>
              <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '4px 12px', borderRadius: '99px', fontSize: '0.78rem', fontWeight: '600' }}>
                {vertical.badge}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#FFFFFF', fontWeight: '800', marginBottom: '16px', lineHeight: '1.2' }}>
              {vertical.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#CBD5E1', lineHeight: '1.6', maxWidth: '780px', marginBottom: '28px' }}>
              {vertical.seoDescription || vertical.description}
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: '700' }}>
                Request Architecture Consultation
              </Link>
              <a href="#technical-specs" className="btn btn-secondary" style={{ padding: '14px 24px', fontSize: '1rem', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)' }}>
                View Technical Specs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ padding: '80px 5%' }}>
        {/* Solution Architecture & Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', marginBottom: '88px', alignItems: 'center' }}>
          <div>
            <div className="badge-pill" style={{ marginBottom: '12px' }}>
              <Cpu size={14} style={{ marginRight: '6px' }} /> Enterprise Architecture
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '20px', color: 'var(--text-main)', lineHeight: '1.3' }}>
              Commercial Telematics Architecture & Data Stream
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
              {vertical.details}
            </p>

            {/* Hardware Stack Box */}
            <div style={{ padding: '24px', background: '#F0F9FF', borderRadius: '16px', border: '1px solid #BAE6FD', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0369A1', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
                <Wrench size={16} /> Certified Hardware & Sensor Stack
              </div>
              <strong style={{ fontSize: '1.05rem', color: '#0C4A6E', display: 'block', lineHeight: '1.5' }}>
                {vertical.hardware}
              </strong>
            </div>

            {/* Compliance Badges */}
            {vertical.compliance && (
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  Verified Compliance Standards
                </span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {vertical.compliance.map((c, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', background: '#F1F5F9', color: '#334155', padding: '6px 12px', borderRadius: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #E2E8F0' }}>
                      <FileCheck2 size={13} style={{ color: 'var(--accent-emerald)' }} /> {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ position: 'relative', minHeight: '440px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 40px rgba(15,45,78,0.12)', border: '1px solid #E2E8F0' }}>
            <Image
              src={vertical.detailImage}
              alt={`${vertical.title} Detail Architecture`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Technical Specifications Matrix */}
        {vertical.specs && vertical.specs.length > 0 && (
          <div id="technical-specs" style={{ marginBottom: '88px', scrollMarginTop: '120px' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="badge-pill">Hardware & Protocol Benchmarks</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)' }}>
                Technical Specifications & Tolerances
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '12px auto 0 auto' }}>
                Rigorous automotive-grade specifications calibrated for high uptime and severe field environments.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
              {vertical.specs.map((spec, i) => (
                <div key={i} className="glass-card" style={{ padding: '24px', border: '1px solid #E2E8F0', borderRadius: '16px', background: '#FFFFFF' }}>
                  <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    {spec.label}
                  </span>
                  <strong style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: '700', lineHeight: '1.4' }}>
                    {spec.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core Capabilities */}
        <div style={{ marginBottom: '88px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-pill"><ShieldCheck size={14} /> Core Capabilities</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)' }}>
              What This Engineering Stack Delivers
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '18px' }}>
            {vertical.features.map((feat, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '2px'
                }}>
                  <Check size={16} style={{ color: '#FFFFFF' }} />
                </div>
                <span style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: '600', lineHeight: '1.5' }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Use Cases */}
        <div style={{ marginBottom: '88px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-pill">Proven ROI</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)' }}>
              Real-World Fleet Deployments
            </h2>
          </div>

          <div className="grid-3">
            {vertical.useCases.map((uc, i) => (
              <div key={i} className="glass-card" style={{ padding: '32px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '18px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0169A9, #0F2D4E)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '18px'
                }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>
                  {uc.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive FAQ Accordion (Boosts SERP Rich Snippets) */}
        {vertical.faqs && vertical.faqs.length > 0 && (
          <div style={{ marginBottom: '88px', maxWidth: '880px', margin: '0 auto 88px auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="badge-pill"><HelpCircle size={14} /> Expert Answers</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)' }}>
                Frequently Asked Technical Questions
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '10px' }}>
                Key answers for fleet managers, IoT architects, and operations directors.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {vertical.faqs.map((faq, i) => (
                <div key={i} style={{ background: '#F8FAFC', padding: '24px 28px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '10px' }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#475569', margin: 0, lineHeight: '1.7' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Technical Guides (Topic Cluster Interlinking) */}
        {relatedBlogs.length > 0 && (
          <div style={{ marginBottom: '88px', paddingTop: '64px', borderTop: '2px solid #F1F5F9' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="badge-pill"><BookOpen size={14} /> Knowledge Continuity</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)' }}>
                Related Engineering & Telematics Whitepapers
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '10px' }}>
                Deep-dive research on protocol calibration, anti-theft, and operational best practices.
              </p>
            </div>

            <div className="grid-3">
              {relatedBlogs.map((b) => (
                <BlogCard key={b.slug} blog={b} />
              ))}
            </div>
          </div>
        )}

        {/* Explore Other Solutions */}
        <div style={{ marginBottom: '88px', paddingTop: '60px', borderTop: '2px solid #F1F5F9' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text-main)', textAlign: 'center' }}>
            Explore Other Industry Verticals
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {otherSolutions.map((s) => (
              <Link
                key={s.id}
                href={`/solutions/${s.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <span>{s.title}</span>
                <ArrowRight size={16} style={{ color: 'var(--primary-blue)' }} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <CtaBannerWrapper />
      </div>
    </div>
  );
}
