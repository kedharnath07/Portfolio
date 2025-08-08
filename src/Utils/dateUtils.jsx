import dayjs from 'dayjs';

export const getMonthMatrix = (month, year) => {
  const startOfMonth = dayjs(`${year}-${month}-01`);
  const startDay = startOfMonth.day();
  const daysInMonth = startOfMonth.daysInMonth();
  const prevMonthDays = startOfMonth.subtract(1, 'month').daysInMonth();

  const matrix = [];
  let dayCount = 1;
  let nextMonthDay = 1;

  for (let week = 0; week < 6; week++) {
    const row = [];
    for (let day = 0; day < 7; day++) {
      const cellIndex = week * 7 + day;
      if (cellIndex < startDay) {
        row.push({
          date: dayjs(`${year}-${month}-01`).subtract(startDay - day, 'day'),
          isCurrentMonth: false
        });
      } else if (dayCount <= daysInMonth) {
        row.push({
          date: dayjs(`${year}-${month}-${dayCount}`),
          isCurrentMonth: true
        });
        dayCount++;
      } else {
        row.push({
          date: dayjs(`${year}-${month}-${daysInMonth}`).add(nextMonthDay++, 'day'),
          isCurrentMonth: false
        });
      }
    }
    matrix.push(row);
  }
  return matrix;
};