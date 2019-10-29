import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormError from '../error';

const Textarea = ({
  input: {
    name,
    value,
    type,
    onBlur,
    onChange,
  },
  meta,
}) => {
  const classList = classNames('boss-form__textarea', { 'boss-form__textarea_state_error': meta.error && meta.touched });
  return (
    <>
      <textarea
        name={name}
        value={value}
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        className={classList}
      />
      {meta.error && meta.touched && <FormError>{meta.error}</FormError>}
    </>
  );
};

Textarea.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
};

Textarea.defaultProps = {
  meta: {
    error: null,
    touched: null,
  },
};

export default Textarea;
