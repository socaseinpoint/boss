import { SERVER_BASE_URL } from '../constants/config';

const fetchProps = {
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    Authorization: 'Token token="4b960411f456c86f48edab5ed4c32059"',
    'Content-Type': 'application/json',
  },
};

export const fetchStaffMember = (id) => fetch(`${SERVER_BASE_URL}staff_members/${id}`, {
  ...fetchProps,
  method: 'GET',
}).then((response) => response.json());

export const updateEmploymentDetails = (id, body) => fetch(`${SERVER_BASE_URL}staff_members/${id}/update_employment_details`, {
  ...fetchProps,
  method: 'POST',
  body: JSON.stringify(body),
}).then((response) => response.json());

export const updateContactDetails = (id, body) => fetch(`${SERVER_BASE_URL}staff_members/${id}/update_contact_details`, {
  ...fetchProps,
  method: 'POST',
  body: JSON.stringify(body),
}).then((response) => response.json());

export const updatePersonalDetails = (id, body) => fetch(`${SERVER_BASE_URL}staff_members/${id}/update_personal_details`, {
  ...fetchProps,
  method: 'POST',
  body: JSON.stringify(body),
}).then((response) => response.json());
