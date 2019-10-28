import React from 'react';
import PropTypes from 'prop-types';

const SwitcherNav = ({ switcher }) => (
  switcher.map((item) => <div>{item.name}</div>)
);

SwitcherNav.propTypes = {
  switcher: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    chapter: PropTypes.node.isRequired,
  }).isRequired,
};

export default SwitcherNav;
