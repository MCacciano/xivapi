import React, { Fragment } from 'react';

const DevBlog = ({ devBlog }) => {
  const renderDevBlog = () => {
    console.log(devBlog);

    return (
      devBlog !== undefined &&
      devBlog.map(item => {
        let {
          author,
          content,
          id,
          published,
          summary,
          title,
          updated,
          link
        } = item;

        const { href } = link['@attributes'];

        return (
          <li className='column is-4 has-text-centered' key={id}>
            <div className='card'>
              <div className='card-content'>
                <p>{summary}</p>
                <p className='content is-small'>{author.name}</p>
              </div>
              <footer className='card-footer'>
                <p className='card-footer-item'>
                  <span>
                    <a
                      className='content is-small has-text-grey-light'
                      href={href}
                      target='_new'
                    >
                      {title}
                    </a>
                  </span>
                </p>
                <p className='card-footer-item'>
                  <span className='content is-small'>{published}</span>
                </p>
              </footer>
            </div>
          </li>
        );
      })
    );
  };

  return (
    <Fragment>
      <h1 className='content is-large'>DevBlog</h1>
      <ul className='columns is-multiline'>{renderDevBlog()}</ul>
    </Fragment>
  );
};

export default DevBlog;
