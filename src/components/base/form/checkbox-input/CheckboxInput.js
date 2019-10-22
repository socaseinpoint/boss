import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({ input, name }) => <input className="boss-form__checkbox-input" name={name} type={input.type} />;

CheckboxInput.propTypes = {
  input: PropTypes.shape({
    type: 'string',
  }).isRequired,
  name: PropTypes.string.isRequired,
};

export default CheckboxInput;
