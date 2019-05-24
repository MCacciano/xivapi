import React, { useEffect } from 'react';
import { fetchLodestone } from '../../actions';
import { connect } from 'react-redux';

import News from './News';
import Maintenance from './Maintenance';
import DevBlog from './DevBlog';
import DevPosts from './DevPosts';
import Notices from './Notices';
import Updates from './Updates';
import Topics from './Topics';
import Status from './Status';

const Lodestone = ({ fetchLodestone, lodestone }) => {
  useEffect(() => {
    fetchLodestone();
  }, []);

  const {
    Banners: banners,
    DevBlog: devBlog,
    DevPosts: devPosts,
    Maintenance: maintenance,
    News: news,
    top5News,
    Notices: notices,
    Status: status,
    Topics: topics,
    Updates: updates
  } = lodestone;

  return (
    <div className='content is-centered'>
      <News news={top5News} />
      <Maintenance maintenance={maintenance} />
      <DevBlog devBlog={devBlog} />
      <DevPosts devPosts={devPosts} />
      <Notices notices={notices} />
      <Updates updates={updates} />
      <Topics topics={topics} />
      <Status status={status} />
    </div>
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
