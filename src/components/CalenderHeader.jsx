export default function CalendarHeader({ currentDate, onPrev, onNext }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={onPrev}
        className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition cursor-pointer"
      >
        Previous Month
      </button>
      <h2 className="text-xl font-bold">{currentDate.format('MMMM YYYY')}</h2>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition cursor-pointer"
      >
        Next Month
      </button>
    </div>
  );
}
