import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  Input,
  Label,
  InputGroup,
  CheckboxInput,
} from '../../../base/form';
import Button from '../../../base/button';

function onSubmit(e) {
  console.log('submit', e);
}

const DashboardFilterForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="boss-form__row boss-form__row_position_last">
          <div className="boss-form__group boss-form__group_layout_half">
            <InputGroup>
              <Label>Name</Label>
              <Field name="name" component={Input} placeholder="First Name" />
            </InputGroup>

            <InputGroup>
              <Label>Email</Label>
              <Field name="email" component={Input} placeholder="First Name" />
            </InputGroup>

            <InputGroup>
              <Label>Status</Label>
              <Field name="status" component={Input} placeholder="First Name" />
            </InputGroup>
          </div>

          <div className="boss-form__group boss-form__group_layout_half">
            <InputGroup>
              <div className="boss-form__label-group">
                <Label>Venue</Label>
                <span className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
                  <Field name="mastervenue" component={CheckboxInput} type="checkbox" />
                  <span className="boss-form__checkbox-label-text">
                    Master venue only
                  </span>
                </span>
              </div>
              <Field name="vanue" component={Input} placeholder="First Name" />
            </InputGroup>

            <InputGroup>
              <Label>Staff Type</Label>
              <Field name="stafftype" component={Input} placeholder="First Name" />
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

export default DashboardFilterForm;
