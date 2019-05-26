import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 8vh;
  background: rgb(115, 45, 211);
`;

const Brand = styled.div`
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;

  & h3 {
    display: inline-block;
    & a {
      display: block;
      width: 100%;
      text-decoration: none;
      color: #ffffff;
      text-align: center;
    }
  }
`;

const NavLinks = styled.div`
  grid-column: 4 / -1;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;

  & a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: #ffffff;
    text-align: center;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Brand>
        <h3>
          <Link to='/'>MagickSearch</Link>
        </h3>
      </Brand>
      <NavLinks>
        <Link to='/freeCompany'>FC</Link>
        <Link to='/search'>Search</Link>
        <Link to='/lodestone'>Lodestone</Link>
      </NavLinks>
    </StyledNav>
  );
};

export default Navbar;
