import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => (
  <div className="boss-page-main__dashboard">
    <div className="boss-page-main__inner">
      {children}
    </div>
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
