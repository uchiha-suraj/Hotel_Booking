import React from 'react';
import {NavSection, NavContainer, Logo, NavItems, NavButton} from './Navbar.styled';

const Navbar = () => {
  return (
    <NavSection>
      <NavContainer>
        <Logo>fabHOTELS</Logo>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavItems>
      </NavContainer>
    </NavSection>
  )
}

export default Navbar