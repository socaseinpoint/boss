import { SERVER_BASE_URL } from '../constants/config';

export const fetchStaffMember = (id) => {
  return fetch(`${SERVER_BASE_URL}staff_members/${id}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      Authorization: 'Token token="4b960411f456c86f48edab5ed4c32059"',
    },
  }).then((response) => response.json());
};

export default fetchStaffMember;
