import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';

import SearchBar from './SearchBar';
import Results from './Results';

const Search = () => {
  return (
    <Fragment>
      <SearchBar />
      <Results />
    </Fragment>
  );
};

export default Search;
