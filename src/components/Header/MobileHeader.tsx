import React, { useState } from 'react';
import {
  AppDownloadLink,
  HeaderContainer,
  HeaderLink,
  HeaderLinksContainer,
  HeaderLogo,
  MobileHeaderMenuIcon,
} from './Header.styled';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SidebarNav from './SidebarNav';

const MobileHeader = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeaderContainer>
      <a href='/'>
        <HeaderLogo src='/images/crestbase-logo-footer.svg' alt='' />
      </a>
      <MobileHeaderMenuIcon onClick={handleSidebarToggle}>
        <HiOutlineMenuAlt4 size={40} color='#262C55' strokeWidth={0.7} />
      </MobileHeaderMenuIcon>
      <SidebarNav isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <HeaderLinksContainer>
        <HeaderLink>How it works</HeaderLink>
        <HeaderLink>What we offer</HeaderLink>
        <HeaderLink>FAQs</HeaderLink>
        <div>
          <AppDownloadLink src='/images/joint-download-button.svg' />
        </div>
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};

export default MobileHeader;
