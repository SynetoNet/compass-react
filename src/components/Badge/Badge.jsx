import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BootstrapBadge from "react-bootstrap/Badge";

import "./Badge.scss";
import "../../base/fixed-width.scss";

const Badge = ({ appearance, role, width, block, className = "", ...props }) => {
  const classes = (
    classNames({
      outline: role === "outline",
      strong: role === "strong",
      ["width-" + width]: width,
      block
    }) + ` ${className}`
  ).trim();

  return <BootstrapBadge variant={appearance} className={classes} {...props} pill />;
};

Badge.propTypes = {
  appearance: PropTypes.oneOf(["success", "danger", "warning", "info", "secondary"]),
  role: PropTypes.oneOf(["default", "strong", "outline"]),
  width: PropTypes.oneOf([32, 64, 96, 128, "auto"]),
  /** Makes badge stretch to the size of it's parent */
  block: PropTypes.bool
};

Badge.defaultProps = {
  appearance: "secondary",
  varroleiant: "default",
  width: "auto",
  block: false
};

export default Badge;
