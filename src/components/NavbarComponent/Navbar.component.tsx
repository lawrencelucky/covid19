import React, { useState, useEffect } from 'react';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoLink,
  NavMenu,
  NavMenuLink,
} from './Navbar.styles';

const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <>
      <Nav isScrolled={scroll}>
        <NavbarContainer isScrolled={scroll}>
          <NavLogo>
            <NavLogoLink to='/'>Covid.</NavLogoLink>
          </NavLogo>

          <NavMenu>
            <NavMenuLink to='/statistics'>Check the statistics</NavMenuLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
