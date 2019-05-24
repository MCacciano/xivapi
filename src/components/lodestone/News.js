import React from 'react';

const News = ({ news }) => {
  const renderNews = () => {
    return (
      news !== undefined &&
      news.map(item => {
        let { Banner, Html, Title, Time, Url } = item;
        return (
          <li className='column' key={Time}>
            <a href={Url} target='_new'>
              <figure className='image'>
                <img src={Banner} alt='banner' />
              </figure>
            </a>
          </li>
        );
      })
    );
  };

  return <ul className='columns is-centered'>{renderNews()}</ul>;
};

export default News;
