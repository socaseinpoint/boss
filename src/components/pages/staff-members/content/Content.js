import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStaffMembersResults, getStaffMembersPagination } from '../../../../selectors/staffMembers';
import { setPage } from '../../../../actions/staffMembers';
import StaffMembersTable from '../../../partials/staff/table';
import Pagination from '../../../partials/pagination';

const Content = () => {
  const members = useSelector((state) => getStaffMembersResults(state));
  const pagination = useSelector((state) => getStaffMembersPagination(state));

  function useAction(number) {
    useDispatch(setPage(number));
  }

  return (
    <div className="boss-page-main__content">
      <div className="boss-page-main__inner">
        <StaffMembersTable members={members} />
        <Pagination
          current={pagination.current}
          total={pagination.total}
          perPage={pagination.perPage}
          useAction={useAction}
        />
      </div>
    </div>
  );
};

export default Content;
