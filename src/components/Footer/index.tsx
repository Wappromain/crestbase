import React from 'react';
import {
  CrestbaseInfoContainer,
  DownloadButtons,
  FooterContainer,
  FooterDownloadContainerText,
  FooterDownloadContainer,
  LinkChild,
  LinkHeader,
  LinksContainer,
  OrientationContainer,
  OtherLinksContainer,
  AppStoreButton,
  PlayStoreButton,
  FooterImage,
  FooterAddress,
  FooterEmail,
  FooterCopyrightContainer,
  CopyrightText,
} from './Footer.styled';

const index = () => {
  return (
    <FooterContainer>
      <OrientationContainer>
        <CrestbaseInfoContainer>
          <FooterImage src='/images/crestbase-logo-footer.svg' />
          <FooterAddress>4, olubusola street, off Akande Ishaga Lagos</FooterAddress>
          <FooterEmail>developer.mycrestbase@gmail.com</FooterEmail>
        </CrestbaseInfoContainer>
        <OtherLinksContainer>
          <LinksContainer>
            <LinkHeader>COMPANY</LinkHeader>
            <LinkChild>Home</LinkChild>
            <LinkChild>About</LinkChild>
            <LinkChild>Team</LinkChild>
          </LinksContainer>
          <LinksContainer>
            <LinkHeader>LEGAL</LinkHeader>
            <LinkChild>Privacy Policy</LinkChild>
            <LinkChild>Terms & Condition</LinkChild>
          </LinksContainer>
          <LinksContainer>
            <LinkHeader>HELP</LinkHeader>
            <LinkChild>Contact</LinkChild>
            <LinkChild>FAQs</LinkChild>
          </LinksContainer>
        </OtherLinksContainer>
        <FooterDownloadContainer>
          <FooterDownloadContainerText>
            Endless real estate possibilities
          </FooterDownloadContainerText>
          <DownloadButtons>
            <PlayStoreButton src='/icons/play-store-clickable.svg' />
            <AppStoreButton src='/icons/app-store-clickable.svg' />
          </DownloadButtons>
        </FooterDownloadContainer>
      </OrientationContainer>
      <FooterCopyrightContainer>
        <CopyrightText>Copyright @Crestbase, 2023</CopyrightText>
      </FooterCopyrightContainer>
    </FooterContainer>
  );
};

export default index;
