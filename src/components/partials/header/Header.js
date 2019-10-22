import React from 'react';

const Header = () => (
  <header className="boss-page-header">
    <div className="boss-page-header__inner">
      <div className="boss-page-header__group boss-page-header__group_role_logo">
        <span className="boss-page-header__logo">Boss</span>
      </div>
      <span className="boss-page-header__action boss-page-header__action_role_search">Loupe</span>
      <span className="boss-page-header__action boss-page-header__action_role_profile">User</span>
    </div>
  </header>
);

export default Header;
