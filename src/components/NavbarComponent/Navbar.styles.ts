import styled from 'styled-components';

import { Container, root } from './../../globalStyles';

interface INavProps {
  isScrolled: boolean;
}

export const Nav = styled.nav<INavProps>`
  position: fixed;
  left: 0;
  z-index: 999;
  width: 100%;
  transition: all 0.3s linear;
  border-bottom: ${({ isScrolled }) =>
    isScrolled ? `1px dashed ${root.borderColor}` : ''};
  background: ${root.primaryBgColor};
`;

export const NavbarContainer = styled(Container)<INavProps>`
  padding: ${({ isScrolled }) => (isScrolled ? '1.5rem' : '2.5rem')};
  transition: all 0.3s linear;
`;

export const NavLogo = styled.h1`
  color: ${root.oddColor};
`;
