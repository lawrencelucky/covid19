import React from 'react';

import {
  FooterContainer,
  FooterSocialMedia,
  SocialMediaLink,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FooterRightsContainer,
  FooterRights,
  FooterRightsLink,
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocialMedia>
        <SocialMediaLink
          href='https://github.com/lawrencelucky'
          target='_blank'
          rel='noreferrer'
        >
          <GithubIcon />
        </SocialMediaLink>
        <SocialMediaLink
          href='https://www.linkedin.com/in/lawrence-lucky/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedinIcon />
        </SocialMediaLink>
        <SocialMediaLink
          href='https://twitter.com/_lawrencelucky'
          target='_blank'
          rel='noreferrer'
        >
          <TwitterIcon />
        </SocialMediaLink>
        <SocialMediaLink
          href='https://www.instagram.com/_lawrencelucky/'
          target='_blank'
          rel='noreferrer'
        >
          <InstagramIcon />
        </SocialMediaLink>
      </FooterSocialMedia>
      <FooterRightsContainer>
        <FooterRights>
          Powered by{' '}
          <FooterRightsLink
            href='https://disease.sh/'
            target='_blank'
            rel='noreferrer'
          >
            disease.sh
          </FooterRightsLink>{' '}
          &copy; {new Date().getFullYear()} Lawrence Lucky
        </FooterRights>
      </FooterRightsContainer>
    </FooterContainer>
  );
};

export default Footer;
