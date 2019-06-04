import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchFreeCompany } from '../../actions/index';

const FreeCompany = ({ fetchFreeCompany }) => {
  // useEffect(() => {
  //   // fetchFreeCompany('Git+Gud', 'Leviathan');
  //   fetchFreeCompany('9232379236109559306');
  // }, []);

  return (
    <div>
      <h1>Free Company</h1>
    </div>
  );
};

export default connect(
  null,
  {
    fetchFreeCompany
  }
)(FreeCompany);
