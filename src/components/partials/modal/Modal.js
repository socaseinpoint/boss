import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ header, children, onClose }) => (
  <>
    <button type="button" className="boss-modal-window__close-inner" onClick={onClose} />
    <div className="boss-modal-window__header">{header}</div>
    <div className="boss-modal-window__content">
      <div className="boss-modal-window__form">
        {children}
      </div>
    </div>
  </>
);

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
