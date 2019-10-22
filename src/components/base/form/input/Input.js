import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ input, name }) => <input className="boss-form__input" name={name} type={input.type} />;

Input.propTypes = {
  input: PropTypes.shape({
    type: 'string',
  }).isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
