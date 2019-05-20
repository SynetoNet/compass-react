import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ReactDatePicker from "react-datepicker";
import { Overlay, Popover } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";

const DatePicker = ({ selected, customInput, onChange, ...props }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(selected || "");
  const inputRef = useRef(null);
  const classes = classNames({});

  if (customInput) {
    const CustomInput = React.cloneElement(
      customInput,
      {
        onFocus: () => setShow(true),
        value: date,
        onChange: onChange,
        ref: inputRef
      },
      null
    );

    return (
      <>
        {CustomInput}
        <Overlay target={inputRef.current} show={show} placement="auto">
          <Popover className="popover-datepicker">
            <ReactDatePicker
              inline
              selected={date}
              className={classes}
              onSelect={val => {
                setDate(val);
                setShow(false);
              }}
              onClickOutside={() => setShow(false)}
              {...props}
            />
          </Popover>
        </Overlay>
      </>
    );
  }

  return (
    <ReactDatePicker
      className={classes}
      selected={selected}
      onChange={onChange}
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
  filterDate: PropTypes.func
};

DatePicker.defaultProps = {
  selected: undefined
};

export default DatePicker;
