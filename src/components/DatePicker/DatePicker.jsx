import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ReactDatePicker from "react-datepicker";
import { Overlay, Popover } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";

const DatePicker = ({ selected, customInput, onChange, ...props }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(selected);
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
  /**
   * You must pass a __`Date Object`__, not a `string`
   */
  selected: PropTypes.oneOfType([
    PropTypes.oneOf(["", undefined]),
    PropTypes.instanceOf(Date)
  ]),
  onChange: PropTypes.func.isRequired,
  /**
   * You can pass your custom input element
   * (otherwise it will render a default `<input />` tag)
   */
  customInput: PropTypes.element
};

DatePicker.defaultProps = {
  selected: undefined
};

export default DatePicker;
