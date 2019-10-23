import React from 'react';
import PropTypes from 'prop-types';

const StaffMemberCell = ({ children, label }) => (
  <div className="boss-table__cell">
    <div className="boss-table__info">
      <p className="boss-table__label">{label}</p>
      <p className="boss-table__text">{children}</p>
    </div>
  </div>
);

StaffMemberCell.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default StaffMemberCell;
