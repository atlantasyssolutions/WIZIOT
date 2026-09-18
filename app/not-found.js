'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/contact');
  }, [router]);

  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/contact" />
      </head>
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '40px',
          textAlign: 'center',
          background: '#0F172A',
          color: '#FFFFFF'
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: '800' }}>
          Page Moved
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '24px', color: '#94A3B8' }}>
          Redirecting you to our contact &amp; inquiry page...
        </p>
        <a
          href="/contact"
          className="btn btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Click here if not redirected automatically
        </a>
      </div>
    </>
  );
}
