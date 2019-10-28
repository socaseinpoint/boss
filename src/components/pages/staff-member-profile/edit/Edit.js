import React from 'react';
import Dashboard from '../../../partials/dashboard';
import Content from '../../../partials/content';
import Switcher from '../../../partials/switcher';
import Chapter from '../../../partials/switcher/chapter';
import EmploymentDetailsForm from '../../../partials/profile/edit/employment-details';
//import ContactDetailsForm from '../../../partials/profile/edit/contact-details';
//import PersonalDetailsForm from '../../../partials/profile/edit/personal-details';

const StaffMemberProfileEdit = () => (
  <>
    <Dashboard>
      <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile-edit">
        <div className="boss-page-dashboard__group">
          <h1 className="boss-page-dashboard__title">Edit Profile</h1>
          <div className="boss-page-dashboard__buttons-group boss-page-dashboard__buttons-group_position_last">
            <a href="#" className="boss-button boss-button_role_cancel boss-page-dashboard__button">Cancel Editing</a>
          </div>
        </div>
      </div>
    </Dashboard>
    <Content>
      <Switcher
        chapters={(
          <Chapter header="Employment Details">EmploymentDetailsForm</Chapter>
        )}
        nav={(
          <div>EmploymentDetailsForm</div>
        )}
      />
    </Content>
  </>
);

export default StaffMemberProfileEdit;
