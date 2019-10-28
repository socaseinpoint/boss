import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Switcher = ({ nav, chapters }) => (
  <div className="boss-content-switcher">
    <div className="boss-content-switcher__inner">
      <aside className="boss-content-switcher__side">
        <nav className="boss-content-switcher__nav">
          {nav.map((navItem) => {
            return (
              <NavLink
                to={navItem.to}
                className="boss-content-switcher__nav-link"
                activeClassName="boss-content-switcher__nav-link_state_active"
              >
                {navItem.title}
              </NavLink>
            );
          })}
        </nav>
      </aside>
      <section className="boss-content-switcher__chapters">
        {chapters}
      </section>
    </div>
  </div>
);

Switcher.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  chapters: PropTypes.node.isRequired,
};

export default Switcher;
