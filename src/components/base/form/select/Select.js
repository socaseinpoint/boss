import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Select from 'react-select';

const customStyles = {
  control: (base) => ({
    ...base,
    minHeight: 30,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: 4,
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: 4,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0px 6px',
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
};

const SelectInput = ({ name, options }) => (
  <Field
    name={name}
    parse={(val) => val && val.value}
    render={() => (
      <Select
        isSearchable="false"
        styles={customStyles}
        options={options}
      />
    )}
  />
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default SelectInput;
