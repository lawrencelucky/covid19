import styled from 'styled-components';

import { Container, root } from './../../globalStyles';

type NavProps = {
  isScroll: boolean;
};

export const Nav = styled.nav<NavProps>`
  position: fixed;
  left: 0;
  width: 100%;
  background: ${({ isScroll }) => (isScroll ? `${root.darkBgColor}` : '')};
  transition: all 0.3s linear;
`;

export const NavbarContainer = styled(Container)<NavProps>`
  padding: ${({ isScroll }) => (isScroll ? '1.5rem' : '2rem')};
  transition: all 0.3s linear;
`;

export const NavLogo = styled.h1`
  color: ${root.oddColor};
`;
