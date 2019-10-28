export const getEmploymentDetails = (state) => {
  let staffTypes = state.staffMemberProfile.staffTypes || [];
  let payRates = state.staffMemberProfile.payRates || [];
  let venues = state.staffMemberProfile.venues || [];

  staffTypes = staffTypes.map((item) => ({
    label: item.name,
    value: parseFloat(item.id),
  }));

  payRates = payRates.map((item) => ({
    label: item.name,
    value: parseFloat(item.id),
  }));

  venues = venues.map((item) => ({
    label: item.name,
    value: parseFloat(item.id),
  }));

  return {
    ...state.staffMemberProfile,
    staffTypes,
    payRates,
    venues,
  };
};

export default getEmploymentDetails;
