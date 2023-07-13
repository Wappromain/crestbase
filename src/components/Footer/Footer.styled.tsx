import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  background: #ffffff;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrientationContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const CrestbaseInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media ${device.laptop} {
    width: 30%;
  }
`;

const FooterImage = styled.img``;

const FooterAddress = styled.p`
  font-family: 'DM Sans';
  font-size: 18px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
  width: 243px;
  padding-top: 46px;
`;

const FooterEmail = styled.p`
  font-family: 'Lato';
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #262c55;
  border-bottom: 2px solid #262c55;
  padding-top: 24px;
`;

const OtherLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  justify-items: center;
  margin-top: 50px;
  align-items: start;
  justify-items: start;
  row-gap: 20px;
  @media ${device.laptop} {
    width: 50%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const LinkHeader = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #262c55;
  padding-bottom: 27px;
`;

const LinkChild = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #262c55;
  padding-bottom: 24px;
`;

const FooterDownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 23px 20px;
  border-radius: 20px;
  background-color: #3d79ef;
  width: 100%;
  margin-top: 20px;
  @media ${device.laptop} {
    width: 20%;
  }
`;

const FooterDownloadContainerText = styled.p`
  font-family: 'DM Sans';
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 2rem;

  @media ${device.mobileL} {
    width: 80%;
  }
  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 60% !important;
  }
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.tabletL} {
    width: 45%;
  }
  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

const AppStoreButton = styled.img`
  width: 47%;
  height: 100%;
  @media ${device.laptop} {
    width: 92%;
  }
`;

const PlayStoreButton = styled.img`
  width: 45%;
  height: 100%;
  @media ${device.laptop} {
    width: 90%;
  }
`;

const FooterCopyrightContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 39px 0;
  border-top: 1px solid #011b3366;
  margin-top: 50px;
`;

const CopyrightText = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: #262c55;
`;

export {
  FooterContainer,
  OrientationContainer,
  CrestbaseInfoContainer,
  FooterImage,
  FooterAddress,
  FooterEmail,
  OtherLinksContainer,
  LinksContainer,
  LinkHeader,
  LinkChild,
  FooterDownloadContainer,
  FooterDownloadContainerText,
  DownloadButtons,
  AppStoreButton,
  PlayStoreButton,
  FooterCopyrightContainer,
  CopyrightText,
};
