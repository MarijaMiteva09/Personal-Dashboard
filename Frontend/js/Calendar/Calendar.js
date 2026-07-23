let currentDate = new Date();

export function renderCalendarHeader() {
  const today = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthYearElement = document.getElementById("month-year");
  const calendarDaysElement = document.getElementById("calendar-days");

  calendarDaysElement.innerHTML = "";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  monthYearElement.textContent = `${months[currentMonth]} ${currentYear}`;

  const firstDay = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div");

    emptyDay.classList.add("empty-day");

    calendarDaysElement.appendChild(emptyDay);
  }

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");

    dayElement.classList.add("day");

    dayElement.textContent = day;

    const isToday =
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();

    if (isToday) {
      dayElement.classList.add("today");
    }

    calendarDaysElement.appendChild(dayElement);
  }
}

export function changeMonth(amount) {
  currentDate.setMonth(currentDate.getMonth() + amount);

  renderCalendarHeader();
}
