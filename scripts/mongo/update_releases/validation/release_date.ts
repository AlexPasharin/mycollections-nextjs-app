import { Result } from "../../../../types/utils";

const days_in_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const releaseDateIsValid = (dateString: string | null): Result<true> => {
  if (dateString === null) {
    return true;
  }

  const dateMatch = dateString.match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);

  if (!dateMatch) {
    return {
      errors: [
        `release_date ${dateString} does not have a required format YYYY(-MM)(-DD)`,
      ],
    };
  }

  const year = Number(dateMatch[1]);
  const month = Number(dateMatch[2]);
  const day = Number(dateMatch[3]);

  if (month && (month < 1 || month > 12)) {
    return {
      errors: [
        `release_date ${dateString} has incorect value ${month} for month`,
      ],
    };
  }

  const daysInMonth =
    month === 2 && isLeapYear(year)
      ? days_in_month[month] + 1
      : days_in_month[month];

  if (day && (day < 1 || day > daysInMonth)) {
    return {
      errors: [`release_date ${dateString} has incorect value ${day} for day `],
    };
  }

  return true;
};
