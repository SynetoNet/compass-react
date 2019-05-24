import React from "react";

import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import range from "lodash/range";

const years = range(1960, getYear(new Date()) + 20, 1);
const months = Object.entries({
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
});

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
        {months.map(month => (
          <option key={month[0]} value={month[0]}>
            {month[1]}
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
