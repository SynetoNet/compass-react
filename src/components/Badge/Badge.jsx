import React from "react";
import PropTypes from "prop-types";

import { Badge as BootstrapBadge } from "react-bootstrap";

import "./Badge.scss";

const Badge = ({ strong, light, modularWidth, size, ...props }) => (
  <BootstrapBadge
    className={`
    ${light ? "light-border" : ""}
    ${strong ? "strong" : ""}
    ${modularWidth ? "modular-width" : ""}
    ${size && modularWidth ? "width-" + size : ""}
    `}
    {...props}
    pill
  />
);

Badge.propTypes = {
  variant: PropTypes.oneOf(["primary", "warning", "success", "danger"]),
  /** Enables modular width */
  modularWidth: PropTypes.bool,
  size: PropTypes.oneOf([32, 64, 96, 128]),
  /** Enables strong background */
  strong: PropTypes.bool,
  /** Enables light border */
  light: PropTypes.bool
};

Badge.defaultProps = {
  variant: "secondary",
  strong: false,
  light: false,
  modularWidth: false,
  size: 32
};

export default Badge;
