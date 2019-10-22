import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({ children }) => <div className="boss-form__field"><label className="boss-form__label">{children}</label></div>;

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputGroup;
