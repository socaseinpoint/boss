import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <div className="boss-page-main__content">
    <div className="boss-page-main__inner">
      {children}
    </div>
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
