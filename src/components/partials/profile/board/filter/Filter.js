import React from 'react';

const ProfileFilter = () => (
  <div className="boss-board__manager-filter">
    <form action="#" className="boss-form">
      <div className="boss-form__group boss-form__group_position_last">
        <h3 className="boss-form__group-title">Filter</h3>
        <div className="boss-form__row boss-form__row_align_center boss-form__row_desktop boss-form__row_position_last">
          <div className="boss-form__field boss-form__field_layout_quarter">
            <label className="boss-form__label"><span className="boss-form__label-text">Type</span></label>
            <div className="boss-form__select">
              React Select
              </div>
            <div className="boss-form__field boss-form__field_layout_max boss-form__field_no-label">
              <div className="date-range-picker date-range-picker_type_interval-fluid date-range-picker_type_icon date-range-picker_no-label">
                React dates
                <div className="boss-form__field boss-form__field_layout_min boss-form__field_no-label">
                  <button className="boss-button boss-form__submit" type="submit">Update</button>
                </div>
              </div>

              <div className="boss-form__row boss-form__row_mobile boss-form__row_position_last">
                <div className="boss-form__field boss-form__field_layout_quarter">
                  <label className="boss-form__label"><span className="boss-form__label-text">Type</span></label>
                  <div className="boss-form__select">
                    React Select
                  </div>
                  <div className="boss-form__field boss-form__field_layout_max">
                    <div className="date-range-picker date-range-picker_type_interval-fluid date-range-picker_type_icon date-range-picker_no-label">
                      React Dates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default ProfileFilter;
