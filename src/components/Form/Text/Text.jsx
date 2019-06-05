import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";

import "./Text.scss";

const Text = props => {
  return <BSForm.Text {...props} />;
};

Text.propTypes = {};

Text.defaultProps = {};

export default Text;
