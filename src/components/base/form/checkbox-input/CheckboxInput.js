import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({
  id,
  label,
  type,
  input,
  meta: { active, error, touched },
}) => (
  <label className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
    <input name="master-venue" type="checkbox" className="boss-form__checkbox-input" />
    <span className="boss-form__checkbox-label-text">Master venue only</span>
  </label>
);

export default CheckboxInput;
