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

function renderMembers(members) {
  return members.map((member) => <StaffMember { ...member } />);
}

const StaffTable = ({ members }) => (
  <div className="boss-table boss-table_page_staff-members-index">
    {renderHeading(headings)}
    {renderMembers(members)}
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
    }),
  ),
};

StaffTable.defaultProps = {
  members: [],
};

export default StaffTable;
