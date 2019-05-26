import React from 'react';

import styled from 'styled-components';

const StyledEntryDetail = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;

  & p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const EntryDetail = props => {
  console.log('entry detail', props);
  const {
    author,
    content,
    id,
    published,
    summary,
    title,
    updated,
    link
  } = props.location.state.item;

  return <StyledEntryDetail dangerouslySetInnerHTML={{ __html: content }} />;
};

export default EntryDetail;
