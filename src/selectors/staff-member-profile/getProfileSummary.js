export const getProfileSummary = (state) => {
  const { staffMemberProfile } = state;
  const { staffMember, staffTypes, venues } = staffMemberProfile;

  const { id } = staffMember;
  const name = `${staffMember.firstName} ${staffMember.surname}`;
  const { email } = staffMember;
  const { phoneNumber } = staffMember;
  const staffType = staffTypes.find((item) => item.id === staffMember.staffTypeId).name;
  const venue = venues.find((item) => item.id === staffMember.masterVenueId).name;

  return {
    phone: phoneNumber,
    id,
    name,
    email,
    staffType,
    venue,
  };
};

export default getProfileSummary;
