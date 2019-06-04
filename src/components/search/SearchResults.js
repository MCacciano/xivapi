import React from 'react';

import SearchResult from './SearchResult';

import styled from 'styled-components';

const StyledResults = styled.ul`
  display: grid;
  margin: 1rem;
  padding: 0;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const SearchResults = ({ results }) => {
  const renderResults = () => {
    return results.map(searchResult => {
      return <SearchResult result={searchResult} key={searchResult.ID} />;
    });
  };

  return <StyledResults>{renderResults()}</StyledResults>;
};

export default SearchResults;
