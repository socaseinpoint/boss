import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import Dashboard from '../../../partials/dashboard';
import Content from '../../../partials/content';
import Switcher from '../../../partials/switcher';
import Chapter from '../../../partials/switcher/chapter';
//import EmploymentDetailsForm from '../../../partials/profile/edit/employment-details';
//import ContactDetailsForm from '../../../partials/profile/edit/contact-details';
//import PersonalDetailsForm from '../../../partials/profile/edit/personal-details';

const StaffMemberProfileEdit = ({ id }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <Dashboard>
        <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile-edit">
          <div className="boss-page-dashboard__group">
            <h1 className="boss-page-dashboard__title">Edit Profile</h1>
            <div className="boss-page-dashboard__buttons-group boss-page-dashboard__buttons-group_position_last">
              <Link to={`/staff-member-profile/${id}/profile`} className="boss-button boss-button_role_cancel boss-page-dashboard__button">Cancel Editing</Link>
            </div>
          </div>
        </div>
      </Dashboard>
      <Content>
        <Switcher
          chapters={(
            <Switch>
              <Route
                exact
                path={`${path}/employment`}
              >
                <Chapter header="Employment Details">EmploymentDetailsForm</Chapter>
              </Route>
              <Route
                exact
                path={`${path}/contact`}
              >
                <Chapter header="Contact Details">ContactDetailsForm</Chapter>
              </Route>
              <Route
                exact
                path={`${path}/personal`}
              >
                <Chapter header="Personal Details">PersonalDetailsForm</Chapter>
              </Route>
            </Switch>
          )}
          nav={[
            {
              title: 'Employment details',
              to: `/staff-member-profile/${id}/edit/employment`,
            },
            {
              title: 'Personal details',
              to: `/staff-member-profile/${id}/edit/personal`,
            },
            {
              title: 'Contact details',
              to: `/staff-member-profile/${id}/edit/contact`,
            },
          ]}
        />
      </Content>
    </>
  );
};

export default StaffMemberProfileEdit;
