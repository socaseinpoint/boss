import React from 'react';
import Header from '../../partials/header';

const DefaultLayout = ({children}) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
);

export default DefaultLayout;
