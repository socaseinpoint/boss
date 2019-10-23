import React from 'react';
import PropTypes from 'prop-types';

const AccessoriesItem = ({
  title,
  name,
  icon,
  quantity,
  color,
}) => {
  const iconClassList = `boss-indicator__icon boss-indicator__icon_size_s boss-indicator__icon_${icon}`;

  return (
    <span className="boss-indicator boss-indicator_adjust_tooltip boss-indicator_adjust_flow">
      <span className={iconClassList} style={{ color }} />
      { quantity && quantity !== 0 ? <span className="boss-indicator__counter">{quantity}</span> : null }
      <span className="boss-indicator__tooltip">
        <span className="boss-indicator__tooltip-line">
          <span className="boss-indicator__tooltip-marked">{title}</span>
        </span>
        <span className="boss-indicator__tooltip-line">{name}</span>
      </span>
    </span>
  );
};

AccessoriesItem.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default AccessoriesItem;
