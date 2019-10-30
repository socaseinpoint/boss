
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

class DateRangeInput extends React.Component {
  constructor(props) {
    super(props);

    const { input } = this.props;
    const { value } = input;

    let date = null;

    if (value) {
      date = moment(value, 'DD-MM-YYYY');
    }

    this.state = {
      date,
      calendarFocused: false,
      withFullScreenPortal: true,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState(() => ({ date }));
    const { onChange } = this.props.input;
    onChange((date));
  }

  onFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }));
  }

  render() {
    const { date, calendarFocused, withFullScreenPortal } = this.state;
    return (
      <div className="date-control date-control_type_icon">
        <SingleDatePicker
          date={date}
          onDateChange={this.onDateChange}
          focused={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          withFullScreenPortal={withFullScreenPortal}
          displayFormat="DD/MM/YYYY"
        />
      </div>
    );
  }
}

DateRangeInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }),
};

DateRangeInput.defaultProps = {
  input: {
    value: moment(),
  },
};

export default DateRangeInput;
