import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import {
  Input,
  SelectInput,
  InputGroup,
  Label,
  DatePickerInput,
} from '../../../../base/form';
import { updatePersonalDetails } from '../../../../../services/staffMemberProfile';

function onSubmit(fields, id) {
  updatePersonalDetails(id, fields);
}

const PersonalDetailsForm = ({
  id,
  firstName,
  surname,
  dateOfBirth,
  genderInitial,
}) => (
  <Form
    onSubmit={(fields) => onSubmit(fields, id)}
    initialValues={{
      firstName,
      surname,
      gender: genderInitial,
      dateOfBirth,
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
        <InputGroup>
          <Label>First name*</Label>
          <Field type="text" name="firstName" component={Input} />
        </InputGroup>
        <InputGroup>
          <Label>Surname*</Label>
          <Field type="text" name="surname" component={Input} />
        </InputGroup>
        <InputGroup>
          <Label>Gender*</Label>
          <Field
            type="text"
            name="gender"
            component={SelectInput}
            options={[
              {
                label: 'Male',
                value: 'Male',
              },
              {
                label: 'Female',
                value: 'Female',
              },
            ]}
          />
        </InputGroup>
        <InputGroup>
          <Label>Date of birth*</Label>
          <Field name="dateOfBirth" component={DatePickerInput} />
        </InputGroup>
        <div className="boss-form__field boss-form__field_justify_end">
          <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
        </div>
      </form>
    )}
  />
);

PersonalDetailsForm.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  surname: PropTypes.string,
  dateOfBirth: PropTypes.string,
  genderInitial: PropTypes.any,
};

PersonalDetailsForm.defaultProps = {
  firstName: '',
  surname: '',
  dateOfBirth: '',
  genderInitial: null,
};

export default PersonalDetailsForm;
