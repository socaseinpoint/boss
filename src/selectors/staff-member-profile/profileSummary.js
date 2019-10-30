import { createSelector } from 'reselect';
import {
  getStaffMember,
  getStaffTypes,
  getVenues,
} from '.';

export const getProfileSummary = createSelector(
  getStaffMember,
  getStaffTypes,
  getVenues,
  (staffMember, staffTypes, venues) => {
    const { id, email, phoneNumber } = staffMember;
    const name = `${staffMember.firstName} ${staffMember.surname}`;
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
  },
);

export default getProfileSummary;
