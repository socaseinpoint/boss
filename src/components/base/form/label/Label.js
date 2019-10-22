import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children }) => <span className="boss-form__label-text">{children}</span>;

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
