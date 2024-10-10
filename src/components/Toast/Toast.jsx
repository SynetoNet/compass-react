import React from "react";
import PropTypes from "prop-types";
import BSToast from "react-bootstrap/Toast";

import "./Toast.scss";
class Toast extends React.Component {
  static Header = BSToast.Header;
  static Body = BSToast.Body;
  static defaultProps = {
    color: "secondary",
    show: true,
    delay: 3000,
    autohide: false
  };
  render() {
    const { color, ...props } = this.props
    return <BSToast className={"toast-" + color} {...props} />;
  }
}

Toast.propTypes = {
  color: PropTypes.oneOf(["success", "danger", "warning", "info", "secondary"]),
  show: PropTypes.bool,
  onClose: PropTypes.func,
  delay: PropTypes.number,
  autohide: PropTypes.bool
};

export default Toast;
