import React from "react";

import BSForm from "react-bootstrap/Form";
import CompassCheck from "./Check/Check.jsx";
import CompassSwitch from "./Switch/Switch.jsx";

import "./Form.scss";

class Form extends React.Component {
  static Group = BSForm.Group;
  static Label = BSForm.Label;
  static Control = BSForm.Control;
  static Select = BSForm.Select;
  static Check = CompassCheck;
  static Text = BSForm.Text;
  static Row = BSForm.Row;
  static Switch = CompassSwitch;

  render() {
    return <BSForm {...this.props} />;
  }
}

export default Form;
