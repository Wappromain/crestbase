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
  font-size: calc(1rem + 3.5vw);
  font-weight: 900;
  line-height: (47px + 1.2vw);
  letter-spacing: 0px;
  text-align: left;
  color: #3d79ef;
  @media ${device.laptop} {
    font-size: calc(1.3rem + 3.5vw);
    font-weight: 900;
    line-height: calc(40px + 3.5vw);
  }
`;

const HeroMainText = styled.p`
  font-family: 'Merriweather';
  font-size: calc(1rem + 3.5vw);
  font-weight: 900;
  line-height: calc(35px + 3vw);
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;

  @media ${device.laptop} {
    font-size: calc(1.3rem + 3.5vw);
    font-weight: 900;
    line-height: calc(40px + 3.5vw);
  }
`;

const HeroSubText = styled.p`
  font-family: 'DM Sans';
  font-size: calc(10px + 1vw);
  font-weight: 400;
  line-height: calc(20px + 1vw);
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
  padding: 2rem 6% 0% 0%;
  gap: 15px;
  width: fit-content;
`;

const AppStoreButton = styled.img`
  width: 52%;
  height: 100%;
  max-width: 126px;
  @media ${device.mobileM} {
    max-width: 137px;
  }

  @media ${device.tablet} {
    max-width: 167px;
  }
`;

const PlayStoreButton = styled.img`
  width: 50%;
  height: 100%;
  max-width: 121px;
  @media ${device.mobileM} {
    max-width: 130px;
  }
  @media ${device.tablet} {
    max-width: 160px;
  }
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
