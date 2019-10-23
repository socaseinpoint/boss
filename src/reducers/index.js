import { combineReducers } from 'redux';
import staffMemberReducer from './staffMembers';
import staffMemberProfileReducer from './staffMemberProfile';

const rootReducer = combineReducers({
  staffMembers: staffMemberReducer,
  staffMemberProfile: staffMemberProfileReducer,
});

export default rootReducer;
