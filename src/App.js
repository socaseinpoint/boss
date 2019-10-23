import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import StaffMembers from './components/pages/staff-members';
import StaffMemberProfile from './components/pages/staff-member-profile';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/staff-members">
        <StaffMembers />
      </Route>
      <Route path="/staff-member-profile">
        <StaffMemberProfile />
      </Route>
    </Switch>
  </Router>
);

export default App;
