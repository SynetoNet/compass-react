import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ReactDatePicker from "react-datepicker";
import { Overlay, Popover } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";

const DatePicker = ({ selected, append, customInput, onChange, ...props }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(selected);
  const inputRef = useRef(null);
  const classes = classNames({});

  console.log({ append, customInput, show, date });

  if (append && customInput) {
    const Custom = customInput;
    return (
      <>
        <Custom
          onFocus={() => setShow(true)}
          value={date}
          onChange={onChange}
          ref={inputRef}
        />
        <Overlay target={inputRef.current} show={show} placement="bottom">
          <Popover>
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
    <ReactDatePicker className={classes} customInput={customInput} {...props} />
  );
};

DatePicker.propTypes = {
  append: PropTypes.bool
};

DatePicker.defaultProps = {};

export default DatePicker;
