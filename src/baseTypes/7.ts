/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  sunday = 'Sunday',
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = 'Wednesday',
  thursday = 'Thursday',
  friday = 'Friday',
  saturday = 'Saturday',
}

function isWeekend(day: Day): boolean {
  if (day === Day.sunday || day === Day.saturday) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend(Day.saturday));
