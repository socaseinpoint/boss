import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children }) => <p className="boss-form__label"><span className="boss-form__label-text">{children}</span></p>;

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
