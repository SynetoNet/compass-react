import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";

const Text = props => {
  return <BSForm.Text {...props} />;
};

Text.propTypes = {};

Text.defaultProps = {};

export default Text;
