import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  padding: 120px 0;
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
  padding: 0 7%;
  @media ${device.tablet} {
    padding: 0 0 0 7%;
    width: 70%;
  }
`;

const HeroMainTextStart = styled.span`
  font-family: 'Merriweather';
  font-size: 34px;
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
  font-size: 34px;
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
  width: 80%;
  padding-top: 2rem;
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
  width: 47%;
  height: 100%;
`;

const PlayStoreButton = styled.img`
  width: 45%;
  height: 100%;
`;

const HeroRightContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: -30%;
  @media ${device.tablet} {
    width: 50%;
    margin-top: -10%;
    margin-bottom: -17%;
  }
`;

const HeroPhoneImage = styled.img`
  width: 100%;
  height: 100%;
  @media ${device.tablet} {
    content: url('/images/desktop-hero-phone-image.svg');
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
