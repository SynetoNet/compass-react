import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";

const Label = props => {
  return <BSForm.Label {...props} />;
};

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
