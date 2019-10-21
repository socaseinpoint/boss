import React from 'react';

function renderAccessories(accessories) {
  return accessories[0].name;
}

function renderCell(children) {
  return (
    <div className="boss-table__cell">
      <div className="boss-table__info">{children}</div>
    </div>
  );
}

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
        <div className="boss-avatar_type_combined">
          <img className="boss-avatar__image" src={image} alt={name} />
        </div>
      </a>
    </div>
    {renderCell(name)}
    {renderCell(modified)}
    {renderCell(renderAccessories(accessories))}
    {renderCell(renderStatus(status))}
    {renderCell(type)}
    {renderCell(masterVenue)}
    {renderCell(workVenues)}
  </div>
);

export default StaffMember;
