import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import format from "date-fns/format";

import ReactDatePicker from "react-datepicker";
import { Overlay, Popover } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";

const DatePicker = ({ selected, ...props }) => {
  const [internalDate, setInternalDate] = useState(selected);
  const [showDatePicker, toggleDatePicker] = useState(false);
  const inputRef = useRef(null);
  const classes = classNames({});

  if (props.customInput) {
    const _formattedInternalDate =
      internalDate &&
      format(internalDate, props.dateFormat, {
        awareOfUnicodeTokens: true
      });

    const CustomInput = React.cloneElement(
      props.customInput,
      {
        onFocus: () => toggleDatePicker(true),
        ref: inputRef,
        onChange: () => {},
        value: _formattedInternalDate
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

  return <ReactDatePicker selected={selected} className={classes} {...props} />;
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

export default DatePicker;
