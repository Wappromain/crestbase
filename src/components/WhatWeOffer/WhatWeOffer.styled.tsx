import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const WhatWeOfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  padding-top: 18%;
`;

const WhatWeOfferGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;
  width: 90%;
  margin-top: 3rem;
  /* width: 328px; */
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    justify-items: center;
    margin-bottom: 200px;
  }
`;

const SectionTagLine = styled.p`
  font-family: 'Merriweather';
  font-size: 28px;
  font-weight: 900;
  line-height: 47px;
  letter-spacing: 0px;
  text-align: center;
  color: #262c55;
`;

const SectionDescriptorLine = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  width: 85%;
  color: #4f4f4f;
  @media ${device.tablet} {
    text-align: center;
  }
`;

export { WhatWeOfferContainer, WhatWeOfferGridContainer, SectionTagLine, SectionDescriptorLine };
