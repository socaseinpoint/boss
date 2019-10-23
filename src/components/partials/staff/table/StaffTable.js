import React from 'react';
import PropTypes from 'prop-types';
import StaffMember from '../member';

const headings = [
  '',
  'Name',
  'Accessories',
  'Modified',
  'Status',
  'Type',
  'Master Venue',
  'Work Venues',
];

function renderHeading(cols) {
  return (
    <div className="boss-table__row">
      {cols.map((col) => <div className="boss-table__cell boss-table__cell_role_header" key={col}>{col}</div>)}
    </div>
  );
}

const StaffTable = ({ members }) => (
  <div className="boss-table boss-table_page_staff-members-index">
    {renderHeading(headings)}
    {members.map((member) => (
      <StaffMember
        key={member.id}
        id={member.id}
        image={member.image}
        name={member.name}
        accessories={member.accessories}
        modified={member.modified}
        status={member.status}
        type={member.type}
        masterVenue={member.masterVenue}
        workVenues={member.workVenues}
        scannable={member.scannable}
        retakePicture={member.retakePicture}
      />
    ))}
  </div>
);

StaffTable.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      accessories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          icon: PropTypes.string.isRequired,
        }),
      ),
      modified: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
      masterVenue: PropTypes.string.isRequired,
      workVenues: PropTypes.string.isRequired,
      scannable: PropTypes.bool.isRequired,
      retakePicture: PropTypes.bool.isRequired,
    }),
  ),
};

StaffTable.defaultProps = {
  members: [],
};

export default StaffTable;
