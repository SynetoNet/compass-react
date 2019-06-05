import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";

const Check = props => {
  return <BSForm.Check custom {...props} />;
};

Check.propTypes = {
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(["radio", "checkbox"])
};

Check.defaultProps = {
  disabled: false,
  inline: false,
  type: "checkbox"
};

export default Check;
