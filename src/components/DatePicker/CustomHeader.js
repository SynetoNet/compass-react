import React from "react";

import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import uniq from "lodash/uniq";

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
  "December"
];

const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  ...props
}) => {
  const years = getYearsRange(props);

  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <button
        className="react-datepicker__navigation react-datepicker__navigation--previous"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">Previous Month</span>
      </button>
      <select
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(value)}
        className="datepicker-dropdown datepicker-year-dropdown"
      >
        {years.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={getMonth(date)}
        onChange={({ target: { value } }) => changeMonth(value)}
        className="datepicker-dropdown datepicker-month-dropdown"
      >
        {months.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>

      <button
        className="react-datepicker__navigation react-datepicker__navigation--next"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">Next Month</span>
      </button>
    </div>
  );
};

export default CustomHeader;

function getYearsRange({ minDate, maxDate, includeDates }) {
  if (includeDates) {
    return uniq(includeDates.map(getYear)).sort();
  }

  let startYear = 2000;
  let endYear = getYear(new Date()) + 10;

  if (minDate) {
    startYear = Math.max(startYear, getYear(minDate));
  }
  if (maxDate) {
    endYear = Math.min(endYear, getYear(maxDate));
  }

  return range(startYear, endYear, 1);
}
