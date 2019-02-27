import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

// import { Container } from './styles';

const Post = (props) => {
  const { data } = props;
  return (
    <div className="post">
      <Header data={{ title: data.title, createdAt: data.createdAt }} />
    </div>
  );
};

export default Post;
