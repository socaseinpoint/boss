import React from 'react';
import PropTypes from 'prop-types';

const FormRow = ({ children }) => <div className="boss-form__row">{children}</div>;

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormRow;
