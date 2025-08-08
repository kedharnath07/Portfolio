import EventItem from './EventItem';
import dayjs from 'dayjs';

export default function Calendar({ matrix, events, today }) {
  return (
    <div className="grid grid-cols-7 gap-1">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
        <div key={d} className="text-center font-semibold">{d}</div>
      ))}
      {matrix.flat().map((cell, idx) => {
        const dayEvents = events.filter(e => dayjs(e.date).isSame(cell.date, 'day'));
        return (
          <div
            key={idx}
            className={`h-24 p-1 border rounded overflow-hidden hover:bg-green-200 transition cursor-pointer ${
              !cell.isCurrentMonth ? 'bg-gray-100 text-gray-400' : ''
            } ${
              cell.date.isSame(today, 'day') ? 'border-2 border-blue-500' : ''
            }`}
          >
            <div className="text-xs font-bold">{cell.date.date()}</div>
            {dayEvents.map((event, i) => (
              <EventItem key={i} event={event} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
