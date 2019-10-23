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

const SelectInput = ({
  input: {
    name,
    onChange,
  },
  options,
}) => (
  <Field
    name={name}
    render={() => (
      <Select
        onChange={(newValue) => onChange(newValue)}
        isSearchable="false"
        styles={customStyles}
        options={options}
      />
    )}
  />
);

SelectInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SelectInput;
