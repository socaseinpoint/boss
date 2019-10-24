import React from 'react';
import PropTypes from 'prop-types';

const ProfileManager = ({ children }) => (
  <div className="boss-board__manager">
    {children}
  </div>
);

ProfileManager.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileManager;
