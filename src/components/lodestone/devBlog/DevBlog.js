import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledDevBlog = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1em;
`;

const Entry = styled.li`
  list-style: none;
  .entry {
    &__header {
      &-title {
      }

      &-author {
        font-size: 0.7em;
        font-weight: 600;
      }

      &-published {
        font-size: 0.5em;
      }
    }
  }
`;

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
        const urlTitle = title.replace(/\s+/g, '_');

        return (
          <Entry className='entry' key={id}>
            <div className='entry__header'>
              <h3 className='entry__header-title'>
                <Link
                  to={{
                    pathname: `/lodestone/devblog/${urlTitle}`,
                    state: { content }
                  }}
                >
                  {title}
                </Link>
              </h3>
              <p className='entry__header-author'>{author.name}</p>
              <small className='entry__header-published'>{published}</small>
            </div>
            <div className='entry__summary'>{summary}</div>
          </Entry>
        );
      })
    );
  };

  return (
    <Fragment>
      <h1 className='content is-large'>DevBlog</h1>
      <StyledDevBlog>{renderDevBlog()}</StyledDevBlog>
    </Fragment>
  );
};

export default DevBlog;
