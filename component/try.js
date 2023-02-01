const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const getDayOfWeek = (date) => days[date.getDay()];

const getMonthlyCalendar = (year, month) => {
  let calendar = [];
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  let currentDate = new Date(year, month, 1);

  for (let i = 0; i < daysInMonth; i++) {
    calendar.push({
      date: currentDate.getDate(),
      dayOfWeek: getDayOfWeek(currentDate),
      month: currentDate.toLocaleString("default", { month: "long" }),
      year: currentDate.getFullYear(),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return calendar;
};

const getYearlyCalendar = (year) => {
  let calendar = [];
  for (let i = 0; i < 12; i++) {
    calendar.push(getMonthlyCalendar(year, i));
  }
  return calendar;
};

let today = new Date();
let yearlyCalendar = getYearlyCalendar(today.getFullYear());
let months = yearlyCalendar.map((arr) => arr[0].month)
console.log(months)