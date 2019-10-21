import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input, Label, InputGroup } from '../../../base/form';
import Button from '../../../base/button';
import styles from './dashboard-filter-form.module.css';

function onSubmit(e) {
  console.log('submit', e);
}

const DashboardFilterForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.col}>
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

          <div className={styles.collast}>
            <InputGroup>
              <Label>Venue</Label>
              <Field name="vanue" component={Input} placeholder="First Name" />
            </InputGroup>

            <InputGroup>
              <Label>Staff Type</Label>
              <Field name="stafftype" component={Input} placeholder="First Name" />
            </InputGroup>

            <InputGroup>
              <Button type="submit" value="Update" />
            </InputGroup>
          </div>
        </div>
      </form>
    )}
  />
)

export default DashboardFilterForm;
