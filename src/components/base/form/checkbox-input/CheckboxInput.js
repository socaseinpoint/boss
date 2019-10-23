import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({
  input: {
    name,
    value,
    type,
    onBlur,
    onChange,
  },
  label,
}) => (
  <label htmlFor={name} className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
    <input
      id={name}
      name={name}
      value={value}
      type={type}
      onBlur={onBlur}
      onChange={onChange}
      className="boss-form__checkbox-input"
    />
    <span className="boss-form__checkbox-label-text">{label}</span>
  </label>
);

CheckboxInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxInput;
