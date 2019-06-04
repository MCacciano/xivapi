import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import SearchBar from '../search/SearchBar';

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  height: 8vh;
  border-bottom: 1px solid rgba(115, 45, 211);
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
      color: rgba(115, 45, 211);
      text-align: center;
    }
  }
`;

const NavLinks = styled.div`
  grid-column: 4 / -1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  & a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: rgba(115, 45, 211);
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
      <SearchBar />
      <NavLinks>
        <Link to='/freeCompany'>FreeCompany</Link>
        <Link to='/search'>Search</Link>
        <Link to='/lodestone'>Lodestone</Link>
      </NavLinks>
    </StyledNav>
  );
};

export default Navbar;
