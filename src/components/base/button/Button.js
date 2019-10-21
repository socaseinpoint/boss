import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({value}) => <button className={styles.button}>{value}</button>;

Button.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Button;
