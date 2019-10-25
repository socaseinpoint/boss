import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../../../base/table';
import Row from '../../../../base/table/row';
import Cell from '../../../../base/table/cell';
import TableInfo from '../../../../base/table/table-info';
import EditHolidays from '../edit';

const ProfileHolidaysTable = ({ holidays }) => (
  <Table customClassName="boss-table_page_smp-holiday-requests">
    <Row>
      <Cell htmlRole="header">Types</Cell>
      <Cell htmlRole="header">Status</Cell>
      <Cell htmlRole="header">Dates</Cell>
      <Cell htmlRole="header">Note</Cell>
      <Cell htmlRole="header">Created</Cell>
      <Cell htmlRole="header">Payslip Date</Cell>
      <Cell htmlRole="header" />
    </Row>
    {
      holidays.map((holiday) => (
        <Row key={holiday.id}>
          <Cell>
            <TableInfo label="Types" text={holiday.type} />
          </Cell>
          <Cell>
            {holiday.status === 'Pending' ? <TableInfo textHtmlRole="pending-status" label="Status" text={holiday.status} /> : null}
            {holiday.status === 'Accepted' ? <TableInfo textHtmlRole="success-status" label="Status" text={holiday.status} /> : null}
            {holiday.status === 'Rejected' ? <TableInfo textHtmlRole="alert-status" label="Status" text={holiday.status} /> : null}
          </Cell>
          <Cell>
            <TableInfo
              label="Dates"
              text={(
                <>
                  <span>{holiday.startDate}</span>
                  <br />
                  <span>{holiday.endDate}</span>
                </>
              )}
            />
          </Cell>
          <Cell>
            <TableInfo label="Note" text={holiday.note} />
          </Cell>
          <Cell>
            <TableInfo
              label="Created"
              text={(
                <>
                  {
                    holiday.created.map((item) => (
                      <div className="boss-table__text" key={item.id}>
                        <span className="boss-table__text-line">
                          <span className="boss-table__text-label">{item.type}</span>
                          <span>{item.subject}</span>
                        </span>
                        <span className="boss-table__text-meta">{item.date}</span>
                      </div>
                    ))
                  }
                </>
              )}
            />
          </Cell>
          <Cell>
            <TableInfo label="Note" text={holiday.payslipDate} />
          </Cell>
          <Cell>
            <TableInfo
              label="Action"
              actions={(
                <>
                  <EditHolidays />
                  <button type="button" className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action">Delete</button>
                </>
              )}
            />
          </Cell>
        </Row>
      ))
    }
  </Table>
);

ProfileHolidaysTable.propTypes = {
  holidays: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
};

export default ProfileHolidaysTable;
