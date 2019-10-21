import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ value, type }) => <input type={type} className={styles.button} value={value} />;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
};

export default Button;
