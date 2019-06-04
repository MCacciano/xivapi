import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchItemDetail } from '../../actions';

import styled from 'styled-components';

const StyledResult = styled.li`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 0.6rem;
  border: 1px solid #000000;
  border-radius: 5px;
  list-style-type: none;

  &:hover {
    border: 1px dashed #7b48c3;
  }
`;

const StyledIcon = styled.img`
  object-fit: scale-down;
  min-width: 2rem;
  height: 2.5rem;
`;

const DetailLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const ResultName = styled.p`
  font-size: 0.8rem;
`;

const SearchResult = ({ result, itemDetails }) => {
  const { ID, Icon, Name, Url, UrlType } = result;
  return (
    <StyledResult>
      <StyledIcon src={`https://xivapi.com${Icon}`} alt='icon' />
      <DetailLink
        to={{
          pathname: `/search${Url}-${Name.replace(/\s+/g, '_')}`,
          state: { itemDetails }
        }}
      >
        <ResultName>{Name}</ResultName>
      </DetailLink>
    </StyledResult>
  );
};

const mapStateToProps = state => {
  return {
    itemDetails: state.itemDetails
  };
};

export default connect(
  mapStateToProps,
  {
    fetchItemDetail
  }
)(SearchResult);
