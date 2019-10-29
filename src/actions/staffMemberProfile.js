import {
  STAFF_MEMBER_PROFILE_REQUEST,
  STAFF_MEMBER_PROFILE_SUCCESS,
  STAFF_MEMBER_PROFILE_FAILURE,
} from '../constants/actionTypes';

import { fetchStaffMember } from '../services/staffMemberProfile';

export const staffMemberProfileRequest = () => ({
  type: STAFF_MEMBER_PROFILE_REQUEST,
});

export const staffMemberProfileSuccess = (payload) => ({
  type: STAFF_MEMBER_PROFILE_SUCCESS,
  payload,
});

export const staffMemberProfileFailure = (error) => ({
  type: STAFF_MEMBER_PROFILE_FAILURE,
  error,
});

export const getStaffMemberProfile = (id) => (
  (dispatch) => {
    dispatch(staffMemberProfileRequest);
    fetchStaffMember(id).then((payload) => {
      dispatch(staffMemberProfileSuccess(payload));
    }).catch((error) => {
      dispatch(staffMemberProfileFailure(error));
    });
  }
);
