import { getOption } from './helpers/getOption';
import { getGender } from './helpers/getGender';
import { formatOptions } from './helpers/formatOptions';

export const getEditFormInitialValues = (state) => {
  const {
    staffTypeId,
    masterVenueId,
    otherVenueIds,
    payRateId,
    gender,
  } = state.staffMemberProfile.staffMember;

  const { staffTypes, venues, payRates } = state.staffMemberProfile;

  const staffTypeInitial = getOption(staffTypes, staffTypeId);
  const mainVenueInitial = getOption(venues, masterVenueId);
  const payRateInitial = getOption(payRates, payRateId);
  const otherVenueInitial = otherVenueIds.map((id) => getOption(venues, id));

  const staffTypesOptions = formatOptions(staffTypes);
  const payRatesOptions = formatOptions(payRates);
  const venuesOptions = formatOptions(venues);

  const genderInitial = getGender(gender);

  return {
    ...state.staffMemberProfile,
    staffTypesOptions,
    payRatesOptions,
    venuesOptions,
    staffTypeInitial,
    mainVenueInitial,
    payRateInitial,
    genderInitial,
    otherVenueInitial,
  };
};

export default getEditFormInitialValues;
