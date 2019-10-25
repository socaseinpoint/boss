import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import Modal from '../../../modal';

function onDelete(id) {
  console.log(id);
}

const DeleteHolidays = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalClassList = classNames('boss-modal-window', 'boss-modal-window_role_danger');

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button type="button" onClick={toggleModal} className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action">Delete</button>
      <ReactModal isOpen={isOpen} className={modalClassList} ariaHideApp={false}>
        <Modal header="Warning !!!" onClose={toggleModal}>
          <div className="boss-modal-window__message-block">
            <span className="boss-modal-window__message-text">Are You Sure?</span>
          </div>
          <div className="boss-modal-window__actions">
            <button onClick={() => onDelete(id)} type="button" className="boss-button boss-button_role_cancel">Delete</button>
          </div>
        </Modal>
      </ReactModal>
    </>
  );
};

DeleteHolidays.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteHolidays;
