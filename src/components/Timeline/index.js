import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post';

import './style.scss';

const Timeline = (props) => {
  const { posts } = props;

  return (
    <div id="timeline">
      {posts.map(post => (
        <Post data={post} key={post.id} />
      ))}
    </div>
  );
};

Timeline.propTypes = {
  posts: PropTypes.any.isRequired,
};

export default Timeline;
