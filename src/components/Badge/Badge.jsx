import React from "react";
import PropTypes from "prop-types";

import BootstrapBadge from "react-bootstrap/Badge";

import "./Badge.scss";

const Badge = ({ color, variant, width, block, ...props }) => (
  <BootstrapBadge
    variant={color}
    className={`
    ${variant === "outline" ? "outline" : ""}
    ${variant === "strong" ? "strong" : ""}
    ${width ? "width-" + width : ""}
    ${block ? "block" : ""}
    `}
    {...props}
    pill
  />
);

Badge.propTypes = {
  color: PropTypes.oneOf(["success", "danger", "warning", "info", "secondary"]),
  variant: PropTypes.oneOf(["default", "strong", "outline"]),
  width: PropTypes.oneOf([32, 64, 96, 128, false]),
  /** Makes badge stretch to the size of it's parent */
  block: PropTypes.bool
};

Badge.defaultProps = {
  color: "secondary",
  variant: "default",
  width: false,
  block: false
};

export default Badge;
