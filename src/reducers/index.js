import { combineReducers } from 'redux';
import staffMemberReducer from './staffMembers';

const rootReducer = combineReducers({
  staffMembers: staffMemberReducer,
});

export default rootReducer;
