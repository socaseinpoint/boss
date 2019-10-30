import { createSelector } from 'reselect';
import {
  getStaffMemberProfile,
  getStaffMember,
  getStaffTypes,
  getPayRates,
  getVenues,
} from '.';
import { findOption } from './helpers/findOption';
import { formatGenderOption } from './helpers/getGender';
import { formatOptions } from './helpers/formatOptions';

export const getEditFormInitialValues = createSelector(
  getStaffMemberProfile,
  getStaffMember,
  getStaffTypes,
  getPayRates,
  getVenues,
  (staffMemberProfile, staffMember, staffTypes, payRates, venues) => {
    const {
      staffTypeId,
      masterVenueId,
      otherVenueIds,
      payRateId,
      gender,
    } = staffMember;

    const staffTypeInitial = findOption(staffTypes, staffTypeId);
    const mainVenueInitial = findOption(venues, masterVenueId);
    const payRateInitial = findOption(payRates, payRateId);
    const otherVenueInitial = otherVenueIds.map((id) => findOption(venues, id));

    const staffTypesOptions = formatOptions(staffTypes);
    const payRatesOptions = formatOptions(payRates);
    const venuesOptions = formatOptions(venues);

    const genderInitial = formatGenderOption(gender);

    return {
      ...staffMemberProfile,
      staffTypesOptions,
      payRatesOptions,
      venuesOptions,
      staffTypeInitial,
      mainVenueInitial,
      payRateInitial,
      genderInitial,
      otherVenueInitial,
    };
  },
);

export default getEditFormInitialValues;
