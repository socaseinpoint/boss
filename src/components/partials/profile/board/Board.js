import React from 'react';
import PropTypes from 'prop-types';

const ProfileBoard = ({ header, children }) => (
  <section className="boss-board">
    <header className="boss-board__header">
      {header}
    </header>
    <div className="boss-board__main">
      {children}
    </div>
  </section>
);

ProfileBoard.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProfileBoard;
