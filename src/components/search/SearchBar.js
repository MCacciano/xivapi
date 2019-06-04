import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

// actions
import { freeCompanySearch, fetchFreeCompany, searchAll } from '../../actions';

import styled from 'styled-components';

import SearchButton from './SearchButton';

const StyledSearchBar = styled.form`
  grid-column: 2 / 4;

  display: flex;
  width: 80%;
`;

const Input = styled.input`
  height: 2.5em;
  flex: 1 1 auto;
`;

const SearchBar = props => {
  const { fetchFreeCompany, freeCompanySearch, freeCompany, searchAll } = props;
  const [searchState, setSearchState] = useState({
    search: '',
    redirect: false
  });

  const onSearchInputChange = e => {
    setSearchState({
      [e.target.name]: e.target.value
    });
  };

  const onSearchSubmit = e => {
    e.preventDefault();
    console.log(searchState);
    searchAll(searchState.search);
    searchState.redirect = true;
  };

  const redirectToSearch = () => {
    console.log(props);
  };

  return (
    <StyledSearchBar onSubmit={onSearchSubmit}>
      <Input
        onChange={onSearchInputChange}
        name='search'
        type='text'
        placeholder='search for a FC'
      />
      <SearchButton />
    </StyledSearchBar>
  );
};

const mapStateToProps = state => {
  return {
    freeCompany: state.freeCompany
  };
};

export default connect(
  mapStateToProps,
  {
    freeCompanySearch,
    fetchFreeCompany,
    searchAll
  }
)(SearchBar);
