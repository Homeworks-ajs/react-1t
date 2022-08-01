import React from 'react'
import PropTypes from 'prop-types'

function DatepickerBody(props) {
  return (
    <table className="ui-datepicker-calendar">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col className="ui-datepicker-week-end" />
        <col className="ui-datepicker-week-end" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
      </thead>
      <tbody>
        {props.dateList.map((weekdays, i) => {
          return <tr key={i}>
            {weekdays.map((element, i) => <td key={i} className={!element.thisMonth ? "ui-datepicker-other-month" : element.currentDay ? "ui-datepicker-today" : null}>{element.date.date()}</td>)}
          </tr>;
        })}
      </tbody>
    </table>
  )
}

DatepickerBody.propTypes = {
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

export default DatepickerBody
