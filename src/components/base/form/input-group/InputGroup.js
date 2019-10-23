import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({ children }) => <div className="boss-form__field">{children}</div>;

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputGroup;
