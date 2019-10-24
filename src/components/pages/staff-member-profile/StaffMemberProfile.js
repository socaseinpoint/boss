import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { staffMemberProfileAsync } from '../../../actions/staffMemberProfile';
import StaffMemberProfileDashboard from './dashboard';
import DefaultLayout from '../../layouts/default';
import Content from '../../partials/content';
import Profile from './profile';
import Holidays from './holidays';

const StaffMemberProfile = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(staffMemberProfileAsync(id));
  }, [id, dispatch]);

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
