import React from "react";
import PropTypes from "prop-types";

import { Badge as BootstrapBadge } from "react-bootstrap";

import "./Badge.scss";

const Badge = ({
  strong,
  border,
  modularWidth,
  elasticWidth,
  widthSize,
  ...props
}) => (
  <BootstrapBadge
    className={`
    ${!border && !strong ? "light-background" : ""}
    ${border ? "light-border" : ""}
    ${modularWidth ? "modular-width" : ""}
    ${elasticWidth && !modularWidth ? "elastic-width" : ""}
    ${widthSize && modularWidth ? "width-" + widthSize : ""}
    `}
    {...props}
    pill
  />
);

Badge.propTypes = {
  /** Color base that is inherited from Bootstrap */
  variant: PropTypes.string,
  /** Enables modular width */
  modularWidth: PropTypes.bool,
  /** Enables elastic width */
  elasticWidth: PropTypes.bool,
  /** Width size if modular with is enabled */
  widthSize: PropTypes.number,
  /** Enables strong background */
  strong: PropTypes.bool,
  /** Enables light border */
  border: PropTypes.bool
};

Badge.defaultProps = {
  variant: "secondary",
  strong: false,
  border: false,
  modularWidth: false,
  elasticWidth: true,
  widthSize: 32
};

const modularWidthSizes = ["32px", "64px", "96px", "128px"];

export default Badge;
