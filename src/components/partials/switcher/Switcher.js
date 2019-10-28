import React from 'react';
import PropTypes from 'prop-types';

const Switcher = ({ nav, chapters }) => (
  <div className="boss-content-switcher">
    <div className="boss-content-switcher__inner">
      <aside className="boss-content-switcher__side">
        {nav}
      </aside>
      <section className="boss-content-switcher__chapters">
        {chapters}
      </section>
    </div>
  </div>
);

Switcher.propTypes = {
  nav: PropTypes.node.isRequired,
  chapters: PropTypes.node.isRequired,
};

export default Switcher;
