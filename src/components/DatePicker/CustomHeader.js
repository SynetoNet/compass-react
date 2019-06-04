import React from "react";

import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import range from "lodash/range";

const years = range(1960, getYear(new Date()) + 20, 1);
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
  nextMonthButtonDisabled
}) => {
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
      />
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
      />
    </div>
  );
};

export default CustomHeader;
