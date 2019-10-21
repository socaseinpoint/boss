import React from 'react';
import PropTypes from 'prop-types';
import styles from './staff-members-table.module.css';

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
    <div className={styles.row}>
      {cols.map((col) => <div className={styles.cellheader} key={col}>{col}</div>)}
    </div>
  );
}

function renderAccessories(accessories) {
  return accessories[0].name;
}

function renderCell(children) {
  return (
    <div className={styles.cell}>
      <div className={styles.info}>{children}</div>
    </div>
  );
}

function renderStatus(status) {
  return status ? 'Enabled' : 'Disabled';
}

function renderMembers(members) {
  return members.map((member) => (
    <div className={styles.row} key={member.id}>
      {renderCell(member.image)}
      {renderCell(member.name)}
      {renderCell(member.modified)}
      {renderCell(renderAccessories(member.accessories))}
      {renderCell(renderStatus(member.status))}
      {renderCell(member.type)}
      {renderCell(member.masterVenue)}
      {renderCell(member.workVenues)}
    </div>
  ));
}

const StaffMembersTable = ({ members }) => (
  <div className={styles.table}>
    {renderHeading(headings)}
    {renderMembers(members)}
  </div>
);

StaffMembersTable.propTypes = {
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

StaffMembersTable.defaultProps = {
  members: [],
};

export default StaffMembersTable;
