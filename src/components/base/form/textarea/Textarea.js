import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  input: {
    name,
    value,
    type,
    onBlur,
    onChange,
  },
}) => (
  <textarea
    name={name}
    value={value}
    type={type}
    onBlur={onBlur}
    onChange={onChange}
    className="boss-form__textarea"
  />
);

Textarea.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Textarea;
