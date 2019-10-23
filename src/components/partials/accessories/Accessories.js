import React from 'react';
import PropTypes from 'prop-types';
import AccessoriesItem from './item';

const Accessories = ({ accessories }) => (
  <div>
    { accessories && accessories.map((accessory) => (
      <AccessoriesItem
        key={accessory.id}
        title={accessory.title}
        name={accessory.name}
        icon={accessory.icon}
        quantity={accessory.quantity}
        color={accessory.color}
      />
    )) }
  </div>
);

Accessories.propTypes = {
  accessories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Accessories;
