'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function CanonicalTag() {
  const pathname = usePathname();

  useEffect(() => {
    const baseUrl = 'https://www.wiziot.com';
    const canonicalUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`;
    
    // Check if canonical already exists
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    
    // Only update if needed
    if (link.getAttribute('href') !== canonicalUrl) {
      link.setAttribute('href', canonicalUrl);
    }
  }, [pathname]);

  return null;
}
