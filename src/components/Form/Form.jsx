import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";
import CompassCheck from "./Check/Check.jsx";
import CompassControl from "./Control/Control.jsx";
import CompassGroup from "./Group/Group.jsx";
import CompassLabel from "./Label/Label.jsx";
import CompassRow from "./Row/Row.jsx";
import CompassSwitch from "./Switch/Switch.jsx";

import "./Form.scss";
class Form extends React.Component {
  static Group = CompassGroup;
  static Label = CompassLabel;
  static Control = CompassControl;
  static Check = CompassCheck;
  static Text = BSForm.Text;
  static Row = CompassRow;
  static Switch = CompassSwitch;

  render() {
    const { ...props } = this.props;
    return <BSForm {...props} />;
  }
}
export default Form;
