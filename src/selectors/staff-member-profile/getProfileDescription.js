import { createSelector } from 'reselect';
import { getStaffMember, getPayRates, getVenues } from '.';

export const getProfileDescription = createSelector(
  getStaffMember,
  getPayRates,
  getVenues,
  (staffMember, payRates, venues) => {
    /*
    * Employment Details
    */
    const { otherVenueIds } = staffMember;

    const otherVenues = otherVenueIds.map((id) => {
      const venueFound = venues.find((venue) => venue.id === id);
      if (venueFound) {
        return venueFound;
      }
      return null;
    });

    const startDate = staffMember.startsAt;
    const payRate = payRates.find((item) => item.id === staffMember.payRateId).name;
    const hourPreference = staffMember.hoursPreferenceNote;
    const dayPreference = staffMember.dayPreferenceNote;
    const { nationalInsuranceNumber } = staffMember;
    const { sageId } = staffMember;
    const { statusStatement } = staffMember;

    /*
    * Account Details
    */
    const created = staffMember.createdAt;
    const status = !staffMember.isDisabled ? 'Active' : 'Disabled';
    const applicationPassword = staffMember.passwordSetAt;

    /*
    * Personal Details
    */
    const { gender } = staffMember;
    const { dateOfBirth } = staffMember;

    /*
    * Contact Details
    */
    const { address } = staffMember;

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
  },
);

export default getProfileDescription;
