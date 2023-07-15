import React, { FC } from 'react';
import {
  AppDownloadLink,
  HeaderLogo,
  MobileHeaderMenuIcon,
  SidebarContent,
  SidebarDownloadLink,
  SidebarHeader,
  SidebarLinks,
  SidebarMenu,
} from './Header.styled';
import { AiOutlineClose } from 'react-icons/ai';

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const SidebarNav: FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarMenu className={isSidebarOpen ? 'open' : ''}>
      <SidebarHeader>
        <a href='/'>
          <HeaderLogo src='/images/crestbase-logo-footer.svg' alt='' />
        </a>
        <MobileHeaderMenuIcon onClick={handleSidebarToggle}>
          <AiOutlineClose size={20} color='#262C55' strokeWidth={0.7} />
        </MobileHeaderMenuIcon>
      </SidebarHeader>
      <SidebarContent>
        <SidebarLinks>How it works</SidebarLinks>
        <SidebarLinks>What we offer</SidebarLinks>
        <SidebarLinks>Assets</SidebarLinks>
        <SidebarLinks>FAQs</SidebarLinks>
        <SidebarDownloadLink>
          <AppDownloadLink src='/images/joint-download-button.svg' />
        </SidebarDownloadLink>
      </SidebarContent>
    </SidebarMenu>
  );
};

export default SidebarNav;
