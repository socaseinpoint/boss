import React from 'react';
import PropTypes from 'prop-types';
import StaffMembersTable from '../../../partials/staff-members-table';
import Pagination from '../../../partials/pagination';
import styles from './content.module.css';

const Content = ({ members }) => {
  function handleAction(newPage) {
    console.log(newPage);
  };

  return (
    <div className={styles.content}>
      <div className={styles.inner}>
        <StaffMembersTable members={members.results} />
        <Pagination
          current={members.pagination.current}
          total={members.pagination.total}
          perPage={members.pagination.perPage}
          handleAction={handleAction}
        />
      </div>
    </div>
  );
};

Content.propTypes = {
  members: PropTypes.shape({
    results: PropTypes.arrayOf(
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
    pagination: PropTypes.shape({
      current: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      perPage: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

Content.defaultProps = {
  members: [],
};

export default Content;
