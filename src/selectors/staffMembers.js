export const getStaffMembersResults = (state) => state.staffMembers.results;
export const getStaffMembersPagination = (state) => state.staffMembers.pagination;
export const getStaffMembersTotal = (state) => state.staffMembers.total;
export const getStaffMembersFilters = (state) => state.staffMembers.filters;

export const getProfileSummary = (state) => {
  const { staffMemberProfile } = state;
  const { staffMember } = staffMemberProfile;

  const { id } = staffMember;
  const name = `${staffMember.firstName} ${staffMember.surname}`;
  const { email } = staffMember;
  const { phoneNumber } = staffMember;
  const staffType = staffMemberProfile.staffTypes.find((item) => item.id === staffMember.staffTypeId).name;
  const venue = staffMemberProfile.venues.find((item) => item.id === staffMember.masterVenueId).name;

  return {
    phone: phoneNumber,
    id,
    name,
    email,
    staffType,
    venue,
  };
};

export const getProfileDescription = (state) => state;
