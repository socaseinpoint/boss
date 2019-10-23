import React from 'react';
import PropTypes from 'prop-types';

const ProfileDescriptionDetails = ({ details }) => (
  <section className="boss-details">
    <p className="boss-details__pointer"><span className="boss-details__pointer-text">{details.id}</span></p>
    <div className="boss-details__content">
      <h3 className="boss-details__title">{details.label}</h3>
      <ul className="boss-details__list">
        { details.fields.map((field) => (
          <li className="boss-details__item">
            <p className="boss-details__label">{field.label}</p>
            <p className="boss-details__value">{field.value}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

ProfileDescriptionDetails.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ProfileDescriptionDetails;
