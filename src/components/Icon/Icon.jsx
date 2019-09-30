import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Icon = ({ name, color, size, style, className = "", ...props }) => {
  const classes = classNames({
    [name]: name,
    [`fa-${size}`]: size,
    [className]: className
  });

  return <i className={classes} style={{ color, ...style }} {...props}/>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"])
};

Icon.defaultProps = {
  size: "md"
};

export default Icon;
