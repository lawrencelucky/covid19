import React, { useState, useEffect } from 'react';

import { Nav, NavbarContainer, NavLogo } from './Navbar.styles';

type NavProps = {
  isScroll?: boolean;
};

const Navbar = ({ isScroll }: NavProps) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <>
      <Nav isScroll={scroll}>
        <NavbarContainer isScroll={scroll}>
          <NavLogo>Covid.</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
