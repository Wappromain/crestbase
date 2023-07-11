import React from 'react';
import { MobileHeaderContainer, MobileHeaderLogo, MobileHeaderMenuIcon } from './Header.styled';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const MobileHeader = () => {
  return (
    <MobileHeaderContainer>
      <MobileHeaderLogo>
        <img src='/icons/crestbase-logo.svg' alt='' width={129} height={29.3} />
      </MobileHeaderLogo>
      <MobileHeaderMenuIcon>
        <HiOutlineMenuAlt4 width={40} height={40} />
      </MobileHeaderMenuIcon>
    </MobileHeaderContainer>
  );
};

export default MobileHeader;
