import {
  STAFF_MEMBER_PROFILE_REQUEST,
  STAFF_MEMBER_PROFILE_SUCCESS,
  STAFF_MEMBER_PROFILE_FAILURE,
} from '../constants/actionTypes';

const staffMemberProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_MEMBER_PROFILE_REQUEST:
      return {
        loading: true,
        errors: false,
      };
    case STAFF_MEMBER_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        errors: false,
      };
    case STAFF_MEMBER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.err,
      };
    default:
      return state;
  }
};

export default staffMemberProfileReducer;
