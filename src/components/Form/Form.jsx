import React, { useState } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";
import BSListGroup from "react-bootstrap/ListGroup";
import RSwitch from "react-switch";

import "./Form.scss";
class Form extends React.Component {
  static Group = BSForm.Group;
  static Label = BSForm.Label;
  static Control = BSForm.Control;
  static Check = props => {
    return <BSForm.Check custom {...props} />;
  };
  static Text = BSForm.Text;
  static Row = BSForm.Row;
  static Switch = props => {
    return (
      <RSwitch
        handleDiameter={22}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        height={10}
        width={40}
        offColor="#e04c59"
        {...props}
      />
    );
  };

  render() {
    const { ...props } = this.props;
    return <BSForm {...props} />;
  }
}
export default Form;
