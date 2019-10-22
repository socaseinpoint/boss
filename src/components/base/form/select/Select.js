import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ children }) => <select>{children}</select>;

Select.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Select;
