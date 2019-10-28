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

function onSubmit(e) {
  console.log(e);
}

const PersonalDetailsForm = ({
  firstName,
  surname,
  gender,
  dateOfBirth,
}) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
        <InputGroup>
          <Label>First name*</Label>
          <Field type="text" name="firstName" component={Input} initialValue={firstName} />
        </InputGroup>
        <InputGroup>
          <Label>Surname*</Label>
          <Field type="text" name="surname" component={Input} initialValue={surname} />
        </InputGroup>
        <InputGroup>
          <Label>Gender*</Label>
          <Field
            type="text"
            name="gender"
            component={SelectInput}
            initialValue={gender}
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
          <Field name="dateOfBirth" component={DatePickerInput} initialValue={dateOfBirth} />
        </InputGroup>
        <div className="boss-form__field boss-form__field_justify_end">
          <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
        </div>
      </form>
    )}
  />
);

PersonalDetailsForm.propTypes = {
  firstName: PropTypes.string,
  surname: PropTypes.string,
  gender: PropTypes.string,
  dateOfBirth: PropTypes.string,
};

PersonalDetailsForm.defaultProps = {
  firstName: '',
  surname: '',
  gender: '',
  dateOfBirth: '',
};

export default PersonalDetailsForm;
