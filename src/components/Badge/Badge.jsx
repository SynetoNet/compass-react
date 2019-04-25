import React from "react";
import PropTypes from "prop-types";

import { Badge as ReactStrapBadge } from "reactstrap";

import "./Badge.scss";

const Badge = ({
  lightBackground,
  lightBorder,
  modularWidth,
  elasticWidth,
  widthSize,
  ...props
}) => (
  <ReactStrapBadge
    className={`
    ${lightBackground ? "light-background" : ""}
    ${lightBorder ? "light-border" : ""}
    ${modularWidth ? "modular-width" : ""}
    ${elasticWidth ? "elastic-width" : ""}
    ${widthSize && !elasticWidth && modularWidth ? "width-" + widthSize : ""}
    `}
    {...props}
  />
);

Badge.propTypes = {
  /** Color base that is inherited from Bootstrap */
  color: PropTypes.string,
  /** Enables modular width */
  modularWidth: PropTypes.bool,
  /** Enables elastic width */
  elasticWidth: PropTypes.bool,
  /** Width size if modular with is enabled */
  widthSize: PropTypes.number,
  /** Enabled light background */
  lightBackground: PropTypes.bool,
  /** Enabled light border */
  lightBorder: PropTypes.bool
};

Badge.defaultProps = {
  lightBackground: false,
  lightBorder: false,
  modularWidth: false,
  elasticWidth: false,
  widthSize: 32,
  color: "primary"
};

const modularWidthSizes = ["32px", "64px", "96px", "128px"];

export default Badge;
