'use client';

import { useState } from 'react';
import CtaBanner from './CtaBanner';
import ScheduleDemoModal from '@/components/ui/ScheduleDemoModal';

export default function CtaBannerWrapper() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <CtaBanner onOpenDemo={() => setDemoOpen(true)} />
      <ScheduleDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
