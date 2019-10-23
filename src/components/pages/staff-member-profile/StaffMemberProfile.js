import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import StaffMemberProfileDashboard from './dashboard';
import DefaultLayout from '../../layouts/default';
import Content from '../../partials/content';
import Profile from './profile';
import Holidays from './holidays';

const StaffMemberProfile = () => {
  const { path } = useRouteMatch();

  return (
    <DefaultLayout>
      <StaffMemberProfileDashboard />
      <Content>
        <Switch>
          <Route exact path={`${path}/profile`}>
            <Profile />
          </Route>
          <Route exact path={`${path}/holidays`}>
            <Holidays />
          </Route>
        </Switch>
      </Content>
    </DefaultLayout>
  );
};

export default StaffMemberProfile;
