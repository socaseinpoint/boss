import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, type }) => <input type={type} className="boss-button boss-button_role_add boss-page-dashboard__button" value={value} />;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
};

export default Button;
