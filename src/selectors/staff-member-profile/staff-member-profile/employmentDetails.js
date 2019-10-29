import { getStaffType } from '../helpers/getStaffType';
import { getVenue } from '../helpers/getVenue';
import { getPayRate } from '../helpers/getPayRate';
import { getGender } from '../helpers/getGender';

export const getEmploymentDetails = (state) => {
  const {
    staffTypeId,
    masterVenueId,
    payRateId,
    gender,
  } = state.staffMemberProfile.staffMember;

  let staffTypes = state.staffMemberProfile.staffTypes || [];
  let venues = state.staffMemberProfile.venues || [];
  let payRates = state.staffMemberProfile.payRates || [];

  const staffTypeInitial = getStaffType(staffTypes, staffTypeId);
  const mainVenueInitial = getVenue(venues, masterVenueId);
  const payRateInitial = getPayRate(payRates, payRateId);

  staffTypes = staffTypes.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  payRates = payRates.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  venues = venues.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const genderInitial = getGender(gender);

  return {
    ...state.staffMemberProfile,
    staffTypes,
    payRates,
    venues,
    staffTypeInitial,
    mainVenueInitial,
    payRateInitial,
    genderInitial,
  };
};

export default getEmploymentDetails;
