import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// import { testing } from '../actions';
import { fetchCharacter } from '../actions';

const Test = ({ fetchCharacter, searchResults }) => {
  const [results, setResults] = useState([]);

  const testFetch = () => {
    setResults(fetchCharacter('Mozzey+Magick', 'Leviathan'));
  };

  console.log(searchResults);

  return (
    <div>
      <button onClick={testFetch}>Fetch</button>
      <button onClick={testFetch}>Log</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCharacter
  }
)(Test);
