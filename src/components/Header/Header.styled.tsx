import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  height: 67px;
  align-items: center;
  padding: 0 6%;
`;

const HeaderLogo = styled.img``;

const MobileHeaderMenuIcon = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const HeaderLinksContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75%;
    justify-content: space-between;
  }
  @media ${device.laptop} {
    width: 55%;
  }
  @media ${device.laptopL} {
    width: 48%;
  }
`;

const HeaderLink = styled.p`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #262c55;
`;

const AppDownloadLink = styled.img``;

export {
  HeaderContainer,
  HeaderLogo,
  MobileHeaderMenuIcon,
  HeaderLinksContainer,
  HeaderLink,
  AppDownloadLink,
};
