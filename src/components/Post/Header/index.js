import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = (props) => {
  const { data } = props;
  return (
    <div className="post-header">
      <img
        src={`/images/avatars/${data.user}.jpg`}
        alt="Avatar"
        height="48"
        id="post-header-avatar"
      />
      <div>
        <div className="post-author">{data.user}</div>
        <div className="post-time">{data.createdAt}</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Header;
