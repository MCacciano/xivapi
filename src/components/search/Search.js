import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import SearchResults from './SearchResults';

const Search = ({ searchAll, searchAllResults }) => {
  return (
    <Fragment>
      <SearchResults results={searchAllResults} />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchAllResults: state.searchAllResults
  };
};

export default connect(
  mapStateToProps,
  {}
)(Search);
