import React from 'react';
import PropTypes from 'prop-types';

const StaffMemberCell = ({ children }) => (
  <div className="boss-table__cell">
    <div className="boss-table__info">{children}</div>
  </div>
);

StaffMemberCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StaffMemberCell;
