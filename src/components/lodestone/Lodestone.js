import React, { useEffect } from 'react';
import { fetchLodestone } from '../../actions';
import { connect } from 'react-redux';

const Lodestone = ({ fetchLodestone, lodestone }) => {
  useEffect(() => {
    fetchLodestone();
  }, []);

  console.log(lodestone);

  const {
    Banners,
    DevBlog,
    DevPosts,
    Maintenance,
    News,
    Notices,
    Status,
    Topics,
    Updates
  } = lodestone;

  const renderBanners = () => {
    console.log(Banners);
    return (
      Banners !== undefined &&
      Banners.map(banner => {
        let { Banner, Url } = banner;
        return (
          <li className='column' key={Banner}>
            <a href={Url}>
              <figure className='image'>
                <img src={Banner} alt='banner' />
              </figure>
            </a>
          </li>
        );
      })
    );
  };

  return (
    <ul style={{ margin: '5px' }} className='columns is-centered'>
      {renderBanners()}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    lodestone: state.lodestone
  };
};

export default connect(
  mapStateToProps,
  {
    fetchLodestone
  }
)(Lodestone);
