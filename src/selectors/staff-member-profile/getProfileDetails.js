import { getProfileSummary } from './getProfileSummary';
import { getProfileDescription } from './getProfileDescription';

export const getProfileDetails = (state) => {
  const {
    phone,
    id,
    name,
    email,
    staffType,
    venue,
  } = getProfileSummary(state);

  const {
    otherVenues,
    startDate,
    payRate,
    hourPreference,
    dayPreference,
    nationalInsuranceNumber,
    sageId,
    statusStatement,
    created,
    status,
    applicationPassword,
    gender,
    dateOfBirth,
    address,
  } = getProfileDescription(state);

  return {
    id,
    data: [
      {
        id: 1,
        label: 'Employment Details',
        fields: [
          {
            label: 'Main Venue',
            value: venue,
          },
          {
            label: 'Other Venues',
            value: otherVenues,
          },
          {
            label: 'Job Type',
            value: staffType,
          },
          {
            label: 'Start Date',
            value: startDate,
          },
          {
            label: 'Pay Rate',
            value: payRate,
          },
          {
            label: 'Hour Preference',
            value: hourPreference,
          },
          {
            label: 'Day Preference',
            value: dayPreference,
          },
          {
            label: 'National Insurance Number',
            value: nationalInsuranceNumber,
          },
          {
            label: 'Sage ID',
            value: sageId,
          },
          {
            label: 'Status Statement',
            value: statusStatement,
          },
        ],
      },
      {
        id: 2,
        label: 'Account Details',
        fields: [
          {
            label: 'Created',
            value: created,
          },
          {
            label: 'Status',
            value: status,
          },
          {
            label: 'User',
            value: 'No Associated User',
          },
          {
            label: 'Application Password',
            value: applicationPassword,
          },
          {
            label: 'Avatar Status',
            value: false,
          },
          {
            label: 'ID Scanner App Guid',
            value: 'N/A',
          },
        ],
      },
      {
        id: 3,
        label: 'Personal Details',
        fields: [
          {
            label: 'Name',
            value: name,
          },
          {
            label: 'Gender',
            value: gender,
          },
          {
            label: 'Date of Birth',
            value: dateOfBirth,
          },
        ],
      },
      {
        id: 4,
        label: 'Contact Details',
        fields: [
          {
            label: 'Email Address',
            value: email,
          },
          {
            label: 'Phone Number',
            value: phone,
          },
          {
            label: 'Address',
            value: address,
          },
        ],
      },
      {
        id: 5,
        label: 'Mobile Apps',
        fields: [
          {
            label: 'Some App',
            value: 'Send download email',
            href: '/',
          },
          {
            label: 'Other App',
            value: 'Send download email',
            href: '/',
          },
          {
            label: 'Another App',
            value: 'Send download email',
            href: '/',
          },
        ],
      },
      {
        id: 6,
        label: 'Revisions History',
        fields: [
        ],
      },
    ],
  };
};

export default getProfileDetails;
