import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BootstrapButton from "react-bootstrap/Button";

import "./Button.scss";

const Button = ({ color, width, disabled, ...props }) => {
  const classes = classNames({
    ["btn-" + color]: color,
    ["width-" + width]: width,
    disabled
  });

  return <BootstrapButton variant={color} className={classes} {...props} />;
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "tertiary", "secondary"]),
  color: PropTypes.oneOf(["success", "danger", "default"]),
  width: PropTypes.oneOf([32, 64, 96, 128, "auto"]),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  variant: "secondary",
  color: "default",
  width: "auto",
  disabled: false
};

export default Button;
