export default function EventItem({ event }) {
  return (
    <div className="bg-blue-200 text-xs p-1 mt-1 rounded shadow">
      <div>{event.title}</div>
      <div className="text-[10px]">{event.time}</div>
    </div>
  );
}
