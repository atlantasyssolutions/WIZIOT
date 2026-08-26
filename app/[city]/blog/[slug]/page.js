import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getAllBlogs, generateArticleSchema, generateFaqSchema, generateBreadcrumbSchema } from '@/lib/blog';
import { Calendar, Clock, Globe, ArrowLeft, Tag, MapPin, ShieldCheck, Layers, ChevronRight, CheckCircle2, UserCheck, List, Share2, HelpCircle } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import LocalMarketContext from '@/components/blog/LocalMarketContext';

export async function generateStaticParams() {
  const allBlogs = getAllBlogs();
  return allBlogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams?.slug);
  if (!blog) return { title: 'Post Not Found | WizIOT Telematics' };
  const city = resolvedParams?.city || '';
  const cityFmt = city ? city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ') : '';

  const canonicalUrl = `https://www.wiziot.com/${city}/blog/${blog.slug}`;

  return {
    title: `${blog.title} in ${cityFmt} | WizIOT Telematics`,
    description: blog.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
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
      title: blog.title,
      description: blog.excerpt,
      url: canonicalUrl,
      siteName: 'WizIOT Telematics',
      type: 'article',
      publishedTime: blog.publishedAt,
      modifiedTime: blog.publishedAt,
      images: [
        {
          url: `/blog/${blog.slug}.webp`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      authors: [blog.author?.name || 'WizIOT Security Engineering'],
      tags: blog.seoKeywords || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [`/blog/${blog.slug}.webp`],
    },
  };
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

function renderFormattedText(text) {
  // Utility to replace domain links like https://www.wiziot.com/contact with relative SPA Links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    let url = match[2];

    // Clean up domain URL to relative path if internal
    if (url.startsWith('https://www.wiziot.com') || url.startsWith('https://wiziot.com')) {
      url = url.replace(/https:\/\/(www\.)?wiziot\.com/, '');
      if (!url.startsWith('/')) url = '/' + url;
    }

    if (url.startsWith('/')) {
      parts.push(
        <Link key={match.index} href={url} style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'underline' }}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'underline' }}>
          {label}
        </a>
      );
    }
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams?.slug);
  if (!blog) notFound();

  const allBlogs = getAllBlogs();
  const currentIndex = allBlogs.findIndex((b) => b.slug.toLowerCase() === blog.slug.toLowerCase());
  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;
  
  const relatedBlogs = allBlogs
    .filter((b) => b.slug !== blog.slug)
    .filter((b) => b.category === blog.category || b.geoRegion === blog.geoRegion)
    .slice(0, 4);

  if (relatedBlogs.length < 4) {
    const filler = allBlogs.filter((b) => b.slug !== blog.slug && !relatedBlogs.includes(b)).slice(0, 4 - relatedBlogs.length);
    relatedBlogs.push(...filler);
  }

  const articleSchema = generateArticleSchema(blog);
  const faqSchema = generateFaqSchema(blog);
  const breadcrumbSchema = generateBreadcrumbSchema(blog);

  // Extract headings for Table of Contents (TOC)
  const headings = [];
  const rawParagraphs = blog.content.split('\n\n');
  rawParagraphs.forEach((p) => {
    const trimmed = p.trim();
    if (trimmed.startsWith('## ') && !trimmed.includes('Frequently Asked Questions')) {
      const text = trimmed.replace('## ', '').trim();
      headings.push({ text, slug: slugify(text) });
    }
  });

  return (
    <article className="section-padding" style={{ paddingTop: '140px' }}>
      {/* Schema.org JSON-LD Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Breadcrumbs & Navigation */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <Link href="/blog" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ArrowLeft size={14} /> Knowledge Hub
          </Link>
          <ChevronRight size={14} />
          <span>{blog.category}</span>
        </nav>

        {/* Category & Region Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <span className="badge-pill" style={{ margin: 0, background: '#E0F2FE', color: '#0369A1' }}>
            <Layers size={13} style={{ marginRight: '6px' }} /> {blog.category}
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600', background: '#F1F5F9', padding: '4px 12px', borderRadius: '99px' }}>
            <Globe size={15} style={{ color: 'var(--accent-emerald)' }} /> Region: {blog.geoRegion || 'Global'}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#065F46', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600', background: '#ECFDF5', padding: '4px 12px', borderRadius: '99px', border: '1px solid #A7F3D0' }}>
            <ShieldCheck size={14} /> Fact-Checked & Peer-Reviewed
          </span>
        </div>

        {/* Article Headline */}
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.25', marginBottom: '24px', color: 'var(--text-main)', fontWeight: '800' }}>
          {blog.title}
        </h1>

        {/* E-E-A-T Author Card */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '32px', flexWrap: 'wrap' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F2D4E 0%, #0169A9 100%)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem', flexShrink: 0 }}>
            {blog.author?.name ? blog.author.name.charAt(0) : 'W'}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <strong style={{ color: 'var(--text-main)', fontSize: '1rem' }}>{blog.author?.name || 'WizIOT Security Engineering'}</strong>
              <span style={{ color: 'var(--accent-emerald)', fontSize: '0.75rem', fontWeight: '700', background: '#D1FAE5', padding: '2px 8px', borderRadius: '99px' }}>VERIFIED EXPERT</span>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{blog.author?.role || 'Senior Telematics Architect'} • WizIOT Systems Engineering Lab</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={14} /> {blog.publishedAt}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} /> {blog.readTime || '12 min read'}
            </span>
          </div>
        </div>

        {/* Featured Post Banner Image */}
        <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '16px', overflow: 'hidden', marginBottom: '36px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(15,23,42,0.08)', background: '#0F172A' }}>
          <Image 
             src={`/blog/${blog.slug}.webp`}
            alt={blog.title}
            
          fill style={{ objectFit: 'cover' }} />
        </div>

        {/* Executive Summary Lead Box */}
        <div style={{ padding: '24px 28px', background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)', borderRadius: '12px', borderLeft: '5px solid var(--primary-blue)', marginBottom: '36px', fontSize: '1.1rem', lineHeight: '1.7', color: '#0369A1', fontWeight: '500' }}>
          <strong style={{ display: 'block', marginBottom: '6px', color: '#0C4A6E', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Executive Summary & Operational Context</strong>
          {blog.excerpt}
        </div>

        {resolvedParams?.city && <LocalMarketContext citySlug={resolvedParams.city} />}

        {/* Table of Contents (TOC) */}
        {headings.length > 0 && (
          <div style={{ padding: '24px 28px', background: '#FFFFFF', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', marginBottom: '44px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
              <List size={18} style={{ color: 'var(--primary-blue)' }} /> Table of Contents
            </h3>
            <ol style={{ paddingLeft: '20px', margin: 0, fontSize: '0.95rem', lineHeight: '1.8' }}>
              {headings.map((h, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>
                  <a href={`#${h.slug}`} style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontWeight: '600' }}>
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Article Body Content */}
        <div style={{ fontSize: '1.08rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
          {rawParagraphs.map((paragraph, index) => {
            const trimmed = paragraph.trim();

            if (trimmed.startsWith('# ')) return null;

            if (trimmed.startsWith('## ')) {
              const headingText = trimmed.replace('## ', '');
              const headingSlug = slugify(headingText);

              if (headingText.includes('Frequently Asked Questions')) {
                return (
                  <h2 key={index} id="faqs" style={{ fontSize: '1.85rem', marginTop: '50px', marginBottom: '24px', color: 'var(--text-main)', fontWeight: '800', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpCircle size={24} style={{ color: 'var(--primary-blue)' }} /> Frequently Asked Questions (FAQs)
                  </h2>
                );
              }

              return (
                <h2 key={index} id={headingSlug} style={{ fontSize: '1.75rem', marginTop: '48px', marginBottom: '18px', color: 'var(--text-main)', fontWeight: '800', borderBottom: '2px solid #F1F5F9', paddingBottom: '8px' }}>
                  {headingText}
                </h2>
              );
            }

            if (trimmed.startsWith('### ')) {
              const subText = trimmed.replace('### ', '');
              const subSlug = slugify(subText);

              // Styled FAQ Question Box
              if (subText.startsWith('Q') && subText.includes(':')) {
                return (
                  <h3 key={index} id={subSlug} style={{ fontSize: '1.25rem', marginTop: '28px', marginBottom: '10px', color: '#0F2D4E', fontWeight: '700', background: '#F8FAFC', padding: '12px 18px', borderRadius: '8px', borderLeft: '4px solid var(--primary-blue)' }}>
                    {subText}
                  </h3>
                );
              }

              return (
                <h3 key={index} id={subSlug} style={{ fontSize: '1.35rem', marginTop: '32px', marginBottom: '14px', color: 'var(--primary-blue)', fontWeight: '700' }}>
                  {subText}
                </h3>
              );
            }

            if (trimmed.startsWith('```')) {
              const codeBlock = trimmed.replace(/^```[\w]*\n/, '').replace(/\n```$/, '');
              return (
                <pre key={index} style={{ background: '#0F172A', color: '#38BDF8', padding: '24px', borderRadius: '12px', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', margin: '28px 0', border: '1px solid #1E293B' }}>
                  <code>{codeBlock}</code>
                </pre>
              );
            }

            if (trimmed.startsWith('> ')) {
              return (
                <blockquote key={index} style={{ borderLeft: '4px solid var(--accent-emerald)', background: '#F0FDF4', padding: '20px 24px', borderRadius: '0 12px 12px 0', margin: '28px 0', fontStyle: 'normal', color: '#065F46', fontSize: '1.05rem', fontWeight: '500' }}>
                  {renderFormattedText(trimmed.replace('> ', ''))}
                </blockquote>
              );
            }

            if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
              const items = trimmed.split('\n').map(item => item.replace(/^[*-]\s+/, ''));
              return (
                <ul key={index} style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                  {items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{renderFormattedText(item)}</li>
                  ))}
                </ul>
              );
            }

            return <p key={index} style={{ marginBottom: '22px' }}>{renderFormattedText(trimmed)}</p>;
          })}
        </div>

        {/* E-E-A-T Verification Sign-Off Footer */}
        <div style={{ marginTop: '50px', padding: '24px', background: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <CheckCircle2 size={28} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-main)', display: 'block', fontSize: '0.95rem' }}>Verified Technical Telematics Specification</strong>
            This operational guide is reviewed by the WizIOT Systems Engineering & Compliance Directorate to ensure adherence to ISO 17025, WHO GDP, FDA 21 CFR Part 11, and EU GSR 2024 standards.
          </div>
        </div>

        {/* Contextual Internal Links Matrix */}
        <div style={{ marginTop: '40px', padding: '28px', background: '#F1F5F9', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-main)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={18} style={{ color: 'var(--primary-blue)' }} /> Target Telematics Hubs & Enterprise Solutions
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', fontSize: '0.9rem' }}>
            <Link href="/solutions" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Telematics Solutions
            </Link>
            <Link href="/platform" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → WizIOT SaaS Platform
            </Link>
            <Link href="/pricing" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Hardware & Sensor Pricing
            </Link>
            <Link href="/mombasa" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Hardware Installers in Mombasa
            </Link>
            <Link href="/nairobi" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Fleet Management Solutions in Nairobi
            </Link>
            <Link href="/lagos" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Telematics Sensors in Lagos
            </Link>
            <Link href="/dubai" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → Logistics Tracking in Dubai
            </Link>
            <Link href="/locations" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>
              → All 20 City Telematics Hubs
            </Link>
          </div>
        </div>

        {/* CTA Conversion Box */}
        <div className="glass-card" style={{ padding: '36px', marginTop: '48px', marginBottom: '48px', background: 'linear-gradient(135deg, #0F2D4E 0%, #0169A9 100%)', color: '#FFFFFF', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '12px', fontWeight: '800' }}>Protect Your Commercial Fleet Today</h3>
          <p style={{ color: '#E2E8F0', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Request a live hardware demonstration, ±0.2% capacitive probe calibration certificates, and real-time anti-theft gateway trials.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn" style={{ background: '#FFFFFF', color: '#0F2D4E', fontWeight: '800', padding: '12px 24px' }}>
              Schedule Technical Demo
            </Link>
            <Link href="/pricing" className="btn" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', padding: '12px 24px' }}>
              View Hardware Pricing
            </Link>
          </div>
        </div>

        {/* Prev / Next Article Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #E2E8F0', flexWrap: 'wrap' }}>
          {prevBlog ? (
            <Link href={`/blog/${prevBlog.slug}`} style={{ flex: 1, minWidth: '240px', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', textDecoration: 'none', color: 'inherit', background: '#FFFFFF' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', fontWeight: '600', marginBottom: '4px' }}>← PREVIOUS ARTICLE</span>
              <strong style={{ fontSize: '0.925rem', color: 'var(--primary-blue)' }}>{prevBlog.title}</strong>
            </Link>
          ) : <div />}

          {nextBlog ? (
            <Link href={`/blog/${nextBlog.slug}`} style={{ flex: 1, minWidth: '240px', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', textDecoration: 'none', color: 'inherit', textAlign: 'right', background: '#FFFFFF' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', fontWeight: '600', marginBottom: '4px' }}>NEXT ARTICLE →</span>
              <strong style={{ fontSize: '0.925rem', color: 'var(--primary-blue)' }}>{nextBlog.title}</strong>
            </Link>
          ) : <div />}
        </div>

        {/* SEO Keyword Tags */}
        {blog.seoKeywords && blog.seoKeywords.length > 0 && (
          <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <Tag size={16} style={{ color: 'var(--primary-blue)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>SEO Focus Keywords:</span>
            {blog.seoKeywords.map((kw, i) => (
              <span key={i} style={{ fontSize: '0.8rem', padding: '4px 12px', background: '#F1F5F9', borderRadius: '99px', color: 'var(--text-main)', fontWeight: '500' }}>
                {kw}
              </span>
            ))}
          </div>
        )}

        {/* Related Articles Grid */}
        <div style={{ marginTop: '60px' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', fontWeight: '800' }}>Related Telematics Insights</h3>
          <div className="grid-2">
            {relatedBlogs.map((b) => (
              <BlogCard key={b.id || b.slug} blog={b} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
