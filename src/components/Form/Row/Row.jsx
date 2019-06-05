import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";

const Row = props => {
  return <BSForm.Row {...props} />;
};

Row.propTypes = {};

Row.defaultProps = {};

export default Row;
