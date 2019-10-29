import { SERVER_BASE_URL } from '../constants/config';

export const fetchStaffMember = (id) => fetch(`${SERVER_BASE_URL}staff_members/${id}`, {
  method: 'GET',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    Authorization: 'Token token="4b960411f456c86f48edab5ed4c32059"',
  },
}).then((response) => response.json());

export const updateEmploymentDetails = (id, body) => fetch(`${SERVER_BASE_URL}staff_members/${id}/update_employment_details`, {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    Authorization: 'Token token="4b960411f456c86f48edab5ed4c32059"',
  },
  body: JSON.stringify(body),
}).then((response) => response.json());

export const updateContactDetails = (id, body) => fetch(`${SERVER_BASE_URL}staff_members/${id}/update_contact_details`, {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    Authorization: 'Token token="4b960411f456c86f48edab5ed4c32059"',
  },
  body: JSON.stringify(body),
}).then((response) => response.json());
