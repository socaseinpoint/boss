import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  InputGroup,
  SelectInput,
  Label,
  DateRangeInput,
} from '../../../../base/form';

function onSubmit(e) {
  console.log(e);
}

const ProfileFilter = () => (
  <div className="boss-board__manager-filter">
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="boss-form">
          <div className="boss-form__group boss-form__group_position_last">
            <h3 className="boss-form__group-title">Filter</h3>
            <div className="boss-form__row boss-form__row_align_center boss-form__row_desktop boss-form__row_position_last">
              <div className="boss-form__field boss-form__field_layout_quarter">
                <div className="boss-form__select">
                  <InputGroup>
                    <Label>Type</Label>
                    <Field
                      name="date"
                      component={SelectInput}
                      options={[
                        {
                          label: 'Payslip Date',
                          value: '0',
                        },
                      ]}
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="boss-form__field boss-form__field_layout_max boss-form__field_no-label">
                <div className="date-range-picker date-range-picker_type_interval-fluid date-range-picker_type_icon date-range-picker_no-label">
                  <Field
                    name="dateRange"
                    component={DateRangeInput}
                  />
                </div>
              </div>

              <div className="boss-form__field boss-form__field_layout_min boss-form__field_no-label">
                <button className="boss-button boss-form__submit" type="submit">Update</button>
              </div>
            </div>
          </div>
        </form>
      )}
    />
  </div>
);

export default ProfileFilter;
