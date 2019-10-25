import React from 'react';
import PropTypes from 'prop-types';
import ProfileHolidaysTable from './table';
import ProfileBoard from '../board';
import ProfileManager from '../board/manager';
import ProfileFilter from '../board/filter';
import AddHolidays from './add';

const ProfileHolidays = ({ holidays }) => (
  <ProfileBoard
    header={(
      <>
        <h2 className="boss-board__title">Holidays and holiday requests</h2>
        <div className="boss-board__button-group">
          <AddHolidays />
        </div>
      </>
    )}
  >
    <ProfileManager>
      <div className="boss-board__manager-stats boss-board__manager-stats_layout_row">
        <div className="boss-count boss-count_adjust_row">
          <div className="boss-count__group">
            <p className="boss-count__number">6</p>
            <p className="boss-count__label">Days accured current tax year (Estimated)</p>
          </div>
        </div>
        <div className="boss-count boss-count_adjust_row">
          <div className="boss-count__group">
            <p className="boss-count__number">9</p>
            <p className="boss-count__label">Paid days logged in current tax year</p>
          </div>
        </div>
        <div className="boss-count boss-count_adjust_row">
          <div className="boss-count__group">
            <p className="boss-count__number">9</p>
            <p className="boss-count__label">Unpaid days logged in current tax year</p>
          </div>
        </div>
      </div>

      <div className="boss-board__manager-group boss-board__manager-group_role_data">
        <ProfileFilter />
        <div className="boss-board__manager-table">
          <ProfileHolidaysTable holidays={holidays} />
        </div>
      </div>
    </ProfileManager>
  </ProfileBoard>
);

ProfileHolidays.propTypes = {
  holidays: PropTypes.arrayOf(
    PropTypes.any,
  ),
};

ProfileHolidays.defaultProps = {
  holidays: [],
};

export default ProfileHolidays;
