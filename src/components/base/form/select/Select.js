import React from 'react';
import PropTypes from 'prop-types';
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
    value,
    onChange,
  },
  options,
  isMulti,
}) => (
  <Select
    name={name}
    value={value}
    onChange={(newValue) => onChange(newValue)}
    styles={customStyles}
    options={options}
    isMulti={isMulti}
  />
);

SelectInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isMulti: PropTypes.bool,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }).isRequired,
  ).isRequired,
  isMulti: PropTypes.bool,
};

SelectInput.defaultProps = {
  isMulti: false,
};

export default SelectInput;
