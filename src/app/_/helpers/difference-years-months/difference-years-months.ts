export function differenceYearsMonths(
  startDate: string,
  endDate: string,
): { years: number; months: number } {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) {
    return { years: 0, months: 0 };
  }

  const startYear = start.getUTCFullYear();
  const startMonth = start.getUTCMonth();
  const startDay = start.getUTCDate();

  const endYear = end.getUTCFullYear();
  const endMonth = end.getUTCMonth();
  const endDay = end.getUTCDate();

  let years = endYear - startYear;
  let months = endMonth - startMonth;

  // If the end day-of-month is before the start day-of-month, the last month is not complete yet.
  if (endDay < startDay) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
}