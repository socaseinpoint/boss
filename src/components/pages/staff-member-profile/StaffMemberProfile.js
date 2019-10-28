import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../../../selectors/staff-member-profile/getStatus';
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
  const { loading, error } = useSelector((state) => getStatus(state));
  useEffect(() => {
    dispatch(staffMemberProfileAsync(id));
  }, [id, dispatch]);

  return (
    <DefaultLayout>
      {!loading || !error ? (
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
          <Route path={`${path}/edit`}>
            <StaffMemberProfileEdit id={id} />
          </Route>
        </Switch>
      ) : <div>Loading</div> }
    </DefaultLayout>
  );
};

export default StaffMemberProfile;
