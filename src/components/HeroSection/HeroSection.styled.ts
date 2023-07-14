import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  padding: 127px 0;
  justify-content: center;
  align-items: center;
`;

const HeroOrientationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 6%;
  @media ${device.tablet} {
    padding: 0 0 0 7%;
    width: 80%;
  }
`;

const HeroMainTextStart = styled.span`
  font-family: 'Merriweather';
  font-size: 32px;
  font-weight: 900;
  line-height: 47px;
  letter-spacing: 0px;
  text-align: left;
  color: #3d79ef;
  @media ${device.tablet} {
    font-size: 64px;
    font-weight: 900;
    line-height: 94px;
  }
`;

const HeroMainText = styled.p`
  font-family: 'Merriweather';
  font-size: 32px;
  font-weight: 900;
  line-height: 47px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;

  @media ${device.tablet} {
    font-size: 64px;
    font-weight: 900;
    line-height: 94px;
  }
`;

const HeroSubText = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
  padding-top: 3%;
  @media ${device.tablet} {
    font-size: 22px;
    font-weight: 400;
    line-height: 40px;
  }
`;

const HeroDownloadButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  padding-top: 2rem;
  gap: 15px;
  @media ${device.tablet} {
    width: 40%;
  }
  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 50% !important;
  }
  @media ${device.mobileL} {
    width: 60%;
  }
`;

const AppStoreButton = styled.img`
  width: 52%;
  height: 100%;
  max-width: 167px;
`;

const PlayStoreButton = styled.img`
  width: 50%;
  height: 100%;
  max-width: 160px;
`;

const HeroRightContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: -35%;
  @media ${device.tablet} {
    width: 45%;
    margin-top: -10%;
    margin-bottom: -17%;
  }
`;

const HeroPhoneImage = styled.img`
  width: 100%;
  /* max-width: 730px;
  max-height: 625px; */
  /* @media ${device.tablet} {
    content: url('/images/tablet-hero-phone-image.svg');
  } */
  @media ${device.laptop} {
    content: url('/images/desktop-phone-hero-image.svg');
  }
`;

export {
  HeroContainer,
  HeroOrientationContainer,
  HeroLeftContainer,
  HeroMainTextStart,
  HeroMainText,
  HeroSubText,
  HeroDownloadButtons,
  AppStoreButton,
  PlayStoreButton,
  HeroRightContainer,
  HeroPhoneImage,
};
