import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

// actions
import { freeCompanySearch, fetchFreeCompany } from '../../actions';

import styled from 'styled-components';

import Result from './Result';
import Results from './Results';

const StyledSearchBar = styled.form`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 1em 0 0 0;
`;

const Input = styled.input`
  height: 2.5em;
  grid-column: 5 / 8;
`;

const Button = styled.button`
  height: 2.5em;
  grid-column: 8 / 9;
`;

const SearchBar = ({ fetchFreeCompany, freeCompanySearch, freeCompany }) => {
  const [searchTerm, setSearchTerm] = useState({
    fcName: ''
  });

  const onSearchInputChange = e => {
    setSearchTerm({
      [e.target.name]: e.target.value
    });
  };

  const onSearchSubmit = e => {
    e.preventDefault();

    console.log(searchTerm);

    freeCompanySearch(searchTerm.fcName, 'Leviathan');
  };

  return (
    <Fragment>
      <StyledSearchBar onSubmit={onSearchSubmit}>
        <Input
          onChange={onSearchInputChange}
          name='fcName'
          type='text'
          placeholder='search for a FC'
        />
        <Button>Search</Button>
      </StyledSearchBar>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    freeCompany: state.freeCompany
  };
};

export default connect(
  null,
  {
    freeCompanySearch,
    fetchFreeCompany
  }
)(SearchBar);
