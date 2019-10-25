import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  header,
  children,
  onClose,
  type,
}) => {
  const closeClassName = type === 'delete' ? 'boss-modal-window__close' : 'boss-modal-window__close-inner';

  return (
    <>
      <div role="presentation" className={closeClassName} onClick={onClose} />
      <div className="boss-modal-window__header">{header}</div>
      <div className="boss-modal-window__content">
        <div className="boss-modal-window__form">
          {children}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Modal.defaultProps = {
  type: null,
};

export default Modal;
