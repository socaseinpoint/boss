import React, { useState } from 'react';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import Modal from '../../../modal';
import AddHolidayForm from './form';

const AddHolidays = () => {
  const [isOpen, setIsOpen] = useState();
  const modalClassList = classNames('boss-modal-window', 'boss-modal-window_role_edit');

  return (
    <div className="boss-board__button-group">
      <p role="presentation" className="boss-button boss-button_role_add" onClick={() => setIsOpen(!isOpen)}>Add Holiday</p>
      <ReactModal isOpen={isOpen} className={modalClassList} ariaHideApp={false}>
        <Modal header="Add Holiday" onClose={() => setIsOpen(!isOpen)}>
          <AddHolidayForm />
        </Modal>
      </ReactModal>
    </div>
  );
};

export default AddHolidays;
