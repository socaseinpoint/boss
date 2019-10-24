export const getProfileDescription = (state) => {
  if (!state.staffMemberProfile.staffMember) {
    return {};
  }

  const profile = state.staffMemberProfile;
  const member = profile.staffMember;
  const { payRates } = profile;
  const { venues } = profile;
  const { otherVenueIds } = member;

  const otherVenues = otherVenueIds.map((id) => {
    const venueFound = venues.find((venue) => venue.id === id);
    if (venueFound) {
      return venueFound;
    }
    return null;
  });

  /*
  * Employment Details
  */
  const startDate = member.startsAt;
  const payRate = payRates.find((item) => item.id === member.payRateId).name;
  const hourPreference = member.hoursPreferenceNote;
  const dayPreference = member.dayPreferenceNote;
  const { nationalInsuranceNumber } = member;
  const { sageId } = member;
  const { statusStatement } = member;

  /*
  * Account Details
  */
  const created = member.createdAt;
  const status = !member.isDisabled ? 'Active' : 'Disabled';
  const applicationPassword = member.passwordSetAt;

  /*
  * Personal Details
  */
  const { gender } = member;
  const { dateOfBirth } = member;

  /*
  * Contact Details
  */
  const { address } = member;

  return {
    otherVenues,
    startDate,
    payRate,
    hourPreference,
    dayPreference,
    nationalInsuranceNumber,
    sageId,
    statusStatement,
    created,
    status,
    applicationPassword,
    gender,
    dateOfBirth,
    address,
  };
};

export default getProfileDescription;
