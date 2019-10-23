import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ trigger, content }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="boss-dropdown">
      <div role="presentation" className="boss-dropdown__header">
        {trigger(show, setShow)}
      </div>
      {
        show ? (
          <div className="boss-dropdown__content boss-dropdown__content_state_opened">
            <div className="boss-dropdown__content-inner">
              {content}
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
};

export default Dropdown;
