import React from 'react';
import PropTypes from 'prop-types';

const InputFieldNote = ({ children }) => <p className="boss-form__field-note">{children}</p>;

InputFieldNote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputFieldNote;
