import styled from 'styled-components';
import { Twitter, Github, Linkedin, Instagram } from '@styled-icons/feather';

import { Container, root } from './../../globalStyles';

export const FooterContainer = styled(Container)`
  padding: 5rem 2.5rem;
  display: flex;
  justify-content: space-between;
`;

export const FooterSocialMedia = styled.div``;

export const SocialMediaLink = styled.a`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const GithubIcon = styled(Github)`
  width: 3rem;
  color: ${root.oddColor};
  transition: all 0.3s;

  &:hover {
    color: #fafafa;
    transform: translateY(3px);
  }
`;

export const TwitterIcon = styled(Twitter)`
  width: 3rem;
  color: ${root.oddColor};
  transition: all 0.3s;

  &:hover {
    color: #00acee;
    transform: translateY(3px);
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 3rem;
  color: ${root.oddColor};
  transition: all 0.3s;

  &:hover {
    color: #0e76a8;
    transform: translateY(3px);
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: 3rem;
  color: ${root.oddColor};
  transition: all 0.3s;

  &:hover {
    color: #e1306c;
    transform: translateY(3px);
  }
`;

export const FooterRightsContainer = styled.div``;

export const FooterRights = styled.p`
  font-size: 1.4rem;
`;

export const FooterRightsLink = styled.a`
  color: ${root.opaqueOddColor};
  transition: all 0.3s;

  &:hover {
    color: ${root.oddColor};
  }
`;
