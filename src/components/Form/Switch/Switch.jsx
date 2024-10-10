import React from "react";
import PropTypes from "prop-types";
import RSwitch from "react-switch";

import "./Switch.scss";

const Switch = props => {
  const { disabled = false } = props;
  return (
    <RSwitch
      handleDiameter={22}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      height={10}
      width={40}
      offColor="#e04c59"
      disabled={disabled}
      {...props}
    />
  );
};

Switch.propTypes = {
  disabled: PropTypes.bool
};

export default Switch;
