import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

import './style.scss';

const Post = (props) => {
  const { data } = props;
  return (
    <div className="post">
      <Header data={{ user: data.user, createdAt: data.createdAt }} />
      <hr />
      <div id="post-body">{data.content}</div>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
