import React, { useState, useEffect } from 'react';

import { Nav, NavbarContainer, NavLogo } from './Navbar.styles';

const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <>
      <Nav isScrolled={scroll}>
        <NavbarContainer isScrolled={scroll}>
          <NavLogo>Covid.</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
