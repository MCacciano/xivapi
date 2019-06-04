import React from 'react';
import { Route } from 'react-router-dom';

import styled from 'styled-components';

const Button = styled.button`
  height: 2.5em;
  flex: 0 0 25%;
  border-radius: 5px;
  box-shadow: none;
  background-color: #7b48c3;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
  outline: 0;
`;

const SearchButton = () => {
  return (
    <Route
      render={({ history }) => (
        <Button onClick={() => history.push('/search')}>Search</Button>
      )}
    />
  );
};

export default SearchButton;
