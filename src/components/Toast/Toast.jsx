import React from "react";
import PropTypes from "prop-types";
import BSToast from "react-bootstrap/Toast";

class Toast extends React.Component {
  static Header = BSToast.Header;
  static Body = BSToast.Body;

  render() {
    return <BSToast {...this.props} />;
  }
}

Toast.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  delay: PropTypes.number,
  autohide: PropTypes.bool
};

Toast.defaultProps = { show: true, delay: 3000, autohide: false };

export default Toast;
