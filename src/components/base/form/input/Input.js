import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id,
  label,
  type,
  input,
  meta: { active, error, touched }
}) => (
  <div className={active ? "active" : ""}>
    <input id={id} {...input} type={type} placeholder={label} className="boss-form__input" />
  </div>
);

export default Input;
