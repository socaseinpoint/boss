import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import {
  Input,
  InputGroup,
  Label,
} from '../../../../base/form';
import { updateContactDetails } from '../../../../../services/staffMemberProfile';

function onSubmit(fields, id) {
  updateContactDetails(id, fields);
}

const ContactDetailsForm = ({
  id,
  email,
  phoneNumber,
  address,
  postcode,
  country,
}) => (
  <Form
    onSubmit={(fields) => onSubmit(fields, id)}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
        <InputGroup>
          <Label>Email</Label>
          <Field type="text" name="emailAddress" component={Input} initialValue={email} />
        </InputGroup>
        <InputGroup>
          <Label>Phone Number</Label>
          <Field type="text" name="phoneNumber" component={Input} initialValue={phoneNumber} />
        </InputGroup>
        <InputGroup>
          <Label>Address</Label>
          <Field type="text" name="address" component={Input} initialValue={address} />
        </InputGroup>
        <InputGroup>
          <Label>Postcode</Label>
          <Field type="text" name="postcode" component={Input} initialValue={postcode} />
        </InputGroup>
        <InputGroup>
          <Label>Country</Label>
          <Field type="text" name="country" component={Input} initialValue={country} />
        </InputGroup>
        <InputGroup>
          <Label>County</Label>
          <Field type="text" name="county" component={Input} />
        </InputGroup>
        <div className="boss-form__field boss-form__field_justify_end">
          <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
        </div>
      </form>
    )}
  />
);

ContactDetailsForm.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  address: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string,
};

ContactDetailsForm.defaultProps = {
  email: '',
  phoneNumber: '',
  address: '',
  postcode: '',
  country: '',
};

export default ContactDetailsForm;
