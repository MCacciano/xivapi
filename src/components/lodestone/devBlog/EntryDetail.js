import React from 'react';

import styled from 'styled-components';

const EntryDetail = props => {
  console.log('entry detail', props);
  const { content } = props.location.state;

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default EntryDetail;
