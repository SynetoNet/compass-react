import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";

const Group = props => {
  return <BSForm.Group {...props} />;
};

Group.propTypes = {
  controlId: PropTypes.string
};

Group.defaultProps = {
  controlId: ""
};

export default Group;
