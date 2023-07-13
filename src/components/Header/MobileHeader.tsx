import React from 'react';
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

const MobileHeader = () => {
  return (
    <HeaderContainer>
      <a href='/'>
        <HeaderLogo src='/images/crestbase-logo-footer.svg' alt='' />
      </a>
      <MobileHeaderMenuIcon>
        <HiOutlineMenuAlt4 size={40} color='#262C55' strokeWidth={1} />
      </MobileHeaderMenuIcon>
      <HeaderLinksContainer>
        <HeaderLink>How it works</HeaderLink>
        <HeaderLink>What we offer</HeaderLink>
        <HeaderLink>FAQs</HeaderLink>
        <HeaderLink>
          <AppDownloadLink src='/images/joint-download-button.svg' />
        </HeaderLink>
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};

export default MobileHeader;
