import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import BSPopover from "react-bootstrap/Popover";
import "./Popover.scss";

class Popover extends React.Component {
  render() {
    const { content, placement, trigger, title, ...props } = this.props;
    return (
      <OverlayTrigger
        placement={placement}
        show={"false"}
        {...getTriggerProp(trigger)}
        overlay={
          <BSPopover title={title} {...props}>
            {content}
          </BSPopover>
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

Popover.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
  trigger: PropTypes.oneOf(["focus", "click", "hover"])
};

Popover.defaultProps = {
  placement: "auto",
  trigger: "hover"
};

export default Popover;
