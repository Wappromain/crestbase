'use client';

import Image from 'next/image';
import styles from './page.module.css';
import HeroSection from '@/components/HeroSection';
import MobileHeader from '@/components/Header/MobileHeader';
import HowItWorks from '@/components/HowItWorks';
import WhatWeOffer from '@/components/WhatWeOffer';
import Assets from '@/components/Assets';

export default function Home() {
  return (
    <>
      <MobileHeader />
      <HeroSection />
      <HowItWorks />
      <WhatWeOffer />
      <Assets />
    </>
  );
}
