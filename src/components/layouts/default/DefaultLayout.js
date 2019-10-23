import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../partials/header';

const DefaultLayout = ({ children }) => (
  <div className="boss-body">
    <Header />
    <div className="boss-page-main">
      {children}
    </div>
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
