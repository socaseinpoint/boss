import { SET_STAFF_MEMBERS_PAGE } from '../constants/actionTypes';

export const setPage = (number) => ({
  type: SET_STAFF_MEMBERS_PAGE,
  payload: {
    number,
  },
});

export default setPage;
