import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ trigger, content }) => {
  const [status] = useState(true);

  return (
    <div className="boss-dropdown">
      <div className="boss-dropdown__header">
        {trigger}
      </div>
      <div className="boss-dropdown__content boss-dropdown__content_state_opened">
        <div className="boss-dropdown__content-inner">
          {
            status ? (
              content
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default Dropdown;
