import React from 'react';
import PropTypes from 'prop-types';
import StaffMembersTable from '../../../partials/staff-members-table';
import Paginator from '../../../partials/pagination';
import styles from './content.module.css';

const Content = ({ members }) => (
  <div className={styles.content}>
    <div className={styles.inner}>
      <StaffMembersTable members={members} />
      <Paginator />
    </div>
  </div>
);

Content.propTypes = {
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

Content.defaultProps = {
  members: [],
};

export default Content;
