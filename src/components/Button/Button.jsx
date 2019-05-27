import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BootstrapButton from "react-bootstrap/Button";

import "./Button.scss";
import "../../base/fixed-width.scss";

const Button = ({ color, width, loading, loadingText, disabled, ...props }) => {
  let classes = classNames({
    ["btn-" + color]: color,
    ["width-" + width]: width,
    disabled
  });

  if (disabled) {
    const replace = "btn-" + color;
    classes = classes.replace(replace, "");
  }

  return <BootstrapButton variant={color} className={classes} {...props} />;
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "tertiary", "secondary", "link"]),
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
