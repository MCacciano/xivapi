import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar is-black'>
      <div className='navbar-brand navbar-start'>
        <a className='navbar-item' href='#'>
          MagickSearch
        </a>
      </div>
      <div className='navbar-menu navbar-end'>
        <a href='#' className='navbar-item'>
          Home
        </a>
        <a href='#' className='navbar-item'>
          Search
        </a>
        <Link to='/lodestone' className='navbar-item'>
          Lodestone
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
