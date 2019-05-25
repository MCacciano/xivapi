import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledNews = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1em;
  align-items: center;
  margin: 1em;
`;

const StyledNewsItem = styled.li`
  list-style: none;
  grid-column: ${props =>
    props.index ? `${props.index + 1} / ${props.index + 2}` : `1 / 2`};
  position: relative;

  & img {
    width: 100%;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    height: 90%;
  }
`;

const Overlay = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(115, 45, 211, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  max-height: 90%;
  color: #ffffff;
  text-align: center;
  opacity: 0;
  font-size: 0.8em;

  ${StyledNewsItem}:hover & {
    animation: ${fadeIn} 200ms forwards ease-out;
  }
`;

const News = ({ news }) => {
  const renderNews = () => {
    return (
      news !== undefined &&
      news.map((item, i) => {
        let { Banner, Html, Title, Time, Url } = item;
        return (
          <StyledNewsItem index={i} key={i}>
            <a href={`https://na.finalfantasyxiv.com${Url}`} target='_new'>
              <img src={Banner} alt='banner' />
              <Overlay>{Title}</Overlay>
            </a>
          </StyledNewsItem>
        );
      })
    );
  };

  return <StyledNews>{renderNews()}</StyledNews>;
};

export default News;
