import React from 'react'
import PropTypes from 'prop-types'

function DatepickerHeader(props) {
  const {day, month, monthName, weekday, year} = props.calendarData;

  return (
    <>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekday}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{day}</div>
          <div className="ui-datepicker-material-month">{monthName}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
    </>
  )
}

DatepickerHeader.propTypes = {
  calendarData: PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    monthName: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })
}

export default DatepickerHeader
