import './App.css';
import Datepicker from './components/datepicker/Datepicker';
import CalendarUtills from './logic/Calendar';

function App() {
  const calendarData = new CalendarUtills().getDateMap();
  const dateList = new CalendarUtills().getMonthList();

  return (
    <Datepicker calendarData={calendarData} dateList={dateList} />
  );
}

export default App;
