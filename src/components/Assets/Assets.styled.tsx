import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const AssetsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  padding-top: 18%;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const ColumnReverse = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const AssetsGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;
  margin-top: 64px;
  width: 87%;
  /* width: 328px; */

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    justify-items: center;
    margin-top: 100px;
    align-items: stretch;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
    justify-items: center;
    margin-top: 100px;
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
  margin-top: 19%;
  @media ${device.tablet} {
    margin-top: 0;
  }
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

export {
  AssetsContainer,
  ColumnReverse,
  AssetsGridContainer,
  SectionTagLine,
  SectionDescriptorLine,
};