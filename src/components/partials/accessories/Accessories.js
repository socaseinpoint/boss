import React from 'react';
import AccessoriesItem from './item';

const Accessories = ({ accessories }) => (
  accessories.map((accessory) => (
    <AccessoriesItem
      key={accessory.id}
      title={accessory.title}
      name={accessory.name}
      icon={accessory.icon}
      quantity={accessory.quantity}
      color={accessory.color}
    />
  ))
);

export default Accessories;
