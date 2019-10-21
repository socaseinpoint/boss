import React from 'react';
import DefaultLayout from '../../layouts/default';
import Dashboard from './dashboard';
import Content from './content';

const StaffMembers = () => (
  <DefaultLayout>
    <div className="boss-page-main">
      <div className="boss-page-main__dashboard">
        <div className="boss-page-main__inner">
          <Dashboard />
          <Content />
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default StaffMembers;
