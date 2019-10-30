import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import {
  Input,
  SelectInput,
  InputGroup,
  Label,
  DatePickerInput,
  FieldNote,
} from '../../../../base/form';
import { updateEmploymentDetails } from '../../../../../services/staffMemberProfile';

function onSubmit(fields, id) {
  updateEmploymentDetails(id, fields);
}

const EmploymentDetailsForm = ({
  venuesOptions,
  staffTypesOptions,
  startsAt,
  payRatesOptions,
  dayPreferenceNote,
  hoursPreferenceNote,
  nationalInsuranceNumber,
  sageId,
  mainVenueInitial,
  staffTypeInitial,
  payRateInitial,
  otherVenueInitial,
  id,
}) => (
  <Form
    onSubmit={(fields) => onSubmit(fields, id)}
    initialValues={{
      mainVenue: mainVenueInitial,
      staffType: staffTypeInitial,
      payRate: payRateInitial,
      otherVenues: otherVenueInitial,
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
        <InputGroup>
          <Label>Main Venue</Label>
          <Field
            name="mainVenue"
            component={SelectInput}
            options={venuesOptions}
          />
        </InputGroup>
        <InputGroup>
          <Label>Other Venues</Label>
          <Field name="otherVenues" component={SelectInput} options={venuesOptions} isMulti />
        </InputGroup>
        <InputGroup>
          <Label>Staff Type*</Label>
          <Field name="staffType" component={SelectInput} options={staffTypesOptions} />
        </InputGroup>
        <InputGroup>
          <Label>Starts At*</Label>
          <Field name="startsAt" component={DatePickerInput} initialValue={startsAt} />
        </InputGroup>
        <InputGroup>
          <Label>Pay Rate*</Label>
          <Field name="payRate" component={SelectInput} options={payRatesOptions} />
        </InputGroup>
        <InputGroup>
          <Label>Day preference</Label>
          <Field type="text" name="dayPreference" component={Input} initialValue={dayPreferenceNote} />
          <FieldNote>
            Preferred days to work displayed to the rota (e.g mornings and weekends)
          </FieldNote>
        </InputGroup>
        <InputGroup>
          <Label>Hours preference</Label>
          <Field type="text" name="hoursPreference" component={Input} initialValue={hoursPreferenceNote} />
          <FieldNote>
            Preferred number of hours to work per week displayed in the rota (e.g 40,20+)
          </FieldNote>
        </InputGroup>
        <InputGroup>
          <Label>National Insurance Number</Label>
          <Field type="text" name="nationalInsuranceNumber" component={Input} initialValue={nationalInsuranceNumber} />
        </InputGroup>
        <InputGroup>
          <Label>Sage ID</Label>
          <Field type="text" name="sageId" component={Input} initialValue={sageId} />
        </InputGroup>
        <div className="boss-form__field boss-form__field_justify_end">
          <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
        </div>
      </form>
    )}
  />
);

EmploymentDetailsForm.propTypes = {
  id: PropTypes.string.isRequired,
  venuesOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  staffTypesOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  payRatesOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  startsAt: PropTypes.string,
  dayPreferenceNote: PropTypes.string,
  hoursPreferenceNote: PropTypes.string,
  nationalInsuranceNumber: PropTypes.string,
  sageId: PropTypes.string,
  mainVenueInitial: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  staffTypeInitial: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  payRateInitial: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  otherVenueInitial: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
};

EmploymentDetailsForm.defaultProps = {
  startsAt: '',
  dayPreferenceNote: '',
  hoursPreferenceNote: '',
  nationalInsuranceNumber: '',
  sageId: '',
  mainVenueInitial: null,
  staffTypeInitial: null,
  payRateInitial: null,
  otherVenueInitial: null,
};

export default EmploymentDetailsForm;
