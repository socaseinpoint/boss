import React from 'react';
import HolidaysEditor from '../editor';

function onSubmit(e) {
  console.log(e);
}

const EditHolidays = () => (
  <HolidaysEditor
    trigger={(triggerModal) => (
      <button
        onClick={triggerModal}
        type="button"
        className="boss-button boss-button_type_small boss-button_role_update boss-table__action"
      >
        Edit
      </button>
    )}
    onSubmit={onSubmit}
    title="Edit Holiday"
  />
);

export default EditHolidays;
