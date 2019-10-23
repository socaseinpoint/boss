import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
  scannable,
  retakePicture,
}) => {
  const imageClassList = classNames(
    'boss-avatar',
    'boss-avatar_type_combined',
    { 'boss-avatar_type_scannable': scannable },
  );

  return (
    <div className="boss-table__row" key={id}>
      <div className="boss-table__cell">
        <a href={`/users/${id}`}>
          <div className={imageClassList}>
            <img className="boss-avatar__image" src={image} alt={name} />
            { retakePicture ? (
              <div className="boss-avatar__overlay">
                <p className="boss-avatar__overlay-text boss-avatar__overlay-text_role_retake">Please retake picture</p>
              </div>
            ) : null }
          </div>
        </a>
      </div>
      <StaffMemberCell label="Name">{name}</StaffMemberCell>
      <StaffMemberCell label="Accessories">
        <Accessories accessories={accessories} />
      </StaffMemberCell>
      <StaffMemberCell label="Modified">{modified}</StaffMemberCell>
      <StaffMemberCell label="Status">{renderStatus(status)}</StaffMemberCell>
      <StaffMemberCell label="Type">{type}</StaffMemberCell>
      <StaffMemberCell label="Master Venue">{masterVenue}</StaffMemberCell>
      <StaffMemberCell label="Work Venues">{workVenues}</StaffMemberCell>
    </div>
  );
};

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
  scannable: PropTypes.bool.isRequired,
  retakePicture: PropTypes.bool.isRequired,
};

export default StaffMember;
