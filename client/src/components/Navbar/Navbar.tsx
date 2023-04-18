import React from 'react';
import {NavSection, NavContainer, Logo, NavItems, NavButton} from './Navbar.styled';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavSection>
      <NavContainer>
        <Logo onClick={() => navigate("/")}>fabHOTELS</Logo>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavItems>
      </NavContainer>
    </NavSection>
  )
}

export default Navbar