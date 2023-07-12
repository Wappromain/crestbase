import React from 'react';
import GridCard from './GridCards';
import { useMediaQuery } from 'react-responsive';
import {
  WhatWeOfferContainer,
  WhatWeOfferGridContainer,
  SectionTagLine,
  SectionDescriptorLine,
} from './WhatWeOffer.styled';

const WhatWeOffer = () => {
  const isNotMobile = useMediaQuery({ minWidth: '768px' });
  return (
    <WhatWeOfferContainer>
      <SectionTagLine>What We Offer</SectionTagLine>
      <SectionDescriptorLine>
        Our offerings are uniquely selected to meet your real estate needs
      </SectionDescriptorLine>
      <WhatWeOfferGridContainer>
        <GridCard
          background='#3D79EF'
          iconSrc={
            isNotMobile ? '/images/desktop-pay-rent-image.svg' : '/images/pay-rent-image.svg'
          }
          header='Rent apartments at an affordable price'
          message='Affordable and well vetted apartment that suits your needs is available in different ranges from self contain to mini flat to two bedroom flat to three bedroom flat etc.'
        />
        <GridCard
          background='#35A162'
          iconSrc={
            isNotMobile ? '/images/desktop-buy-land-image.svg' : '/images/buy-land-image.svg'
          }
          header='Buy lands with vetted document'
          message='Purchase lands with verified document in your preferred area with no hassle.. Be sure of a great experience while using our app.'
        />
        <GridCard
          background='#F1A5C2'
          iconSrc={
            isNotMobile
              ? '/images/desktop-buy-property-image.svg'
              : '/images/buy-property-image.svg'
          }
          header='Buy properties with vetted document'
          message='Purchase properties with verified document in your preferred area with no hassle.. Be sure of a great experience while using our app.'
        />
        <GridCard
          background='#3D79EF'
          iconSrc={
            isNotMobile ? '/images/desktop-book-event-image.svg' : '/images/book-event-image.svg'
          }
          header='Book event hall ahead of time with instalment payment'
          message='Plan your next event ahead, choose the best event hall close to you and even pay on instalment on our mobile app.'
        />
      </WhatWeOfferGridContainer>
    </WhatWeOfferContainer>
  );
};

export default WhatWeOffer;
