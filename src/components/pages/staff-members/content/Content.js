import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStaffMembersResults, getStaffMembersPagination } from '../../../../selectors/staffMembers';
import { setPage } from '../../../../actions/staffMembers';
import StaffMembersTable from '../../../partials/staff/table';
import Pagination from '../../../partials/pagination';
import Content from '../../../partials/content';

const StaffMembersContent = () => {
  const members = useSelector((state) => getStaffMembersResults(state));
  const pagination = useSelector((state) => getStaffMembersPagination(state));

  function useAction(number) {
    useDispatch(setPage(number));
  }

  function handleAction(number) {
    console.log(number);
  }

  return (
    <Content>
      <StaffMembersTable members={members} />
      <Pagination
        current={pagination.current}
        total={pagination.total}
        perPage={pagination.perPage}
        useAction={useAction}
        handleAction={handleAction}
      />
    </Content>
  );
};

export default StaffMembersContent;
