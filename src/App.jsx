import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonthMatrix } from './Utils/dateUtils';
import CalendarHeader from './components/CalenderHeader';
import Calendar from './components/Calender';

function App() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(setEvents);
  }, []);

  const handlePrev = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNext = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const matrix = getMonthMatrix(currentDate.month() + 1, currentDate.year());
  const today = dayjs();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <CalendarHeader currentDate={currentDate} onPrev={handlePrev} onNext={handleNext} />
      <Calendar matrix={matrix} events={events} today={today} />
      
    </div>
  );
}

export default App;
