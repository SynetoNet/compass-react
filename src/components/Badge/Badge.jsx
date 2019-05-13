import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BootstrapBadge from "react-bootstrap/Badge";

import "./Badge.scss";

const Badge = ({ color, variant, width, block, ...props }) => {
  const classes = classNames({
    outline: variant === "outline",
    strong: variant === "strong",
    ["width-" + width]: width,
    block
  });

  return <BootstrapBadge variant={color} className={classes} {...props} pill />;
};

Badge.propTypes = {
  color: PropTypes.oneOf(["success", "danger", "warning", "info", "secondary"]),
  variant: PropTypes.oneOf(["default", "strong", "outline"]),
  width: PropTypes.oneOf([32, 64, 96, 128, "auto"]),
  /** Makes badge stretch to the size of it's parent */
  block: PropTypes.bool
};

Badge.defaultProps = {
  color: "secondary",
  variant: "default",
  width: "auto",
  block: false
};

export default Badge;
