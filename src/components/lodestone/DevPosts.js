import React, { Fragment } from 'react';

const DevPosts = ({ devPosts }) => {
  const renderDevPosts = () => {
    console.log(devPosts);

    return (
      devPosts !== undefined &&
      devPosts.map(item => {
        let {
          id,
          Content: content,
          PostCount: postCount,
          Time: time,
          Title: title,
          Url: url,
          UserAvatar: userAvatar,
          UserColour: userColour,
          UserName: userName,
          UserTitle: userTitle
        } = item;

        return (
          <li key={id}>
            {title}
            {/* <div className='box'>
              <article className='media'>
                <div className='media-left'>
                  <figure className='image is-64x64'>
                    <img src={userAvatar} alt='user avatar' />
                  </figure>
                </div>
                <div className='media-content'>
                  <div className='content is-medium'>
                    <a href={url} className='has-text-grey'>
                      {title}
                    </a>
                  </div>
                  <div className='content is-small'>
                    <p>{userName}</p>
                    <small className='content is-small'>{userTitle}</small>
                  </div>
                </div>
              </article>
            </div> */}
          </li>
        );
      })
    );
  };

  return (
    <Fragment>
      <h1 className='content is-large'>DevPosts</h1>
      <ul className='columns is-multiline'>{renderDevPosts()}</ul>
    </Fragment>
  );
};

export default DevPosts;
