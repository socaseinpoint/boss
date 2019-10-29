import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class DateRangeInput extends React.Component {
  constructor() {
    super();
    this.state = {
      focusedInput: null,
      startDate: moment(),
      endDate: moment().add(7, 'days'),
      fullscreen: true,
      dateFormat: 'D/M/Y',
      small: false,
      block: false,
      minimumNights: 7,
    };
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
  }

  handleDatesChange({ startDate, endDate }) {
    const { input } = this.props;
    const { onChange } = input;
    onChange({ startDate, endDate });
    this.setState({ startDate, endDate });
  }

  handleFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleChangeFullscreen() {
    const { fullscreen } = this.state;
    this.setState({ fullscreen: !fullscreen });
  }

  render() {
    const {
      startDate,
      endDate,
      focusedInput,
      dateFormat,
      block,
      small,
      fullscreen,
      minimumNights,
    } = this.state;
    function isOutsideRange() {
      return false;
    }

    return (
      <DateRangePicker
        startDate={startDate}
        startDateId="unique_start_date_id"
        endDate={endDate}
        endDateId="unique_end_date_id"
        onDatesChange={this.handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={this.handleFocusChange}
        displayFormat={dateFormat}
        block={block}
        small={small}
        withFullScreenPortal={fullscreen}
        minimumNights={minimumNights}
        isOutsideRange={isOutsideRange}
      />
    );
  }
}

DateRangeInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default DateRangeInput;
