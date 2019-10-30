import { createSelector } from 'reselect';

export const getStaffMemberProfile = (state) => state.staffMemberProfile;
export const getStaffMember = (state) => state.staffMemberProfile.staffMember;
export const getPayRates = (state) => state.staffMemberProfile.payRates;
export const getVenues = (state) => state.staffMemberProfile.venues;
export const getStaffTypes = (state) => state.staffMemberProfile.staffTypes;

export const getStaffMemberProfileStatus = createSelector(
  getStaffMemberProfile,
  (staffMemberProfile) => {
    const status = {
      loading: staffMemberProfile.loading,
      error: staffMemberProfile.error,
    };

    return status;
  },
);
