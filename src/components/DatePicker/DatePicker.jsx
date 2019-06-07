import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import format from "date-fns/format";
import en from "date-fns/locale/en-GB";

import ReactDatePicker from "react-datepicker";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import CustomHeader from "./CustomHeader.js";
import Form from "../Form/Form";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";

const DatePicker = ({ selected, appendToBody, ...props }) => {
  const [internalDate, setInternalDate] = useState(selected);
  const [showDatePicker, toggleDatePicker] = useState(false);
  const inputRef = useRef(null);
  // const classes = classNames({});

  const InputComponent = props.customInput ? (
    props.customInput
  ) : (
    <Form.Control placeholder={props.placeholderText} />
  );

  if (!appendToBody) {
    return (
      <ReactDatePicker
        selected={internalDate}
        customInput={InputComponent}
        // className={classes}
        renderCustomHeader={headerProps => (
          <CustomHeader {...headerProps} {...props} />
        )}
        locale={en}
        {...props}
        onChange={val => {
          setInternalDate(val);
          props.onChange(val);
        }}
      />
    );
  }

  const CustomInput = React.cloneElement(
    InputComponent,
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
      <Overlay target={inputRef.current} show={showDatePicker} placement="auto">
        <Popover className="popover-datepicker">
          <ReactDatePicker
            selected={internalDate}
            inline
            // className={classes}
            onClickOutside={() => toggleDatePicker(false)}
            renderCustomHeader={headerProps => (
              <CustomHeader {...headerProps} {...props} />
            )}
            locale={en}
            {...props}
            onChange={val => {
              setInternalDate(val);
              props.onChange(val);

              if (!props.showTimeSelect) {
                toggleDatePicker(false);
              }
            }}
          />
        </Popover>
      </Overlay>
    </>
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
  dateFormat: PropTypes.string,
  inline: PropTypes.bool
  // appendToBody: PropTypes.bool
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
