import React from "react";
import PropTypes from "prop-types";

import BootstrapBadge from "react-bootstrap/Badge";

import "./Badge.scss";

const Badge = ({ strong, light, width, ...props }) => (
  <BootstrapBadge
    className={`
    ${light ? "light" : ""}
    ${strong ? "strong" : ""}
    ${width ? "width-" + width : ""}
    `}
    {...props}
    pill
  />
);

Badge.propTypes = {
  variant: PropTypes.oneOf([
    "success",
    "danger",
    "warning",
    "info",
    "neutral"
  ]),
  /** Enables modular/fixed width */
  width: PropTypes.oneOf([32, 64, 96, 128]),
  /** Enables strong background */
  strong: PropTypes.bool,
  /** Enables light background, with a border */
  light: PropTypes.bool
};

Badge.defaultProps = {
  variant: "neutral",
  strong: false,
  light: false
};

export default Badge;
