import React from "react";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import BSPopover from "react-bootstrap/Popover";

import "./Popover.scss";

class Popover extends React.Component {
  render() {
    const { body, placement, trigger, title, width, ...props } = this.props;
    const style = width ? { width, maxWidth: "none" } : null;

    const popover = (
      <BSPopover style={style} {...props}>
        <BSPopover.Header>{title}</BSPopover.Header>
        <BSPopover.Body>{body}</BSPopover.Body>
      </BSPopover>
    );
    return (
      <div className="popover-container">
        <OverlayTrigger
          {...getTriggerProp(trigger)}
          placement={placement}
          overlay={popover}
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
  body: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
  trigger: PropTypes.oneOf(["focus", "click", "hover"]),
  width: PropTypes.number
};

Popover.defaultProps = {
  placement: "auto"
};

export default Popover;
