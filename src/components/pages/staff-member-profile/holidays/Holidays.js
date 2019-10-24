import React from 'react';
import ProfileHolidays from '../../../partials/profile/holidays';

const mockHolidays = [
  {
    id: '1',
    type: 'Unpaid Holiday',
    status: 'Pending',
    startDate: 'Tue 15/11/2016',
    endDate: 'Wed 16/11/2016',
    note: '',
    created: [
      {
        id: '1',
        type: 'Requested:',
        subject: 'John Doe',
        date: '(09:30 Mon 14/11/2016)',
      },
      {
        id: '2',
        type: 'Accepted:',
        subject: 'Trulla Collier',
        date: '(10:30 Mon 14/11/2016)',
      },
    ],
    payslipDate: '20/11/2016',
  },
  {
    id: '2',
    type: 'Unpaid Holiday',
    status: 'Accepted',
    startDate: 'Tue 15/11/2016',
    endDate: 'Wed 16/11/2016',
    note: '',
    created: [
      {
        id: '1',
        type: 'Requested:',
        subject: 'John Doe',
        date: '(09:30 Mon 14/11/2016)',
      },
    ],
    payslipDate: '20/11/2016',
  },
];

const Holidays = () => <ProfileHolidays holidays={mockHolidays} />;

export default Holidays;
