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
`;

const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const HeroMainTextStart = styled.span`
  font-family: 'Merriweather';
  font-size: 34px;
  font-weight: 900;
  line-height: 47px;
  letter-spacing: 0px;
  text-align: left;
  color: #3d79ef;
`;

const HeroMainText = styled.p`
  font-family: 'DM Sans';
  font-size: 34px;
  font-weight: 900;
  line-height: 47px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
`;

const HeroSubText = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
`;

const HeroDownloadButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding-top: 2rem;
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
`;

const HeroPhoneImage = styled.img`
  width: 100%;
  height: 100%;
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
