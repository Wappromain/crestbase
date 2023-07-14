'use client';

import HeroSection from '@/components/HeroSection';
import MobileHeader from '@/components/Header/MobileHeader';
import HowItWorks from '@/components/HowItWorks';
import WhatWeOffer from '@/components/WhatWeOffer';
import Assets from '@/components/Assets';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <>
      <MobileHeader />
      <HeroSection />
      <HowItWorks />
      <WhatWeOffer />
      <Assets />
      <FAQs />
      <Footer />
      <ContactUs />
    </>
  );
}
