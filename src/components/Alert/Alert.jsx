import React from "react";
import PropTypes from "prop-types";
import BSAlert from "react-bootstrap/Alert";
import "./Alert.scss";

class Alert extends React.Component {
  static Link = BSAlert.Link;
  static Heading = BSAlert.Heading;
  render() {
    return <BSAlert {...this.props} />;
  }
}

Alert.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light"
  ]),
  dismissible: PropTypes.bool
};

Alert.defaultProps = {
  variant: "primary",
  dismissible: false
};

export default Alert;
