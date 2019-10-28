import React from 'react';
import PropTypes from 'prop-types';

const Chapter = ({ children, header }) => (
  <div className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible">
    <header className="boss-content-switcher__header">
      <h2 className="boss-content-switcher__title">{header}</h2>
    </header>
    <div className="boss-content-switcher__content">
      {children}
    </div>
  </div>
);

Chapter.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default Chapter;
