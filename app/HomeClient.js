'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import FeaturesTab from '@/components/sections/FeaturesTab';
import VerticalsGrid from '@/components/sections/VerticalsGrid';
import SensorCompliance from '@/components/sections/SensorCompliance';
import RoiCalculator from '@/components/sections/RoiCalculator';
import GlobalPresence from '@/components/sections/GlobalPresence';
import CtaBanner from '@/components/sections/CtaBanner';
import ScheduleDemoModal from '@/components/ui/ScheduleDemoModal';

export default function HomePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <Hero onOpenDemo={() => setDemoModalOpen(true)} />
      <FeaturesTab onOpenDemo={() => setDemoModalOpen(true)} />
      <VerticalsGrid />
      <SensorCompliance onOpenDemo={() => setDemoModalOpen(true)} />
      <RoiCalculator onOpenDemo={() => setDemoModalOpen(true)} />
      <GlobalPresence />
      <CtaBanner onOpenDemo={() => setDemoModalOpen(true)} />
      
      <ScheduleDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </>
  );
}
