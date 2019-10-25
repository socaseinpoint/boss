import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ children }) => (
  <div className="boss-form__error">
    <p className="boss-form__error-text">
      <span className="boss-form__error-line">
        {children}
      </span>
    </p>
  </div>
);

FormError.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormError;
