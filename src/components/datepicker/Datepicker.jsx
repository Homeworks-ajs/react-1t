import React from 'react'
import PropTypes from 'prop-types'
import DatepickerBody from '../datepicker-body/DatepickerBody';
import DatepickerHeader from '../datepicker-header/DatepickerHeader';


function Datepicker(props) {
    const {calendarData, dateList} = props;


  return (
    <div className="ui-datepicker">
      <DatepickerHeader calendarData={calendarData}/>
      <DatepickerBody dateList={dateList}/>
    </div>
  )
}

Datepicker.propTypes = {
  calendarData: PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    monthName: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  dateList: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        currentDay: PropTypes.bool.isRequired,
        thisMonth: PropTypes.bool.isRequired,
        date: PropTypes.object.isRequired
      })
    )
  )
}

export default Datepicker
