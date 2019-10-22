import React from 'react';
import PropTypes from 'prop-types';
import Accessories from '../../accessories';
import StaffMemberCell from './cell';

function renderStatus(status) {
  return status ? (
    <button type="button" className="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">Enabled</button>
  ) : (
    <button type="button" className="boss-button boss-button_type_small boss-button_role_disabled boss-button_type_no-behavior">Disabled</button>
  );
}

const StaffMember = ({
  id,
  image,
  name,
  modified,
  accessories,
  status,
  type,
  masterVenue,
  workVenues,
}) => (
  <div className="boss-table__row" key={id}>
    <div className="boss-table__cell">
      <a href={`/users/${id}`}>
        <div className="boss-avatar boss-avatar_type_combined">
          <img className="boss-avatar__image" src={image} alt={name} />
        </div>
      </a>
    </div>
    <StaffMemberCell>{name}</StaffMemberCell>
    <StaffMemberCell>
      <Accessories accessories={accessories} />
    </StaffMemberCell>
    <StaffMemberCell>{modified}</StaffMemberCell>
    <StaffMemberCell>{renderStatus(status)}</StaffMemberCell>
    <StaffMemberCell>{type}</StaffMemberCell>
    <StaffMemberCell>{masterVenue}</StaffMemberCell>
    <StaffMemberCell>{workVenues}</StaffMemberCell>
  </div>
);

StaffMember.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  accessories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  status: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  masterVenue: PropTypes.string.isRequired,
  workVenues: PropTypes.string.isRequired,
};

export default StaffMember;
