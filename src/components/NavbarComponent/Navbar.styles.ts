import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container, root } from '../../globalStyles';

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
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.div``;

export const NavLogoLink = styled(Link)`
  color: ${root.oddColor};
  text-decoration: none;
  font-weight: 600;
`;

export const NavMenu = styled.div``;

export const NavMenuLink = styled(Link)`
  text-decoration: none;
  color: ${root.oddColor};
  font-weight: 400;

  @media screen and (max-width: 375px) {
    font-size: 1.4rem;
  }
`;
