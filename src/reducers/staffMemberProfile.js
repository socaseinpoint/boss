import {
  STAFF_MEMBER_PROFILE_REQUEST,
  STAFF_MEMBER_PROFILE_SUCCESS,
  STAFF_MEMBER_PROFILE_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  loading: true,
  error: false,
};

const staffMemberProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STAFF_MEMBER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case STAFF_MEMBER_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: false,
      };
    case STAFF_MEMBER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default staffMemberProfileReducer;
