import React from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";

import "./Control.scss";

/**
 * @visibleName Inputs
 */
const Control = props => {
  return <BSForm.Control {...props} />;
};

Control.propTypes = {
  as: PropTypes.oneOf(["input", "textarea", "select"]),
  type: PropTypes.string,
  placeholder: PropTypes.string
};

Control.defaultProps = {
  as: "input"
};

export default Control;
