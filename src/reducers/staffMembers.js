import { initialStaffMembers } from '../utils/initialState';

const initialState = {
  loading: false,
  errors: null,
  filters: {
    name: '',
    email: '',
    status: '',
    venue: '',
    staffType: '',
  },
  pagination: {
    current: 10,
    perPage: 4,
    total: 120,
  },
  results: initialStaffMembers,
  total: 695,
};

const staffMembersReducer = (state = initialState) => state;

export default staffMembersReducer;
