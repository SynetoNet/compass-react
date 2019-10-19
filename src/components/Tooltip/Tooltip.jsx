import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import BSTooltip from "react-bootstrap/Tooltip";
import "./Tooltip.scss";

class Tooltip extends React.Component {
  render() {
    const { text, placement, trigger, theme, ...props } = this.props;

    const classes = classNames({
      [`tooltip-${theme}`]: theme
    });

    return (
      <OverlayTrigger
        placement={placement}
        {...getTriggerProp(trigger)}
        overlay={
          <BSTooltip className={classes} {...props}>
            {text}
          </BSTooltip>
        }
      >
        {this.props.children}
      </OverlayTrigger>
    );
  }
}

function getTriggerProp(trigger) {
  // force close on click outside
  if (trigger === "click") {
    return { trigger, rootClose: true };
  }
  return { trigger };
}

Tooltip.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]),
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
  trigger: PropTypes.oneOf(["focus", "click", "hover"])
};

Tooltip.defaultProps = {
  theme: "dark",
  placement: "auto",
  trigger: "hover"
};

export default Tooltip;
