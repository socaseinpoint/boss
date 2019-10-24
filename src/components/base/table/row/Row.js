import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children }) => <div className="boss-table__row">{children}</div>;

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
