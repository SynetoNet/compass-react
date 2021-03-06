import React from "react";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import BSPopover from "react-bootstrap/Popover";

import "./Popover.scss";

class Popover extends React.Component {
  render() {
    const { content, placement, trigger, title, width, ...props } = this.props;
    const style = width ? { width, maxWidth: "none" } : null;
    return (
      <div className="popover-container">
        <OverlayTrigger
          placement={placement}
          {...getTriggerProp(trigger)}
          overlay={
            <BSPopover style={style} {...props}>
              <BSPopover.Title>{title}</BSPopover.Title>
              <BSPopover.Content>{content}</BSPopover.Content>
            </BSPopover>
          }
        >
          {this.props.children}
        </OverlayTrigger>
      </div>
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
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
  trigger: PropTypes.oneOf(["focus", "click", "hover"]),
  width: PropTypes.number
};

Popover.defaultProps = {
  placement: "auto"
};

export default Popover;
