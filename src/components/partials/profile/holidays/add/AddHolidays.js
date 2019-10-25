import React from 'react';
import HolidaysEditor from '../editor';

function onSubmit(e) {
  console.log(e);
}

const AddHolidays = () => (
  <HolidaysEditor
    trigger={(triggerModal) => (<p onClick={triggerModal} role="presentation" className="boss-button boss-button_role_add">Add Holiday</p>)}
    onSubmit={onSubmit}
    title="Add Holiday"
  />
);

export default AddHolidays;
