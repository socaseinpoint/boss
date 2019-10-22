import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  Input,
  Label,
  InputGroup,
  CheckboxInput,
  SelectInput,
} from '../../../base/form';

import {
  statusOptions,
  venueOptions,
  staffTypeOptions,
} from '../../../../utils/options';

import Button from '../../../base/button';

function onSubmit(e) {
  console.log(e);
}

const StaffFilters = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="boss-form__row boss-form__row_position_last">
          <div className="boss-form__group boss-form__group_layout_half">
            <InputGroup>
              <Label>Name</Label>
              <Field type="text" name="name" component={Input} />
            </InputGroup>

            <InputGroup>
              <Label>Email</Label>
              <Field type="text" name="email" component={Input} />
            </InputGroup>

            <InputGroup>
              <Label>Status</Label>
              <Field name="status" component={SelectInput} options={statusOptions} />
            </InputGroup>
          </div>

          <div className="boss-form__group boss-form__group_layout_half">
            <InputGroup>
              <div className="boss-form__label-group">
                <Label>Venue</Label>
                <span className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
                  <Field name="status" component={CheckboxInput} options={statusOptions} label="Master Venue Only" />
                </span>
              </div>
              <Field name="venue" component={SelectInput} options={venueOptions} />
            </InputGroup>

            <InputGroup>
              <Label>Staff Type</Label>
              <Field name="stafftype" component={SelectInput} options={staffTypeOptions} />
            </InputGroup>

            <div className="boss-form__field boss-form__field_justify_end boss-form__field_no-label">
              <Button type="submit" value="Update" />
            </div>
          </div>
        </div>
      </form>
    )}
  />
);

export default StaffFilters;
