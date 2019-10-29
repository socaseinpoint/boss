import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import {
  InputGroup,
  SelectInput,
  DateRangeInput,
  FormRow,
  Label,
} from '../../../../../base/form';
import Textarea from '../../../../../base/form/textarea';
import { holidayTypeOptions } from '../../../../../../utils/options';

const required = (value) => (value ? null : 'This is a required field!');

const EditHolidaysForm = ({ onSubmit, title }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitError }) => (
      <>
        {
          submitError && (
            <div className="boss-modal-window__alert">
              <div className="boss-alert boss-alert_role_area boss-alert_context_above">
                <p className="boss-alert__text">There was a problem updating this holiday. Please check for errors and try again</p>
              </div>
            </div>
          )
        }
        <div className="boss-modal-window__form">
          <form onSubmit={handleSubmit} className="boss-form">
            <FormRow>
              <div className="boss-form__field boss-form__field_layout_max">
                <Label>Date</Label>
                <div className="date-range-picker  date-range-picker_type_interval-fluid date-range-picker_type_icon">
                  <Field name="dateRange" component={DateRangeInput} />
                </div>
              </div>
              <div className="boss-form__field boss-form__field_layout_third">
                <Label>Holiday type</Label>
                <div className="boss-form__select">
                  <Field name="holidayType" component={SelectInput} options={holidayTypeOptions} />
                </div>
              </div>
            </FormRow>
            <InputGroup>
              <Label>Note</Label>
              <Field type="text" name="note" component={Textarea} validate={required} />
            </InputGroup>
            <InputGroup>
              <button className="boss-button boss-button_role_add boss-form__submit" type="submit">{title}</button>
            </InputGroup>
          </form>
        </div>
      </>
    )}
  />
);

EditHolidaysForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default EditHolidaysForm;
