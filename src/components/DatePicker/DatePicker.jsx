import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import format from "date-fns/format";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import addMonths from "date-fns/addMonths";
import range from "lodash/range";
import ReactDatePicker from "react-datepicker";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";
import { getDate } from "date-fns";

const DatePicker = ({ selected, ...props }) => {
  const [internalDate, setInternalDate] = useState(selected);
  const [showDatePicker, toggleDatePicker] = useState(false);
  const inputRef = useRef(null);
  const classes = classNames({});
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

  if (props.customInput) {
    const CustomInput = React.cloneElement(
      props.customInput,
      {
        onFocus: () => toggleDatePicker(true),
        onClick: () => toggleDatePicker(true),
        ref: inputRef,
        // empty handler, to avoid the warning of passing a value without onChange handler
        // the actual update is handled when a date is selected
        onChange: () => {},
        // format the value, so it appears properly on the input
        value: formatDate(internalDate, props.dateFormat)
      },
      null
    );

    return (
      <>
        {CustomInput}
        <Overlay
          target={inputRef.current}
          show={showDatePicker}
          placement="auto"
        >
          <Popover className="popover-datepicker">
            <ReactDatePicker
              selected={internalDate}
              inline
              className={classes}
              onSelect={val => {
                setInternalDate(val);
                props.onChange(val);
                toggleDatePicker(false);
              }}
              onClickOutside={() => toggleDatePicker(false)}
              {...props}
            />
          </Popover>
        </Overlay>
      </>
    );
  }

  return (
    <ReactDatePicker
      selected={internalDate}
      className={classes}
      onSelect={val => {
        setInternalDate(val);
        props.onChange(val);
      }}
      renderCustomHeader={({
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
      }}
      {...props}
    />
  );
};

DatePicker.propTypes = {
  /** You must pass a __`Date`__, not a `string` */
  selected: PropTypes.oneOfType([
    PropTypes.oneOf(["", undefined]),
    PropTypes.instanceOf(Date)
  ]),
  onChange: PropTypes.func.isRequired,
  /**
   * You can pass your custom input element
   * (otherwise it will render a default `<input />` tag)
   */
  customInput: PropTypes.element,
  placeholderText: PropTypes.string,
  /** You must pass an __`Array<Date>`__ */
  highlightDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  /** You must pass a __`Date`__ */
  minDate: PropTypes.instanceOf(Date),
  /** You must pass a __`Date`__ */
  maxDate: PropTypes.instanceOf(Date),
  /** You must pass an __`Array<Date>`__ */
  includeDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  /** You must pass an __`Array<Date>`__ */
  excludeDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  /**
   * Filter function, return __`true`__ to enable date, __`false`__ to disable
   *
   * @param {Object} currentDay
   */
  filterDate: PropTypes.func,
  /** see [documentation](https://date-fns.org/v2.0.0-alpha.23/docs/format) for details */
  dateFormat: PropTypes.string
};

DatePicker.defaultProps = {
  selected: undefined,
  dateFormat: "dd/MM/yyyy"
};

function formatDate(dateObject, dateFormat) {
  return (
    dateObject &&
    format(dateObject, dateFormat, {
      awareOfUnicodeTokens: true
    })
  );
}

export default DatePicker;
