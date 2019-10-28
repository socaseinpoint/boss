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
import StaffMemberProfileEdit from './edit';
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
      <Switch>
        <Route exact path={`${path}/profile`}>
          <StaffMemberProfileDashboard />
          <Content>
            <Profile />
          </Content>
        </Route>
        <Route exact path={`${path}/holidays`}>
          <StaffMemberProfileDashboard />
          <Content>
            <Holidays />
          </Content>
        </Route>
        <Route exact path={`${path}/edit/`}>
          <StaffMemberProfileEdit />
        </Route>
      </Switch>
    </DefaultLayout>
  );
};

export default StaffMemberProfile;
