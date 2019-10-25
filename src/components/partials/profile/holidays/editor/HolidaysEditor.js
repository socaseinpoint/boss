import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import Modal from '../../../modal';
import HolidayForm from './form';

const HolidaysEditor = ({
  title,
  trigger,
  onSubmit,
  startDate,
  endDate,
  holidayType,
  note,
}) => {
  const [isOpen, setIsOpen] = useState();
  const modalClassList = classNames('boss-modal-window', 'boss-modal-window_role_edit');

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {trigger(toggleModal)}
      <ReactModal isOpen={isOpen} className={modalClassList} ariaHideApp={false}>
        <Modal header={title} onClose={toggleModal}>
          <HolidayForm
            title={title}
            onSubmit={onSubmit}
            startDate={startDate}
            endDate={endDate}
            holidayType={holidayType}
            note={note}
          />
        </Modal>
      </ReactModal>
    </>
  );
};

HolidaysEditor.propTypes = {
  title: PropTypes.string.isRequired,
  trigger: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  holidayType: PropTypes.string,
  note: PropTypes.string,
};

HolidaysEditor.defaultProps = {
  startDate: null,
  endDate: null,
  holidayType: null,
  note: null,
};

export default HolidaysEditor;
