import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { VERTICALS_DATA } from '@/data/verticals';
import { ArrowLeft, Check, ShieldCheck, Wrench, Award, ChevronRight, ArrowRight } from 'lucide-react';
import CtaBannerWrapper from '@/components/sections/CtaBannerWrapper';

export async function generateStaticParams() {
  return VERTICALS_DATA.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const vertical = VERTICALS_DATA.find((v) => v.id === resolvedParams?.id);
  if (!vertical) return { title: 'Solution Not Found | WizIOT' };

  return {
    title: `${vertical.title} | WizIOT Telematics Solutions`,
    description: vertical.details,
    alternates: { canonical: `https://www.wiziot.com/solutions/${vertical.id}` },
    openGraph: {
      title: `${vertical.title} | WizIOT`,
      description: vertical.description,
      url: `https://www.wiziot.com/solutions/${vertical.id}`,
      type: 'website',
      images: [vertical.heroImage],
    },
  };
}

export default async function SolutionDetailPage({ params }) {
  const resolvedParams = await params;
  const vertical = VERTICALS_DATA.find((v) => v.id === resolvedParams?.id);
  if (!vertical) notFound();

  const otherSolutions = VERTICALS_DATA.filter((v) => v.id !== vertical.id);

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', width: '100%', height: '420px', background: '#0F172A', overflow: 'hidden' }}>
        <Image 
           src={vertical.heroImage} 
          alt={vertical.title}
          
        fill style={{ objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.3) 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '48px 5%'
        }}>
          <div style={{ maxWidth: '900px' }}>
            <Link href="/solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '0.85rem', marginBottom: '16px', textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Back to All Solutions
            </Link>
            <span style={{ display: 'inline-block', background: 'var(--primary-blue)', color: '#FFFFFF', padding: '4px 14px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '12px', marginLeft: '16px' }}>
              {vertical.category}
            </span>
            <h1 style={{ fontSize: '2.8rem', color: '#FFFFFF', fontWeight: '800', marginBottom: '12px', lineHeight: '1.2' }}>
              {vertical.title}
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: '1.6', maxWidth: '700px' }}>
              {vertical.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ padding: '60px 5%' }}>
        {/* Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '20px', color: 'var(--text-main)' }}>
              Solution Architecture & Overview
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '28px' }}>
              {vertical.details}
            </p>

            {/* Hardware Stack */}
            <div style={{ padding: '20px 24px', background: '#F0F9FF', borderRadius: '14px', border: '1px solid #BAE6FD' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0369A1', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                <Wrench size={16} /> Recommended Hardware Stack
              </div>
              <strong style={{ fontSize: '1rem', color: '#0C4A6E' }}>{vertical.hardware}</strong>
            </div>
          </div>

          <div style={{ position: 'relative', minHeight: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 36px rgba(15,45,78,0.12)', border: '1px solid #E2E8F0' }}>
            <Image   src={vertical.detailImage}  alt={`${vertical.title} Detail`}  fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* Engineering Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-pill"><ShieldCheck size={14} /> Core Engineering Capabilities</div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>What This Solution Delivers</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {vertical.features.map((feat, i) => (
              <div key={i} className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check size={16} style={{ color: '#FFFFFF' }} />
                </div>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '500', lineHeight: '1.5' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>



        {/* Use Cases */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-pill">Industry Applications</div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>Real-World Use Cases</h2>
          </div>

          <div className="grid-3">
            {vertical.useCases.map((uc, i) => (
              <div key={i} className="glass-card" style={{ padding: '32px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0169A9, #0F2D4E)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#FFFFFF', fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px'
                }}>
                  {i + 1}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '10px', color: 'var(--text-main)' }}>{uc.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center', padding: '48px', borderRadius: '24px',
          background: '#F8FAFC', border: '1px solid #E2E8F0', marginBottom: '80px'
        }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px' }}>
            Ready to Deploy {vertical.title}?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '28px', maxWidth: '550px', margin: '0 auto 28px' }}>
            Speak with our solution architects to design a custom deployment plan for your fleet.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Technical Demo <ChevronRight size={16} />
            </Link>
            <Link href="/pricing" className="btn btn-secondary">
              View Pricing Plans
            </Link>
          </div>
        </div>

        {/* Other Solutions */}
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', textAlign: 'center' }}>
            Explore Other Solutions
          </h3>
          <div className="grid-3">
            {otherSolutions.slice(0, 3).map((sol) => (
              <Link key={sol.id} href={`/solutions/${sol.id}`} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s ease' }}>
                  <div style={{ position: 'relative', height: '140px', background: '#0F172A', overflow: 'hidden' }}>
                    <Image   src={sol.image}  alt={sol.title}  fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary-blue)', fontWeight: '700', textTransform: 'uppercase' }}>{sol.category}</span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginTop: '4px' }}>{sol.title}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '10px' }}>
                      View Solution <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
