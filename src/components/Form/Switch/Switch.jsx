import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";
import RSwitch from "react-switch";

import "./Switch.scss";

const Switch = props => {
  return (
    <RSwitch
      handleDiameter={22}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      height={10}
      // width={40}
      offColor="#e04c59"
      {...props}
    />
  );
};

Switch.propTypes = {
  disabled: PropTypes.bool
};

Switch.defaultProps = {
  disabled: false
};

export default Switch;
