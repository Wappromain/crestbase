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
  height: 68px;
  align-items: center;
  padding: 0 6%;
  @media ${device.tabletL} {
    height: 86px;
  }
`;

const HeaderLogo = styled.img``;

const MobileHeaderMenuIcon = styled.div`
  @media ${device.tabletL} {
    display: none;
  }
`;

const HeaderLinksContainer = styled.div`
  display: none;
  @media ${device.tabletL} {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 77%;
    justify-content: space-between;
  }
  @media ${device.laptop} {
    width: 65%;
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
  cursor: pointer;
`;

const AppDownloadLink = styled.img``;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: -100vw;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  transition: left 0.3s ease-in-out;

  &.open {
    left: 0;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  width: 100%;
  padding: 0 6%;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 3% 6%;
  max-width: 420px;
`;

const SidebarLinks = styled.p`
  font-family: 'DM Sans';
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #262c55;
  padding-top: 12%;
`;

const SidebarDownloadLink = styled.div`
  padding-top: 14%;
`;

export {
  HeaderContainer,
  HeaderLogo,
  MobileHeaderMenuIcon,
  HeaderLinksContainer,
  HeaderLink,
  AppDownloadLink,
  SidebarMenu,
  SidebarHeader,
  SidebarContent,
  SidebarLinks,
  SidebarDownloadLink,
};
